from itertools import combinations
import dash
import os
from dash import dcc, html, Input, Output, State
import dash_cytoscape as cyto
import pandas as pd
import networkx as nx

# Load the dataset from Excel
file_path = os.path.join(os.path.dirname(__file__), '../data/Comment_topics.xlsx') 
df = pd.read_excel(file_path)

# Function to clean keywords
def clean_keywords(keyword_string):
    return [kw.strip().lower() for kw in keyword_string.split(',')]

# Apply keyword cleaning to the 'Keywords' column
df['Keywords'] = df['Keywords'].apply(clean_keywords)

# Get unique countries for the dropdown
countries = df['Country'].unique()  # Assuming there's a 'Country' column in your DataFrame
country_options = [{'label': country, 'value': country} for country in countries]

# Get unique topics for each country
def get_topics_for_country(country):
    return df[df['Country'] == country]['Topic'].unique() 

# Function to create a social network graph with sentiment-based edges
def create_sentiment_network_graph(df, country, topic=None, weight_threshold=1):
    # Filter the DataFrame for the specified country
    filtered_df = df[df['Country'] == country]
    
    
    
    # Initialize a network graph
    G = nx.Graph()

    # Add nodes and edges based on co-occurrence of keywords in each comment, with sentiment
    for _, row in filtered_df.iterrows():
        keywords = row['Keywords']
        sentiment = row['Sentiment']

        # Check if sentiment is a string and apply lower() if it is
        if isinstance(sentiment, str):
            sentiment = sentiment.lower()
        else:
            # Assign a default sentiment or skip the row if sentiment is missing
            sentiment = 'neutral'

        # Create edges between all pairs of keywords within the same comment
        for kw1, kw2 in combinations(keywords, 2):
            if G.has_edge(kw1, kw2):
                G[kw1][kw2]['weight'] += 1  # Increment weight if the edge already exists
            else:
                G.add_edge(kw1, kw2, weight=1, sentiment=sentiment)  # Add a new edge with sentiment

    # Remove edges below the weight threshold
    G.remove_edges_from([(u, v) for u, v, d in G.edges(data=True) if d['weight'] < weight_threshold])

    # If a specific topic is provided, filter nodes based on it
    if topic and topic != "All":
        topic_filtered_df = filtered_df[filtered_df['Topic'].str.lower() == topic.lower()]
        # Keep only edges where keywords exist in this filtered DataFrame
        keywords_in_topic = [kw for _, row in topic_filtered_df.iterrows() for kw in row['Keywords']]
        G = G.subgraph(keywords_in_topic).copy()

    return G

# Convert the graph into Dash Cytoscape elements
def network_graph_to_cytoscape(G):
    elements = []
    
    # Add nodes
    for node in G.nodes():
        elements.append({
            'data': {'id': node, 'label': node}
        })

    # Add edges
    for u, v, d in G.edges(data=True):
        elements.append({
            'data': {'source': u, 'target': v, 'weight': d['weight'], 'sentiment': d['sentiment']}
        })
    
    return elements

# Initialize the Dash app
app = dash.Dash(__name__)

# Layout for the Dash app
app.layout = html.Div([
    dcc.Dropdown(
        id='country-dropdown',
        options=country_options,
        value=countries[0],  # Set the default country
        clearable=False,
        style={'width': '50%'}
    ),
    dcc.Dropdown(
        id='topic-dropdown',
        value='All',  # Set default topic
        clearable=False,
        style={'width': '50%'}
    ),
    cyto.Cytoscape(
        id='network-graph',
        style={'width': '100%', 'height': '600px'},
        layout={
            'name': 'cose',
            'nodeRepulsion': 10000,
            'idealEdgeLength': 100,
            'nodeOverlap': 10,
            'padding': 50
        },
        stylesheet=[
            {
                'selector': 'node',
                'style': {
                    'label': 'data(label)',
                    'background-color': 'skyblue',
                    'font-size': '10px'
                }
            },
            {
                'selector': 'edge',
                'style': {
                    'line-color': 'gray',
                    'width': '2'
                }
            },
            {
                'selector': '[sentiment = "positive"]',
                'style': {'line-color': 'green'}
            },
            {
                'selector': '[sentiment = "negative"]',
                'style': {'line-color': 'red'}
            }
        ]
    )
])

# Callback to update topics based on selected country
@app.callback(
    Output('topic-dropdown', 'options'),
    [Input('country-dropdown', 'value')]
)
def update_topic_options(selected_country):
    topics = get_topics_for_country(selected_country)
    topic_options = [{'label': topic, 'value': topic} for topic in topics] + [{'label': 'All', 'value': 'All'}]
    return topic_options

# Callback to update the graph based on country and topic
@app.callback(
    Output('network-graph', 'elements'),
    [Input('country-dropdown', 'value'),
     Input('topic-dropdown', 'value'),
     Input('network-graph', 'tapNodeData')]
)
def update_graph(selected_country, selected_topic, tapped_node):
    # Create the graph based on the selected country and topic
    G = create_sentiment_network_graph(df, selected_country, selected_topic, weight_threshold=1)
    
    # If a node is tapped, show only the selected node and its neighbors with all weights
    if tapped_node:
        node = tapped_node['id']
        subgraph = nx.ego_graph(G, node, radius=1)  # Get all neighbors within 1 hop
        return network_graph_to_cytoscape(subgraph)

    # Default case: return the graph for the selected country and topic
    return network_graph_to_cytoscape(G)

if __name__ == '__main__':
    app.run_server(port='8053', debug=True)
