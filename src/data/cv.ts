import type { Lang } from '../i18n/ui';

export type Localized<T = string> = Record<Lang, T>;

export type Author = {
  name: Localized;
  self?: boolean;
  href?: string;
};

// TODO
// 1 cv.ts 파일 페이지 별로 쪼개기
// 2 Entry가 4/5 만 차지하는 문제. 전체 다 차지해야댐
// 3 가로 폭 좀 넓힐 수 없나?
// 4 배포
// 5 CV PDF로 만들어야 댐
// 6 추천서 받기
// 7 진행 중인 애들은 TBD로

export type Entry = {
  period: string;
  title: Localized;
  subtitle?: Localized;
  authors?: Author[];
  description?: Localized;
  link?: { href: string };
  image?: { src: string; alt?: Localized };
};

export const profile = {
  name: { en: 'Doyeol Oh', ko: '오도열' } satisfies Localized,
  role: {
    en: 'Undergraduate Researcher · Full-Stack Developer',
    ko: '학부 연구생 · 풀스택 개발자',
  } satisfies Localized,
  email: "ohdoyoel@gmail.com",
  links: [
    { label: 'CV (PDF)', href: '#' },
    { label: 'GitHub', href: 'https://github.com/ohdoyoel' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ohdoyoel' },
    { label: 'Scholar', href: 'https://scholar.google.com/citations?user=Ld0QNwcAAAAJ' },
    { label: 'Instagram', href: 'https://instagram.com/ohdoyoel' },
    { label: 'YouTube', href: 'https://youtube.com/@오도리odori' },
    { label: 'Email', href: 'mailto:ohdoyoel@gmail.com' },
  ],
};

export const tagline: Localized<string[]> = {
  en: [
    "Computer science is, to me, the most elegant abstraction of a complex world.",
  ],
  ko: [
    "컴퓨터 과학은 복잡한 세상을 가장 우아하게 추상화하는 학문이라고 생각합니다.",
  ],
};

export type IntroLink = {
  to: string;
  label: Localized;
};

export type IntroLine = {
  text: Localized;
  link?: IntroLink;
};

export const intro: IntroLine[] = [
  {
    text: {
      en: 'My name is Doyeol Oh. Or simply Danny.',
      ko: '제 이름은 오도열이에요. 편하게 Danny라고 불러주셔도 좋구요.',
    },
  },
  {
    text: {
      en: "I'm an undergraduate at UNIST in the Department of Computer Science and Engineering, currently working as a software developer at Peulda Co., Ltd.",
      ko: '저는 UNIST 컴퓨터공학과 학부생이고, 현재 Peulda라는 회사에서 소프트웨어 개발자로 일하고 있어요.',
    },
  },
  {
    text: {
      en: "Computer science is, to me, the most elegant abstraction of a complex world. I'm interested in modeling how humans interact with the world. I enjoy observing how different people think and what they value, and I want to express that in code.",
      ko: "저는 컴퓨터 과학이 '저희가 사는 이 복잡한 세상을 가장 우아하게 추상화하는 학문'이라고 생각해요. 그래서인지 사람들이 세상과 상호작용하는 방식을 모델링하는 일에 유독 관심이 많습니다. 다양한 사람의 생각과 가치관을 세심하게 관찰하고, 그 본질을 코드로 아름답게 표현해낼 때 가장 큰 즐거움을 느낍니다.",
    },
  },
  {
    text: {
      en: 'Most of my research has gathered around robotics and human-grounded RL — close cousins of the question above.',
      ko: '지금까지의 연구는 대부분 로보틱스와 인간 기반 RL 주변에서 이루어졌습니다 — 위 질문과 같은 갈래입니다.',
    },
    link: {
      to: 'publication',
      label: { en: 'List of publications →', ko: '논문 목록 →' },
    },
  },
  {
    text: {
      en: "I've built a handful of projects worth talking about — at work, in research, and on weekends.",
      ko: '지금까지 마음에 드는 프로젝트 몇 개를 만들어왔습니다 — 회사에서, 연구실에서, 그리고 주말에.',
    },
    link: {
      to: 'project',
      label: { en: 'List of projects →', ko: '프로젝트 목록 →' },
    },
  },
  {
    text: {
      en: 'As another way of understanding people, I read a lot of fiction, watch films, and study plays — I used to act in a theater club. On Sundays, I serve at church.',
      ko: '사람을 이해하는 또 하나의 방식으로, 다양한 방법으로 인문학적 소양을 쌓았어요. 소설을 읽고 영화를 보고, 희곡을 공부했죠 — 연극 동아리에서 배우로 활동한 적도 있어요! 주일에는 교회에서 예배를 드려요.',
    },
  },
];


export const education: Entry[] = [
  {
    period: '2103 - Present',
    title: { en: 'UNIST', ko: '울산과학기술원 (UNIST)' },
    description: {
      en: 'B.S. in Computer Science and Engineering · GPA 4.05 / 4.30',
      ko: '컴퓨터공학 학사 · GPA 4.05 / 4.30',
    },
    link: { href: 'https://www.unist.ac.kr/unist/index.do' }, 
  },
  {
    period: '2603 - Present',
    title: { en: 'KAIST', ko: '한국과학기술원 (KAIST)' },
    description: {
      en: 'Exchange Student · School of Computing',
      ko: '교환학생 · 전산학부',
    },
    link: { href: 'https://www.kaist.ac.kr/kr/'}
  },
  {
    period: '2501 - 2502',
    title: {
      en: 'University of Auckland · English Language Academy',
      ko: '오클랜드 대학교 · 영어 어학원',
    },
    description: {
      en: 'Certificate in Advanced English (C1)',
      ko: '고급 영어 자격증 (C1)',
    },
    link: { href: 'https://www.ela.auckland.ac.nz/' }
  },
];

export const projects: Entry[] = [
  {
    period: '2605',
    title: { en: 'KAIST Roadmap Planner', ko: 'KAIST 로드맵 플래너' },
    subtitle: {
      en: 'KAIST Introduction to Software Engineering · Semester-long team project ',
      ko: 'KAIST 소프트웨어 공학 개론 · 학기 프로젝트 ',
    },
    description: {
      en: 'Web service that scrapes elements from any webpage and drops them into a physics simulation.',
      ko: 'Puppeteer로 웹페이지의 요소를 추출해 Matter.js 물리 시뮬레이션에 던지는 웹 인터랙티브 서비스.',
    },
  },
  {
    period: '2603',
    title: { en: 'Shatter', ko: 'Shatter' },
    subtitle: {
      en: 'Web Interactive · Puppeteer, Matter.js',
      ko: '웹 인터랙티브 · Puppeteer, Matter.js',
    },
    description: {
      en: 'Web service that scrapes elements from any webpage and drops them into a physics simulation.',
      ko: 'Puppeteer로 웹페이지의 요소를 추출해 Matter.js 물리 시뮬레이션에 던지는 웹 인터랙티브 서비스.',
    },
  },
  {
    period: '2509 - 2512',
    title: { en: 'Skelly Clash', ko: '싸우자해골아 (Skelly Clash)' },
    subtitle: {
      en: 'Toss HTML5 Game Challenge · HTML5, CSS, Vanilla JS',
      ko: '토스 HTML5 게임 챌린지 출품작 · HTML5, CSS, Vanilla JS',
    },
    description: {
      en: '3D roguelike survival action game running natively in the browser. Wave-based skeleton enemies, OOP-driven game loop, leveling. Featured in the Toss app game tab; deployed via Vercel.',
      ko: '웹에서 동작하는 3D 로그라이크 서바이벌 액션 게임. OOP 기반 게임 루프, 웨이브로 등장하는 적과 레벨업. 토스 앱 게임 탭 입점, Vercel 배포.',
    },
  },
  {
    period: '2511',
    title: { en: 'ER:ight?', ko: 'ER:ight?' },
    subtitle: {
      en: '3rd Digital Healthcare Hackathon · CBT-based AI counseling',
      ko: '제3회 디지털 헬스케어 해커톤 · CBT 기반 AI 상담',
    },
    description: {
      en: 'AI platform for emergency-room suicide-attempt patients. Fills the 138-min average wait with CBT-based AI counseling (text and voice) and delivers CAMS summaries to medical staff.',
      ko: '응급실 자살시도자의 평균 138분 대기 시간 동안 CBT 기반 AI 상담(텍스트·음성)을 제공하고, 의료진에게 환자 상태 요약(CAMS)을 전달하는 헬스케어 플랫폼.',
    },
  },
  {
    period: '2509',
    title: { en: '지(地)킴이', ko: '지(地)킴이' },
    subtitle: {
      en: '2025 kakao × goorm Season-thon · Flutter',
      ko: '2025 kakao × 9oorm 시즌톤 출품작 · Flutter',
    },
    description: {
      en: "Eco-campaign service that visualizes generative AI's CO₂ footprint and proposes walking challenges to offset it. Real-time GPS step tracking via Flutter Geolocator. Co-led with Sujin Yoon and Junun Kim.",
      ko: '생성형 AI 사용으로 인한 탄소 배출량을 시각화하고, 이를 상쇄하기 위한 걷기 챌린지를 제안하는 친환경 캠페인 서비스. Flutter GPS로 이동 거리 실시간 측정. Sujin Yoon, 김준언 공동 리드.',
    },
  },
  {
    period: '2503 - 2504',
    title: { en: 'Fruit Box Bot', ko: '사과게임 봇' },
    subtitle: {
      en: 'Personal · CV + mouse automation',
      ko: '개인 · 컴퓨터 비전 + 마우스 자동화',
    },
    description: {
      en: 'Bot that recognizes apple-game numbers on screen, solves the puzzle, and operates the mouse. Gameplay video went viral on Instagram (250k views, 7k shares, 4k likes).',
      ko: '화면 상의 사과 숫자를 인식해 알고리즘으로 풀고 마우스를 조작하는 봇. 인스타그램 25만 조회, 7천 공유, 4천 좋아요.',
    },
  },
  {
    period: '2501',
    title: {
      en: 'Gyeonggi Youth Ladder Program — Branding',
      ko: '경기청년사다리프로그램 브랜딩 페이지',
    },
    subtitle: {
      en: 'Branding & archiving web service',
      ko: '브랜딩 및 아카이빙 웹 서비스',
    },
    description: {
      en: 'Web service to establish program identity and archive 1st-cohort activities (personal missions, portfolios). UI inspired by Toss and Hour-express — minimalist, readable.',
      ko: '프로그램 정체성 확립 및 1기 참가자 활동(개인 미션, 포트폴리오) 아카이빙 웹 서비스. Toss와 아워익스프레스를 벤치마크한 미니멀 UI.',
    },
  },
  {
    period: '2311 - 2401',
    title: { en: 'rokaf.click', ko: 'rokaf.click' },
    subtitle: {
      en: 'Personal · popcat.click for ROKAF units',
      ko: '개인 · 군부대별 popcat.click',
    },
    description: {
      en: "Click-counting site for Republic of Korea Air Force units, modeled after popcat.click's country competition.",
      ko: '국가 단위 popcat.click에서 착안한 공군 부대별 클릭 수 경쟁 사이트.',
    },
  },
  {
    period: '2203 - 2212',
    title: { en: 'YoungCHA — Hands-Free Indoor Mobility', ko: 'YoungCHA — 핸즈프리 실내 모빌리티' },
    subtitle: {
      en: 'BTS Research Program · Embedded · Co-lead with Seongjae Lee',
      ko: 'BTS 실전문제연구팀 · 임베디드 · Seongjae Lee 공동 리드',
    },
    description: {
      en: 'Chair-shaped indoor mobility with hands-free steering: rotate the saddle to turn, kick to start. Designed for carrying objects or resting while moving indoors. Published as ICROS 2024.',
      ko: '안장 회전으로 방향을 조절하는 핸즈프리 의자형 실내 모빌리티. 발구름으로 출발, 앉은 채 이동. ICROS 2024 논문화.',
    },
  },
];

export const papers: Entry[] = [
  {
    period: '2606',
    title: {
      en: 'Solving Korean Four-Ball Carom Billiards with Reinforcement Learning: Meta-Pretrained Initialization under Sparse Rewards',
      ko: '강화학습으로 한국식 포볼 카롬 당구 풀기: 희소한 보상에서 메타-사전학습된 초기화 기법',
    },
    subtitle: {
      en: 'KAIST Introduction to Reinforcement Learning · Project',
      ko: 'KAIST 강화학습 개론 · 프로젝트',
    },
    description: {
      en: '-',
      ko: '-',
    },
    authors: [
      { name: { en: 'Doyeol Oh', ko: '오도열' }, self: true, href: '#' },
      { name: { en: 'Byungmo Kang', ko: '강병모' }, href: '#' },
      { name: { en: 'Seojun Park', ko: '박서준' }, href: '#' },
    ],
    image: {
      src: 'papers/fourball.png',
      alt: {
        en: 'papers/fourball.png',
        ko: 'papers/fourball.png',
      },
    },
    link: { href: 'papers/fourball.pdf' },
  },
  {
    period: '2606',
    title: {
      en: 'ASTraMut: AST-Guided Mutation Testing for Java',
      ko: 'ASTraMut: Java용 AST 기반 Mutation Testing 도구',
    },
    subtitle: {
      en: 'KAIST Automated Software Testing · Project',
      ko: 'KAIST 소프트웨어 테스팅 자동화 · 프로젝트',
    },
    description: {
      en: '-',
      ko: '-',
    },
    authors: [
      { name: { en: 'Doyeol Oh', ko: '오도열' }, self: true, href: '#' },
      { name: { en: 'Hyunji Park', ko: '박현지' }, href: '#' },
      { name: { en: 'Junseo Jang', ko: '장준서' }, href: '#' },
      { name: { en: 'Dongjae Lee', ko: '이동재' }, href: '#' },
    ],
    image: {
      src: 'papers/astramut.png',
      alt: {
        en: 'papers/astramut.png',
        ko: 'papers/astramut.png',
      },
    },
    link: { href: 'papers/astramut.pdf' },
  },
  {
    period: '2605',
    title: {
      en: 'Pacman assignment 3: ',
      ko: '팩맨 과제 3',
    },
    subtitle: {
      en: 'KAIST Introduction to Artificial Intelligence · Assignment 3 · Pacman Competition Award',
      ko: 'KAIST 인공지능 개론 · 과제 3 · 팩맨 경연대회 상',
    },
    description: {
      en: '-',
      ko: '-',
    },
    authors: [
      { name: { en: 'Doyeol Oh', ko: '오도열' }, self: true, href: '#' },
    ],
    image: {
      src: 'papers/pacman3.png',
      alt: {
        en: 'papers/pacman3.png',
        ko: 'papers/pacman3.png',
      },
    },
    link: { href: 'papers/pacman3.pdf' },
  },
  {
    period: '2604',
    title: {
      en: 'Pacman assignment 2: ',
      ko: '팩맨 과제 2',
    },
    subtitle: {
      en: 'KAIST Introduction to Artificial Intelligence · Assignment 2',
      ko: 'KAIST 인공지능개론 · 과제 2',
    },
    description: {
      en: '-',
      ko: '-',
    },
    authors: [
      { name: { en: 'Doyeol Oh', ko: '오도열' }, self: true, href: '#' },
    ],
    image: {
      src: 'papers/pacman2.png',
      alt: {
        en: 'papers/pacman2.png',
        ko: 'papers/pacman2.png',
      },
    },
    link: { href: 'papers/pacman2.pdf' },
  },
  {
    period: '2603',
    title: {
      en: 'Pacman assignment 1: ',
      ko: '팩맨 과제 1',
    },
    subtitle: {
      en: 'KAIST Introduction to Artificial Intelligence · Assignment 1',
      ko: 'KAIST 인공지능개론 · 과제 1',
    },
    description: {
      en: '-',
      ko: '-',
    },
    authors: [
      { name: { en: 'Doyeol Oh', ko: '오도열' }, self: true, href: '#' },
    ],
    image: {
      src: 'papers/pacman1.png',
      alt: {
        en: 'papers/pacman1.png',
        ko: 'papers/pacman1.png',
      },
    },
    link: { href: 'papers/pacman1.pdf' },
  },
  {
    period: '2512',
    title: {
      en: 'SKiP: SVM weighted by K-Nearest-Neighbors and class Probability for weakening outliers',
      ko: 'SKiP: K-최근접 이웃과 클래스 확률로 가중된 이상치 완화 SVM',
    },
    subtitle: {
      en: 'UNIST Machine Learning · Final Project Report',
      ko: 'UNIST 기계학습 · 파이널 프로젝트 보고서',
    },
    description: {
      en: 'Dual-confidence SVM weighting: global probability captures feature outliers; local KNN consistency captures label outliers. Additive (rather than multiplicative) combination yields stable robustness across noise levels (Iris, Wine, Titanic).',
      ko: '이중 신뢰도 SVM 가중치 — 전역 확률로 특성 이상치를, 지역 KNN 일관성으로 라벨 이상치를 포착. 곱셈 대신 가산 결합으로 다양한 노이즈 수준(Iris, Wine, Titanic)에서 강건성 향상.',
    },
    authors: [
      { name: { en: 'Doyeol Oh', ko: '오도열' }, self: true, href: '#' },
      { name: { en: 'Jeonghoon Park', ko: '박정훈' }, href: '#' },
      { name: { en: 'Jaemin Kim', ko: '김재민' }, href: '#' },
      { name: { en: 'KangJun Lee', ko: '이강준' }, href: '#' },
    ],
    image: {
      src: 'papers/skip.png',
      alt: {
        en: 'papers/skip.png',
        ko: 'papers/skip.png',
      },
    },
    link: { href: 'papers/skip.pdf' },
  },
  {
    period: '2511',
    title: {
      en: 'Entropy-Guided Adaptive Label Propagation for Location-Aware Graph Clustering',
      ko: '위치 기반 소셜 네트워크에서 공간 근접 커뮤니티 탐지를 위한 엔트로피 가중 적응형 라벨 전파 알고리즘',
    },
    subtitle: {
      en: 'Korean Database Conference (KDBC) 2025',
      ko: '한국데이터베이스학회 학술대회 (KDBC) 2025',
    },
    authors: [
      { name: { en: 'Doyeol Oh', ko: '오도열' }, self: true, href: '#' },
      { name: { en: 'Hyewon Kim', ko: '김혜원' }, href: '#' },
      { name: { en: 'Dahee Kim', ko: '김다희' }, href: '#' },
      { name: { en: 'Junghoon Kim', ko: '김정훈' }, href: '#' },
    ],
    description: {
      en: 'Adaptive label propagation (ALP) for LBSN graph clustering. Real-time entropy-based weighting balances structural vs. spatial information — separates structurally connected but geographically distant cities (e.g. Nashville vs. Atlanta).',
      ko: 'LBSN 그래프 클러스터링을 위한 적응형 라벨 전파(ALP). 엔트로피 기반 실시간 가중치로 구조 정보와 위치 정보 균형을 조절 — 구조적으로 연결되어 있지만 지리적으로 떨어진 도시(예: 내슈빌·애틀랜타) 분리.',
    },
    image: {
      src: 'papers/alp.png',
      alt: {
        en: 'papers/alp.png',
        ko: 'papers/alp.png',
      },
    },
    link: { href: 'papers/alp.pdf' },
  },
  {
    period: '2506',
    title: {
      en: 'Hylos: Hierarchically Localized Optimization Strategy for TSP',
      ko: 'Hylos: TSP에서 계층적으로 국소화된 최적화 전략',
    },
    subtitle: {
      en: 'UNIST Introduction to Algorithms · Best Paper Award',
      ko: 'UNIST 알고리즘 · 최우수논문상',
    },
    description: {
      en: 'Hybrid TSP solver: k-means clustering + dynamic dispatch between Held-Karp (exact) and Christofides (approximate). ~7× faster than Christofides on mona-lisa100k (under 10s vs. 66s+) without accuracy loss.',
      ko: 'TSP 하이브리드 솔버 — k-means 클러스터링 + Held-Karp(정확)와 Christofides(근사) 동적 디스패치. mona-lisa100k에서 Christofides 대비 약 7배 빠름 (10초 미만 vs 66초 이상).',
    },
    authors: [
      { name: { en: 'Doyeol Oh', ko: '오도열' }, self: true, href: '#' },
    ],
    image: {
      src: 'papers/hylos.png',
      alt: {
        en: 'papers/hylos.png',
        ko: 'papers/hylos.png',
      },
    },
    link: { href: 'papers/hylos.pdf' },
  },
  {
    period: '2407',
    title: {
      en: 'Development of Intuitive Steering Mechanism for Hands-Free Operation of Indoor Shared Mobility',
      ko: '실내 공유 모빌리티의 핸즈프리 조작을 위한 직관적 조향 메커니즘 개발',
    },
    subtitle: {
      en: 'ICROS (Institute of Control, Robotics, and Systems) 2024',
      ko: 'ICROS (제어로봇시스템학회) 2024',
    },
    authors: [
      { name: { en: 'Doyeol Oh', ko: '오도열' }, self: true, href: '#' },
      { name: { en: 'Seongjae Lee', ko: '이성재' }, href: '#' },
    ],
    image: {
      src: 'papers/youngcha.png',
      alt: {
        en: 'papers/youngcha.png',
        ko: 'papers/youngcha.png',
      },
    },
    link: { href: 'papers/youngcha.pdf' },
  },
];

export const patents: Entry[] = [
  {
    period: '2602',
    title: {
      en: 'System and Method for Spatially Proximate Community Detection Based on Entropy-Weighted Adaptive Label Propagation',
      ko: '엔트로피 가중 적응형 라벨 전파 기반의 공간 근접 커뮤니티 탐지 시스템 및 방법',
    },
    description: {
      en: 'KR 10-2026-0027653 · Filed 2026-02-11',
      ko: 'KR 10-2026-0027653 · 출원 2026-02-11',
    },
  },
];

export const references: Entry[] = [
  {
    period: 'Advisor',
    title: { en: 'Prof. Example A. Advisor', ko: 'Example A. Advisor 교수님' },
    subtitle: {
      en: 'Example University · Department of Computer Science',
      ko: '예시대학교 · 컴퓨터공학과',
    },
    description: {
      en: 'Undergraduate thesis advisor since 2024. Contact upon request.',
      ko: '2024년부터 학부 졸업논문 지도. 연락처는 요청 시 제공.',
    },
  },
  {
    period: 'Mentor',
    title: { en: 'Dr. Example B. Mentor', ko: 'Example B. Mentor 박사' },
    subtitle: { en: 'Example Research Lab', ko: '예시 연구소' },
    description: {
      en: 'Research mentor during 2023 summer internship. Contact upon request.',
      ko: '2023년 여름 인턴십 연구 멘토. 연락처는 요청 시 제공.',
    },
  },
  {
    period: 'Manager',
    title: { en: 'Example C. Manager', ko: 'Example C. Manager' },
    subtitle: { en: 'Example Corp · Engineering Manager', ko: '예시 코퍼레이션 · 엔지니어링 매니저' },
    description: {
      en: 'Direct manager during 2024 internship. Contact upon request.',
      ko: '2024년 인턴십 직속 매니저. 연락처는 요청 시 제공.',
    },
  },
];

export const blogPosts: Entry[] = [
  {
    period: '2504',
    title: {
      en: 'Notes on building an offline-first mobile app',
      ko: '오프라인 우선 모바일 앱을 만들며 배운 것들',
    },
    description: {
      en: 'What I learned designing sync, conflict resolution, and local persistence for a journaling app.',
      ko: '저널링 앱의 동기화, 충돌 해결, 로컬 영속성을 설계하며 배운 것.',
    },
    link: { href: '#' },
  },
  {
    period: '2502',
    title: {
      en: 'Why I rewrote my portfolio in Astro',
      ko: 'Astro로 포트폴리오를 다시 만든 이유',
    },
    description: {
      en: 'A short post on developer ergonomics, build speed, and content collections.',
      ko: '개발자 경험, 빌드 속도, 콘텐츠 콜렉션에 대한 짧은 글.',
    },
    link: { href: '#' },
  },
  {
    period: '2411',
    title: {
      en: 'A small WebGPU experiment',
      ko: 'WebGPU로 해본 작은 실험',
    },
    description: {
      en: 'Comparing compute shader performance vs JS for a particle simulation.',
      ko: '파티클 시뮬레이션에서 컴퓨트 셰이더와 JS의 성능 비교.',
    },
    link: { href: '#' },
  },
];

export const services: Entry[] = [];

export const work: Entry[] = [
  {
    period: '2601 - Present',
    title: { en: 'Peulda', ko: '플다' },
    description: { en: 'Software Developer', ko: '소프트웨어 개발자' },
    link: { href: 'https://www.peulda.com/' },
  },
  {
    period: '2505 - 2511',
    title: {
      en: 'UNIST DM Lab (Prof. Junghoon Kim)',
      ko: 'UNIST DM Lab (김정훈 교수님)',
    },
    description: { en: 'Undergraduate Researcher', ko: '학부 연구생' },
    link: { href: 'https://sites.google.com/view/dm-unist'},
  },
  {
    period: '2201 - 2212',
    title: {
      en: 'UNIST · DECS Lab (Prof. Hui-sung Lee)',
      ko: 'UNIST · DECS Lab (이희승 교수님)',
    },
    description: { en: 'Embedded Software Developer', ko: '임베디드 소프트웨어 개발자' },
    link: { href: 'https://sites.google.com/view/decs-unist' },
  },
];

export const awards: Entry[] = [
  {
    period: '2407',
    subtitle: {
      en: 'Ministry of National Defense, Republic of Korea',
      ko: '대한민국 국방부',
    },
    title: {
      en: '2024 National Defense Public Data Competition',
      ko: '2024 국방 공공데이터 활용 경진대회 ',
    },
    description: {
      en: 'Minister of Defense Award, 「Military Welfare Map」 (Service Development)',
      ko: '국방부장관상, 「병영생활지도」 (서비스 개발 부문)',
    },
    link: { href: 'https://news.unist.ac.kr/kor/20240802/'}
  },
  {
    period: '2211',
    subtitle: {
      en: 'UNIST · BTS (BrainToSociety) Research Program · UNIST',
      ko: 'UNIST · BTS (BrainToSociety) 실전문제연구팀'
    },
    title: {
      en: '2nd U-Challenge Festival · 2nd X-Corps Plus Festival',
      ko: '제2회 U-챌린지 페스티벌 · 제2회 X-Corps Plus 페스티벌',
    },
    description: {
      en: 'Gold Prize · Bronze Prize, 「YoungCHA」',
      ko: '금상 · 동상, 「YoungCHA」',
    },
    link: { href: 'http://www.ulsanilbo.co.kr/news/articleView.html?idxno=51987' }
  },
  {
    period: '2208',
    title: {
      en: 'OUTTA AI Bootcamp',
      ko: 'OUTTA AI 부트캠프',
    },
    subtitle: {
      en: 'OUTTA',
      ko: 'OUTTA',
    },
    description: {
      en: '1st cohort, Top Team & Top Participant (1st / 27 teams · 5th / 61 participants)',
      ko: '1기, 우수 팀 & 우수 참가자 (1위 / 27팀 · 5위 / 61명)',
    },
    link: { href: 'https://outta.ai/ko' },
  },
];

export const certificates: Entry[] = [
  {
    period: '2509 - 2512',
    title: {
      en: 'Mentor · CSE Mentor-Mentee Program',
      ko: '멘토정보바이오융합대학 멘토멘티 프로그램',
    },
    subtitle: { en: 'UNIST', ko: 'UNIST' },
    description: {
      en: 'Selected as 1st-place team',
      ko: '1위 팀 선정',
    },
    link: { href: 'https://ib.unist.ac.kr/%f0%9f%91%a9%f0%9f%8f%ab%ec%a0%95%eb%b0%94%ec%9c%b5-%eb%a9%98%ed%86%a0-%eb%a9%98%ed%8b%b0-%ed%94%84%eb%a1%9c%ea%b7%b8%eb%9e%a8-%eb%a9%98%ed%86%a0-%eb%aa%a8%ec%a7%91%f0%9f%91%a8/' },
  },
  {
    period: '2508',
    title: {
      en: 'White Hacker Training Program',
      ko: '화이트해커 양성 교육',
    },
    subtitle: {
      en: 'Ulsan Information Industry Promotion Agency',
      ko: '울산정보산업진흥원',
    },
    description: {
      en: '1st-place team in final CTF competition',
      ko: '최종 CTF 대회 1위'
    },
    link: { href: 'https://www.uipa.or.kr/webuser/business/view.html?bd_id=22271' }
  },
  {
    period: '2503 - 2506',
    subtitle: {
      en: '9roomthonUNIV · goorm',
      ko: '9roomthonUNIV · goorm',
    },
    title: {
      en: '9roomthonUNIV UNIST',
      ko: '구름톤유니브 UNIST',
    },
    description: {
      en: 'Frontend Instructor',
      ko: '프론트엔드 강사',
    }
  },
  {
    period: '2103 - Present',
    title: { en: 'National Excellent Scholarship (STEM)', ko: '국가우수장학금 (이공계)' },
    link: { href: 'https://www.veritas-a.com/news/articleView.html?idxno=361042' },
  },
];

export const skills: { label: string; items: string[] }[] = [
  { label: 'Frontend', items: ['React', 'Next.js', 'Styled', 'TailwindCSS'] },
  { label: 'Mobile', items: ['Flutter', 'React Native'] },
  { label: 'Infra', items: ['Vercel', 'Supabase', 'GCP'] },
  { label: 'Embedded', items: ['C', 'MBED', 'Arduino', 'Raspberry Pi'] },
  { label: 'AI', items: ['NumPy', 'PyTorch', 'Gymnasium'] },
  { label: 'Tool', items: ['Git', 'Docker', 'Figma', 'Notion', 'Linear', 'Claude Code', 'Vim'] },
];

export const programming: Localized<string[]> = {
  en: [
    "I started building things because of open-world games — GTA V most of all. In middle school I opened Unity for the first time to make one of my own, and that's where my life as a developer began. What I fell in love with wasn't the game; it was the act of taking a problem or principle from the world, modeling it mathematically, and watching it come alive inside a machine.",
    "In college that fascination shifted toward services — web and apps. While serving in the military, at a base 800m up a mountain, I taught myself Next.js, React, and Tailwind in the evening hours we were allowed online. Shipping something useful, fast, had its own kind of catharsis. I wanted to be the developer who turned ideas into working software quickly.",
    "By the time I was discharged, the world had changed: generative AI had arrived. The thing I had been good at — shipping software, fast — was no longer scarce. I started a frontend job with Claude open beside me, and the unease grew sharper. For a while I doubted whether building still meant anything I could call my own.",
    "What pulled me back was the first paragraph. What I had loved as a kid wasn't shipping; it was abstraction — rendering the world in code. So I chose to live as a researcher. The shipping skill didn't disappear; it became the other hand of the same craft. Today I think of myself as a researcher who can build UX-aware software fast, with AI as a multiplier rather than a threat.",
  ],
  ko: [
    "어릴 때부터 GTA V 같은 오픈월드 게임을 좋아했습니다. 중학생 때 처음으로 Unity를 열어 직접 게임을 만들기 시작했고, 거기서 제 개발자 인생이 시작됐습니다. 제가 사랑했던 건 게임 자체가 아니라, 세상의 어떤 문제나 원리를 수학적으로 모델링해 컴퓨터 안에서 코드로 구현하는 행위였습니다.",
    "대학에 들어와서는 그 관심이 서비스 개발 — 웹과 앱 — 으로 옮겨갔습니다. 군 복무 중에는 해발 800m가 넘는 자대 사이버지식정보방에서 연등 시간을 쪼개 Next.js, React, Tailwind를 익혔습니다. 사회의 문제를 빠르게 짚어 서비스로 만들어 내는 데서 오는 카타르시스가 있었습니다. 그땐 더 빠르게 소프트웨어를 생산하는 개발자가 되고 싶었습니다.",
    "전역하고 돌아오니 세상이 달라져 있었습니다. 생성형 AI의 등장이었습니다. '빠르게 만든다'는 저의 강점은 더 이상 희소하지 않았습니다. 회사에서 프론트엔드 개발자로 일하며 옆자리에 클로드를 두기 시작하자 두려움은 더 또렷해졌고, 한동안 개발에 대한 회의가 깊었습니다.",
    "다시 시작점을 돌아봤습니다. 어릴 때 제가 좋아했던 건 '만드는 일'이 아니라 '추상하는 일'이었습니다 — 세상을 코드로 옮기는 일, 첫 문단의 그 일. 그래서 연구자로 살기로 마음먹었습니다. 만드는 능력은 사라지지 않았고, 같은 손의 다른 한쪽이 되었습니다. 지금의 저는 UX를 고려한 서비스를 AI를 활용해 빠르게 개발할 수 있는 연구자입니다.",
  ],
};

export const research: Localized<string[]> = {
  en: [
    "My research interest centers on modeling how humans interact with the world, so that intelligent agents can learn to do the same. The two methods closest to that question are reinforcement learning from human feedback — which treats human preference as the supervisory signal that grounds an agent in our intent — and robotics, which treats the body as the medium through which interaction actually happens.",
    "Around this core, I'm drawn to video understanding, HCI, and Safe AI; the long horizon is AGI.",
  ],
  ko: [
    "제 연구 관심은 사람이 세상과 상호작용하는 방식을 모델링하는 데 있습니다 — 지능형 에이전트가 그 방식을 학습할 수 있도록 하기 위해서입니다. 이 질문에 가장 가까운 두 접근은 RLHF와 로보틱스입니다. RLHF는 인간의 선호를 에이전트의 행동을 우리의 의도로 정렬시키는 감독 신호로 다루고, 로보틱스는 신체를 상호작용이 실제로 일어나는 매개로 다룹니다.",
    "이 핵심 주변에는 Video Understanding, HCI, Safe AI가 있고, 끝에는 AGI가 있습니다.",
  ],
};

export const thisWebsite = {
  text: {
    en: 'Built with Astro, Pretendard Variable for type, Radix Colors for the palette, and a small homemade grid on top of raster.css.',
    ko: 'Astro로 만들었습니다. 타입은 Pretendard Variable, 팔레트는 Radix Colors, 그리드는 raster.css 위에 직접 얹었습니다.',
  } satisfies Localized,
  thanks: {
    label: {
      en: 'Thanks to Rasmus for the inspiration →',
      ko: '영감을 준 Rasmus에게 감사를 →',
    } satisfies Localized,
    href: 'https://rsms.me/',
  },
};
