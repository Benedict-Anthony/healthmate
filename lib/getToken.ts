import jwt, { JwtPayload } from "jsonwebtoken";

export function generateToken(id: string) {
  return jwt.sign({ id }, process.env.JWT_SECRET as string);
}

export function decodeToken(token: string) {
  const payload: any = jwt.verify(token, process.env.JWT_SECRET as string);
  return payload;
}
