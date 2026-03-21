import Script from 'next/script'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { buildSiteSchema, siteUrl } from './lib/structuredData'

const siteSchema = buildSiteSchema()

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: '로또 번호 생성기 - 무료 로또 645 자동번호 생성',
  description:
    '로또 645 자동 번호 생성기. 랜덤 번호 생성, 저장, 최근 기록 확인, 당첨 번호 비교까지 무료로 제공합니다.',
  keywords: ['로또 번호 생성기', '로또 645 자동번호', '로또 자동번호', '로또 당첨 확인', '로또 번호 추천'],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: '로또 번호 생성기',
    description: '로또 645 자동 번호 생성, 저장, 당첨 번호 확인 기능을 무료로 제공합니다.',
    url: siteUrl,
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary',
    title: '로또 번호 생성기',
    description: '로또 645 자동 번호 생성, 저장, 당첨 번호 확인 기능을 무료로 제공합니다.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="google-adsense-account" content="ca-pub-1059415497859090" />
        <meta name="google-site-verification" content="Uq__XjJJK6j-ipJKyUcbCDK6hy_aWPgaf3ep7bsbdlk" />
        <meta name="naver-site-verification" content="c109c20a80d33896e2455085d1df4ece9ffd7121" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Script
          async
          id="google-adsense"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1059415497859090"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <Header />
        <div style={{ flex: 1 }}>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
