export function getVar(field: string, required = false, fallback = ""): string {
  const val = process.env[field];
  if (val === undefined) {
    if (required) {
      throw new Error(`Environment variable ${field} is not set.`);
    }

    return fallback;
  }

  return val;
}

export async function handlePromise<T, E>(promise: Promise<T>): Promise<[T?, E?]> {
  try {
    const result = await promise;
    return [result, undefined];
  } catch (err) {
    return [undefined, err];
  }
}
