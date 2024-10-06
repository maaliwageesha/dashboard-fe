import pandas as pd
import os
import dash
from dash import dcc, html
import plotly.graph_objs as go

# Load the Excel file
file_path = os.path.join(os.path.dirname(__file__), '../data/news_data_with_keywords.xlsx') 
df = pd.read_excel(file_path)

# Convert the 'pubDate' to datetime format
df['pubDate'] = pd.to_datetime(df['pubDate'], format='%d/%m/%Y %I:%M:%S %p')

# Function to plot sentiment over time (yearly) for each country
def plot_sentiment_trends_yearly(df, country):
    # Filter data for the specific country
    df_country = df[df['country'] == country]

    # Group data by time (yearly) and aggregate sentiment values
    df_country_yearly = df_country.resample('YE', on='pubDate').sum()

    # Calculate proportions of positive, neutral, and negative sentiment
    total_sentiment = df_country_yearly['positive'] + df_country_yearly['neutral'] + df_country_yearly['negative']
    df_country_yearly['positive_prop'] = df_country_yearly['positive'] / total_sentiment
    df_country_yearly['neutral_prop'] = df_country_yearly['neutral'] / total_sentiment
    df_country_yearly['negative_prop'] = df_country_yearly['negative'] / total_sentiment

    # Create figure
    fig = go.Figure()

    # Add traces for each sentiment type
    fig.add_trace(go.Scatter(x=df_country_yearly.index.year, 
                              y=df_country_yearly['positive_prop'], 
                              mode='lines+markers', 
                              name='Positive', 
                              line=dict(color='green')))
    
    fig.add_trace(go.Scatter(x=df_country_yearly.index.year, 
                              y=df_country_yearly['neutral_prop'], 
                              mode='lines+markers', 
                              name='Neutral', 
                              line=dict(color='blue')))
    
    fig.add_trace(go.Scatter(x=df_country_yearly.index.year, 
                              y=df_country_yearly['negative_prop'], 
                              mode='lines+markers', 
                              name='Negative', 
                              line=dict(color='red')))

    fig.update_layout(title=f'Sentiment Trends Over the Years for {country.capitalize()}',
                      xaxis_title='Year',
                      yaxis_title='Proportion of Sentiment',
                      legend_title='Sentiment',
                      template='plotly_white')

    return fig

# Initialize Dash app
app = dash.Dash(__name__)

# Define the layout of the app
app.layout = html.Div([
    dcc.Graph(id='graph-australia', figure=plot_sentiment_trends_yearly(df, 'australia')),
    dcc.Graph(id='graph-india', figure=plot_sentiment_trends_yearly(df, 'india')),
    dcc.Graph(id='graph-singapore', figure=plot_sentiment_trends_yearly(df, 'singapore')),
    dcc.Graph(id='graph-china', figure=plot_sentiment_trends_yearly(df, 'china')),
])

# Run the app
if __name__ == '__main__':
    app.run_server(debug=True)
