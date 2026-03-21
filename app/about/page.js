import styles from '../page.module.css'
import Link from 'next/link'

export const metadata = {
  title: '사이트 소개 - 로또 번호 생성기',
  description: '로또 번호 생성기 사이트 소개 페이지입니다. 자동번호 생성, 저장, 최근 기록, 당첨 확인 기능을 안내합니다.',
  alternates: { canonical: '/about' },
}

const FEATURE_LIST = [
  {
    title: '자동 번호 생성',
    desc: '1부터 45까지 중복 없는 숫자 6개를 자동으로 생성하고 오름차순으로 정렬해 보여줍니다.',
  },
  {
    title: '여러 세트 생성',
    desc: '한 번에 1세트부터 5세트까지 조합을 만들 수 있어 번호 비교가 편합니다.',
  },
  {
    title: '이번 회차 저장',
    desc: '마음에 드는 조합은 브라우저에 저장해 이번 회차 번호로 다시 확인할 수 있습니다.',
  },
  {
    title: '당첨 확인',
    desc: '당첨 번호 6개와 보너스 번호를 입력하면 생성한 조합이 몇 등인지 즉시 비교할 수 있습니다.',
  },
]

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div style={{ marginBottom: '1rem' }}>
          <Link href="/" style={{ fontSize: '13px', color: 'var(--text-hint)' }}>
            ← 홈으로
          </Link>
        </div>

        <header className={styles.header}>
          <h1 className={styles.h1}>사이트 소개</h1>
          <p className={styles.desc}>로또 번호 생성기는 로또 645 자동번호 생성과 확인에 집중한 전용 사이트입니다.</p>
        </header>

        <section className={styles.content}>
          <h2 className={styles.h2}>어떤 사이트인가요?</h2>
          <p>
            이 사이트는 로또 번호 생성, 저장, 최근 기록 확인, 당첨 번호 비교 기능만을 집중해서 제공하는 로또 전용 사이트입니다.
            불필요한 화면 이동 없이 한 페이지에서 바로 번호를 만들고 확인할 수 있도록 단순한 구조로 구성했습니다.
          </p>
          <p style={{ marginTop: '10px' }}>
            생성 기록과 저장 번호는 현재 브라우저 안에서만 처리되며, 별도의 회원가입 없이 누구나 바로 사용할 수 있습니다.
          </p>

          <h2 className={styles.h2}>주요 기능</h2>
          <div className={styles.faqList}>
            {FEATURE_LIST.map((item) => (
              <div key={item.title} className={styles.faqItem}>
                <p className={styles.faqQ}>{item.title}</p>
                <p className={styles.faqA}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className={styles.h2}>앞으로의 계획</h2>
          <p>
            앞으로도 로또 사용자 입장에서 실제로 자주 쓰는 기능을 중심으로 개선할 예정입니다.
            예를 들어 저장 관리 개선, 회차 메모, 번호 필터링 같은 기능을 검토할 수 있습니다.
          </p>
          <ul style={{ paddingLeft: '20px', fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.9', marginTop: '8px' }}>
            <li>저장 번호 관리 방식 개선</li>
            <li>최근 생성 기록 표시 확장</li>
            <li>회차별 메모 기능 검토</li>
            <li>모바일 입력 UX 추가 개선</li>
          </ul>

          <h2 className={styles.h2}>문의</h2>
          <p>
            서비스 이용 중 불편한 점이나 오류를 발견하신 경우 아래 이메일로 연락 주시면 빠르게 반영하겠습니다.
            <br />
            이메일: <span style={{ color: 'var(--text)' }}>example@email.com</span>
          </p>
        </section>

        <footer className={styles.footer}>
          <p>로또 번호 생성기 — 필요한 번호를 빠르게 만들고 바로 확인하세요.</p>
        </footer>
      </div>
    </main>
  )
}
