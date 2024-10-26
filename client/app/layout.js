import localFont from "next/font/local";
import { ThemeProvider } from 'next-themes';
import "./globals.css";

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

export const metadata = {
  title: "PromptAThon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      </ThemeProvider>
    </html>
  );
}
