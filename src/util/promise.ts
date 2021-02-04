export async function handlePromise<T, E>(promise: Promise<T>): Promise<[T?, E?]> {
  try {
    const result = await promise;
    return [result, undefined];
  } catch (err) {
    return [undefined, err];
  }
}
