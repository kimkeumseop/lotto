# 로또 번호 생성기

로또 645 자동번호 생성과 당첨 비교를 위한 독립 사이트입니다.

## 기능
- 1~45 자동 번호 생성
- 1~5세트 동시 생성
- 이번 회차 번호 저장
- 최근 5회 생성 기록
- 당첨 번호 + 보너스 번호 비교
- 다크모드 지원
- 모바일 최적화
- SEO 최적화 (메타태그, FAQ 콘텐츠)

## 로컬 실행

```bash
npm install
npm run dev
```

## 환경변수

배포 시 canonical, sitemap, robots 주소를 맞추려면 `.env.local`에 아래 값을 넣어 주세요.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 참고

- `/`가 메인 로또 사이트 홈입니다.
- `/lotto`는 홈으로 리다이렉트됩니다.
- 배포 전 `NEXT_PUBLIC_SITE_URL` 설정을 권장합니다.
