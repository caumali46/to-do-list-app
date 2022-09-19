import { config } from './config';

export const getTodoListService = async () => {
  return await fetch(`${config.BASE_URL}/tasks`)
    .then(response => response.json())
    .then((response: any) => Promise.resolve(response))
    .catch((error: any) => Promise.reject(error));
}

export const deleteTodoService = async (id: number) => {
  return await fetch(`${config.BASE_URL}/tasks/${id}`,
    {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then((response: any) => Promise.resolve(response))
    .catch((error: any) => Promise.reject(error));
}

export const addNewTodoService = async (dataObject: object) => {
  return await fetch(`${config.BASE_URL}`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(dataObject)
  })
  .then((response: any) => Promise.resolve(response))
  .catch((error: any) => Promise.reject(error));
}

export const completeTodoService = async (id: number, dataObject: object) => {
  return fetch(`${config.BASE_URL}`,{
      method:'PUT',
      headers:{ 'Content-Type':'application/json' },
      body:JSON.stringify(dataObject)
    })
    .then(response => response.json())
    .then((response: any) => Promise.resolve(response))
    .catch((error: any) => Promise.reject(error));
}