import { config } from './config';

export const getTodoListService = async () => {
  return await fetch(`${config.BASE_URL}/tasks`)
    .then(response => response.json())
    .then((response: any) => Promise.resolve(response))
    .catch((error: any) => Promise.reject(error));
}