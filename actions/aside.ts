import { UserProps } from "@/types/user.interface";

export const getPopularHashtags = async (): Promise<string[]> => {
   const res = await fetch(`http://localhost:4000/api/posts/popularHashtags`, {next: {
        revalidate: 0,
    },});

    if (!res.ok) {
      throw new Error('Failed to fetch hashtags');
    }

    return res.json()
}


export const getActiveUsers = async():Promise<UserProps[]> => {
    const res = await fetch(`http://localhost:4000/api/users/activeUsers`, {
      next: {
        revalidate: 0,
      },
      
    });

    if (!res.ok) {
      throw new Error('Failed to fetch hashtags');
    }

    return res.json();
}