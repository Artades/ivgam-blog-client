import axios from '@/http/axios';
import { CommentProps, CreateCommentDto } from '@/types/comment.interface';

export const createComment = async (createCommentDto: CreateCommentDto): Promise<{ success: boolean }> => {
    return (await axios.post(`/comments/create/`, createCommentDto)).data;
}

export const getAllComments = async (postId: number): Promise<CommentProps[]> => {
    return (await axios.get(`/comments/getAll/${postId}`)).data;
}