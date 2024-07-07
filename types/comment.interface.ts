
export interface CreateCommentDto {
    userId: number;
    postId: number;
    body: string
}

export interface CommentProps {
    id: number;
    postId: number;
    userId: number;
    body: string;
    likesCount: number;
    user: {
        id: number;
        name: string;
        email: string;
        profilePicture: string;
    };
}
