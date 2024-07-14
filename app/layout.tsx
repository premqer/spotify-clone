import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider';
import UserProvier from '@/providers/UserProvider';

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Best music streaming service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <UserProvier>
            <Sidebar>
              {children}
            </Sidebar>
          </UserProvier>
        </SupabaseProvider>
      </body>
    </html>
  );
}
