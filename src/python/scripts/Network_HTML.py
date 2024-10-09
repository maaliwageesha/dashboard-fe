import os
import pandas as pd
import networkx as nx
import plotly.graph_objects as go
from itertools import combinations

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

# Get unique topics for each country
def get_topics_for_country(country):
    return df[df['Country'] == country]['Topic'].unique()

# Function to create a social network graph
def create_sentiment_network_graph(df, country, topic=None, weight_threshold=1):
    filtered_df = df[df['Country'] == country]

    # Initialize a network graph
    G = nx.Graph()

    # Add nodes and edges based on co-occurrence of keywords in each comment, with sentiment
    for _, row in filtered_df.iterrows():
        keywords = row['Keywords']
        sentiment = row['Sentiment']

        if isinstance(sentiment, str):
            sentiment = sentiment.lower()
        else:
            sentiment = 'neutral'

        for kw1, kw2 in combinations(keywords, 2):
            if G.has_edge(kw1, kw2):
                G[kw1][kw2]['weight'] += 1
            else:
                G.add_edge(kw1, kw2, weight=1, sentiment=sentiment)

    # Remove edges below the weight threshold
    G.remove_edges_from([(u, v) for u, v, d in G.edges(data=True) if d['weight'] < weight_threshold])

    if topic and topic != "All":
        topic_filtered_df = filtered_df[filtered_df['Topic'].str.lower() == topic.lower()]
        keywords_in_topic = [kw for _, row in topic_filtered_df.iterrows() for kw in row['Keywords']]
        G = G.subgraph(keywords_in_topic).copy()

    return G

# Function to save network graph as an HTML file using Plotly
def save_graph_as_html(G, country, topic):
    pos = nx.spring_layout(G)
    edge_x = []
    edge_y = []
    for edge in G.edges():
        x0, y0 = pos[edge[0]]
        x1, y1 = pos[edge[1]]
        edge_x.append(x0)
        edge_x.append(x1)
        edge_x.append(None)
        edge_y.append(y0)
        edge_y.append(y1)
        edge_y.append(None)

    edge_trace = go.Scatter(
        x=edge_x, y=edge_y,
        line=dict(width=0.5, color='#888'),
        hoverinfo='none',
        mode='lines')

    node_x = []
    node_y = []
    for node in G.nodes():
        x, y = pos[node]
        node_x.append(x)
        node_y.append(y)

    node_trace = go.Scatter(
        x=node_x, y=node_y,
        mode='markers',
        hoverinfo='text',
        marker=dict(
            showscale=True,
            colorscale='YlGnBu',
            size=10,
            colorbar=dict(
                thickness=15,
                title='Node Connections',
                xanchor='left',
                titleside='right'
            ),
        )
    )

    node_text = []
    for node, adjacencies in G.adjacency():
        node_text.append(f'{node} has {len(adjacencies)} connections')

    node_trace.text = node_text

    fig = go.Figure(data=[edge_trace, node_trace],
                    layout=go.Layout(
                        title=f"Network Graph for {country} - {topic}",
                        titlefont_size=16,
                        showlegend=False,
                        hovermode='closest',
                        margin=dict(b=0, l=0, r=0, t=40),
                        xaxis=dict(showgrid=False, zeroline=False),
                        yaxis=dict(showgrid=False, zeroline=False)
                    )
                   )

    # Save the figure as HTML
    output_path = f"../data/network_graph_{country}_{topic}.html"
    fig.write_html(output_path)

# Loop through countries and topics to generate HTML files
for country in countries:
    topics = get_topics_for_country(country)
    for topic in topics:
        G = create_sentiment_network_graph(df, country, topic)
        save_graph_as_html(G, country, topic)
    # Save for "All" topics as well
    G = create_sentiment_network_graph(df, country, "All")
    save_graph_as_html(G, country, "All")
