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

Duplicate the `.env.sample` file and rename the copy to be `.env`. Fill in the database credentials as follows:

- Database: `pinusweb`
- Host: `localhost`
- Port: `5432`
- Username: `pinus_admin`
- Password: `pinusians`
- Server port: `4000`

Create your local user and database with the details above.

Then, set up the database tables with `yarn db:setup`, and seed it with `yarn db:seed`.

## Available Scripts

### `yarn start`

Runs the server with `nodemon`.

The server will reload if you make edits.\
You can also manually restart the server by typing `rs` into the console.

### `yarn lint`

Fixes formatting errors in all project files with `eslint --fix`.

### `yarn db:setup`

Executes the `schema/schema.sql` SQL script.

### `yarn db:seed`

Populates (aka seeds) the local database with dummy data in `schema/seed.sql`.
