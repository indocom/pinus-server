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
