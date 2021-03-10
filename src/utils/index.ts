export function isOnProduction(): boolean {
  return process.env.NODE_ENV === "production";
}

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

export function getIntVar(field: string, required = false, fallback = 0): number {
  const val = getVar(field, required);
  if (val === "") {
    return fallback;
  }

  const valInt = Number(val);
  if (isNaN(valInt)) {
    throw new Error(`Environment variable ${field} is not a number.`);
  }

  return valInt;
}

export async function handlePromise<T, E>(promise: Promise<T>): Promise<[T?, E?]> {
  try {
    const result = await promise;
    return [result, undefined];
  } catch (err) {
    return [undefined, err];
  }
}
