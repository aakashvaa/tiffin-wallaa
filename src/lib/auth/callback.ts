import { CallbacksOptions } from 'next-auth';

export const callbacks: Partial<CallbacksOptions> = {
  session: ({ session, token }) => {
    return {
      ...session,
      user: {
        ...session.user,
        id: token.id,
      },
    };
  },
  jwt: ({ token, user }) => {
    if (user) {
      return {
        ...token,
        id: user.id,
      };
    }
    return token;
  },
};
