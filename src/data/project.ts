import type { Entry } from './types';

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
