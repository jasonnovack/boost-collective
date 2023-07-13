
# Boost Collective

Boost Collective is a web application that allows small groups of friends to promote one another's tweets.

## Prerequisites

Before you begin, make sure you have the following installed on your local machine:

- Node.js
- npm

Also, make sure you have the following credentials:

- Twitter API keys (API Key, API Key Secret, Access Token, Access Token Secret)
- AWS credentials (Access Key ID, Secret Access Key, Region)

## Setup

1. Download and unzip the project files.

2. Navigate to the project directory in a terminal.

3. Install the dependencies by running `npm install`.

4. Create a `.env` file in the project directory and add your Twitter API keys, AWS credentials, and a session secret. Use the `.env.template` file as a guide.

## Running the App

1. In one terminal, start the server by running `npm start`. This will start the server on `localhost:3000`.

2. In a second terminal, navigate to the same project directory and run `npm run client`. This will start the Parcel server on `localhost:1234`.

You can now access the app at `localhost:1234` in your browser.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[ISC](https://choosealicense.com/licenses/isc/)
