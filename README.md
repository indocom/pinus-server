# pinus-server

The backend server for PINUS Website.

## Development Setup

1. Ensure you have the latest:

- npm
- node
- yarn (Install it via `npm install -g yarn`)

2. Install all the dependencies:

```
> yarn install
```

3. Create and set up the development database:

(Note: `<USERNAME>` and `<PASSWORD>` are available in `src/db/config/config.js`,
`<POSTGRES_PASSWORD>` is your local `postgres` password)

```
> createuser -U postgres --createdb --pwprompt <USERNAME>
Enter password for new role: <PASSWORD>
Enter it again: <PASSWORD>
Password: <POSTGRES_PASSWORD>
> yarn db:setup
```

4. Start the development server:

```
> yarn start:dev
```

5. Open another terminal and start the Firebase Authentication Emulator:

```
> yarn firebase:dev
```

## Available Scripts

Run any of the scripts below by `yarn <SCRIPT>`.

### Development related

#### `start:dev`

Runs the server with `nodemon`.

The server will reload if you make edits.\
You can also manually restart the server by typing `rs` into the console.

#### `firebase:dev`

Starts the Firebase Authentication Emulator.

This service will act as the local version of the real Firebase Authentication.

#### `db:setup`

Creates the local database and sets up the tables, relations, and fill in with dummy
data.

Runs [`db:create`](#db:create), [`db:migrate`](#db:migrate), and
[`db:seed`](#db:seed) behind the scenes.

#### `lint`

Fixes formatting errors in all project files with `eslint --fix` in quiet mode.

### Production related

#### `start`

Runs the server with `node`, **provided** that the project is already built
(see: [`build`](#build)).

#### `build`

Builds the project with `tsc`.

### Database related

#### `db:create`

Creates the local database, with the credentials provided at `src/db/config/config.js`.

#### `db:drop`

Deletes the local database.

#### `db:migrate`

Runs pending database migrations.

If executed on a newly created database (e.g. via [`db:create`](#db:create)) or a
database that has just been reset (e.g. via [`db:reset`](#db:reset)), essentially
sets up all the database tables and relations.

#### `db:rollback`

Reverts the latest database migration.

#### `db:reset`

Resets the database, removing all tables and relations.

#### `db:seed`

Seeds the database with dummy data specified in `src/db/seeders/` files.

#### `db:clear`

Clears the database.

#### `migration:generate`

Usage: `yarn migration:generate --name MIGRATION_NAME`

Creates a migration file with the specified migration name.

#### `model:generate`

Usage: `yarn model:generate --name MODEL_NAME --attributes ATTRIBUTES_1:TYPE_1 ...`

Creates a model file with the specified name and attributes.

Also creates a migration file for creating the corresponding model.

#### `seed:generate`

Usage: `yarn seed:generate --name <SEED_NAME>`

Creates a seed file with the specified seed name.
