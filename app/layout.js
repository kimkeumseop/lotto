import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  )
}
