import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptiones = {
  session: { strategy: 'jwt' },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        username: {
          label: 'username',
          type: 'text',
          placeholder: 'example',
        },
        password: { label: 'Password', type: 'password' },
      },
      authorize(credentials) {
        const { username, password } = credentials;

        if (username !== 'user' || password !== '1234')
          throw new Error('Invalid inputs.');

        return {
          name: 'ali',
          email: 'email@email.com',
        };
      },
    }),
  ],
  // pages: {
  //   signIn: '/auth/sign-in',
  // },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },
    async session({ session }) {
      session.id = 'ks282ks';
      session.additionalData = '😀';

      return session;
    },
  },
};

export default NextAuth(authOptiones);
