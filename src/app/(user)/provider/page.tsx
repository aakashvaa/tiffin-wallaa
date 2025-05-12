'use client';
import { useRouter } from 'next/navigation';
export default function ProviderIndex() {
  const router = useRouter();
  router.back();
  return null;
}
