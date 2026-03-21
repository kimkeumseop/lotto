export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export function buildFaqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  }
}

export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path === '/' ? siteUrl : `${siteUrl}${item.path}`,
    })),
  }
}

export function buildSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: '로또 번호 생성기',
        url: siteUrl,
        description:
          '로또 645 자동 번호 생성, 저장 기록 확인, 당첨 번호 비교 기능을 제공하는 정보형 서비스입니다.',
      },
      {
        '@type': 'Organization',
        name: '로또 번호 생성기',
        url: siteUrl,
        logo: `${siteUrl}/favicon.svg`,
      },
    ],
  }
}
