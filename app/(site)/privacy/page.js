import Link from 'next/link'
import styles from '../../info.module.css'

const issueUrl = 'https://github.com/kimkeumseop/lotto/issues'

export const metadata = {
  title: '개인정보처리방침 - 로또 번호 생성기',
  description:
    '로또 번호 생성기 개인정보처리방침 페이지입니다. 쿠키, 로그, 광고 서비스 관련 처리 기준을 확인할 수 있습니다.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          메인 생성기로 돌아가기
        </Link>

        <header className={styles.hero}>
          <div className={styles.eyebrow}>Privacy</div>
          <h1 className={styles.title}>개인정보처리방침</h1>
          <p className={styles.desc}>
            본 페이지는 로또 번호 생성기 서비스에서 처리하는 정보의 범위와 목적, 광고 및 분석 도구
            사용 가능성, 이용자 권리에 대해 안내합니다.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. 수집하는 정보</h2>
          <p className={styles.sectionText}>
            로또 번호 생성기 서비스는 회원가입 없이 이용할 수 있으며, 생성한 번호와 저장 기록은 기본적으로 사용 중인 브라우저 환경에서만 처리됩니다.
          </p>
          <ul className={styles.list}>
            <li>사용자가 생성한 번호 조합과 저장 기록</li>
            <li>브라우저에 저장되는 로컬 스토리지 데이터</li>
            <li>서비스 품질 개선을 위한 접속 로그, 브라우저 정보, 방문 시간 등의 기본 정보</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. 정보 이용 목적</h2>
          <ul className={styles.list}>
            <li>번호 생성, 저장, 비교 기능 제공</li>
            <li>사용자 환경에 맞는 서비스 품질 개선</li>
            <li>오류 확인, 악성 트래픽 방지, 보안 대응</li>
            <li>광고 서비스 운영 시 맞춤형 또는 일반 광고 제공</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. 쿠키 및 광고 서비스</h2>
          <p className={styles.sectionText}>
            본 사이트는 Google AdSense 등 외부 광고 서비스를 사용할 수 있으며, 이 경우 광고 성과
            측정과 콘텐츠 최적화를 위해 쿠키 또는 유사 기술이 활용될 수 있습니다.
          </p>
          <div className={styles.noteBox}>
            광고 서비스 제공자의 개인정보 처리 기준은 해당 사업자의 정책을 따르며, 자세한 내용은
            Google 정책 페이지에서 확인할 수 있습니다.
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. 보관 기간과 이용자 권리</h2>
          <p className={styles.sectionText}>
            브라우저 로컬 스토리지에 저장된 정보는 사용자가 직접 삭제할 수 있으며, 쿠키 사용 여부도
            브라우저 설정에서 제어할 수 있습니다.
          </p>
          <ul className={styles.list}>
            <li>로컬 저장 데이터는 사용자가 브라우저 기록을 지우면 함께 삭제될 수 있습니다.</li>
            <li>광고 개인화 설정은 Google 광고 설정 등 외부 서비스 설정에서 조정할 수 있습니다.</li>
            <li>정책 관련 문의는 아래 문의 채널을 통해 전달할 수 있습니다.</li>
          </ul>
          <div className={styles.linkRow}>
            <a href={issueUrl} target="_blank" rel="noopener noreferrer" className={styles.pillLink}>
              문의하기
            </a>
            <Link href="/terms" className={styles.pillLink}>
              이용약관 보기
            </Link>
          </div>
        </section>

        <footer className={styles.footer}>
          본 방침은 사이트 운영 정책에 따라 갱신될 수 있으며, 변경 시 본 페이지에 반영됩니다.
        </footer>
      </div>
    </main>
  )
}
