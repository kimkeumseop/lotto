import Link from 'next/link'
import styles from '../info.module.css'

const issueUrl = 'https://github.com/kimkeumseop/lotto/issues'

export const metadata = {
  title: '이용약관 - 로또 번호 생성기',
  description:
    '로또 번호 생성기 이용약관 페이지입니다. 서비스 이용 범위, 책임 제한, 광고 및 정책 기준을 확인할 수 있습니다.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          메인 생성기로 돌아가기
        </Link>

        <header className={styles.hero}>
          <div className={styles.eyebrow}>Terms</div>
          <h1 className={styles.title}>이용약관</h1>
          <p className={styles.desc}>
            본 약관은 로또 번호 생성기 서비스의 이용 조건, 제공 범위, 면책 사항과 광고 및 정책
            기준을 안내합니다.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. 서비스 목적</h2>
          <p className={styles.sectionText}>
            본 서비스는 로또 645 번호 생성과 당첨 번호 비교를 쉽게 이용할 수 있도록 제공되는
            참고용 정보 서비스입니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. 제공 기능</h2>
          <ul className={styles.list}>
            <li>자동 번호 생성</li>
            <li>복수 세트 조합 확인</li>
            <li>저장 기록 및 최근 생성 기록 표시</li>
            <li>당첨 번호와 비교한 등수 확인 기능</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. 책임 제한</h2>
          <p className={styles.sectionText}>
            생성된 번호와 당첨 비교 결과는 참고용으로 제공되며, 실제 구매 결과나 당첨금 수령을
            보장하지 않습니다. 공식 구매와 당첨 확인은 반드시 공식 판매처 안내를 기준으로 해야
            합니다.
          </p>
          <div className={styles.noteBox}>
            본 서비스는 무작위 조합 도구이며, 특정 번호나 결과에 대한 성공 가능성을 약속하지
            않습니다.
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. 광고 및 외부 서비스</h2>
          <p className={styles.sectionText}>
            사이트는 Google AdSense 등 광고 서비스를 포함할 수 있으며, 광고 콘텐츠는 본문 정보와
            구분해 표시됩니다. 외부 광고 서비스 정책은 해당 사업자의 기준을 따릅니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. 정책 변경 및 문의</h2>
          <p className={styles.sectionText}>
            운영 환경이나 기능 변경에 따라 약관은 수정될 수 있으며, 변경 사항은 본 페이지를 통해
            공지합니다.
          </p>
          <div className={styles.linkRow}>
            <Link href="/privacy" className={styles.pillLink}>
              개인정보처리방침
            </Link>
            <a href={issueUrl} target="_blank" rel="noopener noreferrer" className={styles.pillLink}>
              문의하기
            </a>
          </div>
        </section>

        <footer className={styles.footer}>
          서비스를 계속 이용하는 경우 변경된 약관에 동의한 것으로 간주될 수 있습니다.
        </footer>
      </div>
    </main>
  )
}
