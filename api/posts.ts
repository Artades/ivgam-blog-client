import axios from '@/http/axios';
import { SuggestDTO } from '@/types/suggest.interface';

export const suggest = async (
  credentials: SuggestDTO,
): Promise<{success: boolean}> => {
  return (await axios.post('/posts/suggestPost', credentials)).data;
};
