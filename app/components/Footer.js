import Link from 'next/link'
import styles from './chrome.module.css'

const issueUrl = 'https://github.com/kimkeumseop/lotto/issues'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <p className={styles.footerTitle}>로또 번호 생성기</p>
            <p className={styles.footerDesc}>
              로또 645 자동 번호 생성, 저장 기록 확인, 당첨 번호 비교 기능을 제공하는 정보형
              서비스입니다. 실제 구매와 공식 당첨 확인은 공식 판매처 안내를 함께 확인해 주세요.
            </p>
          </div>

          <nav className={styles.footerLinks}>
            <Link href="/about" className={styles.footerLink}>
              서비스 소개
            </Link>
            <Link href="/privacy" className={styles.footerLink}>
              개인정보처리방침
            </Link>
            <Link href="/terms" className={styles.footerLink}>
              이용약관
            </Link>
            <a
              href={issueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              문의하기
            </a>
          </nav>
        </div>

        <p className={styles.footerNote}>
          © {new Date().getFullYear()} 로또 번호 생성기. 본 사이트는 참고용 정보 서비스를 제공하며,
          광고와 정책 안내를 포함할 수 있습니다.
        </p>
      </div>
    </footer>
  )
}
