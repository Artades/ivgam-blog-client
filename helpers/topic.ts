import { topics, TopicValue } from '@/types/topic.type';

export class Topic {
  private readonly topic: TopicValue;

  constructor(topic: TopicValue) {
    this.topic = topic;
  }

  public getColor(): string {
    const color =
      Object.values(topics).find((t) => t.value === this.topic)?.color ??
      '#fff';
    return color;
  }
}
