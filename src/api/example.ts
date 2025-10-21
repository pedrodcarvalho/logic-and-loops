import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';

import { api } from '@/lib/axios';

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

export const fetchUsers = async (): Promise<User[]> => {
  const response: AxiosResponse<User[]> = await api.get<User[]>(
    'https://jsonplaceholder.typicode.com/users',
  );
  return response.data;
};

export const useUsers = (): UseQueryResult<User[], Error> => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
};
