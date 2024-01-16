import bycript from "bcryptjs";

export function verifyPassword(password: string, userPassword: string) {
  const isValid = bycript.compareSync(password, userPassword);
  return isValid;
}
