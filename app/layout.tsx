import './globals.css'
import type { Metadata } from 'next'
import { Noto_Serif_JP } from 'next/font/google'

const kaiFont = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '水炊き天 | 博多の本格水炊きと馬刺しの店',
  description:
    '博多の伝統料理「水炊き」と熊本直送の馬刺しを、落ち着いた空間で楽しめる「水炊き天」公式サイト。ご予約はお早めに。',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://mizutaki-ten.vercel.app'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${kaiFont.className} font-kai text-gray-800`}>
        {children}
      </body>
    </html>
  )
}
