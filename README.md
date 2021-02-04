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

Start the Firebase Authentication Emulator first:

```
yarn firebase:dev
```

Then, on another terminal, start the development server:

```
yarn start:dev
```

## Available Scripts

### `yarn start`

*Note: This is used in production and is not recommended for development*

Runs the server with `node`, **provided** that the project is already built
(see: [`yarn build`](#yarn-build)).

### `yarn start:dev`

Runs the server with `nodemon`.

The server will reload if you make edits.\
You can also manually restart the server by typing `rs` into the console.

### `yarn lint`

Fixes formatting errors in all project files with `eslint --fix`.

### `yarn build`

Builds the project with `tsc`.

### `yarn db:migrate`

Runs pending database migrations. If runs first time, sets up the database
tables.

### `yarn db:rollback`

Reverts the latest database migration.

### `yarn db:reset`

Resets the database, removing all tables and relations.

### `yarn db:seed`

*Development only*

Seeds the database with dummy data specified in `src/db/seeders/` files.

### `yarn db:clear`

*Development only*

Clears the database.

### `yarn firebase:dev`

Starts the Firebase Authentication Emulator.

This service will act as the local version of the real Firebase Authentication.
