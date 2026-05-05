import type { Entry, IntroLine, Localized } from './types';

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
    link: { href: 'https://www.kaist.ac.kr/kr/' },
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
    link: { href: 'https://www.ela.auckland.ac.nz/' },
  },
];

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
    link: { href: 'https://sites.google.com/view/dm-unist' },
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
    link: { href: 'https://news.unist.ac.kr/kor/20240802/' },
  },
  {
    period: '2211',
    subtitle: {
      en: 'UNIST · BTS (BrainToSociety) Research Program · UNIST',
      ko: 'UNIST · BTS (BrainToSociety) 실전문제연구팀',
    },
    title: {
      en: '2nd U-Challenge Festival · 2nd X-Corps Plus Festival',
      ko: '제2회 U-챌린지 페스티벌 · 제2회 X-Corps Plus 페스티벌',
    },
    description: {
      en: 'Gold Prize · Bronze Prize, 「YoungCHA」',
      ko: '금상 · 동상, 「YoungCHA」',
    },
    link: { href: 'http://www.ulsanilbo.co.kr/news/articleView.html?idxno=51987' },
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
    link: {
      href: 'https://ib.unist.ac.kr/%f0%9f%91%a9%f0%9f%8f%ab%ec%a0%95%eb%b0%94%ec%9c%b5-%eb%a9%98%ed%86%a0-%eb%a9%98%ed%8b%b0-%ed%94%84%eb%a1%9c%ea%b7%b8%eb%9e%a8-%eb%a9%98%ed%86%a0-%eb%aa%a8%ec%a7%91%f0%9f%91%a8/',
    },
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
      ko: '최종 CTF 대회 1위',
    },
    link: { href: 'https://www.uipa.or.kr/webuser/business/view.html?bd_id=22271' },
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
    },
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
    '어릴 때부터 GTA V 같은 오픈월드 게임을 좋아했습니다. 중학생 때 처음으로 Unity를 열어 직접 게임을 만들기 시작했고, 거기서 제 개발자 인생이 시작됐습니다. 제가 사랑했던 건 게임 자체가 아니라, 세상의 어떤 문제나 원리를 수학적으로 모델링해 컴퓨터 안에서 코드로 구현하는 행위였습니다.',
    '대학에 들어와서는 그 관심이 서비스 개발 — 웹과 앱 — 으로 옮겨갔습니다. 군 복무 중에는 해발 800m가 넘는 자대 사이버지식정보방에서 연등 시간을 쪼개 Next.js, React, Tailwind를 익혔습니다. 사회의 문제를 빠르게 짚어 서비스로 만들어 내는 데서 오는 카타르시스가 있었습니다. 그땐 더 빠르게 소프트웨어를 생산하는 개발자가 되고 싶었습니다.',
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
    '제 연구 관심은 사람이 세상과 상호작용하는 방식을 모델링하는 데 있습니다 — 지능형 에이전트가 그 방식을 학습할 수 있도록 하기 위해서입니다. 이 질문에 가장 가까운 두 접근은 RLHF와 로보틱스입니다. RLHF는 인간의 선호를 에이전트의 행동을 우리의 의도로 정렬시키는 감독 신호로 다루고, 로보틱스는 신체를 상호작용이 실제로 일어나는 매개로 다룹니다.',
    '이 핵심 주변에는 Video Understanding, HCI, Safe AI가 있고, 끝에는 AGI가 있습니다.',
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
