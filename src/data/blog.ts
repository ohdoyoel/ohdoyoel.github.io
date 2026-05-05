import type { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    id: 6,
    period: '260424',
    title: {
      en: 'The user-survey screen shows up unpredictably.',
      ko: 'user-survey 가 뜨다 말다 해요.',
    },
    description: {
      en: 'A race between an async fetch and component unmount.',
      ko: '비동기 fetch 와 컴포넌트 unmount 사이의 race 이야기예요.',
    },
  },
  {
    id: 1,
    period: '260410',
    title: {
      en: 'Buttons inside a <form> default to submit.',
      ko: 'form 안의 button은 기본이 submit이에요.',
    },
    description: {
      en: 'The story of an Add-tag button that kept submitting the reply form.',
      ko: '태그 추가 버튼이 답글을 제출하던 사건이에요.',
    },
  },
  {
    id: 2,
    period: '260403',
    title: {
      en: 'Kakao Maps was re-rendering forever.',
      ko: '카카오맵이 무한 리렌더링됐어요.',
    },
    description: {
      en: 'What happens when you hand an inline object to a third-party SDK.',
      ko: 'inline 객체를 SDK에 넘긴 결과예요.',
    },
  },
  {
    id: 5,
    period: '260324',
    title: {
      en: 'The bottom sheet won\'t shrink back to SMALL.',
      ko: '바텀시트가 SMALL 로 줄어들지 않아요.',
    },
    description: {
      en: 'A lesson on not trusting Object.keys insertion order.',
      ko: 'Object.keys 의 삽입 순서를 믿으면 안 되는 이유예요.',
    },
  },
  {
    id: 4,
    period: '260304',
    title: {
      en: 'An alarm I turned on in another tab wasn\'t showing up.',
      ko: '다른 탭에서 켠 알림이 보이지 않아요.',
    },
    description: {
      en: 'Subscribing to storage and visibilitychange together.',
      ko: 'storage 와 visibilitychange 를 같이 구독한 이야기예요.',
    },
  },
  {
    id: 3,
    period: '260210',
    title: {
      en: 'Blocking body scroll while dragging a progress bar.',
      ko: 'progress bar 드래그 중 body 스크롤을 막는 방법.',
    },
    description: {
      en: 'Why we left body-scroll-lock and went back to blocking touchmove ourselves.',
      ko: 'body-scroll-lock 에서 직접 touchmove 차단으로 돌아온 이유예요.',
    },
  },
  {
    id: 0,
    period: '260114',
    title: {
      en: 'Starting a Blog.',
      ko: '블로그를 시작합니다.',
    },
    description: {
      en: 'I don\'t want to write some huge article.',
      ko: '거창한 글을 쓰고 싶진 않습니다.',
    },
  },
];
