
# Boost Collective

Boost Collective is a web application that allows small groups of friends to automatically promote one another's tweets.

## Features

1. Create a collective with a name.
2. Invite members to join the collective.
3. Members can join by connecting their Twitter accounts.
4. Set a quota for likes and Retweets (RTs) per day.
5. Submit a tweet URL to request a boost.
6. View requested tweets.
7. Distribute boost shares to each member that likes, RTs, comments, and Quote Tweets (QTs) a submitted tweet.
8. Determine which tweets each user should like and RT automatically (based on quotas and boost shares).
9. Automatically perform the likes and RTs from member accounts.

## How to Use

To use Boost Collective, you need to have Node.js and npm installed.

1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Start the server with `npm start`.
4. Navigate to `http://localhost:3000` in your web browser.

## Important Notes

This is a proof of concept and is not intended for production use. In a production application, you would need to:

- Validate all input data
- Securely store user credentials
- Connect to a real database
- Interact with the Twitter API
- Handle errors and edge cases
- Keep your Twitter API keys and AWS credentials secure

## License

Boost Collective is released under the MIT License.
