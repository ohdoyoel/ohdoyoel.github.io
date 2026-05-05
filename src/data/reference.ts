import type { Entry } from './types';

const solYou: Entry = {
  period: '',
  position: {
    en: 'Senior Industrial Designer',
    ko: '시니어 산업 디자이너',
  },
  title: { en: 'Sol You', ko: '유솔' },
  subtitle: {
    en: 'Yanfeng International Automotive Technology Europe S.a.r.l. & Co. KG',
    ko: 'Yanfeng International Automotive Technology Europe S.a.r.l. & Co. KG',
  },
  description: {
    en: 'I had the pleasure of working with him on an app development project, where he showed strong technical skills and a proactive mindset. He quickly grasps challenges and delivers effective, high-quality solutions. His positive attitude and clear communication make him a reliable and valuable team member I confidently recommend.',
    ko: '그와 앱 개발 프로젝트에서 함께 일할 기회를 가졌으며, 그는 뛰어난 기술력과 적극적인 태도를 보여주었습니다. 그는 문제를 빠르게 이해하고 효과적이며 완성도 높은 해결책을 제시합니다. 또한 긍정적인 태도와 명확한 커뮤니케이션 능력을 갖추고 있어 신뢰할 수 있는 팀원으로 자신 있게 추천할 수 있습니다.',
  },
  image: {
    src: 'people/solyou.jpeg',
    alt: { en: 'Sol You', ko: '유솔' },
  },
};

const seungbinJeong: Entry = {
  period: '',
  position: {
    en: 'Industrial Designer + HRI Researcher',
    ko: '산업 디자이너 + HRI 연구자',
  },
  title: { en: 'Seungbin Jeong', ko: '정승빈' },
  description: {
    en: 'Over several years of working together in both project and research lab settings, I have had the opportunity to closely observe Doyeol\'s way of thinking and approach to work. He approaches problems with a balanced blend of logic and intuition, not just developing solutions but deeply understanding the essence of the problem and designing thoughtful solutions. Above all, his curiosity across various domains and ability to connect them has elevated the quality of collaboration and made working together enjoyable.',
    ko: '수 년간 프로젝트와 연구실 생활을 함께하며 도열 씨의 사고 방식과 일에 대한 태도를 가까이에서 지켜볼 수 있었습니다. 도열 씨는 논리와 감각이 균형을 이루는 방식으로 문제에 접근하며, 단순히 개발하는 데 그치지 않고 문제의 본질을 파악하고 해결책을 설계합니다. 무엇보다, 다양한 분야를 넘나드는 도열 씨의 호기심과 이를 연결하는 능력은 협업의 질을 높이고 함께 일하는 즐거움을 만들어 주었습니다.',
  },
  image: {
    src: 'people/seungbinjeong.jpeg',
    alt: { en: 'Seungbin Jeong', ko: '정승빈' },
  },
};

const dayHong: Entry = {
  period: '',
  position: {
    en: 'Cloud Native / BE Developer',
    ko: 'Cloud Native / BE 개발자',
  },
  title: { en: 'Daeeui Hong', ko: '홍대의' },
  subtitle: {
    en: 'UNIST CSE Graduate',
    ko: 'UNIST 컴퓨터공학과 졸업생',
  },
  description: {
    en: 'Same university, same department, studying together and walking the same path as developers through project assignments and club activities. Doyeol is a friend with a deep passion for development, a proactive attitude towards new challenges, and the confidence to pursue goals. He is a developer who can lead collaborative synergy and enhance development productivity through his active thinking that independently considers ideas and his proactive attitude that can make suggestions first for improving common goals.',
    ko: '같은 학교, 같은 학과에서 함께 공부하며 프로젝트 과제 뿐만 아니라 개발 동아리 활동 등 같은 개발자의 길을 걸어온 친구입니다. 도열이는 개발에 대한 깊은 열정, 새로운 분야에 도전하는 적극적인 자세, 그리고 목표를 향해 나아갈 수 있는 자신감을 갖춘 친구였습니다. 특히 스스로 아이디어를 고민하는 능동적인 사고와 공동 목표 개선을 위해 먼저 제안할 수 있는 적극적인 태도를 통해 협업 시너지를 이끌어내며 개발 생산성을 높일 줄 아는 개발자입니다.',
  },
  image: {
    src: 'people/daeeuihong.jpeg',
    alt: { en: 'Daeeui Hong', ko: '홍대의' },
  },
};

export const references: Entry[] = [
  solYou,
  seungbinJeong,
  dayHong,
];
