import { auth } from '@/auth';
import store from '@/store';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
const Providers = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
};

export default Providers;
