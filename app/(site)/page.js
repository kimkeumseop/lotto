import Link from 'next/link'
import styles from '../info.module.css'
import { buildSiteSchema, siteUrl } from '../lib/structuredData'

export const metadata = {
  title: '로또 번호 생성기 - 무료 로또 645 자동번호 생성',
  description:
    '로또 645 자동 번호 생성기입니다. 무료로 번호를 생성하고, 저장 기록과 당첨 번호 비교까지 한 번에 이용할 수 있습니다.',
  alternates: { canonical: siteUrl },
}

const features = [
  {
    title: '자동 번호 생성',
    text: '1부터 45까지 숫자 중 중복 없는 6개 번호를 무작위로 조합합니다. 한 번에 최대 5세트를 만들 수 있어 여러 조합을 빠르게 비교할 수 있습니다.',
  },
  {
    title: '저장 기록 관리',
    text: '이번 회차 저장 기능과 최근 생성 기록 보관 기능을 통해 이전에 만든 번호 조합을 언제든지 다시 확인하고 활용할 수 있습니다.',
  },
  {
    title: '당첨 번호 비교',
    text: '당첨 번호 6개와 보너스 번호를 직접 입력하면 저장된 각 세트별로 일치 개수와 등수를 즉시 확인할 수 있습니다.',
  },
  {
    title: '번호 색상 가이드',
    text: '로또 번호 구간별로 색상을 구분해 표시합니다. 노란색(1~10), 파란색(11~20), 빨간색(21~30), 회색(31~40), 초록색(41~45)으로 결과를 직관적으로 파악할 수 있습니다.',
  },
]

const steps = [
  {
    step: '01',
    title: '세트 수 선택',
    text: '1세트부터 5세트까지 원하는 만큼 번호 조합 수를 선택합니다. 여러 세트를 만들수록 다양한 조합을 한 번에 비교할 수 있습니다.',
  },
  {
    step: '02',
    title: '번호 생성',
    text: '번호 생성 버튼을 누르면 각 세트마다 1~45 범위에서 중복 없는 6개 번호가 자동으로 만들어집니다. 마음에 드는 조합이 나올 때까지 반복해서 생성할 수 있습니다.',
  },
  {
    step: '03',
    title: '저장 및 당첨 확인',
    text: '원하는 조합을 저장하고, 추첨 후 당첨 번호를 입력하면 각 세트별 일치 개수와 등수를 바로 확인할 수 있습니다.',
  },
]

const rankRows = [
  ['1등', '6개 일치', '1~2명 수준, 당첨금 변동'],
  ['2등', '5개 + 보너스 일치', '수천만~수억 원 수준'],
  ['3등', '5개 일치', '150만 원 내외'],
  ['4등', '4개 일치', '5만 원 고정'],
  ['5등', '3개 일치', '5천 원 고정'],
]

const faqItems = [
  {
    q: '이 서비스는 무료인가요?',
    a: '네, 번호 생성과 당첨 비교를 포함한 모든 기능을 무료로 이용할 수 있습니다. 사이트는 광고 수익으로 운영될 수 있습니다.',
  },
  {
    q: '생성한 번호로 당첨이 보장되나요?',
    a: '아닙니다. 로또는 완전한 확률 게임이며, 이 서비스는 번호 선택을 돕는 참고용 도구입니다. 당첨을 보장하거나 특정 번호를 추천하지 않습니다.',
  },
  {
    q: '번호는 어떤 방식으로 생성되나요?',
    a: '브라우저의 Math.random() 함수를 활용해 1~45 범위에서 중복 없이 6개를 무작위로 뽑아 오름차순으로 정렬합니다.',
  },
  {
    q: '생성한 번호는 어디에 저장되나요?',
    a: '모든 저장 기록은 사용자의 브라우저 로컬 스토리지에만 저장됩니다. 서버로 전송되거나 외부에 공유되지 않습니다.',
  },
]

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Lotto 645</div>
          <h1 className={styles.title}>로또 번호 생성기</h1>
          <p className={styles.desc}>
            로또 645 자동 번호를 무료로 생성하고, 저장 기록과 당첨 번호 비교까지 한 번에 이용할 수
            있는 정보형 서비스입니다. 복잡한 절차 없이 메인 화면에서 바로 번호를 만들어 보세요.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>무료 이용</span>
              <span className={styles.statLabel}>모든 기능 무료 제공</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>최대 5세트</span>
              <span className={styles.statLabel}>동시 생성 및 비교</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>즉시 확인</span>
              <span className={styles.statLabel}>당첨 등수 자동 계산</span>
            </div>
          </div>

          <div className={styles.linkRow} style={{ marginTop: '1.25rem' }}>
            <Link href="/lotto" className={styles.pillLink}>
              번호 생성하기 →
            </Link>
            <Link href="/guide" className={styles.pillLink}>
              로또 가이드
            </Link>
            <Link href="/tips" className={styles.pillLink}>
              활용 팁
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>로또 645란?</h2>
          <p className={styles.sectionText}>
            로또 645는 1부터 45까지의 숫자 중 6개를 선택해 당첨 번호와 일치하는 개수에 따라 상금을
            받는 복권입니다. 국내에서는 매주 토요일 저녁에 추첨이 진행되며, 동행복권이 공식
            운영합니다. 1등부터 5등까지 등수가 나뉘며, 1등은 6개 번호가 모두 일치할 때 당첨됩니다.
          </p>
          <p className={styles.sectionText} style={{ marginTop: '0.75rem' }}>
            로또 복권은 판매점에서 직접 구매하거나 공식 온라인 채널을 통해 구매할 수 있습니다. 1장에
            1,000원이며 한 장에 1게임, 5게임 선택 방식으로 이용합니다. 자동 번호를 이용하면
            판매기가 무작위로 번호를 선택해 주며, 직접 번호를 고르는 수동 방식도 가능합니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3단계로 이용하는 방법</h2>
          <p className={styles.sectionText}>
            번호 생성기는 별도의 회원가입이나 설치 없이 바로 이용할 수 있습니다. 아래 순서로
            사용하면 됩니다.
          </p>
          <div className={styles.grid} style={{ marginTop: '1rem' }}>
            {steps.map((item) => (
              <article key={item.step} className={styles.card}>
                <p className={styles.cardTitle}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      opacity: 0.5,
                      letterSpacing: '0.08em',
                      marginRight: '0.4rem',
                    }}
                  >
                    STEP
                  </span>
                  {item.step} — {item.title}
                </p>
                <p className={styles.cardText}>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>주요 기능</h2>
          <p className={styles.sectionText}>
            단순 번호 생성 이상의 기능을 제공해 번호를 만들고 관리하는 흐름 전체를 지원합니다.
          </p>
          <div className={styles.grid}>
            {features.map((item) => (
              <article key={item.title} className={styles.card}>
                <p className={styles.cardTitle}>{item.title}</p>
                <p className={styles.cardText}>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>당첨 등수 기준</h2>
          <p className={styles.sectionText}>
            로또 645는 맞춘 번호 개수에 따라 1등부터 5등까지 당첨 등수가 나뉩니다. 4등과 5등은
            고정 금액이며, 1~3등은 당첨자 수와 전체 판매 금액에 따라 변동됩니다.
          </p>
          <div
            style={{
              overflow: 'hidden',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.03)',
              marginTop: '1rem',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '0.6fr 1fr 1.4fr',
                gap: '1rem',
                padding: '0.8rem 1rem',
                background: 'rgba(255,255,255,0.06)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.85rem',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <span>등수</span>
              <span>조건</span>
              <span>당첨금 기준</span>
            </div>
            {rankRows.map(([rank, condition, prize]) => (
              <div
                key={rank}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '0.6fr 1fr 1.4fr',
                  gap: '1rem',
                  padding: '0.85rem 1rem',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  color: '#b7c6e8',
                  fontSize: '0.88rem',
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: '#fff', fontWeight: 700 }}>{rank}</span>
                <span>{condition}</span>
                <span>{prize}</span>
              </div>
            ))}
          </div>
          <p className={styles.sectionText} style={{ marginTop: '0.85rem', fontSize: '0.85rem' }}>
            * 당첨금은 매 회차 판매 총액과 당첨자 수에 따라 달라집니다. 정확한 당첨금은 추첨 후
            동행복권 공식 안내를 확인해 주세요.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>자주 묻는 질문</h2>
          <div className={styles.grid}>
            {faqItems.map((faq) => (
              <article key={faq.q} className={styles.card}>
                <p className={styles.cardTitle}>{faq.q}</p>
                <p className={styles.cardText}>{faq.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>더 알아보기</h2>
          <p className={styles.sectionText}>
            로또 645의 규칙과 구매 방법, 활용 팁을 더 자세히 알고 싶다면 아래 페이지를 확인해
            보세요.
          </p>
          <div className={styles.linkRow}>
            <Link href="/lotto" className={styles.pillLink}>
              번호 생성기 이용하기
            </Link>
            <Link href="/guide" className={styles.pillLink}>
              로또 645 완전 가이드
            </Link>
            <Link href="/tips" className={styles.pillLink}>
              번호 선택 팁
            </Link>
            <Link href="/about" className={styles.pillLink}>
              서비스 소개
            </Link>
          </div>
        </section>

        <footer className={styles.footer}>
          로또 번호 생성기는 참고용 정보 서비스입니다. 실제 복권 구매와 당첨 확인은 동행복권 공식
          채널을 이용해 주세요.
        </footer>
      </div>
    </main>
  )
}
