import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  secret: process.env.SECRET, 
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          type: 'text'
        },
        password: {
          type: 'text'
        }
      },
      authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null
        const {email, password} = credentials
        console.log({email, password})

        return {
          email
        }
      },
    })
  ],
  callbacks: {
    jwt({token, user}) {
      if (user) return {...token, ...user}
      return token
    },
    session({token, session}) {
      session.user = {...token}
      return session
    }
  }
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
