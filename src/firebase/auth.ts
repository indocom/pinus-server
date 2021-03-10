import { auth } from "firebase-admin";
import { FirebasePromise, handleFirebasePromise } from "./util";

export async function verifyIdToken(token: string): FirebasePromise<string> {
  const [result, err] = await handleFirebasePromise(auth().verifyIdToken(token));

  if (err) {
    return [undefined, err];
  }

  const decodedToken = result as auth.DecodedIdToken;
  return [decodedToken.uid, err];
}
