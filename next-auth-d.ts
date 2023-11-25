import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session{
    user: {
      id: string,
      role: number,
      client: string,
      userID: string
    } & DefaultSession
  }

  interface User extends DefaultUser {
    role: number,
    client: string,
    userID: string
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: number,
    client: string,
    userID: string
  }
}