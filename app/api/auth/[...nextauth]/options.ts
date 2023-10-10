import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { login } from '@/services/authenticationServices';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as any;

        const result = await login({email, password});
        
        const user = {
          id: result?.email || "",
          ...result
        }

        if (result.email && result.role) {
          return {...user};
        } else {
          return null
        }
      }
    })
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login"
  },
  callbacks: {
    jwt({ token, user }) {
      if(user) token.role = user.role
      return token
    },
    session({ session, token }) {
      session.user.role = token.role
      return session
    }
  }
  // session: { strategy: "jwt" }
}