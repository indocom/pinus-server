# pinus-server

The backend server for PINUS Website.

## Development Setup

To set up the development server on your local machine, make sure you have the latest:

- npm
- node
- yarn

Then, install all the dependencies:

```
yarn install
```

Create the local development database with the credentials provided in `src/db/config/config.js`.

## Available Scripts

### `yarn start`

Runs the server with `nodemon`.

The server will reload if you make edits.\
You can also manually restart the server by typing `rs` into the console.

### `yarn lint`

Fixes formatting errors in all project files with `eslint --fix`.
