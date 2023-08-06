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
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = { id: "42", name: "robindeguzman1717@gmail.com", password: "qweqwe123" }

                if (email === user.name && password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    pages: {
      signIn: "/authentication/login",  
    }
}