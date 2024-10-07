import pandas as pd
import os
import dash
from dash import dcc, html
from dash.dependencies import Input, Output
import plotly.graph_objs as go
from sklearn.linear_model import LinearRegression
import numpy as np

# Load the Excel file
file_path = os.path.join(os.path.dirname(__file__), '../data/news_data_with_keywords.xlsx')
df = pd.read_excel(file_path)

# Convert the 'pubDate' to datetime format
df['pubDate'] = pd.to_datetime(df['pubDate'], format='%d/%m/%Y %I:%M:%S %p')

# Function to plot and predict sentiment trends yearly for each country using Plotly
def plot_sentiment_trends_yearly_with_prediction(df, country):
    # Filter data for the specific country
    df_country = df[df['country'] == country]
    
    # Group data by time (yearly) and aggregate sentiment values
    df_country_yearly = df_country.resample('Y', on='pubDate').sum()

    # Calculate proportions of positive, neutral, and negative sentiment
    df_country_yearly['positive_prop'] = df_country_yearly['positive'] / (df_country_yearly['positive'] + df_country_yearly['neutral'] + df_country_yearly['negative'])
    df_country_yearly['neutral_prop'] = df_country_yearly['neutral'] / (df_country_yearly['positive'] + df_country_yearly['neutral'] + df_country_yearly['negative'])
    df_country_yearly['negative_prop'] = df_country_yearly['negative'] / (df_country_yearly['positive'] + df_country_yearly['neutral'] + df_country_yearly['negative'])
    
    # Prepare the data for modeling
    X = np.array(df_country_yearly.index.year).reshape(-1, 1)  # Years 2021, 2022, 2023, 2024
    years_future = np.array([2025, 2026]).reshape(-1, 1)  # Future years 2025, 2026

    # Step 2: Create models for each sentiment type
    model_positive = LinearRegression()
    model_neutral = LinearRegression()
    model_negative = LinearRegression()

    # Train the models
    model_positive.fit(X, df_country_yearly['positive_prop'])
    model_neutral.fit(X, df_country_yearly['neutral_prop'])
    model_negative.fit(X, df_country_yearly['negative_prop'])

    # Step 3: Predict future values
    positive_pred = model_positive.predict(years_future)
    neutral_pred = model_neutral.predict(years_future)
    negative_pred = model_negative.predict(years_future)

    # Append the predictions to the original data
    X_all = np.concatenate([X, years_future])
    positive_all = np.concatenate([df_country_yearly['positive_prop'].values, positive_pred])
    neutral_all = np.concatenate([df_country_yearly['neutral_prop'].values, neutral_pred])
    negative_all = np.concatenate([df_country_yearly['negative_prop'].values, negative_pred])

    # Create Plotly figure
    fig = go.Figure()

    # Add traces for positive, neutral, and negative sentiment
    fig.add_trace(go.Scatter(x=X_all.flatten(), y=positive_all, mode='lines+markers', name='Positive', line=dict(color='green')))
    fig.add_trace(go.Scatter(x=X_all.flatten(), y=neutral_all, mode='lines+markers', name='Neutral', line=dict(color='blue')))
    fig.add_trace(go.Scatter(x=X_all.flatten(), y=negative_all, mode='lines+markers', name='Negative', line=dict(color='red')))

    # Update layout
    fig.update_layout(
        title=f'Sentiment Trends with Prediction for {country.capitalize()} (2021-2026)',
        xaxis_title='Year',
        yaxis_title='Proportion of Sentiment',
        legend_title='Sentiment',
        template='plotly_white'
    )

    return fig

# Initialize Dash app
app = dash.Dash(__name__)

# Define the layout of the app
app.layout = html.Div([
    # html.H1("Sentiment Trends with Prediction (2021-2026)"),
    
    # Dropdown to select the country
    dcc.Dropdown(
        id='country-dropdown',
        options=[
            {'label': 'Australia', 'value': 'australia'},
            {'label': 'India', 'value': 'india'},
            {'label': 'Singapore', 'value': 'singapore'},
            {'label': 'China', 'value': 'china'}
        ],
        value='australia',  # Default country
        clearable=False,
        style={'width': '50%'}
    ),
    
    # Graph to display the sentiment trends
    dcc.Graph(id='sentiment-trends-graph'),
])

# Define callback to update the graph based on the selected country
@app.callback(
    Output('sentiment-trends-graph', 'figure'),
    [Input('country-dropdown', 'value')]
)
def update_graph(selected_country):
    return plot_sentiment_trends_yearly_with_prediction(df, selected_country)

# Run the app
if __name__ == '__main__':
    app.run_server(port=8051, debug=True)
