import { auth } from "firebase-admin";

import { handleFirebasePromise } from "./util";

const usersSeed = [
  {
    uid: "admin",
    displayName: "admin",
    email: "admin@pinus.com",
    password: "adminer",
  },
  {
    uid: "creator",
    displayName: "creator",
    email: "creator@pinus.com",
    password: "creator",
  },
  {
    uid: "member",
    displayName: "member",
    email: "member@pinus.com",
    password: "member",
  },
];

export async function clearSeed(): Promise<void> {
  const [result, err] = await handleFirebasePromise(auth().deleteUsers(usersSeed.map((u) => u.uid)));

  if (err) {
    console.log(`Error clearing seed users: ${err.message}`);
    return;
  }

  const deleteResult = result as auth.DeleteUsersResult;
  if (deleteResult.failureCount > 0) {
    deleteResult.errors.forEach((e) =>
      console.log(`Error clearing ${usersSeed[e.index].uid}: ${e.error.message}`)
    );
  }
}

export async function seed(): Promise<void> {
  const [result, err] = await handleFirebasePromise(auth().importUsers(usersSeed));

  if (err) {
    console.log(`Error seeding users: ${err.message}`);
    return;
  }

  const importResult = result as auth.UserImportResult;
  if (importResult.failureCount > 0) {
    importResult.errors.forEach((e) =>
      console.log(`Error seeding ${usersSeed[e.index].uid}: ${e.error.message}`)
    );
  }
}
