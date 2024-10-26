import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Noto_Sans_Elbasan } from "next/font/google";
import "./globals.css";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const font = Noto_Sans_Elbasan({
  weight: "400",
  display: "auto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swiggy Money",
  description: "powered by Ankit Panchal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://media-assets.swiggy.com/co-web-assets/food_icons/favicon-16x16.ico"
        />
      </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
