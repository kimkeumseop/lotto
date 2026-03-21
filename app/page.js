import Link from 'next/link'
import styles from './page.module.css'
import { siteUrl } from './lib/structuredData'

export const metadata = {
  title: '로또 번호 생성기',
  description: '로또 번호 생성기 메인 페이지. 자동 번호 생성과 당첨 확인 기능을 제공합니다.',
  alternates: { canonical: siteUrl },
  openGraph: {
    title: '로또 번호 생성기',
    description: '로또 번호 생성기 메인 페이지. /lotto에서 자동 번호 생성과 당첨 확인을 바로 이용하세요.',
    url: siteUrl,
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.h1}>로또 번호 생성기</h1>
          <p className={styles.desc}>
            로또 645 자동 번호 생성과 당첨 확인을 한 곳에서 이용할 수 있는 메인 페이지입니다.
            아래 카드에서 바로 로또 번호 생성기로 이동할 수 있습니다.
          </p>
        </header>

        <section className={styles.cardGrid}>
          <Link href="/lotto" className={styles.linkCard}>
            <div className={styles.cardEmoji}>🍀</div>
            <div className={styles.cardTitle}>로또 번호 생성기</div>
            <div className={styles.cardDesc}>자동 번호 생성, 저장 기록, 당첨 번호 확인을 바로 시작하세요.</div>
          </Link>
        </section>

        <section className={styles.content}>
          <h2 className={styles.h2}>이용 안내</h2>
          <p>
            메인 페이지는 라이트모드 기준으로 단순하게 구성했고, 실제 생성과 비교 기능은{' '}
            <Link href="/lotto" style={{ color: 'var(--text)', textDecoration: 'underline' }}>
              /lotto
            </Link>{' '}
            페이지에서 이용할 수 있습니다.
          </p>
          <p>
            모바일과 데스크톱 모두 같은 디자인 톤을 유지하며, 시스템이 다크모드인 경우에는
            전역 테마 설정에 따라 어두운 색상으로 자동 전환됩니다.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>로또 번호 생성은 /lotto 페이지에서 바로 이용할 수 있습니다.</p>
        </footer>
      </div>
    </main>
  )
}
