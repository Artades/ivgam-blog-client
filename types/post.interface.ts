export interface PostItemProps {
  id: number;
  title: string;
  body: string;
  dateOfCreation: string;
  dateOfUpdation: string;
  topic: string;
  hashtags: string[];
  views: number;
  likesAmount: number;
}