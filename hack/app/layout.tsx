import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Navbar } from '@/components/layout/navbar'
import Learn from '../pages/learn'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'coin.new - Create Your Own Cryptocurrency Token',
  description: 'Create and launch your own cryptocurrency token on Ethereum or BSC with just a few clicks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}