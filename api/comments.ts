import axios from '@/http/axios';
import { CommentProps, CreateCommentDto } from '@/types/comment.interface';

export const createComment = async (createCommentDto: CreateCommentDto): Promise<{ success: boolean }> => {
    return (await axios.post(`/comments/create/`, createCommentDto)).data;
}

export const getAllComments = async (dto: { postId: number; page: number }): Promise<{comments: CommentProps[], amount: number}> => {
    const { postId, page } = dto;

      const response = await axios.get(`/comments/getAll/`, {
        params: {
          postId,
          page,
        },
      });
  
      return response.data;
    
  };