import axios, { AxiosError, AxiosResponse } from 'axios';
import { Count, FetchCount } from '~/domain/count';

export const httpClient = axios.create({
  baseURL: `${process.env.appUrl}/api`,
  timeout: 5000
});

export const fetchCount = (): Promise<FetchCount> => {
  return httpClient
    .get<Count>('/counts')
    .then((axiosResponse: AxiosResponse) => {
      return Promise.resolve(axiosResponse.data);
    })
    .catch((axiosError: AxiosError) => {
      return Promise.reject(axiosError);
    });
};
