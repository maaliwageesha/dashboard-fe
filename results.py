import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
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

# Prepare the data for continuous lines
connect_lines = pd.DataFrame()

for tech in renewable_group_technologies:
    for country in countries_of_interest:
        # Get the last point of historical data
        last_historical = grouped_renewable_data[
            (grouped_renewable_data['Group Technology'] == tech) &
            (grouped_renewable_data['Country'] == country)
        ].iloc[-1]
        
        # Get the first point of predicted data
        first_predicted = predictions[
            (predictions['Group Technology'] == tech) &
            (predictions['Country'] == country)
        ].iloc[0]
        
        # Create a new DataFrame to connect the two
        connect_lines = connect_lines.append({
            'Year': last_historical['Year'],
            'Country': country,
            'Group Technology': tech,
            'Electricity Generation (GWh)': last_historical['Electricity Generation (GWh)']
        }, ignore_index=True)
        
        connect_lines = connect_lines.append({
            'Year': first_predicted['Year'],
            'Country': country,
            'Group Technology': tech,
            'Electricity Generation (GWh)': first_predicted['Electricity Generation (GWh)']
        }, ignore_index=True)

# Define a color palette for each technology
color_palette = {
    'Bioenergy': 'green',
    'Solar energy': 'orange',
    'Wind energy': 'blue'
}

# Step 4: Create subplots for each country
fig, axes = plt.subplots(nrows=len(countries_of_interest), ncols=1, figsize=(14, 10), sharex=True)

# Plot the historical data and predictions for each country
for i, country in enumerate(countries_of_interest):
    # Filter combined data for the country
    country_combined_data = combined_data[combined_data['Country'] == country]
    
    # Plot both historical and predicted data for each technology
    for tech in renewable_group_technologies:
        tech_data = country_combined_data[country_combined_data['Group Technology'] == tech]
        
        # Plot historical data
        sns.lineplot(data=tech_data[tech_data['Type'] == 'Historical'], 
                     x='Year', 
                     y='Electricity Generation (GWh)', 
                     ax=axes[i], 
                     label=f'{tech} (Trend)', 
                     linestyle='-',  # Solid for historical
                     color=color_palette[tech],  # Use color palette
                     marker='o')  # Circle for historical
        
        # Plot predicted data
        sns.lineplot(data=tech_data[tech_data['Type'] == 'Predicted'], 
                     x='Year', 
                     y='Electricity Generation (GWh)', 
                     ax=axes[i], 
                     label=f'{tech} (Predicted)', 
                     linestyle='--',  # Dashed for predicted
                     color=color_palette[tech],  # Use color palette
                     marker='*')  # Star for predicted
        
        # Plot the connecting line
        sns.lineplot(data=connect_lines[(connect_lines['Group Technology'] == tech) & 
                                         (connect_lines['Country'] == country)],
                     x='Year',
                     y='Electricity Generation (GWh)',
                     ax=axes[i],
                     color=color_palette[tech],
                     linestyle='-')  # Solid line for connection

    axes[i].set_title(f'Electricity Generation in {country} (2010-2028)')
    axes[i].set_ylabel('Electricity Generation (GWh)')
    axes[i].grid(True)
    axes[i].legend(title='Data Type')

# Common labels
plt.xlabel('Year')
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()
