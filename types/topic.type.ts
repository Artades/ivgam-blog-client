

export const topics = {
  science: {
    value: 'наука',
    color: 'purple',
  },
  learning: {
    value: 'обучение',
    color: 'green',
  },
  life: {
    value: 'жизнь',
    color: 'teal',
  },
  spooky: {
    value: 'жуткое',
    color: 'orange',
  },
  fact: {
    value: 'факт',
    color: 'yellow',
  },
  news: {
    value: 'новости',
    color: 'white',
  },
  hilarious: {
    value: 'смешное',
    color: 'red',
  },
  greeting: {
    value: 'приветствие',
    color: '#57CEEB',
  },
  space: {
    value: 'космос',
    color: 'gray',
  },
  "video-games": {
    value: 'видео игры',
    color: 'red',
  },
} as const;

export type TopicKey = keyof typeof topics;
export type TopicValue = (typeof topics)[TopicKey]['value'];
export type TopicColor = (typeof topics)[TopicKey]['color'];
