import dash
from dash import dcc, html
import plotly.express as px
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression

# Step 1: Load the dataset
file_path = r'W:\3rd sem\COS70008\data.xlsx'
xls = pd.ExcelFile(file_path)

# Load the data from the relevant sheet
df_country = pd.read_excel(xls, sheet_name='Country')

# Define the countries of interest
countries_of_interest = ['Australia', 'India', 'China', 'Singapore']
renewable_group_technologies = ['Bioenergy', 'Solar energy', 'Wind energy']

# Filter the data for selected countries and renewable technologies
renewable_data_corrected = df_country[
    (df_country['Country'].isin(countries_of_interest)) & 
    (df_country['Group Technology'].isin(renewable_group_technologies))
]

# Group the data by Year, Group Technology, and Country
grouped_renewable_data = renewable_data_corrected.groupby(['Year', 'Group Technology', 'Country']).agg({
    'Electricity Generation (GWh)': 'sum'
}).reset_index()

# Exclude the 2023 data from the analysis
grouped_renewable_data = grouped_renewable_data[grouped_renewable_data['Year'] < 2023]

# Step 2: Predict Future Importance (Predictions for 2023-2028)
predictions = pd.DataFrame()

for tech in grouped_renewable_data['Group Technology'].unique():
    for country in countries_of_interest:
        country_tech_data = grouped_renewable_data[(grouped_renewable_data['Country'] == country) & 
                                                   (grouped_renewable_data['Group Technology'] == tech)]
        
        # Create the model
        model = LinearRegression()
        
        # Fit the model on historical data
        X = country_tech_data[['Year']]
        y = country_tech_data['Electricity Generation (GWh)']
        model.fit(X, y)
        
        # Prepare future years for prediction starting from 2023
        future_years = np.arange(2023, 2029)
        
        # Predict future electricity generation
        future_data = pd.DataFrame({
            'Year': future_years
        })
        
        future_generation = model.predict(future_data)
        
        # Store predictions
        future_df = pd.DataFrame({
            'Year': future_years,
            'Country': country,
            'Group Technology': tech,
            'Electricity Generation (GWh)': future_generation
        })
        
        predictions = pd.concat([predictions, future_df], ignore_index=True)

# Combine historical and predicted data for continuous plotting
combined_data = pd.concat([
    grouped_renewable_data.assign(Type='Historical'),
    predictions.assign(Type='Predicted')
], ignore_index=True)

# Step 3: Create the Dash App
app = dash.Dash(__name__)

# Layout of the Dash app
app.layout = html.Div([
    html.H1("Electricity Generation by Renewable Technologies (2010-2028)"),
    dcc.Tabs(id="tabs", children=[
        dcc.Tab(label=country, children=[
            dcc.Graph(
                id=f'graph-{country}',
                figure=px.line(
                    combined_data[combined_data['Country'] == country],
                    x='Year',
                    y='Electricity Generation (GWh)',
                    color='Group Technology',
                    line_dash='Type',
                    title=f'Electricity Generation in {country} (2010-2028)'
                ).update_layout(transition_duration=500)
            )
        ]) for country in countries_of_interest
    ])
])

# Convert the layout of each figure to HTML
for country in countries_of_interest:
    fig = px.line(
        combined_data[combined_data['Country'] == country],
        x='Year',
        y='Electricity Generation (GWh)',
        color='Group Technology',
        line_dash='Type',
        title=f'Electricity Generation in {country} (2010-2028)'
    )
    fig.write_html(f'output_{country}.html')

