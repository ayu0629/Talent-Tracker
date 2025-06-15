import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider'; 
import Header from '@/components/ui/header';
import { Toaster } from 'sonner';
import { dark } from '@clerk/themes';

export const metadata = {
  title: "Talent Tracker",
  description: "",
};

export default function RootLayout({ children }) {
    return (
      <ClerkProvider appearance={{
        baseTheme:dark,
      }}>
      <html lang="en" suppressHydrationWarning>
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors /> 
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Your Journey Coach 💗</p>
              </div>
            </footer>
          </ThemeProvider>
          </body>
      </html>
      </ClerkProvider>
    )
  }