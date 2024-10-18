# Installation and Setup

To get started, follow the steps below to install and run the application.
## 1. Clone the Repository

First, clone the repository from GitHub:


git clone https://github.com/maaliwageesha/dashboard-fe.git

## 2. Checkout to the 'dev' Branch

Navigate into the cloned repository and checkout the development branch:


git checkout dev

## 3. Install Node.js Dependencies

Inside the project directory, install the necessary Node.js dependencies using npm:


npm i

This will install all the required packages listed in the package.json file.
## 4. Run the Social Network Diagram (Python Script)

To generate the social network diagram, follow these steps:

Navigate to the folder containing the Python scripts:

    cd src/python/scripts

Run the Python file to generate the social network diagram:

    python SA_Network.py

Make sure you have the necessary Python libraries installed. You can install them via pip as shown below:


    pip install dash networkx itertools pandas

## 5. Start the React Application

Once the dependencies are installed and the Python script is running, start the React application:

    npm start

This will launch the application locally. You can view it in your browser at http://localhost:3000.
