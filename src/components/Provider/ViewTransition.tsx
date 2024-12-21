'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ViewTransitionsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (document.startViewTransition) {
      document.startViewTransition();
    }
  }, [pathname]);

  return null;
}
