import type { Entry } from './types';

export const papers: Entry[] = [
  {
    period: '2606',
    title: {
      en: '(Solving Korean Four-Ball Carom Billiards with Reinforcement Learning: Meta-Pretrained Initialization under Sparse Rewards)',
      ko: '(한국식 포볼 카롬 당구 해결을 위한 강화학습: 희소한 보상에서의 메타-사전학습된 초기화 기법)',
    },
    subtitle: {
      en: 'KAIST Introduction to Reinforcement Learning · Project',
      ko: 'KAIST 강화학습 개론 · 프로젝트',
    },
    description: {
      en: 'TBD',
      ko: '미정',
    },
    authors: [
      { name: { en: 'Doyeol Oh', ko: '오도열' }, self: true, href: '#' },
      { name: { en: 'Byungmo Kang', ko: '강병모' }, href: '#' },
      { name: { en: 'Seojun Park', ko: '박서준' }, href: '#' },
    ],
    // image: {
    //   src: 'papers/fourball.png',
    //   alt: {
    //     en: 'papers/fourball.png',
    //     ko: 'papers/fourball.png',
    //   },
    // },
    // link: { href: 'papers/fourball.pdf' },
  },
  {
    period: '2606',
    title: {
      en: '(ASTraMut: AST-Guided Mutation Testing for Java)',
      ko: '(ASTraMut: Java용 AST 기반 Mutation Testing 도구)',
    },
    subtitle: {
      en: 'KAIST Automated Software Testing · Project',
      ko: 'KAIST 소프트웨어 테스팅 자동화 · 프로젝트',
    },
    description: {
      en: 'TBD',
      ko: '미정',
    },
    authors: [
      { name: { en: 'Doyeol Oh', ko: '오도열' }, self: true, href: '#' },
      { name: { en: 'Hyunji Park', ko: '박현지' }, href: '#' },
      { name: { en: 'Junseo Jang', ko: '장준서' }, href: '#' },
      { name: { en: 'Dongjae Lee', ko: '이동재' }, href: '#' },
    ],
    // image: {
    //   src: 'papers/astramut.png',
    //   alt: {
    //     en: 'papers/astramut.png',
    //     ko: 'papers/astramut.png',
    //   },
    // },
    // link: { href: 'papers/astramut.pdf' },
  },
  {
    period: '2605',
    title: {
      en: 'Capture-the-Flag Pacman with Self-Play Tuned Heuristics',
      ko: '자기-대전으로 튜닝된 휴리스틱 기반 캡처-더-플래그 팩맨',
    },
    subtitle: {
      en: 'KAIST Introduction to Artificial Intelligence · Assignment 3 · Pacman Competition Award',
      ko: 'KAIST 인공지능 개론 · 과제 3 · 팩맨 경연대회 상',
    },
    description: {
      en: 'Two-vs-two CTF Pacman team — goal-commit ghost-aware A* offense, alpha-beta minimax defense, and a 42-feature linear evaluator tuned by population-based self-play with held-out zoo anchors. 40/40 on the official grading run; 77.1% over a 792-game external SOTA sweep with zero runtime errors.',
      ko: '2대2 CTF 팩맨 팀 — 목표-커밋형 유령 인지 A* 공격, 알파-베타 미니맥스 수비, 42차원 선형 평가함수를 Held-out 앵커 기반 population self-play로 튜닝. 공식 채점 40/40, 외부 SOTA 792게임 스윕 77.1% 승률, 런타임 오류 0.',
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
      en: 'Multi-Agent Search for Pacman: Reflex, Minimax, and Alpha-Beta',
      ko: '팩맨 다중 에이전트 탐색: Reflex, Minimax, Alpha-Beta',
    },
    subtitle: {
      en: 'KAIST Introduction to Artificial Intelligence · Assignment 2',
      ko: 'KAIST 인공지능 개론 · 과제 2',
    },
    description: {
      en: 'Adversarial multi-agent search on the CS188 Pacman framework — reflex evaluator (food / ghost / scared-ghost terms), n-agent minimax with depth-on-wraparound, and alpha-beta pruning matched to the autograder’s strict-inequality reference, plus a discussion of action-ordering effects on pruning.',
      ko: 'CS188 팩맨 위에서 적대 다중 에이전트 탐색 구현 — Reflex 평가함수(음식·유령·겁먹은 유령), n-에이전트 Minimax(에이전트 인덱스 wrap 시 깊이 감소), 오토그레이더의 엄격 부등호 기준에 맞춘 Alpha-Beta 가지치기. 행동 순서가 가지치기 효율에 미치는 영향까지 논의.',
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
      en: 'Graph Search for Pacman: DFS, BFS, UCS, and A*',
      ko: '팩맨 그래프 탐색: DFS, BFS, UCS, A*',
    },
    subtitle: {
      en: 'KAIST Introduction to Artificial Intelligence · Assignment 1',
      ko: 'KAIST 인공지능 개론 · 과제 1',
    },
    description: {
      en: 'Classical graph search on the UC Berkeley CS188 Pacman framework — DFS / BFS / UCS / A* with a shared visited-set template. Includes a written reflection on pop-vs-push goal testing, lazy duplicate handling for priority-queue searches, and where each algorithm’s optimality guarantee actually comes from.',
      ko: 'UC Berkeley CS188 팩맨 위에서 고전 그래프 탐색(DFS·BFS·UCS·A*)을 공통 visited-set 템플릿으로 구현. 푸시/팝 시점의 목표 검사, 우선순위 큐 탐색에서의 지연 중복 처리, 각 알고리즘 최적성 보장의 출처에 대한 회고 포함.',
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
    period: '2504',
    title: {
      en: 'Comparative Study of Twelve Sorting Algorithms',
      ko: '12종 정렬 알고리즘 비교 연구',
    },
    subtitle: {
      en: 'UNIST Introduction to Algorithms · Assignment 1',
      ko: 'UNIST 알고리즘 · 과제 1',
    },
    description: {
      en: 'C++ implementation and benchmarking of six classical (Bubble, Selection, Insertion, Quick, Heap, Merge) and six modern (Cocktail Shaker, Comb, Tournament, Library, Intro, Tim) sorts across random / sorted / reverse / partial inputs at 10³–10⁶. Tim and median-of-three Quick scaled cleanly to 10⁶, where Bubble took 3942s vs Tim’s 0.2s.',
      ko: '12종 정렬 알고리즘(고전 6 + 현대 6) C++ 구현 및 벤치마크 — 랜덤·정렬·역정렬·부분정렬 입력, 10³~10⁶ 크기. Tim과 중간값-3 Quick은 10⁶까지 안정적으로 확장되었고, 같은 크기에서 Bubble 3942초 vs Tim 0.2초.',
    },
    authors: [
      { name: { en: 'Doyeol Oh', ko: '오도열' }, self: true, href: '#' },
    ],
    image: {
      src: 'papers/sort.png',
      alt: {
        en: 'papers/sort.png',
        ko: 'papers/sort.png',
      },
    },
    link: { href: 'papers/sort.pdf' },
  },
  {
    period: '2407',
    title: {
      en: 'Development of Intuitive Steering Mechanism for Hands-Free Operation of Indoor Shared Mobility',
      ko: '실내 공유형 모빌리티의 핸즈프리 구동을 위한 직관적 조향기술 개발',
    },
    subtitle: {
      en: 'ICROS (Institute of Control, Robotics, and Systems) 2024',
      ko: 'ICROS (제어로봇시스템학회) 2024',
    },
    description: {
      en: 'YoungCHA — a chair-shaped indoor shared mobility with hands-free, intuitive steering. Saddle rotation is read by a potentiometer and tracked by a PID-controlled steering motor (STM32F303RE, encoder calibration via a hard-stop button); the throttle is replaced by a kick-to-start scheme. Designed to provide both seated rest and motion in large indoor venues.',
      ko: '영차(YoungCHA) — 의자 형태의 실내 공유형 모빌리티. 안장의 회전을 가변저항으로 읽고 STM32F303RE 기반 PID로 조향 모터를 추종(엔코더 캘리브레이션은 하드스톱 버튼으로 보정), 엑셀 대신 발구름 시동을 채택. 넓은 실내 공간에서 휴식과 이동을 한 폼팩터로 제공.',
    },
    authors: [
      { name: { en: 'Donghoon Nam', ko: '남동훈' }, href: '#' },
      { name: { en: 'Doyeol Oh', ko: '오도열' }, self: true, href: '#' },
      { name: { en: 'Seongjae Lee', ko: '이성재' }, href: '#' },
      { name: { en: 'Yunjeong Gwak', ko: '곽윤정' }, href: '#' },
      { name: { en: 'Huisung Lee', ko: '이희승' }, href: '#' },
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
