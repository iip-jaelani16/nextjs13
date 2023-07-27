import HeaderComponent from '@/components/header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeRegistry from './ThemeRegistry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeRegistry options={{ key: 'mui' }}>
          <HeaderComponent />
          {children}
          {modal}
        </ThemeRegistry>
      </body>
    </html>
  )
}
