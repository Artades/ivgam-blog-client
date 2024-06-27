export interface LoginFormDTO {
  email: string;
  password: string;
}

export type RegisterFormDTO = LoginFormDTO & {
  name: string;
};

export interface LoginResponseDTO {
  accessToken: string;
}
export type RegisterResponseDTO = LoginResponseDTO;
