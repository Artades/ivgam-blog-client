import axios from "@/http/axios";
import { UserProps } from "@/types/user.interface";

export const getUserByEmail = async (
 userEmail: string
): Promise<UserProps> => {
  return (await axios.get(`/users/findOneByEmail/${userEmail}`)).data;
};


export const updateProfilePicture = async (id: number, profilePicture: string):Promise<{success: boolean}> => {
    return (await axios.patch(`/users/profilePicture/`, {id, profilePicture})).data
}