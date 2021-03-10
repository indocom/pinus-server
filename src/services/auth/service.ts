import { FirebaseAuth } from "@fb";

import { ServicePromise } from "../promise";
import { FirebaseError } from "../error";

export async function verifyIdToken(token: string): ServicePromise<string> {
  const [uid, err] = await FirebaseAuth.verifyIdToken(token);

  if (err) {
    return [undefined, new FirebaseError(err.code, err.message)];
  }

  return [uid as string, err];
}
