import Link from 'next/link'
import styles from '../../info.module.css'
import { siteUrl } from '../../lib/structuredData'

const pageUrl = `${siteUrl}/tips`

export const metadata = {
  title: '로또 번호 선택 팁과 통계 분석 - 로또 번호 생성기 활용법',
  description:
    '로또 번호 생성기를 효과적으로 활용하는 방법, 번호 선택 시 참고할 통계 패턴, 홀짝 균형, 번호 구간 분산 전략을 안내합니다.',
  alternates: { canonical: pageUrl },
}

const usageTips = [
  {
    title: '여러 세트 동시 생성',
    text: '한 번에 5세트까지 만들어 조합을 비교해 보세요. 번호 구성이 다양할수록 특정 구간에 쏠리지 않은 균형 잡힌 조합을 찾기 쉽습니다.',
  },
  {
    title: '마음에 드는 조합 저장',
    text: '생성한 번호 중 보관하고 싶은 조합은 저장 기능을 활용하세요. 저장한 번호는 당첨 번호 입력 시 자동으로 비교됩니다.',
  },
  {
    title: '반복 생성으로 패턴 확인',
    text: '여러 번 생성해 보면 번호가 특정 구간에 몰리거나 고르게 분포하는 차이를 확인할 수 있습니다. 직접 눈으로 보면서 원하는 분포 형태를 가진 조합을 선택하는 것도 하나의 방법입니다.',
  },
  {
    title: '당첨 번호 직접 비교',
    text: '추첨 후 당첨 번호 6개와 보너스 번호를 입력하면 저장된 모든 조합과 즉시 비교됩니다. 일치 개수와 등수가 자동으로 표시되어 일일이 대조할 필요가 없습니다.',
  },
]

const patternTips = [
  {
    title: '홀수와 짝수 균형',
    text: '역대 로또 당첨 번호를 분석하면 홀수 3개 + 짝수 3개 조합이 가장 자주 나타납니다. 전부 홀수나 전부 짝수로만 구성된 조합은 통계적으로 출현 빈도가 낮습니다. 번호를 선택할 때 홀짝 비율을 참고해 보세요.',
  },
  {
    title: '번호 구간 분산',
    text: '1~45를 1~10, 11~20, 21~30, 31~40, 41~45 구간으로 나눴을 때, 하나의 구간에 번호가 몰리지 않고 여러 구간에 분산된 조합이 당첨 번호에서 더 자주 보입니다. 번호를 고를 때 최소 3~4개 구간에서 고르게 선택하면 이를 반영할 수 있습니다.',
  },
  {
    title: '연속 번호 포함 여부',
    text: '역대 당첨 번호 중 연속된 숫자(예: 14, 15, 16)가 최소 2개 포함된 경우가 통계적으로 50% 이상입니다. 모든 번호가 서로 완전히 떨어져 있는 조합보다 1~2쌍의 연속 번호를 포함하는 조합이 더 자주 등장했습니다.',
  },
  {
    title: '번호 합계 범위',
    text: '6개 당첨 번호의 합은 평균적으로 100~176 사이에 집중되는 경향이 있습니다. 합이 너무 낮거나(예: 20 이하) 너무 높은(예: 220 이상) 조합은 이론상 가능하지만 실제 당첨에서 나타나는 빈도는 낮습니다.',
  },
]

const misconceptions = [
  {
    title: '자동번호가 수동번호보다 당첨 확률이 높다?',
    answer:
      '사실이 아닙니다. 로또는 45개 숫자 중 6개를 뽑는 조합 게임으로, 가능한 조합 수는 8,145,060가지입니다. 자동이든 수동이든 어떤 특정 6개 조합의 당첨 확률은 모두 동일합니다. 자동번호가 더 많이 팔리기 때문에 당첨자 중 자동번호 비율이 높게 보일 뿐입니다.',
  },
  {
    title: '오랫동안 안 나온 번호가 곧 나올 것이다?',
    answer:
      '이것은 "도박사의 오류"로 불리는 대표적인 확률 착각입니다. 각 추첨은 독립적으로 진행되므로 이전 결과가 다음 결과에 영향을 주지 않습니다. 특정 번호가 오랫동안 나오지 않았다고 해서 다음에 나올 확률이 높아지는 것은 아닙니다.',
  },
  {
    title: '생일이나 기념일 번호는 불리하다?',
    answer:
      '당첨 확률 자체는 동일합니다. 다만 생일이나 기념일은 주로 1~31 사이 숫자를 사용하게 됩니다. 이 범위에 번호가 쏠리면 32~45 구간이 비게 되고, 해당 구간 번호가 당첨될 경우 상금을 나눠 가야 하는 동시 당첨자 수가 줄어 1인당 당첨금이 높아질 수 있다는 점이 차이입니다.',
  },
  {
    title: '이 서비스의 번호가 더 잘 당첨된다?',
    answer:
      '이 서비스는 완전한 무작위 알고리즘으로 번호를 생성합니다. 특정 번호를 추천하거나 당첨 확률을 높이는 기능은 제공하지 않습니다. 번호 생성기는 어디까지나 번호 선택을 편리하게 돕는 도구입니다.',
  },
]

const responsibleTips = [
  '복권은 여가 활동의 일환으로 즐길 수 있는 금액 내에서만 구매하세요.',
  '당첨을 기대한 과도한 구매는 실망과 재정 문제로 이어질 수 있습니다.',
  '복권 구매를 저축이나 투자의 대안으로 생각하지 마세요.',
  '미성년자는 복권 구매가 법적으로 금지되어 있습니다.',
  '도박 문제가 걱정된다면 한국도박문제관리센터(1336)에 문의할 수 있습니다.',
]

const faqItems = [
  {
    q: '번호 생성기로 만든 번호가 직접 고른 번호보다 나은가요?',
    a: '당첨 확률은 동일합니다. 번호 생성기의 장점은 편의성과 속도입니다. 여러 세트를 빠르게 만들어 비교하거나, 번호 선택에 시간을 쓰고 싶지 않을 때 유용합니다.',
  },
  {
    q: '한 번에 몇 세트를 구매하는 게 좋나요?',
    a: '적정 구매량은 개인의 여가 예산에 따라 다릅니다. 확률적으로 세트 수가 많아질수록 당첨 가능성이 높아지지만, 비용도 그만큼 늘어납니다. 적정 예산 범위 내에서 즐기는 것이 중요합니다.',
  },
  {
    q: '고빈도 번호만 골라서 조합하면 유리한가요?',
    a: '이론적으로는 유리하지 않습니다. 각 번호의 출현 빈도는 장기적으로 수렴하지만, 단기적으로는 의미 있는 편차가 있을 수 있습니다. 참고 자료로는 활용할 수 있지만, 특정 번호의 과거 빈도가 미래 당첨을 예측하지는 않습니다.',
  },
  {
    q: '같은 번호를 매주 구매하면 더 잘 당첨되나요?',
    a: '당첨 확률은 매 회차 동일합니다. 같은 번호를 계속 사용하든 매주 다른 번호를 사용하든 1등 확률에는 차이가 없습니다. 중요한 것은 동일한 1/8,145,060 확률임을 이해하고 즐기는 자세입니다.',
  },
]

export default function TipsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← 홈으로 돌아가기
        </Link>

        <header className={styles.hero}>
          <div className={styles.eyebrow}>Tips</div>
          <h1 className={styles.title}>번호 선택 팁과 통계</h1>
          <p className={styles.desc}>
            로또 번호 생성기를 더 효과적으로 활용하는 방법과 번호를 고를 때 참고할 통계 패턴을
            소개합니다. 당첨을 보장하는 전략은 존재하지 않지만, 역대 당첨 번호 분포를 이해하면
            더 다양한 조합을 탐색하는 데 도움이 됩니다.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>8,145,060</span>
              <span className={styles.statLabel}>가능한 번호 조합 수</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>홀짝 3:3</span>
              <span className={styles.statLabel}>당첨 번호 최다 패턴</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>100~176</span>
              <span className={styles.statLabel}>당첨 번호 합 평균 범위</span>
            </div>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>번호 생성기 활용법</h2>
          <p className={styles.sectionText}>
            이 서비스에서 제공하는 기능을 최대한 활용하는 방법을 안내합니다.
          </p>
          <div className={styles.grid}>
            {usageTips.map((item) => (
              <article key={item.title} className={styles.card}>
                <p className={styles.cardTitle}>{item.title}</p>
                <p className={styles.cardText}>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>번호 선택 시 참고할 통계 패턴</h2>
          <p className={styles.sectionText}>
            역대 로또 당첨 번호를 분석하면 특정 패턴이 반복되는 경향이 있습니다. 이는 확률 보장이
            아닌 통계적 참고 자료로, 번호 선택의 다양성을 넓히는 데 활용할 수 있습니다.
          </p>
          <div className={styles.grid} style={{ marginTop: '1rem' }}>
            {patternTips.map((item) => (
              <article key={item.title} className={styles.card}>
                <p className={styles.cardTitle}>{item.title}</p>
                <p className={styles.cardText}>{item.text}</p>
              </article>
            ))}
          </div>
          <div className={styles.noteBox}>
            통계 패턴은 과거 데이터를 기반으로 한 참고 정보입니다. 로또는 매 회차 완전히
            독립적으로 진행되는 확률 게임이므로 과거 패턴이 미래 결과를 예측하거나 보장하지
            않습니다.
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>로또에 관한 오해와 진실</h2>
          <p className={styles.sectionText}>
            많은 사람들이 잘못 이해하고 있는 로또 관련 속설과 실제 사실을 정리했습니다.
          </p>
          <div className={styles.grid} style={{ marginTop: '1rem' }}>
            {misconceptions.map((item) => (
              <article key={item.title} className={styles.card}>
                <p className={styles.cardTitle}>{item.title}</p>
                <p className={styles.cardText}>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>책임감 있는 복권 이용</h2>
          <p className={styles.sectionText}>
            복권은 재미와 소소한 기대감을 즐기는 여가 활동입니다. 건강하게 이용하기 위한 기본
            원칙을 안내합니다.
          </p>
          <ul className={styles.list}>
            {responsibleTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
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
          <h2 className={styles.sectionTitle}>관련 페이지</h2>
          <p className={styles.sectionText}>
            로또 645의 자세한 규칙이나 번호 생성기를 바로 이용하고 싶다면 아래를 확인해 보세요.
          </p>
          <div className={styles.linkRow}>
            <Link href="/lotto" className={styles.pillLink}>
              번호 생성기 이용하기
            </Link>
            <Link href="/guide" className={styles.pillLink}>
              로또 645 완전 가이드
            </Link>
            <Link href="/about" className={styles.pillLink}>
              서비스 소개
            </Link>
          </div>
        </section>

        <footer className={styles.footer}>
          본 페이지의 통계 정보는 참고용이며 당첨을 보장하지 않습니다. 복권은 즐길 수 있는 범위
          내에서 책임감 있게 이용해 주세요.
        </footer>
      </div>
    </main>
  )
}
