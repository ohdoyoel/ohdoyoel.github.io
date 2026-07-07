import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 10,
    period: '2606',
    title: { en: 'ASTraMut', ko: 'ASTraMut' },
    subtitle: {
      en: 'KAIST Automated Software Testing · Semester-long team project',
      ko: 'KAIST 소프트웨어 테스팅 자동화 · 학기 프로젝트',
    },
    description: {
      en: "Java mutation-operator learner: mines AST-level edit patterns from real bug-fix commits (ManySStuBs4J + Bugs2Fix), generalizes them via anti-unification, and reverses the learned fixes into mutants. Scores 1.94% lower than PIT's default mutation score on Defects4J while reaching bug shapes — API renames, predicate rewrites, block restructuring — PIT's fixed operator set can't express.",
      ko: '실제 버그 수정 커밋(ManySStuBs4J + Bugs2Fix)에서 AST 수준 편집 패턴을 추출해 anti-unification으로 일반화하고, 학습된 수정을 뒤집어 mutant로 만드는 Java mutation operator 학습기. Defects4J에서 PIT 기본 연산자 대비 1.94% 낮은 mutation score를 기록하면서, API 이름 변경·조건식 재작성·블록 구조 변경처럼 PIT의 고정 연산자로는 표현할 수 없는 버그 패턴까지 다룬다.',
    },
    image: {
      src: 'projects/astramut.png',
      alt: {
        en: 'Venn diagram of the overlap between ManySStuBs4J, Bugs2Fix, and PIT default mutation operators',
        ko: 'ManySStuBs4J, Bugs2Fix, PIT 기본 mutation operator 간 중첩을 나타낸 벤 다이어그램',
      },
    },
  },
  {
    id: 0,
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
    id: 1,
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
    image: { src: 'projects/shatter.gif', alt: { en: 'Shatter', ko: 'Shatter' } },
  },
  {
    id: 2,
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
    image: { src: 'projects/skelly-clash.gif', alt: { en: 'Skelly Clash', ko: '싸우자해골아' } },
  },
  {
    id: 3,
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
    image: { src: 'projects/eright.gif', alt: { en: 'ER:ight?', ko: 'ER:ight?' } },
  },
  {
    id: 4,
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
    image: { src: 'projects/zikimi.gif', alt: { en: '지킴이', ko: '지킴이' } },
  },
  {
    id: 5,
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
    image: { src: 'projects/fruit-box-bot.gif', alt: { en: 'Fruit Box Bot', ko: '사과게임 봇' } },
  },
  {
    id: 6,
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
    image: {
      src: 'projects/gyeonggi-youth-ladder.gif',
      alt: { en: 'Gyeonggi Youth Ladder Program', ko: '경기청년사다리프로그램' },
    },
  },
  {
    id: 7,
    period: '2307 - 2407',
    title: { en: 'Military Welfare Map', ko: '병영생활지도' },
    subtitle: {
      en: 'Personal · Hidden military benefits and convenience information around you',
      ko: '주변에 숨겨진 군인 혜택과 편의 정보를 제공하다.',
    },
    description: {
      en: "Web service that integrates scattered military welfare information into a map-based UI, providing intuitive access to military discount benefits for soldiers and their families. Implemented location-based visualization of nearby discounts and introduced AI chatbot 'GPT Sergeant' for conversational access to needed information.",
      ko: '군 장병과 가족들이 군인할인혜택 정보를 직관적으로 찾기 어려운 문제에서 출발한 서비스로, 흩어져 있던 군 장병 복지 정보를 지도 기반 UI로 통합하여 직관적으로 제공하는 웹 서비스. 위치 기반의 주변 할인 정보 시각화는 물론, AI 챗봇 ‘지피티 병장’을 도입하여 대화형으로 손쉽게 필요한 정보를 얻을 수 있도록 구현.',
    },
    image: {
      src: 'projects/military-welfare-map.jpeg',
      alt: { en: 'Military Welfare Map', ko: '병영생활지도' },
    },
  },
  {
    id: 8,
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
    image: { src: 'projects/rocaf-click.gif', alt: { en: 'rokaf.click', ko: 'rokaf.click' } },
  },
  {
    id: 9,
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
    image: { src: 'projects/youngcha.png', alt: { en: 'YoungCHA', ko: 'YoungCHA' } },
  },
];
