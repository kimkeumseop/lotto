import Link from 'next/link'
import styles from '../../info.module.css'

const issueUrl = 'https://github.com/kimkeumseop/lotto/issues'

export const metadata = {
  title: '서비스 소개 - 로또 번호 생성기',
  description:
    '로또 번호 생성기 서비스 소개 페이지입니다. 제공 기능, 운영 원칙, 광고 및 정책 안내를 확인할 수 있습니다.',
  alternates: { canonical: '/about' },
}

const featureCards = [
  {
    title: '자동 번호 생성',
    text: '1부터 45까지 숫자 중 중복 없는 6개 번호를 자동으로 생성하고 오름차순으로 정렬해 보여 줍니다.',
  },
  {
    title: '여러 세트 비교',
    text: '한 번에 최대 5세트까지 생성해 다양한 조합을 빠르게 비교할 수 있도록 구성했습니다.',
  },
  {
    title: '저장 기록 확인',
    text: '이번 회차 저장과 최근 생성 기록 보관 기능으로 이전에 만든 조합을 쉽게 다시 확인할 수 있습니다.',
  },
  {
    title: '당첨 번호 확인',
    text: '당첨 번호 6개와 보너스 번호를 입력하면 각 세트별 일치 개수와 등수를 바로 확인할 수 있습니다.',
  },
]

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          메인 생성기로 돌아가기
        </Link>

        <header className={styles.hero}>
          <div className={styles.eyebrow}>About</div>
          <h1 className={styles.title}>서비스 소개</h1>
          <p className={styles.desc}>
            로또 번호 생성기는 로또 645 자동 번호 생성과 당첨 번호 비교를 쉽고 빠르게 이용할 수
            있도록 만든 정보형 서비스입니다. 복잡한 절차 없이 메인 화면에서 바로 번호를 만들고,
            저장 기록과 당첨 비교까지 한 번에 확인할 수 있게 구성했습니다.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>번호 생성</span>
              <span className={styles.statLabel}>중복 없는 6개 번호 자동 조합</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>당첨 비교</span>
              <span className={styles.statLabel}>보너스 번호 포함 등수 확인</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>정보형 운영</span>
              <span className={styles.statLabel}>참고용 안내와 정책 페이지 제공</span>
            </div>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>주요 기능</h2>
          <p className={styles.sectionText}>
            서비스 핵심 기능은 단순한 번호 생성에 그치지 않고, 사용자가 조합을 관리하고 확인하는
            흐름까지 고려해 설계했습니다.
          </p>

          <div className={styles.grid}>
            {featureCards.map((item) => (
              <article key={item.title} className={styles.card}>
                <p className={styles.cardTitle}>{item.title}</p>
                <p className={styles.cardText}>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>콘텐츠 운영 원칙</h2>
          <p className={styles.sectionText}>
            애드센스 심사와 일반 이용 환경 모두를 고려해, 사이트는 목적이 분명한 정보형 서비스로
            운영합니다.
          </p>
          <ul className={styles.list}>
            <li>실제 구매를 유도하기보다 번호 생성과 결과 비교를 돕는 참고용 정보를 제공합니다.</li>
            <li>메인 기능과 소개, 개인정보처리방침, 이용약관 등 기본 안내 페이지를 명확히 제공합니다.</li>
            <li>오해를 줄이기 위해 당첨 보장 표현이나 과장된 문구를 사용하지 않습니다.</li>
            <li>광고가 표시되는 경우에도 본문 콘텐츠와 구분되도록 운영합니다.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>광고 및 정책 안내</h2>
          <p className={styles.sectionText}>
            본 사이트는 향후 Google AdSense와 같은 광고 서비스를 적용할 수 있으며, 광고 정책과
            개인정보 처리 관련 정보는 정책 페이지에서 확인할 수 있도록 구성했습니다.
          </p>
          <div className={styles.linkRow}>
            <Link href="/privacy" className={styles.pillLink}>
              개인정보처리방침
            </Link>
            <Link href="/terms" className={styles.pillLink}>
              이용약관
            </Link>
            <a href={issueUrl} target="_blank" rel="noopener noreferrer" className={styles.pillLink}>
              문의하기
            </a>
          </div>
          <div className={styles.noteBox}>
            광고 심사는 사이트의 콘텐츠 품질, 정책 페이지 완성도, 사용자 탐색 구조, 실제 운영
            상태를 종합적으로 반영하므로 승인 자체를 보장할 수는 없습니다. 다만 현재 구조는 심사에
            필요한 기본 정보 페이지와 안내 흐름을 갖추는 방향으로 정리했습니다.
          </div>
        </section>

        <footer className={styles.footer}>
          로또 번호 생성기는 메인 생성기, 소개 페이지, 정책 페이지를 함께 제공하는 정보형
          서비스로 운영됩니다.
        </footer>
      </div>
    </main>
  )
}
