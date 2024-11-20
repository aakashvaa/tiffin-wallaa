import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sign In",
  description: "tiffin wala auth page",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-[100dvw] relative overflow-hidden h-screen flex justify-end items-center">
      <div className="circle" />
      <Image src="/images/logo.svg" alt="app-logo" width={200} height={30} className="absolute top-10 right-10 drop-shadow-xl" />
      {children}
    </div>
  );
}
