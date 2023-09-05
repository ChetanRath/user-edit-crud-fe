export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  active: boolean;
  nickname: string;
  address: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
}

export interface AddNewUserParams {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  active?: boolean;
  nickname?: string;
  address?: string;
  phoneNumber?: string;
}

export interface UpateUserParams {
  first_name?: string;
  last_name?: string;
  active?: boolean;
  nickname?: string;
  address?: string;
  phoneNumber?: string;
}
