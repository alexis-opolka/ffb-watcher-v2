import'./globals.sass';
import { Inter } from 'next/font/google'
import BootstrapHandler from '@/components/bootstrapHandler'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FFB-Watcher Next.js Client',
  description: 'A simple Next.js client for the FFB-Watcher project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='FFB-Watcher-Root'>
      <body className={`${inter.className} FFB-Watcher-Body`}>

        <BootstrapHandler>
          {children}
        </BootstrapHandler>

      </body>
    </html>
  )
}
