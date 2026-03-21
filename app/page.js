import Link from 'next/link'
import styles from './page.module.css'
import { siteUrl } from './lib/structuredData'

export const metadata = {
  title: '로또 번호 생성기',
  description: '로또 번호 생성기 메인 페이지입니다. 자동 번호 생성과 당첨 확인 페이지로 바로 이동할 수 있습니다.',
  alternates: { canonical: siteUrl },
  openGraph: {
    title: '로또 번호 생성기',
    description: '로또 번호 생성기 메인 페이지입니다. /lotto에서 자동 번호 생성과 당첨 확인을 이용할 수 있습니다.',
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
            자동 번호 생성, 저장 기록, 당첨 번호 확인 기능을 한 곳에서 이용할 수 있는 로또 번호
            생성기 메인 페이지입니다.
          </p>
        </header>

        <section className={styles.calcBox}>
          <div className={styles.label}>바로가기</div>
          <div className={styles.cardGrid}>
            <Link href="/lotto" className={styles.linkCard}>
              <div className={styles.cardEmoji}>🍀</div>
              <div className={styles.cardTitle}>로또 번호 생성기</div>
              <div className={styles.cardDesc}>
                자동 번호 생성과 당첨 확인을 바로 시작하세요.
              </div>
            </Link>
          </div>
        </section>

        <section className={styles.content}>
          <h2 className={styles.h2}>이용 안내</h2>
          <p>
            메인 페이지는 기존 라이트모드 디자인을 유지하면서 핵심 진입점만 간단하게 보여주도록
            구성했습니다.
          </p>
          <p>
            실제 로또 생성과 비교 기능은{' '}
            <Link href="/lotto" style={{ color: 'var(--text)', textDecoration: 'underline' }}>
              /lotto
            </Link>{' '}
            페이지에서 바로 사용할 수 있습니다.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>메인 페이지에서 /lotto로 이동해 로또 번호를 생성하고 확인할 수 있습니다.</p>
        </footer>
      </div>
    </main>
  )
}
