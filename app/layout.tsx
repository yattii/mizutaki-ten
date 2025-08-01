import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '水炊き天',
  description: '水炊き天の公式サイト',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
