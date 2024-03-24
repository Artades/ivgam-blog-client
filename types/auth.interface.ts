export interface LoginFormDTO {
  email: string;
  password: string;
}

export type RegisterFormDTO = LoginFormDTO & {
  name: string;
};

export interface LoginResponseDTO {
  accessToken: string;
  userEmailFromToken: string;
}
export type RegisterResponseDTO = LoginResponseDTO;
