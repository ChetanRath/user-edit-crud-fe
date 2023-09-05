import { apiClient } from "../apiClient";

import { AddNewUserParams, UpateUserParams, User } from "./userApiTypes";

export const userApi = {
  getAllUsers: async (): Promise<User[]> => {
    const users = await apiClient.get<User[]>( "/users" );
    return users.data;
  },
  getUserDetail: async ( userId: string ): Promise<User> => {
    const users = await apiClient.get<User>( `/users/${userId}}` );
    return users.data;
  },
  addUser: async ( data: AddNewUserParams ): Promise<Record<string, unknown>> => {
    return await apiClient.post( "/users/create", data );
  },
  updateUser: async ( data: UpateUserParams, userId: string ): Promise<Record<string, unknown>> => {
    return await apiClient.put( `/users/${userId}`, data );
  },
};
