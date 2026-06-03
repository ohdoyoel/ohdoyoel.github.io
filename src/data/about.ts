import type { AboutPost, Entry, IntroLine, Localized } from './types';

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
      en: 'My papers so far keep circling that same question — how to abstract some slice of human-world interaction into something an algorithm can actually run. The shape changes (search, RL, optimization, robotics), the question does not.',
      ko: '지금까지 쓴 논문들도 결국 같은 질문에서 출발해요 — 사람과 세상이 얽히는 어떤 단면을, 어떻게 알고리즘이 돌릴 수 있는 형태로 추상화할까. 모양만 탐색·강화학습·최적화·로보틱스로 달랐을 뿐이에요.',
    },
    link: {
      to: 'publication',
      label: { en: 'List of publications →', ko: '논문 목록 →' },
    },
  },
  {
    text: {
      en: "I make a lot of side projects too — for class or hackathons, at work, and sometimes just because the idea wouldn't sit still.",
      ko: '프로젝트도 자주 만들어 왔어요 — 수업이나 해커톤으로, 회사 일로, 가끔은 그냥 머릿속에서 떠나지 않아서요.',
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
      en: 'UNIST DECS Lab (Prof. Hui-sung Lee)',
      ko: 'UNIST DECS Lab (이희승 교수님)',
    },
    description: { en: 'Embedded Software Developer', ko: '임베디드 소프트웨어 개발자' },
    link: { href: 'https://sites.google.com/view/decs-unist' },
  },
];

export const awards: Entry[] = [
  {
    period: '2606',
    subtitle: {
      en: 'KAIST College of AI',
      ko: 'KAIST AI대학',
    },
    title: {
      en: 'AI Vision Contest',
      ko: 'AI Vision Contest',
    },
    description: {
      en: 'Vision Award: Special Guest (Top 20 Teams)',
      ko: 'Vision Award: Special Guest (상위 20팀)',
    },
    link: { href: 'https://aic-competition.kaist.ac.kr/' },
  },
  {
    period: '2605',
    subtitle: {
      en: 'KAIST Office of Student Affairs & Policy, Office of Student Life, Office of Academic Affairs ',
      ko: 'KAIST 학생정책처, 학생생활처, 교무처',
    },
    title: {
      en: 'KAIST AI Future Challenge Idea Competition',
      ko: 'KAIST AI Future Challenge 아이디어 공모전',
    },
    description: {
      en: 'First Prize, Provost’s Award, 「Cognitive Immune AI」',
      ko: '최우수상, 교학부총장상, 「인지면역 AI」',
    },
    postId: 0,
  },
  {
    period: '2407',
    subtitle: {
      en: 'Ministry of National Defense, Republic of Korea',
      ko: '대한민국 국방부',
    },
    title: {
      en: 'National Defense Public Data Competition',
      ko: '국방 공공데이터 활용 경진대회 ',
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
    "Programming started, for me, with games. I loved open worlds — GTA V most of all — enough that in middle school I opened Unity to try building one of my own. That's when I learned the thing that has stayed with me: what I'd actually fallen for wasn't the game on screen, but the act underneath it — taking a principle or problem from the world, modeling it mathematically, and watching the model come alive inside a machine. That moment is the start of my life as a developer.",
    "In college the fascination shifted from games to services — web and apps. There's a particular catharsis in seeing an idea become a working thing in days instead of months, and I chased it. I held onto that during military service, too: at a base 800 meters up a mountain, I taught myself Next.js, React, and Tailwind in the evening hours we were allowed online. The identity I was building, then, was the developer who turns a social problem into shipped software, fast.",
    "By the time I was discharged, the world had changed. Generative AI had arrived, and the skill I had spent years sharpening — shipping fast — was no longer scarce. I started a frontend job with Claude open beside me, and the shift became impossible to ignore. For a while I doubted whether building, on its own, could still be a craft I could call mine.",
    "Eventually I came back to the starting point. What I had loved as a kid wasn't shipping; it was abstraction — taking the world, restating it in math, then writing it into code. The thing in paragraph one. So I chose to live as a researcher. The shipping skill didn't disappear; it became the other hand of the same craft. Today I'm trying to be someone who abstracts the world through research and ships those results into UX-aware software, fast — with AI sitting between the two hands as a tool.",
  ],
  ko: [
    '저의 프로그래밍은 게임에서 시작됐습니다. GTA V 같은 오픈월드 게임을 너무 좋아해서, 중학생 때 직접 그런 세상을 만들어보고 싶다는 마음으로 Unity를 열었어요. 거기서 깨달은 게 있습니다 — 제가 끌렸던 건 화면 위의 게임이 아니라, 그 아래에 있는 행위였다는 것. 세상의 어떤 원리나 문제를 수학으로 모델링해 컴퓨터 안에서 코드로 살려내는 일. 그 순간이 제 개발자 인생의 시작점입니다.',
    '대학에 들어오면서 그 관심은 게임에서 서비스로 — 웹과 앱으로 — 옮겨갔습니다. 머릿속의 아이디어가 몇 달이 아니라 며칠 만에 세상에서 동작하는 무언가가 되는 데서 오는 카타르시스가 컸어요. 군 복무 중에도 그 관성은 놓지 않았습니다. 해발 800m가 넘는 자대 사이버지식정보방에서 연등 시간을 쪼개 Next.js·React·Tailwind를 익혔어요. 그 시절 저의 정체성은 "사회의 문제를 빠르게 짚어 서비스로 옮겨내는 개발자"였습니다.',
    '전역하고 돌아오니 세상이 달라져 있었습니다. 생성형 AI의 등장이었어요. 그동안 갈고닦아온 무기 — "빠르게 만든다" — 가 더 이상 희소하지 않게 되었습니다. 회사에서 프론트엔드 개발자로 일하며 옆자리에 Claude를 두기 시작하자, 그 사실은 더 또렷해졌습니다. 한동안은 만드는 일 자체가 저에게 무엇을 남길 수 있는지를 두고 회의가 깊었습니다.',
    '결국 시작점으로 돌아갔습니다. 어릴 때 제가 사랑했던 건 \'만드는 일\'이 아니라 \'추상하는 일\'이었습니다 — 세상을 수학으로 옮기고, 그것을 다시 코드로 적어내는, 첫 문단의 바로 그 일. 그래서 연구자로 살기로 마음먹었습니다. 만드는 능력은 사라지지 않고, 같은 손의 다른 한쪽이 되었어요. 지금의 저는 연구로 세상을 추상화하고, 그 결과를 UX를 고려한 서비스의 형태로 빠르게 옮길 수 있는 사람이 되려 합니다 — AI는 그 두 손을 잇는 도구로 곁에 둡니다.',
  ],
};

export const research: Localized<string[]> = {
  en: [
    "My research interest centers on modeling how humans interact with the world — so that intelligent agents can learn to do the same. What I enjoy is taking the structure of human cognition, action, and language as it grips the environment, and translating it into a form an algorithm can actually run.",
    'The two methods closest to that question, in my view, are RLHF and robotics. RLHF treats human preference as a supervisory signal — the way to turn "what people want" into something a model can be trained against, anchoring an agent in our intent. Robotics treats the body as the medium where interaction actually happens — the place where every assumption a model carries is pressure-tested against physics, and where the gaps in that model become visible. The two grip the same problem from opposite ends: signaling intent on one side, embodying it on the other.',
    'Around this core sit three adjacent fields. Video Understanding is the input problem — letting models read human behavior and context as it unfolds over time. HCI is the interface problem — how a learned agent should breathe alongside the people it works with. Safe AI is the responsibility problem — the boundaries inside which a trained agent must operate.',
    'On the long horizon, these five meet in the same place: AGI.',
  ],
  ko: [
    '제 연구 관심은 사람이 세상과 상호작용하는 방식을 모델링하는 데 있습니다 — 지능형 에이전트가 그 방식을 학습할 수 있게 하기 위해서입니다. 사람의 인지·행동·언어가 환경과 맞물리는 구조를 알고리즘이 다룰 수 있는 형태로 옮기는 일을 좋아합니다.',
    '이 질문에 가장 가까운 두 접근은 RLHF와 로보틱스라고 봅니다. RLHF는 인간의 선호를 감독 신호로 다뤄 에이전트의 행동을 우리의 의도와 정렬시킵니다 — "사람은 무엇을 원하는가"를 학습 가능한 신호로 풀어내는 일이지요. 로보틱스는 신체를 상호작용이 실제로 일어나는 매개로 다룹니다 — 시뮬레이션의 추상이 물리 법칙과 마찰하는 지점에서, 모델이 놓치고 있던 가정들이 드러나는 곳입니다. 두 접근은 같은 문제의 양 끝을 쥐고 있습니다: 의도의 신호화(RLHF)와, 그 신호의 체화(로보틱스).',
    '이 핵심 주변에는 세 갈래가 함께 있습니다. Video Understanding은 시간 위에 펼쳐지는 사람의 행동과 맥락을 모델이 입력으로 받아들이게 하는 문제이고, HCI는 학습된 에이전트가 사람과 어떤 호흡으로 협업할지를 묻는 인터페이스의 문제, Safe AI는 그 에이전트가 어떤 경계 안에서 동작해야 하는지를 정하는 책임의 문제입니다.',
    '긴 시간축의 끝에는 AGI가 있습니다. 위 다섯 갈래가 결국 한 자리에서 만나는 지점이라고 생각합니다.',
  ],
};

export const aboutPosts: AboutPost[] = [
  ...education, ...work, ...awards, ...certificates,
].filter((e): e is AboutPost => typeof e.postId === 'number');

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
