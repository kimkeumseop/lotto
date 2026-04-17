import Link from 'next/link'
import styles from '../../info.module.css'
import { siteUrl } from '../../lib/structuredData'

const pageUrl = `${siteUrl}/guide`

export const metadata = {
  title: '로또 645 완전 가이드 - 구매 방법, 당첨 등수, 수령 안내',
  description:
    '로또 645 구매 방법, 게임 방식(자동·수동·반자동), 당첨 등수와 상금 기준, 당첨금 수령 방법을 한 곳에서 알아보세요.',
  alternates: { canonical: pageUrl },
}

const gameModes = [
  {
    title: '자동 번호',
    text: '판매기 또는 시스템이 1~45 범위에서 6개 번호를 무작위로 선택합니다. 번호를 직접 고르지 않아도 되기 때문에 가장 간편하게 이용할 수 있는 방식입니다.',
  },
  {
    title: '수동 번호',
    text: '본인이 직접 1~45 중 6개 번호를 선택합니다. 자주 나오는 번호나 개인이 선호하는 번호를 직접 지정하고 싶을 때 사용합니다.',
  },
  {
    title: '반자동 번호',
    text: '일부 번호는 직접 선택하고 나머지는 시스템이 자동으로 채워 줍니다. 특정 번호는 꼭 포함하고 싶지만 나머지는 무작위로 맡기고 싶을 때 적합합니다.',
  },
]

const rankDetails = [
  {
    rank: '1등',
    condition: '당첨 번호 6개 모두 일치',
    prize: '당첨금 총액의 40% 분배 (변동)',
    note: '매 회차 당첨자 수에 따라 1인당 금액이 달라집니다. 적게는 수억에서 많게는 수십억 원 이상이 된 사례가 있습니다.',
  },
  {
    rank: '2등',
    condition: '당첨 번호 5개 + 보너스 번호 일치',
    prize: '당첨금 총액의 10% 분배 (변동)',
    note: '1등과 마찬가지로 당첨자 수에 따라 달라지며, 통상 수천만 원에서 수억 원 수준입니다.',
  },
  {
    rank: '3등',
    condition: '당첨 번호 5개 일치',
    prize: '당첨금 총액의 15% 분배 (변동)',
    note: '보너스 번호는 포함하지 않고 6개 중 5개만 일치한 경우입니다. 평균적으로 150만 원 내외 수준입니다.',
  },
  {
    rank: '4등',
    condition: '당첨 번호 4개 일치',
    prize: '5만 원 고정',
    note: '당첨자 수와 관계없이 1게임당 5만 원이 지급됩니다.',
  },
  {
    rank: '5등',
    condition: '당첨 번호 3개 일치',
    prize: '5천 원 고정',
    note: '가장 낮은 당첨 등수로, 3개가 일치하면 1게임당 5천 원이 지급됩니다.',
  },
]

const claimMethods = [
  {
    title: '5등 (5천 원)',
    text: '복권 판매점에서 즉시 수령 가능합니다. 별도 서류 없이 당첨 복권 제시만으로 바로 받을 수 있습니다.',
  },
  {
    title: '4등 (5만 원)',
    text: '복권 판매점 또는 농협은행 지점에서 수령합니다. 신분증을 지참하면 수령이 빠릅니다.',
  },
  {
    title: '3등 이상 (변동 금액)',
    text: '농협은행 본·지점에서 신분증과 당첨 복권을 제출하고 청구서를 작성해야 합니다. 고액 당첨금은 지급 절차가 별도로 안내됩니다.',
  },
]

const faqItems = [
  {
    q: '로또 복권은 어디에서 살 수 있나요?',
    a: '전국 복권 판매점에서 구매할 수 있으며, 동행복권 공식 앱과 웹사이트를 통한 온라인 구매도 가능합니다. 온라인 구매는 본인 명의 계정이 필요하며 일정 한도 내에서 이용 가능합니다.',
  },
  {
    q: '추첨은 언제 진행되나요?',
    a: '매주 토요일 오후 9시에 MBC와 동행복권 공식 채널을 통해 생방송으로 추첨이 진행됩니다. 추첨 결과는 동행복권 공식 홈페이지와 앱에서도 즉시 확인할 수 있습니다.',
  },
  {
    q: '당첨금은 언제까지 수령해야 하나요?',
    a: '당첨 복권은 추첨일 다음 날부터 1년 이내에 청구해야 합니다. 기간이 지나면 당첨금을 받을 수 없으므로 구매 후 잘 보관하는 것이 중요합니다.',
  },
  {
    q: '로또에 세금이 붙나요?',
    a: '200만 원 이하 당첨금은 비과세입니다. 200만 원을 초과하는 당첨금에는 기타소득세 22%(지방소득세 포함)가 원천징수됩니다.',
  },
  {
    q: '1게임 가격은 얼마인가요?',
    a: '1게임에 1,000원입니다. 1장에 5게임이 포함되며, 한 장 구매 시 5,000원입니다. 원하는 게임 수만큼 선택해서 구매할 수 있습니다.',
  },
  {
    q: '온라인으로 구매한 복권도 실물 복권과 동일한가요?',
    a: '온라인 구매도 동일한 추첨에 참여합니다. 당첨 여부는 동행복권 계정에 자동으로 기록되며, 당첨금은 등록된 계좌로 입금됩니다.',
  },
]

export default function GuidePage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← 홈으로 돌아가기
        </Link>

        <header className={styles.hero}>
          <div className={styles.eyebrow}>Guide</div>
          <h1 className={styles.title}>로또 645 완전 가이드</h1>
          <p className={styles.desc}>
            로또 645의 기본 개념부터 구매 방법, 게임 방식, 당첨 등수와 상금 기준, 당첨금 수령 절차까지
            필요한 정보를 한 곳에 정리했습니다. 처음 이용하는 분도 이 페이지 하나로 전체 흐름을 파악할
            수 있습니다.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>매주 토요일</span>
              <span className={styles.statLabel}>추첨 진행 일정</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>1~5등</span>
              <span className={styles.statLabel}>당첨 등수 구분</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>1,000원</span>
              <span className={styles.statLabel}>1게임 가격</span>
            </div>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>로또 645란?</h2>
          <p className={styles.sectionText}>
            로또 645는 대한민국 동행복권이 운영하는 숫자 복권으로, 1부터 45까지의 숫자 중 6개를
            선택해 매주 토요일 추첨하는 당첨 번호와 비교하는 방식으로 진행됩니다. 선택한 번호와
            당첨 번호가 일치하는 개수에 따라 1등부터 5등까지 상금이 지급됩니다.
          </p>
          <p className={styles.sectionText} style={{ marginTop: '0.75rem' }}>
            2002년 12월 첫 회차 추첨을 시작한 이후 꾸준히 운영되고 있으며, 매주 전국의 판매점과
            온라인 채널을 통해 구매할 수 있습니다. 1등 당첨금은 매 회차 전체 판매 금액과 당첨자 수에
            따라 달라지기 때문에 회차마다 다른 금액이 지급됩니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>구매 방법</h2>
          <p className={styles.sectionText}>
            로또 645는 오프라인 판매점과 공식 온라인 채널 두 가지 방법으로 구매할 수 있습니다.
          </p>
          <ul className={styles.list}>
            <li>
              <strong style={{ color: '#ffffff' }}>오프라인 판매점:</strong> 전국 편의점, 슈퍼마켓,
              복권 전문점 등 허가된 판매점에서 구매할 수 있습니다. 판매점에 있는 자동 발권기에서
              번호를 선택하거나, 직원에게 요청해 용지를 작성하는 방식으로 구매합니다.
            </li>
            <li>
              <strong style={{ color: '#ffffff' }}>온라인 구매:</strong> 동행복권 공식 홈페이지와
              앱에서 회원 가입 후 이용할 수 있습니다. 온라인 구매는 주 5,000원 한도 이내에서
              가능하며, 당첨금은 등록 계좌로 자동 입금됩니다.
            </li>
            <li>
              <strong style={{ color: '#ffffff' }}>구매 가능 시간:</strong> 오프라인은 판매점 운영
              시간에 따라 다르며, 온라인은 추첨 직전 시간대에는 구매가 마감됩니다. 토요일 오후 8시
              이후에는 당주 회차 구매가 마감되므로 미리 구매하는 것이 좋습니다.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>게임 방식</h2>
          <p className={styles.sectionText}>
            로또 645는 자동, 수동, 반자동 세 가지 방식으로 번호를 선택할 수 있습니다.
          </p>
          <div className={styles.grid}>
            {gameModes.map((item) => (
              <article key={item.title} className={styles.card}>
                <p className={styles.cardTitle}>{item.title}</p>
                <p className={styles.cardText}>{item.text}</p>
              </article>
            ))}
          </div>
          <div className={styles.noteBox}>
            자동과 수동 중 어느 방식을 선택해도 당첨 확률은 동일합니다. 로또 645의 총 가능 조합은
            8,145,060가지이며, 어떤 6개 조합도 이론상 동일한 당첨 가능성을 가집니다.
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>추첨 일정과 방식</h2>
          <p className={styles.sectionText}>
            추첨은 매주 토요일 오후 9시에 진행됩니다. 추첨 번호는 1~45 중 6개가 순차적으로 공개되고,
            이후 보너스 번호 1개가 추가로 공개됩니다. 당첨 번호와 보너스 번호는 추첨 후 동행복권
            공식 홈페이지, 앱, 방송을 통해 바로 확인할 수 있습니다.
          </p>
          <p className={styles.sectionText} style={{ marginTop: '0.75rem' }}>
            보너스 번호는 2등 당첨 여부 판별에만 사용됩니다. 6개 번호 중 5개가 일치하고 보너스
            번호까지 맞으면 2등, 보너스 번호 없이 5개만 일치하면 3등이 됩니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>당첨 등수별 조건과 상금</h2>
          <p className={styles.sectionText}>
            당첨 등수는 당첨 번호와 일치하는 숫자 개수에 따라 결정됩니다. 4등과 5등은 고정 금액이며,
            1~3등은 해당 회차 판매 총액과 당첨자 수에 따라 지급액이 달라집니다.
          </p>
          <div className={styles.grid} style={{ marginTop: '1rem' }}>
            {rankDetails.map((item) => (
              <article key={item.rank} className={styles.card}>
                <p className={styles.cardTitle}>{item.rank} — {item.condition}</p>
                <p className={styles.cardText} style={{ marginBottom: '0.5rem', color: '#e2d3a0' }}>
                  {item.prize}
                </p>
                <p className={styles.cardText}>{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>당첨금 수령 방법</h2>
          <p className={styles.sectionText}>
            당첨 등수에 따라 수령 방법이 다릅니다. 추첨일 다음 날부터 1년 이내에 청구해야 합니다.
          </p>
          <div className={styles.grid} style={{ marginTop: '1rem' }}>
            {claimMethods.map((item) => (
              <article key={item.title} className={styles.card}>
                <p className={styles.cardTitle}>{item.title}</p>
                <p className={styles.cardText}>{item.text}</p>
              </article>
            ))}
          </div>
          <div className={styles.noteBox}>
            당첨금이 200만 원을 초과하면 기타소득세(지방소득세 포함 22%)가 원천징수됩니다. 예를 들어
            3등 당첨금이 150만 원이라면 비과세이지만, 200만 원을 넘는 경우 세금 차감 후 지급됩니다.
            세금 처리 기준은 변경될 수 있으므로 수령 전 공식 안내를 확인하는 것이 좋습니다.
          </div>
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
            번호를 직접 생성하거나 더 많은 팁을 확인하고 싶다면 아래 페이지를 이용해 보세요.
          </p>
          <div className={styles.linkRow}>
            <Link href="/lotto" className={styles.pillLink}>
              번호 생성기 이용하기
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
          본 페이지의 정보는 참고용이며, 실제 규정과 다를 수 있습니다. 정확한 내용은 동행복권 공식
          채널을 통해 확인해 주세요.
        </footer>
      </div>
    </main>
  )
}
