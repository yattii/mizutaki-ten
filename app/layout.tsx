import './globals.css'
import type { Metadata } from 'next'
import { Noto_Serif_JP } from 'next/font/google'

const kaiFont = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '水炊き天',
  description: '水炊き天の公式サイト',
  icons: {
    icon: '/favicon.ico', // public 配下のパス
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      {/* TailwindのフォントクラスとGoogleフォントのクラスを両方適用 */}
      <body className={`${kaiFont.className} font-kai text-gray-800`}>
        {children}
      </body>
    </html>
  )
}
