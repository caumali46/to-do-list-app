
// Interfaces
export interface TodoInterface {
  id: number;
  description: string;
  isDone: boolean;
}

// Reducers
export const getAllTodo = (todos: TodoInterface[]): TodoInterface[] => {
  return [...todos.map((todo: any) => {
    todo.isDone = todo.is_completed === 1 ? true: false;
    return todo;
  })];
}

export const addNewTodo = (todos: TodoInterface[], description: string): TodoInterface[] => {
  if (description.trim() !== "")
    return [
      ...todos,
      {
        id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
        description,
        isDone: false,
      },
    ];
  return todos;
}

export const toggleSingleTodo = (todos: TodoInterface[], id: number): TodoInterface[] => {
  return todos.map((todo) => ({
    ...todo,
    isDone: todo.id === id ? !todo.isDone : todo.isDone,
  }));
}

export const removeSingleTodo = (todos: TodoInterface[], id: number): TodoInterface[] => {
  return todos.filter((todo) => todo.id !== id);
}