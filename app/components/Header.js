import Link from 'next/link'
import styles from './chrome.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandBadge}>Lotto 645</span>
          <span className={styles.brandText}>
            <span className={styles.brandTitle}>로또 번호 생성기</span>
            <span className={styles.brandSub}>자동 번호 생성과 당첨 번호 확인</span>
          </span>
        </Link>

        <nav className={styles.nav}>
          <Link href="/lotto" className={styles.navLink}>
            번호 생성기
          </Link>
          <Link href="/guide" className={styles.navLink}>
            가이드
          </Link>
          <Link href="/tips" className={styles.navLink}>
            팁
          </Link>
          <Link href="/about" className={styles.navLink}>
            소개
          </Link>
        </nav>
      </div>
    </header>
  )
}
