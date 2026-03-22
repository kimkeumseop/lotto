import './globals.css'

export const metadata = {
  other: {
    'naver-site-verification': '5ff06b09ff1e8e678dcd1036b1d7c6ec5a48a3c3',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  )
}
