from itertools import combinations
import dash
import os
from dash import dcc, html, Input, Output
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
countries = df['Country'].unique()
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
                G[kw1][kw2]['weight'] += 3  # Increment weight if the edge already exists
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

    # Add edges with different thickness based on weight (co-occurrence strength)
    for u, v, d in G.edges(data=True):
        elements.append({
            'data': {'source': u, 'target': v, 'weight': d['weight'], 'sentiment': d['sentiment']},
            'style': {'width': 2 + d['weight']}  # Edge thickness based on weight
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
    html.Div(
        style={'display': 'flex', 'justify-content': 'space-between'},
        children=[
            cyto.Cytoscape(
                id='network-graph',
                style={'width': '80%', 'height': '600px'},
                layout={
                    'name': 'cose',
                    'nodeRepulsion': 12000,
                    'idealEdgeLength': 150,
                    'nodeOverlap': 150,
                    'padding': 10
                },
                stylesheet=[
                    {
                        'selector': 'node',
                        'style': {
                            'label': 'data(label)',
                            'background-color': 'skyblue',
                            'font-size': '12px'
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
            ),
            html.Div(
    style={
        'width': '20%', 
        'border': 'none', 
        'paddingLeft': '20px',
        'paddingRight': '20px', 
        'paddingTop': '5px',
        'paddingBottom': '5px',
        'backgroundColor': '#ffffff',
        'borderRadius': '15px', 
        'boxShadow': '0px 4px 12px rgba(0, 0, 0, 0.1)', 
        'fontSize': '14px',
        'lineHeight': '1.8',
        'textAlign': 'left',
        'fontFamily': 'Arial, sans-serif',
    },
    children=[
        html.H4(
            "Legend", 
            style={
                'text-align': 'center', 
                'margin-bottom': '20px', 
                'font-weight': '600', 
                'color': '#333'
            }
        ),
        
        # Node Color Legend
        html.Div([
            html.P("Node Color (Keyword):", style={'font-weight': 'bold', 'margin-bottom': '10px', 'color': '#555'}),
            html.Div(style={
                'display': 'inline-block', 
                'width': '18px', 
                'height': '18px', 
                'borderRadius': '50%',  # Circle shape
                'backgroundColor': '#87CEEB',  # Modern blue color
                'marginRight': '10px',
                'boxShadow': '0px 3px 6px rgba(0, 0, 0, 0.16)'
            }),
            html.Span("Keyword node", style={'verticalAlign': 'top', 'color': '#555'}),
            html.P(
                "Represents keywords associated with public opinion on renewable energy.", 
                style={'color': '#888', 'fontSize': '12px', 'marginTop': '5px'}
            )
        ], style={'margin-bottom': '20px'}),

        # Sentiment Color Legend
        html.Div([
            html.P("Edge Color (Sentiment):", style={'font-weight': 'bold', 'margin-bottom': '10px', 'color': '#555'}),
            # Modern styled bars for sentiment
            html.Div([
                html.Div(style={
                    'display': 'inline-block', 
                    'width': '60px', 
                    'height': '12px', 
                    'backgroundColor': '#27ae60',  # Green for positive
                    'borderRadius': '6px',
                    'marginRight': '8px'
                }),
                html.Span("Positive", style={'color': '#555'})
            ], style={'margin-bottom': '8px'}),
            html.Div([
                html.Div(style={
                    'display': 'inline-block', 
                    'width': '60px', 
                    'height': '12px', 
                    'backgroundColor': '#e74c3c',  # Red for negative
                    'borderRadius': '6px',
                    'marginRight': '8px'
                }),
                html.Span("Negative", style={'color': '#555'})
            ], style={'margin-bottom': '8px'}),
            html.Div([
                html.Div(style={
                    'display': 'inline-block', 
                    'width': '60px', 
                    'height': '12px', 
                    'backgroundColor': '#bdc3c7',  # Gray for neutral
                    'borderRadius': '6px',
                    'marginRight': '8px'
                }),
                html.Span("Neutral", style={'color': '#555'})
            ]),
            html.P(
                "Colors indicate the sentiment between connected keywords.", 
                style={'color': '#888', 'fontSize': '12px', 'marginTop': '5px'}
            )
        ], style={'margin-bottom': '20px'}),

        # Edge Thickness Legend (Slider for visual representation)
        html.Div([
            html.P("Edge Thickness (Co-occurrence Strength):", style={'font-weight': 'bold', 'margin-bottom': '10px', 'color': '#555'}),
            dcc.Slider(
                min=1, 
                max=5, 
                step=2, 
                marks={
                    1: {'label': 'High(4)', 'style': {'font-size': '12px', 'color': '#888'}},
                    3: {'label': 'Mid(3)', 'style': {'font-size': '12px', 'color': '#888'}},
                    5: {'label': 'Low(1)', 'style': {'font-size': '12px', 'color': '#888'}}
                },
                value=1,  # Default position
                disabled=True,  # Make the slider non-interactive for display purposes
                tooltip={"placement": "bottom", "always_visible": False},
            ),
            html.P(
                "Thicker edges represent higher co-occurrence of keywords within comments.", 
                style={'color': '#888', 'fontSize': '12px', 'marginTop': '5px'}
            )
        ])
    ]
)
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

# Combined callback to update the graph based on country, topic, and node tapping
@app.callback(
    Output('network-graph', 'elements'),
    [Input('country-dropdown', 'value'),
     Input('topic-dropdown', 'value'),
     Input('network-graph', 'tapNodeData')]
)
def update_graph(selected_country, selected_topic, tapped_node):
    # Create the base graph based on the selected country and topic
    if selected_topic == 'All':
        # Show only edges with weight >= 2 for 'All' topic selection
        G = create_sentiment_network_graph(df, selected_country, None, weight_threshold=1)
    else:
        # Show edges with weight >= 1 for any other topic selection
        G = create_sentiment_network_graph(df, selected_country, selected_topic, weight_threshold=0)

    # Check if a node is tapped
    if tapped_node:
        node_id = tapped_node['id']
        # If a node is tapped, show only its neighbors
        subgraph = nx.ego_graph(G, node_id, radius=1)
        return network_graph_to_cytoscape(subgraph)

    # Default case: return the full graph based on the selected country and topic
    return network_graph_to_cytoscape(G)

if __name__ == '__main__':
    app.run_server(port='8050', debug=True)
