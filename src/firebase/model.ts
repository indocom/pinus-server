export interface FirebaseUser {
  uid: string;
  displayName: string;
  email: string;
}

export interface FirebaseUserCreationData {
  displayName: string;
  email: string;
  password: string;
}
