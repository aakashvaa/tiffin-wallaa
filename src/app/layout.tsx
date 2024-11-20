import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { QueryProvider} from "@/lib/QueryProvider";
import '@pigment-css/react/styles.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tiffin walla",
  icons : 
  {
  icon : "/images/WhiteLogo.svg",
  } ,
  description: "This web app provides you the all the management feature to track your tifin details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/WhiteLogo.svg" sizes="any" type="image/svg+xml" />
      </head> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <QueryProvider>   
          {children}   
       </ QueryProvider>
        </body>
    </html>
  );
}
