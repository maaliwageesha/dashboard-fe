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

# Function to plot sentiment trends with predictions and dashed lines
def plot_sentiment_trends_with_predictions(df, country):
    # Filter data for the specific country
    df_country = df[df['country'] == country]

    # Group data by time (yearly) and aggregate sentiment values
    df_country_yearly = df_country.resample('Y', on='pubDate').sum()

    # Calculate proportions of positive, neutral, and negative sentiment
    total_sentiment = df_country_yearly['positive'] + df_country_yearly['neutral'] + df_country_yearly['negative']
    df_country_yearly['positive_prop'] = df_country_yearly['positive'] / total_sentiment
    df_country_yearly['neutral_prop'] = df_country_yearly['neutral'] / total_sentiment
    df_country_yearly['negative_prop'] = df_country_yearly['negative'] / total_sentiment

    # Extract years and sentiment proportions for Linear Regression
    years = df_country_yearly.index.year.values.reshape(-1, 1)  # Reshape for sklearn
    positive_prop = df_country_yearly['positive_prop'].values
    neutral_prop = df_country_yearly['neutral_prop'].values
    negative_prop = df_country_yearly['negative_prop'].values

    # Create Linear Regression models for each sentiment
    model_positive = LinearRegression()
    model_neutral = LinearRegression()
    model_negative = LinearRegression()

    # Fit the models
    model_positive.fit(years, positive_prop)
    model_neutral.fit(years, neutral_prop)
    model_negative.fit(years, negative_prop)

    # Predict sentiment values for 2025 and 2026
    future_years = np.array([[2025], [2026]])
    positive_pred = model_positive.predict(future_years)
    neutral_pred = model_neutral.predict(future_years)
    negative_pred = model_negative.predict(future_years)

    # Combine actual years and predictions
    predicted_years = np.append(years.flatten(), future_years.flatten())

    # Create figure
    fig = go.Figure()

    # Add traces for actual sentiment
    fig.add_trace(go.Scatter(x=years.flatten(), 
                              y=positive_prop, 
                              mode='lines+markers', 
                              name='Positive', 
                              line=dict(color='green')))

    fig.add_trace(go.Scatter(x=years.flatten(), 
                              y=neutral_prop, 
                              mode='lines+markers', 
                              name='Neutral', 
                              line=dict(color='blue')))

    fig.add_trace(go.Scatter(x=years.flatten(), 
                              y=negative_prop, 
                              mode='lines+markers', 
                              name='Negative', 
                              line=dict(color='red')))

    # Add traces for predicted sentiment as a dashed line, connecting to 2024
    fig.add_trace(go.Scatter(x=np.append(years.flatten(), future_years.flatten()), 
                              y=np.append(positive_prop, positive_pred), 
                              mode='lines+markers', 
                              name='Predicted Positive', 
                              line=dict(color='green', dash='dash')))

    fig.add_trace(go.Scatter(x=np.append(years.flatten(), future_years.flatten()), 
                              y=np.append(neutral_prop, neutral_pred), 
                              mode='lines+markers', 
                              name='Predicted Neutral', 
                              line=dict(color='blue', dash='dash')))

    fig.add_trace(go.Scatter(x=np.append(years.flatten(), future_years.flatten()), 
                              y=np.append(negative_prop, negative_pred), 
                              mode='lines+markers', 
                              name='Predicted Negative', 
                              line=dict(color='red', dash='dash')))

    # Update layout
    fig.update_layout(title=f'Sentiment Trends with Predictions for {country.capitalize()}',
                      xaxis_title='Year',
                      yaxis_title='Proportion of Sentiment',
                      legend_title='Sentiment',
                      template='plotly_white')

    return fig

# Initialize Dash app
app = dash.Dash(__name__)

# Define the layout of the app with dropdown and graph
app.layout = html.Div([
    html.H1("Sentiment Trends and Predictions by Country"),
    dcc.Dropdown(
        id='country-dropdown',
        options=[
            {'label': 'Australia', 'value': 'australia'},
            {'label': 'India', 'value': 'india'},
            {'label': 'Singapore', 'value': 'singapore'},
            {'label': 'China', 'value': 'china'}
        ],
        value='australia',  # Default value
        clearable=False,
        style={'width': '50%'}
    ),
    dcc.Graph(id='sentiment-trends-graph')
])

# Define callback to update the graph based on the selected country
@app.callback(
    Output('sentiment-trends-graph', 'figure'),
    [Input('country-dropdown', 'value')]
)
def update_graph(selected_country):
    return plot_sentiment_trends_with_predictions(df, selected_country)

# Run the app
if __name__ == '__main__':
    app.run_server(port='8051',debug=True)
