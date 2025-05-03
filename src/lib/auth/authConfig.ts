import { NextAuthConfig, Session } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from '@/lib/db';
import { providers } from './providers';

export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(db),
  secret: process.env.AUTH_SECRET,
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/signin',
  },
  providers,
  callbacks: {
    async jwt({ token, user, account, trigger }) {
      /**
       * When the user is signing in for the first time, the user object will be available.
       * This is where we can set the initial values for the token. means after initial sign in we get undefined user that's why we store important field what we need in token and update types/next-auth.d.ts
       * The token will be available in the session callback.
       * The token is also available in the JWT callback.
       * The JWT callback is called when 1. sign in, 2.Subsequent Requests 3. refresh/Update.
       * The session callback is called whenever a request goes for session data.
       *
       */
      // console.log('jwt check', {
      //   token,
      //   user,
      //   account,
      // });
      if (user) {
        return {
          ...token,
          id: user.id,
          role: user.role,
          isFirstLogin: user.isFirstLogin,
        };
      }
      // forced refresh
      if (trigger === 'update' && token.isFirstLogin === true) {
        console.warn('forced refresh');
        const userData = await db.user.findUnique({
          where: {
            id: token.id,
          },
        });
        if (userData) {
          token.isFirstLogin = userData?.isFirstLogin;
          token.role = userData?.role as 'CONSUMER' | 'PROVIDER' | 'ADMIN';
        }
      }
      return token;
    },

    async session({ session, token }): Promise<Session> {
      // console.log('session check', {
      //   ...session,
      //   user: {
      //     ...session.user,
      //     id: token.id,
      //     role: token.role,
      //     isFirstLogin: token.isFirstLogin,
      //   },
      // });

      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          role: token.role as 'CONSUMER' | 'PROVIDER' | 'ADMIN',
          isFirstLogin: token.isFirstLogin as boolean,
        },
      };
    },
  },
  debug: true,
};
