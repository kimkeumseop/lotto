import styles from '../page.module.css'
import Link from 'next/link'

export const metadata = {
  title: '이용약관 - 로또 번호 생성기',
  description: '로또 번호 생성기 사이트의 이용약관입니다. 서비스 이용 조건과 면책조항을 확인하세요.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div style={{ marginBottom: '1rem' }}>
          <Link href="/" style={{ fontSize: '13px', color: 'var(--text-hint)' }}>
            ← 홈으로
          </Link>
        </div>

        <header className={styles.header}>
          <h1 className={styles.h1}>이용약관</h1>
          <p className={styles.desc}>시행일: 2024년 1월 1일</p>
        </header>

        <section className={styles.content}>
          <h2 className={styles.h2}>제1조 (목적)</h2>
          <p>
            본 약관은 로또 번호 생성기(이하 "사이트")가 제공하는 온라인 서비스(이하 "서비스")의 이용 조건 및 절차,
            이용자와 사이트 간의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.
          </p>

          <h2 className={styles.h2}>제2조 (서비스 소개)</h2>
          <p>
            본 사이트는 로또 번호 생성과 당첨 비교를 편리하게 확인할 수 있도록 아래와 같은 무료 기능을 제공합니다:
          </p>
          <ul style={{ paddingLeft: '20px', fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.9', marginTop: '8px' }}>
            <li>로또 645 자동 번호 생성</li>
            <li>1세트부터 5세트까지 다중 생성</li>
            <li>이번 회차 번호 저장</li>
            <li>최근 생성 기록 확인</li>
            <li>당첨 번호와 보너스 번호 비교를 통한 등수 확인</li>
          </ul>
          <p style={{ marginTop: '10px' }}>
            서비스는 별도의 회원가입 없이 무료로 이용할 수 있으며, 향후 기능이 변경되거나 추가될 수 있습니다.
          </p>

          <h2 className={styles.h2}>제3조 (결과 정보의 성격)</h2>
          <p>
            본 사이트가 제공하는 모든 결과는 일반적인 참고 목적으로만 제공됩니다.
            생성된 번호와 당첨 비교 결과는 공식 추첨 결과나 공식 구매 정보를 대체하지 않습니다.
          </p>
          <p style={{ marginTop: '10px' }}>
            특히 아래 사항에 유의하시기 바랍니다:
          </p>
          <ul style={{ paddingLeft: '20px', fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.9', marginTop: '8px' }}>
            <li>생성된 번호는 무작위 조합이며 당첨을 보장하지 않습니다.</li>
            <li>당첨 등수 확인은 입력한 번호를 기준으로 비교한 참고 결과입니다.</li>
            <li>실제 추첨 결과, 구매 시간, 판매 방식은 공식 판매처 기준으로 확인해야 합니다.</li>
            <li>당첨금 수령 절차와 조건 역시 공식 안내를 우선합니다.</li>
          </ul>

          <h2 className={styles.h2}>제4조 (면책조항)</h2>
          <p>
            사이트는 생성 결과의 정확성·완전성을 보증하지 않으며, 이용자가 결과를 근거로 내린 결정에 대한 법적 책임을 지지 않습니다.
            이용자는 실제 구매 또는 당첨금 수령 전 반드시 공식 판매처와 공식 안내를 확인해야 합니다.
          </p>
          <p style={{ marginTop: '10px' }}>
            사이트는 서버 장애, 시스템 점검 등 불가피한 사유로 서비스가 일시 중단될 수 있으며, 이로 인해 발생하는 손해에 대해 책임을 지지 않습니다.
          </p>

          <h2 className={styles.h2}>제5조 (저작권)</h2>
          <p>
            본 사이트의 콘텐츠(텍스트, 이미지, 디자인, 코드 등)에 대한 저작권은 사이트에 귀속됩니다.
            이용자는 개인적, 비상업적 목적으로 콘텐츠를 이용할 수 있으나, 사이트의 사전 서면 동의 없이 복제, 배포, 상업적 이용을 금지합니다.
          </p>

          <h2 className={styles.h2}>제6조 (광고)</h2>
          <p>
            본 사이트는 Google AdSense 등 제3자 광고 서비스를 통해 광고를 게재할 수 있습니다.
            광고 콘텐츠는 사이트의 의견을 대표하지 않으며, 광고주와의 거래로 인한 피해에 대해 사이트는 책임을 지지 않습니다.
          </p>

          <h2 className={styles.h2}>제7조 (약관 변경)</h2>
          <p>
            사이트는 필요한 경우 본 약관을 변경할 수 있으며, 변경된 약관은 사이트 내 공지를 통해 안내합니다.
            변경 후에도 서비스를 계속 이용하는 경우 변경된 약관에 동의한 것으로 간주합니다.
          </p>

          <h2 className={styles.h2}>제8조 (문의)</h2>
          <p>
            이용약관에 대한 문의는 아래 이메일로 연락해 주세요.
            <br />
            이메일: <span style={{ color: 'var(--text)' }}>example@email.com</span>
          </p>
        </section>

        <footer className={styles.footer}>
          <p>본 약관은 2024년 1월 1일부터 시행됩니다.</p>
        </footer>
      </div>
    </main>
  )
}
