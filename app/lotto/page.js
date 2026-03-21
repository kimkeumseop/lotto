import Link from 'next/link'
import LottoGenerator from './LottoGenerator'
import styles from './lotto.module.css'
import { buildBreadcrumbSchema, buildFaqSchema, siteUrl } from '../lib/structuredData'

const pageUrl = `${siteUrl}/lotto`

export const metadata = {
  title: '로또 번호 생성기 - 무료 로또 645 자동번호 생성',
  description:
    '로또 645 자동 번호 생성기. 랜덤 번호 생성, 당첨번호 확인까지 무료로 제공합니다.',
  keywords: ['로또 번호 생성기', '로또 645 자동번호', '로또 자동번호', '로또 당첨 확인', '로또 번호 추천'],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: '로또 번호 생성기 - 무료 로또 645 자동번호 생성',
    description: '로또 645 자동 번호 생성기. 랜덤 번호 생성과 당첨 확인을 무료로 제공합니다.',
    url: pageUrl,
    type: 'website',
    locale: 'ko_KR',
  },
}

const colorGuide = [
  {
    range: '1~10',
    color: '노란색',
    note: '초반 번호 구간은 노란 볼로 강조해 가볍고 밝은 인상을 줍니다.',
    sample: 7,
  },
  {
    range: '11~20',
    color: '파란색',
    note: '중초반 번호 구간은 파란 볼로 시원하고 선명하게 구분합니다.',
    sample: 14,
  },
  {
    range: '21~30',
    color: '빨간색',
    note: '중앙 구간 번호는 빨간 볼로 가장 강하게 눈에 띄게 보여줍니다.',
    sample: 27,
  },
  {
    range: '31~40',
    color: '회색',
    note: '후반 번호 구간은 회색 볼로 균형감 있게 정리해 보여줍니다.',
    sample: 36,
  },
  {
    range: '41~45',
    color: '초록색',
    note: '끝 번호 구간은 초록 볼로 마무리해 번호대 흐름이 한눈에 들어옵니다.',
    sample: 43,
  },
]

const rankRows = [
  ['1등', '당첨 번호 6개 일치', '모든 번호가 완벽하게 일치한 경우'],
  ['2등', '당첨 번호 5개 + 보너스 일치', '5개 일치 후 보너스 번호까지 맞춘 경우'],
  ['3등', '당첨 번호 5개 일치', '보너스 번호 없이 5개만 일치한 경우'],
  ['4등', '당첨 번호 4개 일치', '주요 당첨 확인 구간 중 하나'],
  ['5등', '당첨 번호 3개 일치', '소액 당첨 기준으로 많이 확인하는 구간'],
]

const faqItems = [
  {
    q: '로또 번호 생성 방법은 어떻게 되나요?',
    a: '이 페이지는 1부터 45까지 숫자 중 중복 없이 6개를 무작위로 뽑아 자동 번호를 생성합니다. 한 번에 1세트부터 5세트까지 만들 수 있고, 생성된 번호는 오름차순으로 정렬되어 보기 쉽게 표시됩니다.',
  },
  {
    q: '로또 당첨 확률은 어느 정도인가요?',
    a: '로또 6/45 기준 1등 확률은 가능한 전체 조합 중 하나를 맞히는 구조라 매우 낮습니다. 번호 생성기는 번호 선택을 돕는 도구이며 당첨을 보장하지는 않습니다.',
  },
  {
    q: '자동번호와 수동번호 중 무엇이 더 유리한가요?',
    a: '당첨 확률 자체는 자동과 수동이 동일합니다. 자동번호는 빠르게 조합을 만들기 좋고, 수동번호는 본인이 선호하는 숫자를 직접 고를 수 있다는 차이가 있습니다.',
  },
  {
    q: '로또는 어디서 구매하나요?',
    a: '국내 로또 645는 공식 판매점과 공식 온라인 채널을 통해 구매할 수 있습니다. 구매 가능 시간과 판매 방식은 운영 정책에 따라 달라질 수 있으니 실제 구매 전 공식 안내를 확인하는 것이 좋습니다.',
  },
  {
    q: '당첨금은 어떻게 수령하나요?',
    a: '당첨금 수령 방법은 등수와 금액에 따라 다릅니다. 소액 당첨과 고액 당첨의 수령 절차가 다를 수 있으므로 실제 당첨 시 공식 판매처의 최신 안내문을 우선 확인해야 합니다.',
  },
]

const faqSchema = buildFaqSchema(faqItems)
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: '홈', path: '/' },
  { name: '로또 번호 생성기', path: '/lotto' },
])

export default function LottoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className={styles.page}>
        <div className={styles.pageGlow} />
        <div className={styles.pageGlowSecondary} />

        <div className={styles.container}>
          <div className={styles.backRow}>
            <Link href="/" className={styles.backLink}>
              ← 홈으로
            </Link>
          </div>

          <header className={styles.hero}>
            <div className={styles.heroBadge}>Lotto 645</div>
            <h1 className={styles.heroTitle}>로또 번호 생성기</h1>
            <p className={styles.heroDesc}>
              로또 볼처럼 통통 튀는 컬러로 번호를 만들고, 저장한 조합과 최근 기록까지 한 번에 비교해 보세요.
              당첨 번호 입력 후 일치 번호는 반짝이는 애니메이션으로 바로 확인할 수 있습니다.
            </p>

            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>1~45</span>
                <span className={styles.heroStatLabel}>번호 범위</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>최대 5세트</span>
                <span className={styles.heroStatLabel}>동시 생성</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>즉시 비교</span>
                <span className={styles.heroStatLabel}>당첨 확인</span>
              </div>
            </div>
          </header>

          <section className={styles.generatorSection}>
            <LottoGenerator />
            {/* <AdBanner slot="여기에-광고-슬롯-번호" /> */}
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>번호 색상 가이드</h2>
              <p className={styles.sectionText}>
                로또 공 구간 느낌을 살려 번호마다 색을 다르게 표시했습니다. 생성 결과를 볼 때 번호 분포를 더 빠르게 읽을 수 있습니다.
              </p>
            </div>

            <div className={styles.guideGrid}>
              {colorGuide.map((item) => (
                <article key={item.range} className={styles.guideCard}>
                  <div className={styles.guideTop}>
                    <span className={`${styles.ball} ${styles.ballLarge} ${styles[item.range === '1~10' ? 'ballYellow' : item.range === '11~20' ? 'ballBlue' : item.range === '21~30' ? 'ballRed' : item.range === '31~40' ? 'ballGray' : 'ballGreen']}`}>
                      {item.sample}
                    </span>
                    <div>
                      <p className={styles.guideRange}>{item.range}</p>
                      <p className={styles.guideColor}>{item.color}</p>
                    </div>
                  </div>
                  <p className={styles.guideNote}>{item.note}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>당첨 확인 기준</h2>
              <p className={styles.sectionText}>
                생성한 번호는 당첨 번호 6개와 보너스 번호를 기준으로 자동 비교됩니다. 몇 개가 맞았는지와 등수를 함께 확인할 수 있습니다.
              </p>
            </div>

            <div className={styles.rankTable}>
              <div className={`${styles.rankRow} ${styles.rankHead}`}>
                <span>등수</span>
                <span>조건</span>
                <span>설명</span>
              </div>
              {rankRows.map(([rank, condition, note]) => (
                <div key={rank} className={styles.rankRow}>
                  <span>{rank}</span>
                  <span>{condition}</span>
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>자주 묻는 질문</h2>
              <p className={styles.sectionText}>
                로또 번호 생성과 당첨 확인을 처음 사용하는 분들이 많이 묻는 질문을 한곳에 정리했습니다.
              </p>
            </div>

            <div className={styles.faqList}>
              {faqItems.map((faq) => (
                <article key={faq.q} className={styles.faqCard}>
                  <p className={styles.faqQuestion}>{faq.q}</p>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
