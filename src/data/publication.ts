import type { Entry } from './types';

export const papers: Entry[] = [
  {
    period: '2606',
    title: {
      en: 'Korean 4-Ball Billiards: A Continuous, Deterministic, Sparse-Reward Benchmark Solved by Inference-Time Search',
      ko: '한국식 4구 당구: 추론 시점 탐색으로 푸는 연속·결정론적·희소 보상 벤치마크',
    },
    subtitle: {
      en: 'KAIST Introduction to Reinforcement Learning · Project',
      ko: 'KAIST 강화학습 개론 · 프로젝트',
    },
    description: {
      en: 'We cast Korean 4-ball billiards (sagu) as a continuous, deterministic, sparse-reward RL benchmark with a fast, exact physics simulator. Off-policy RL (SAC/TD3) beats PPO by ~2.5x, but the bare task plateaus below one point per inning even with more compute, a curriculum, or a learned reward model. Explicit geometry — a first-contact aim constraint plus four carom features — lifts SAC from 0.487 to 6.460 points/inning. The final jump comes from inference-time search: greedy depth-2 lookahead using the simulator as its own verifier turns a ~6-point policy into chains of up to 9,392 consecutive scoring shots at 99.8% per-shot success.',
      ko: '포켓이 없는 캐롬 게임인 한국식 4구(사구)를 연속적·결정론적·희소 보상 강화학습 벤치마크로 정식화하고, 빠르고 정확한 물리 시뮬레이터를 구축했다. Off-policy RL(SAC/TD3)은 PPO보다 약 2.5배 우수하지만, 더 많은 학습량·커리큘럼·학습된 보상 모델을 더해도 원 과제는 이닝당 1점 아래에서 정체된다. 최초 접촉을 보장하는 조준 제약과 4개의 캐롬 기하 피처를 더하면 SAC 점수가 0.487에서 6.460점/이닝으로 뛴다. 마지막 도약은 추론 시점 탐색에서 나온다 — 시뮬레이터를 자체 검증기로 쓰는 탐욕적 depth-2 lookahead는 약 6점짜리 정책을 최대 9,392연속 득점·샷당 99.8% 성공률의 체인으로 바꾼다.',
    },
    authors: [
      { name: { en: 'Doyeol Oh', ko: '오도열' }, self: true, href: '#' },
      { name: { en: 'Byungmo Kang', ko: '강병모' }, href: '#' },
      { name: { en: 'Seojun Park', ko: '박서준' }, href: '#' },
    ],
    image: {
      src: 'papers/fourball.png',
      alt: {
        en: 'A random rack of the cue ball, opponent cue ball, and two red balls on the Korean 4-ball table simulator',
        ko: '한국식 4구 시뮬레이터에서 무작위로 배치된 큐볼, 상대 큐볼, 적구 두 개',
      },
    },
    link: { href: 'papers/fourball.pdf' },
  },
  {
    period: '2606',
    title: {
      en: 'ASTraMut: Learning Java Mutation Operators from Real-World Bug-Fix Patterns',
      ko: 'ASTraMut: 실제 버그 수정 패턴으로부터 Java Mutation Operator 학습하기',
    },
    subtitle: {
      en: 'KAIST Automated Software Testing · Project',
      ko: 'KAIST 소프트웨어 테스팅 자동화 · 프로젝트',
    },
    description: {
      en: "A Java mutation operator learner that mines AST-level edit patterns from real bug-fix commits, generalizes them via anti-unification, and reverses the learned fixes into mutation operators. On Defects4J, the merged top-100 operator set scores a 1.94% lower mutation score than PIT's default operators on the same relevant test suites, while covering bug-shape families — API renames, whole-predicate negation, block-shape rewrites — that PIT's fixed mutator catalogue cannot express.",
      ko: '실제 버그 수정 커밋에서 AST 수준의 편집 패턴을 추출해 anti-unification으로 일반화하고, 학습된 수정을 뒤집어 mutation operator로 사용하는 Java mutation operator 학습기다. Defects4J에서 병합된 상위 100개 연산자 세트는 동일한 관련 테스트 스위트 기준 PIT 기본 연산자 대비 1.94% 낮은 mutation score를 기록했고, API 이름 변경·전체 조건식 부정·블록 구조 재작성처럼 PIT의 고정된 연산자 목록으로는 표현할 수 없는 버그 패턴군까지 다룬다.',
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
        en: 'Venn diagram of the overlap between ManySStuBs4J, Bugs2Fix, and PIT default mutation operators',
        ko: 'ManySStuBs4J, Bugs2Fix, PIT 기본 mutation operator 간 중첩을 나타낸 벤 다이어그램',
      },
    },
    link: { href: 'papers/astramut.pdf' },
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
      en: 'A two-vs-two CTF Pacman team built on classical search — goal-commit A* offense, alpha-beta minimax defense, 42-feature linear evaluator — plus a held-out verification protocol designed to defeat zoo-overfitting. The contribution is treating the student round-robin as an unseen distribution head-on, generalizing via hand-inspectable weights and external anchors instead of deep RL.',
      ko: '2대2 CTF 팩맨에서 deep RL 대신 hand-inspectable 42차원 선형 평가함수와, zoo-overfitting을 차단하는 held-out 검증 프로토콜로 일반화를 만든 팀이다. 학생 라운드로빈이 unseen distribution이라는 점을 정면에서 다룬 게 핵심이다.',
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
      en: 'An analysis that disentangles three effects commonly conflated in adversarial Pacman: action ordering has two dimensions (pruning efficiency vs tie-breaking), minimax is brittle against random ghosts via pessimism cascade rather than evaluation quality, and on trapped layouts the −1 living penalty creates a "swift-death preference" that makes deeper search rush a ghost.',
      ko: '적대 다중 에이전트 탐색에서 흔히 한 덩어리로 묶이는 세 효과를 분리해 보인 분석이다. 행동 ordering이 가지치기 효율과 tie-breaking 두 차원으로 갈라진다는 점, 무작위 유령 앞에서 Minimax는 평가함수가 아니라 pessimism cascade로 깨진다는 점, 좁은 맵에서 −1 living penalty가 즉사를 지연된 죽음보다 strictly 높은 값으로 만들어 팩맨이 유령에게 돌진하는 "swift-death preference"가 나타난다는 점이다.',
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
      en: 'DFS / BFS / UCS / A* on the CS188 framework, plus a custom admissible heuristic — Blockage Detection + Tarjan articulation-point Portal Detection + dead-end peeling — that expands 34.4% fewer nodes than Manhattan on average. Per-call preprocessing made wall-clock time worse for single queries, a clean illustration of the search-quality vs evaluator-cost tradeoff.',
      ko: 'DFS·BFS·UCS·A* 구현과 함께, Manhattan 대비 평균 34.4% 적은 노드를 expand하는 admissible 휴리스틱(Blockage Detection + Tarjan articulation Portal + dead-end peeling)을 제안한다. 다만 per-call 전처리 비용 때문에 단일 쿼리 wall-clock은 오히려 늦어진다 — 탐색 품질 vs 평가자 비용 트레이드오프를 깔끔하게 보인 사례다.',
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
      en: 'A weighted soft-margin SVM with slack penalty C_i = C · (p_i + n_i) / 2, where p_i is a class-conditional Gaussian probability (catching feature outliers) and n_i is a KNN label-consistency score (catching label outliers). The novelty is the additive aggregation: a multiplicative form collapses when either signal breaks (e.g. the Gaussian assumption on Titanic), while the average lets the surviving signal carry the weight.',
      ko: '특성 이상치 검출(클래스 가우시안 확률 p_i)과 라벨 이상치 검출(KNN 라벨 일관성 n_i)을 한 SVM에 통합하는 가중 슬랙 패널티 C_i = C·(p_i + n_i)/2를 제안한다. 곱셈이 아닌 가산 평균이 핵심으로, 한 신호가 무너져도(예: 가우시안이 깨지는 Titanic) 다른 쪽이 받쳐 "weakest link" 문제를 회피한다.',
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
      en: 'An adaptive label propagation for LBSN where each node\'s structural-vs-spatial weight is α = 1 − H/log|L|, derived from the entropy of its neighbor labels. When neighbors agree, the Jaccard structural term dominates; when they disagree, the Haversine spatial term takes over — visually separating structurally connected but geographically distant cities (e.g. Nashville vs. Atlanta).',
      ko: '라벨 엔트로피로부터 α = 1 − H/log|L|를 산출해, 구조 유사도(Jaccard)와 위치 유사도(Haversine)의 비중을 노드별로 적응 조절하는 라벨 전파를 제안한다. 이웃 라벨이 일치하면 구조가, 어긋나면 위치가 주도하면서 — 구조적으로 연결되어 있지만 지리적으로 떨어진 도시(예: 내슈빌·애틀랜타)를 시각적으로 분리한다.',
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
      en: 'A four-stage hierarchical TSP solver: k-means partitions cities into clusters of size ≤ 22 so Held-Karp becomes feasible, then both inter-cluster and intra-cluster tours dispatch by size between Held-Karp and Christofides, with a final entry/exit alignment to minimize cluster-boundary transitions. On mona-lisa100k it is ~8× faster than Christofides at ~2% lower cost. Won UNIST CSE331 Best Paper Award.',
      ko: 'k-means로 도시를 22개 이하 클러스터로 쪼개 Held-Karp가 가능하게 만든 뒤, 클러스터 간/내부 TSP 모두 크기로 Held-Karp/Christofides를 갈라 푸는 4단계 하이브리드 솔버를 제안한다. mona-lisa100k에서 Christofides보다 약 8배 빠르고 비용도 약 2% 낮다. UNIST CSE331 최우수논문상.',
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
      en: 'A C++ benchmark of twelve sorts across random / sorted / reverse / partial inputs from 10³ to 10⁶. Two findings worth keeping: vanilla Lomuto Quick crashes on sorted input from unbalanced recursion (median-of-three pivoting is practically required), and a naive multithreaded Tim variant ran slower than single-threaded Tim because thread-creation overhead dominated the merge gain.',
      ko: '12종 정렬을 C++로 구현해 10³~10⁶ 입력에서 벤치마크한 보고서다. 새로 확인한 건 두 가지 — Lomuto Quick은 정렬 입력에서 불균형 재귀로 크래시하므로 중간값-3 피벗이 사실상 필수라는 점, 그리고 멀티스레드 Tim 변형은 스레드 오버헤드가 병합 이득을 상회해 단일 스레드보다 느려진다는 점이다.',
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
      en: 'A chair-shaped indoor mobility with hands-free steering: a potentiometer reads saddle rotation and an STM32F303RE drives a PID-controlled steering motor, and the throttle is replaced by a kick-to-start scheme. Both hands and feet stay free while moving, and the form factor lets you sit and rest the moment you stop.',
      ko: '안장의 회전을 가변저항으로 읽고 STM32F303RE 기반 PID로 조향 모터를 추종하는, 핸들 없는 의자형 실내 모빌리티를 제안한다. 엑셀도 제거하고 발구름 시동으로 대체했다 — 이동 중에는 두 손과 발이 자유롭고, 멈추면 그대로 의자가 된다.',
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
