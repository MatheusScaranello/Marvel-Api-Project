import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marvel-6devs',
  description: 'Marvel-6devs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://seeklogo.com/images/T/the-avengers-capitao-america-logo-72B7C58836-seeklogo.com.png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
