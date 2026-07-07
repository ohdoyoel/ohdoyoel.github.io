import type { Localized } from './types';

export const profile = {
  name: { en: 'Doyeol Oh', ko: '오도열' } satisfies Localized,
  role: {
    en: 'Undergraduate Researcher · Full-Stack Developer',
    ko: '학부 연구생 · 풀스택 개발자',
  } satisfies Localized,
  email: 'ohdoyoel@gmail.com',
  links: [
    { label: 'CV (PDF)', href: '/cv_ohdoyeol.pdf' },
    { label: 'GitHub', href: 'https://github.com/ohdoyoel' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ohdoyoel' },
    { label: 'Scholar', href: 'https://scholar.google.com/citations?user=Ld0QNwcAAAAJ' },
    { label: 'Email', href: 'mailto:ohdoyoel@gmail.com' },
  ],
};

export const tagline: Localized<string[]> = {
  en: [
    'Computer science is, to me, the most elegant abstraction of a complex world.',
  ],
  ko: [
    '컴퓨터 과학은 복잡한 세상을 가장 우아하게 추상화하는 학문이라고 생각합니다.',
  ],
};
