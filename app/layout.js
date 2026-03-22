import './globals.css'
import Script from 'next/script'

export const metadata = {
  other: {
    'naver-site-verification': '5ff06b09ff1e8e678dcd1036b1d7c6ec5a48a3c3',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BJP7RX1SLL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BJP7RX1SLL');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
