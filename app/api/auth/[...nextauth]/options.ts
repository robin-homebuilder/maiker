import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
          const {email, password} = credentials as {
              email: string,
              password: string,
          };
          
          const user = { id: "42", name: "admin@maiker.com.au", password: "admin123" }

          if (email === user.name && password === user.password) {
              return {...user, apiToken: "qwewqewqeqwe"}
          } else {
              return null
          }
      }
    })
  ],
  session: { strategy: "jwt" }
}