import pandas as pd
import itertools
import networkx as nx
import matplotlib.pyplot as plt
from dash import dcc, html
from dash.dependencies import Input, Output
import dash

# Load the Excel file
file_path = '../data/news_data_with_keywords.xlsx'  # Adjust path accordingly
df = pd.read_excel(file_path)

# Step 2: Define relevant keywords related to renewable energy and public opinion
relevant_keywords = ['renewable', 'energy', 'solar', 'wind', 'power', 'public', 'opinion', 'policy', 'climate', 'change', 'electricity', 'environment']

# Step 3: Extract and filter relevant keyword pairs
def generate_relevant_keyword_pairs(keywords, relevant_keywords):
    keywords_list = [kw.strip() for kw in keywords.split(',')]
    filtered_keywords = [kw for kw in keywords_list if kw in relevant_keywords]
    return list(itertools.combinations(filtered_keywords, 2))

# Step 4: Build the network graph
def build_network_graph(df, country):
    # Filter the data for the selected country
    df_country = df[df['country'] == country]

    # Initialize an empty list to store relevant pairs
    relevant_pairs = []
    for keywords in df_country['extracted_keywords']:
        relevant_pairs.extend(generate_relevant_keyword_pairs(keywords, relevant_keywords))

    # Build the co-occurrence network using NetworkX
    G = nx.Graph()
    for pair in relevant_pairs:
        G.add_edge(pair[0], pair[1])

    # Visualize the targeted network
    plt.figure(figsize=(10, 8))
    pos = nx.spring_layout(G, k=0.3)  # Layout for positioning nodes
    nx.draw(G, pos, with_labels=True, node_size=3000, node_color='lightgreen', font_size=10, font_weight='bold', edge_color='gray')
    plt.title(f"Relevant Keyword Network for {country.capitalize()} (Renewable Energy & Public Opinion)")
    plt.show()  # Add this line to check if the graph is generated locally
    plt.savefig(f'../assets/{country}_network.png')  # Save the plot to display in the app
    plt.close()

# Step 5: Create the Dash app
app = dash.Dash(__name__)

app.layout = html.Div([
    html.H1("Country-Based Keyword Network Graph"),
    dcc.Dropdown(
        id='country-dropdown',
        options=[
            {'label': 'australia', 'value': 'australia'},
            {'label': 'india', 'value': 'india'},
            {'label': 'china', 'value': 'china'},
            {'label': 'singapore', 'value': 'singapore'}
        ],
        value='australia'  # Default value
    ),
    html.Img(id='network-graph', src='/assets/australia_network.png')
])

# Step 6: Set up the callback to update the graph
@app.callback(
    Output('network-graph', 'src'),
    [Input('country-dropdown', 'value')]
)
def update_network_graph(country):
    # Generate the network graph for the selected country
    build_network_graph(df, country)
    return f'/assets/{country}_network.png'

if __name__ == '__main__':
    app.run_server(port=8052, debug=True)

