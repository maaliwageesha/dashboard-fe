import pandas as pd
import numpy as np
import plotly.graph_objs as go
import plotly.offline as pyo
from sklearn.linear_model import LinearRegression

# Step 1: Load the dataset
file_path = r'W:\3rd sem\COS70008\data.xlsx'
xls = pd.ExcelFile(file_path)
df_country = pd.read_excel(xls, sheet_name='Country')

# Define the countries of interest and renewable group technologies
countries_of_interest = ['Australia', 'India', 'China', 'Singapore']
renewable_group_technologies = ['Bioenergy', 'Solar energy', 'Wind energy']

# Filter the data for selected countries and renewable technologies
renewable_data_corrected = df_country[
    (df_country['Country'].isin(countries_of_interest)) &
    (df_country['Group Technology'].isin(renewable_group_technologies))
]

# Step 2: Group the data by Year, Group Technology, and Country
grouped_renewable_data = renewable_data_corrected.groupby(['Year', 'Group Technology', 'Country']).agg({
    'Electricity Generation (GWh)': 'sum'
}).reset_index()

# Exclude the 2023 data from the analysis
grouped_renewable_data = grouped_renewable_data[grouped_renewable_data['Year'] < 2023]

# Step 3: Predict Future Importance (Predictions for 2023-2028)
predictions = pd.DataFrame()

for tech in grouped_renewable_data['Group Technology'].unique():
    for country in countries_of_interest:
        country_tech_data = grouped_renewable_data[
            (grouped_renewable_data['Country'] == country) &
            (grouped_renewable_data['Group Technology'] == tech)
        ]
        # Create the linear regression model
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

# Define color scheme for the technologies
tech_colors = {
    'Bioenergy': 'purple',
    'Solar energy': 'orange',
    'Wind energy': 'green'
}

# Step 4: Create interactive Plotly plots for each country
for country in countries_of_interest:
    # Filter combined data for the country
    country_combined_data = combined_data[combined_data['Country'] == country]
    # Create traces for each technology (Bioenergy, Solar, Wind)
    traces = []
    
    for tech in renewable_group_technologies:
        # Separate historical and predicted data
        tech_data_historical = country_combined_data[
            (country_combined_data['Group Technology'] == tech) &
            (country_combined_data['Type'] == 'Historical')
        ]
        tech_data_predicted = country_combined_data[
            (country_combined_data['Group Technology'] == tech) &
            (country_combined_data['Type'] == 'Predicted')
        ]
        
        # Historical data trace (solid line)
        trace_historical = go.Scatter(
            x=tech_data_historical['Year'],
            y=tech_data_historical['Electricity Generation (GWh)'],
            mode='lines+markers',
            name=f'{tech} (Historical)',
            line=dict(color=tech_colors[tech], dash=None),  # Solid line for historical
        )
        
        # Predicted data trace (dashed line)
        trace_predicted = go.Scatter(
            x=tech_data_predicted['Year'],
            y=tech_data_predicted['Electricity Generation (GWh)'],
            mode='lines+markers',
            name=f'{tech} (Predicted)',
            line=dict(dash='dash', color=tech_colors[tech]),  # Dashed line for predicted
        )
        
        # Append both traces
        traces.append(trace_historical)
        
        # Add a connecting line between the last historical and first predicted points
        if not tech_data_historical.empty and not tech_data_predicted.empty:
            last_historical_year = tech_data_historical['Year'].values[-1]
            last_historical_generation = tech_data_historical['Electricity Generation (GWh)'].values[-1]
            first_predicted_year = tech_data_predicted['Year'].values[0]
            first_predicted_generation = tech_data_predicted['Electricity Generation (GWh)'].values[0]

            # Connecting line (solid) from last historical to first predicted
            connecting_trace = go.Scatter(
                x=[last_historical_year, first_predicted_year],
                y=[last_historical_generation, first_predicted_generation],
                mode='lines',
                line=dict(color=tech_colors[tech], width=2),
                showlegend=False  # Don't show this trace in legend
            )
            traces.append(connecting_trace)
        
        # Append the predicted trace
        traces.append(trace_predicted)
        
    # Define the layout for the plot
    layout = go.Layout(
        title=f'Renewable Energy Generation in {country} (2010-2028)',
        xaxis=dict(
            title='Year',
            tickmode='array',
            tickvals=np.arange(2010, 2029),  # Set ticks from 2010 to 2028
            ticktext=[str(year) for year in range(2010, 2029)],  # Show years as text
            showgrid=True,  # Show grid lines on the x-axis
            gridcolor='lightgray'  # Color of grid lines
        ),
        yaxis=dict(
            title='Electricity Generation (GWh)',
            showgrid=True,  # Show grid lines on the y-axis
            gridcolor='lightgray'  # Color of grid lines
        ),
        plot_bgcolor='white',  # Set plot background to white
        paper_bgcolor='white'  # Set the outer figure background to white
    )
    
    # Create the figure
    fig = go.Figure(data=traces, layout=layout)
    # Save the figure as an HTML file
    pyo.plot(fig, filename=f'{country}_renewable_energy.html')
