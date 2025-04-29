import type { Session } from 'next-auth';
import { useSession } from 'next-auth/react';

export const useTypedSession = () => {
  const session = useSession();
  return session as ReturnType<typeof useSession> & { data: Session | null };
};
