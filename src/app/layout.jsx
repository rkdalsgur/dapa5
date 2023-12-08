import App from '@/components/App'
import './globals.css'
import { Inter } from 'next/font/google'
import { StoreProvider } from '@/redux/StoreProvider'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MYTH쇼핑몰',
  description: '신화창조에서 제작한 쇼핑몰입니다',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <StoreProvider>
            <App>{children}</App>
          </StoreProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
