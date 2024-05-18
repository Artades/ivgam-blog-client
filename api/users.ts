import axios from "@/http/axios";

export const getUserByEmail = async (
 userEmail: string
): Promise<UserProps> => {
  return (await axios.post(`/users/findOneByEmail`)).data;
};
