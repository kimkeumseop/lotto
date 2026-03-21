import styles from './page.module.css'
import LottoGenerator from './lotto/LottoGenerator'
import { buildFaqSchema, siteUrl } from './lib/structuredData'

const pageUrl = siteUrl

export const metadata = {
  title: '로또 번호 생성기 - 무료 로또 645 자동번호 생성',
  description:
    '로또 645 자동 번호 생성기. 랜덤 번호 생성, 저장, 최근 기록, 당첨번호 확인까지 무료로 제공합니다.',
  keywords: ['로또 번호 생성기', '로또 645 자동번호', '로또 자동번호', '로또 당첨 확인', '로또 번호 추천'],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: '로또 번호 생성기',
    description: '로또 645 자동 번호 생성과 당첨 번호 확인 기능을 무료로 제공합니다.',
    url: pageUrl,
    type: 'website',
    locale: 'ko_KR',
  },
}

const colorRows = [
  ['1~10', '노란색', '낮은 구간 번호는 노란 공으로 표시합니다.'],
  ['11~20', '파란색', '중초반 번호는 파란 공으로 구분합니다.'],
  ['21~30', '빨간색', '중간 구간 번호는 빨간 공으로 보여줍니다.'],
  ['31~40', '회색', '후반 구간 번호는 회색 공으로 표시합니다.'],
  ['41~45', '초록색', '마지막 구간 번호는 초록 공으로 표시합니다.'],
]

const featureItems = [
  {
    title: '자동 번호 생성',
    text: '1부터 45까지 중복 없는 숫자 6개를 자동으로 뽑고 오름차순으로 정렬해 보여줍니다.',
  },
  {
    title: '여러 세트 동시 생성',
    text: '한 번에 최대 5세트까지 만들어 여러 조합을 빠르게 비교할 수 있습니다.',
  },
  {
    title: '이번 회차 저장',
    text: '마음에 드는 조합은 현재 브라우저에 저장해 다시 확인할 수 있습니다.',
  },
  {
    title: '최근 5회 기록',
    text: '방금 만든 번호뿐 아니라 최근 생성한 조합도 함께 비교할 수 있습니다.',
  },
]

const rankRows = [
  ['1등', '당첨 번호 6개 일치', '보너스 번호와 무관합니다.'],
  ['2등', '당첨 번호 5개 + 보너스 일치', '5개 일치 후 보너스까지 맞춘 경우입니다.'],
  ['3등', '당첨 번호 5개 일치', '보너스 번호는 일치하지 않은 경우입니다.'],
  ['4등', '당첨 번호 4개 일치', '자동 비교 결과로 바로 확인할 수 있습니다.'],
  ['5등', '당첨 번호 3개 일치', '소액 당첨 기준으로 많이 확인하는 구간입니다.'],
]

const faqItems = [
  {
    q: '로또 번호는 어떤 방식으로 생성되나요?',
    a: '이 사이트는 1부터 45까지 숫자 중 중복 없이 6개를 무작위로 선택합니다. 생성된 번호는 오름차순으로 정렬되어 바로 확인하기 쉽게 표시됩니다.',
  },
  {
    q: '자동번호와 수동번호 중 무엇이 더 유리한가요?',
    a: '당첨 확률 자체는 자동과 수동이 같습니다. 자동번호는 빠르게 조합을 만들기 편하고, 수동번호는 본인이 원하는 숫자를 직접 선택할 수 있다는 차이가 있습니다.',
  },
  {
    q: '생성한 번호와 저장 기록은 어디에 보관되나요?',
    a: '생성 번호와 최근 기록은 현재 사용 중인 브라우저의 로컬 저장소에만 보관됩니다. 별도의 회원 계정이나 서버 저장 기능은 사용하지 않습니다.',
  },
  {
    q: '로또 당첨 확률은 어느 정도인가요?',
    a: '로또 6/45 기준 1등은 가능한 전체 조합 중 하나를 맞혀야 하는 구조라 확률이 매우 낮습니다. 번호 생성기는 조합 선택을 돕는 도구이며 당첨을 보장하지는 않습니다.',
  },
  {
    q: '당첨 번호 입력 시 등수는 어떻게 계산되나요?',
    a: '1등은 6개 일치, 2등은 5개와 보너스 번호 일치, 3등은 5개 일치, 4등은 4개 일치, 5등은 3개 일치 기준으로 표시합니다.',
  },
  {
    q: '모바일에서도 사용하기 편한가요?',
    a: '네. 입력 영역과 결과 카드가 모바일 화면에서도 무리 없이 보이도록 좁은 폭에 맞춘 레이아웃으로 구성했습니다. 휴대폰에서도 번호 생성, 저장, 당첨 확인을 바로 사용할 수 있습니다.',
  },
]

const faqSchema = buildFaqSchema(faqItems)

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.h1}>로또 번호 생성기</h1>
            <p className={styles.desc}>
              로또 645 자동 번호를 생성하고, 저장한 번호와 최근 기록을 관리하며, 당첨 번호와 비교해 몇 등인지 확인할 수 있는 로또 전용 사이트입니다.
            </p>
          </header>

          <section className={styles.calcBox}>
            <LottoGenerator />
            {/* <AdBanner slot="여기에-광고-슬롯-번호" /> */}
          </section>

          <section className={styles.content}>
            <h2 className={styles.h2}>사이트 핵심 기능</h2>
            <p>
              이 사이트는 로또 번호 생성부터 저장, 최근 기록 확인, 당첨 번호 비교까지 한 화면에서 끝낼 수 있도록 구성했습니다.
              여러 페이지를 오갈 필요 없이 필요한 기능을 바로 사용할 수 있게 단순하고 가볍게 설계했습니다.
            </p>
            <div className={styles.sectionStack}>
              {featureItems.map((item) => (
                <div key={item.title} className={styles.infoCard}>
                  <p className={styles.infoCardTitle}>{item.title}</p>
                  <p className={styles.infoCardText}>{item.text}</p>
                </div>
              ))}
            </div>

            <h2 className={styles.h2}>번호 색상 구분표</h2>
            <div className={styles.table}>
              <div className={styles.tableRow}>
                <span className={styles.tableHead}>번호 구간</span>
                <span className={styles.tableHead}>색상</span>
                <span className={styles.tableHead}>설명</span>
              </div>
              {colorRows.map(([range, color, note]) => (
                <div key={range} className={styles.tableRow}>
                  <span>{range}</span>
                  <span>{color}</span>
                  <span>{note}</span>
                </div>
              ))}
            </div>

            <h2 className={styles.h2}>당첨 확인 기준</h2>
            <p>
              당첨 번호 6개와 보너스 번호를 입력하면 현재 생성 조합과 저장 조합을 기준으로 등수를 즉시 확인할 수 있습니다.
              공식 추첨 결과를 다시 확인할 때 빠르게 비교하려는 용도에 적합합니다.
            </p>
            <div className={styles.table}>
              <div className={styles.tableRow}>
                <span className={styles.tableHead}>등수</span>
                <span className={styles.tableHead}>조건</span>
                <span className={styles.tableHead}>설명</span>
              </div>
              {rankRows.map(([rank, condition, note]) => (
                <div key={rank} className={styles.tableRow}>
                  <span>{rank}</span>
                  <span>{condition}</span>
                  <span>{note}</span>
                </div>
              ))}
            </div>

            <h2 className={styles.h2}>로또 사이트 이용 팁</h2>
            <div className={styles.stepGrid}>
              <div className={styles.noteBox}>
                <p className={styles.infoCardTitle}>1. 세트 수를 먼저 선택하세요</p>
                <p className={styles.infoCardText}>1세트부터 5세트까지 필요에 맞게 선택한 뒤 생성 버튼을 누르면 됩니다.</p>
              </div>
              <div className={styles.noteBox}>
                <p className={styles.infoCardTitle}>2. 마음에 드는 번호는 저장하세요</p>
                <p className={styles.infoCardText}>이번 회차 저장 기능을 쓰면 현재 브라우저에서 번호를 따로 다시 볼 수 있습니다.</p>
              </div>
              <div className={styles.noteBox}>
                <p className={styles.infoCardTitle}>3. 최근 기록도 함께 비교하세요</p>
                <p className={styles.infoCardText}>최근 5회 생성 기록이 남기 때문에 이전 조합과 번호 분포를 같이 볼 수 있습니다.</p>
              </div>
              <div className={styles.noteBox}>
                <p className={styles.infoCardTitle}>4. 실제 구매 전 공식 정보를 확인하세요</p>
                <p className={styles.infoCardText}>구매 시간, 추첨 결과, 당첨금 수령 방식은 공식 판매처 기준으로 다시 확인하는 것이 좋습니다.</p>
              </div>
            </div>

            <h2 className={styles.h2}>자주 묻는 질문</h2>
            <div className={styles.faqList}>
              {faqItems.map((faq) => (
                <div key={faq.q} className={styles.faqItem}>
                  <p className={styles.faqQ}>{faq.q}</p>
                  <p className={styles.faqA}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <footer className={styles.footer}>
            <p>
              생성 번호와 당첨 비교 결과는 참고용입니다. 실제 구매와 추첨 결과 확인은 공식 판매처와 공식 안내를 기준으로 진행하세요.
            </p>
          </footer>
        </div>
      </main>
    </>
  )
}
