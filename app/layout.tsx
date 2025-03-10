import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Little Beez - Early Childhood Learning",
  description: "A nurturing environment for children to learn and grow.",
  icons: {
    icon: "/favicon.ico", 
  },
  openGraph: {
    title: "Little Beez - Early Childhood Learning",
    description: "A nurturing environment for children to learn and grow.",
    images: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow bg-gradient-to-br from-yellow-100 via-white to-yellow-80">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
