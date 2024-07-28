export interface PostItemProps {
  id: number;
  title: string;
  body: string;
  dateOfCreation: string;
  dateOfUpdation: string;
  topic: string;
  hashtags: string;
  views: number;
  likesAmount: number;
  imageUrl: string;
  creator: string;
}

export type CreatePostDTO = {
  title: string;
  topic: string;
  body: string;
  hashtags: string;
  image?: any;
}

export type EditPostDTO = Omit<CreatePostDTO, "image">;