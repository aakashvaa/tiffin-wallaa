'use client';
import { useRouter } from 'next/navigation';
export default function ConsumerIndex() {
  const router = useRouter();
  router.back();
  return null;
}
