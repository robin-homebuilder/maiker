import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session{
    user: {
      id: string,
      role: number,
    } & DefaultSession
  }

  interface User extends DefaultUser {
    role: number
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: number
  }
}