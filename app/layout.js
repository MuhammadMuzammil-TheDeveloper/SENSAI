import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import Header from "../components/header";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sensai - AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}
    >

      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.ClassName}`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header */}
            <Header />
            <main className="min-h-screen">{children}</main>

            {/* Footer */}
            <footer className="bg-muted/50 py-12">
              <div>
                <p className="container mx-auto px-4 text-center text-gray-200">
                  Made with Muhammad Muzammil
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
