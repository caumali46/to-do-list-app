import create from "zustand";
import {
  TodoInterface,
  getAllTodo,
  addNewTodo,
  toggleSingleTodo,
  removeSingleTodo

} from './reducer';

// Interfaces
// export interface TodoInterface {
//   id: number;
//   description: string;
//   isDone: boolean;
// }

export interface StoreInterface {
  todos: TodoInterface[];
  inputValue: string;
  getAllTodo: (todos: any) => void;
  addNewTodo: () => void;
  setInputValue: (text: string) => void;
  toggleSingleTodo: (id: number) => void;
  removeSingleTodo: (id: number) => void;
}

const defaultTodos: TodoInterface[] = [
  { id: 1, description: "Prepare Breakfast", isDone: false },
];


// Reducers
// const getAllTodo = (todos: TodoInterface[]): TodoInterface[] => {
//   return [...todos];
// }
// const addNewTodo = (todos: TodoInterface[], description: string): TodoInterface[] => {
//   if (description.trim() !== "")
//     return [
//       ...todos,
//       {
//         id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
//         description,
//         isDone: false,
//       },
//     ];
//   return todos;
// }

// const toggleSingleTodo = (todos: TodoInterface[], id: number): TodoInterface[] => {
//   return todos.map((todo) => ({
//     ...todo,
//     isDone: todo.id === id ? !todo.isDone : todo.isDone,
//   }));
// }

// const removeSingleTodo = (todos: TodoInterface[], id: number): TodoInterface[] => {
//   return todos.filter((todo) => todo.id !== id);
// }

// Store
export const useStore = create<StoreInterface>((set) => {
  return {
    todos: defaultTodos,
    inputValue: "",
    getAllTodo(todos: any) {
      set((state: StoreInterface) => ({
        ...state,
        todos: getAllTodo(todos),
      }));
    },
    addNewTodo() {
      set((state: StoreInterface) => ({
        ...state,
        inputValue: "",
        todos: addNewTodo(state.todos, state.inputValue),
      }));
    },
    setInputValue(text) {
      set((state: StoreInterface) => ({
        ...state,
        inputValue: text,
      }));
    },
    toggleSingleTodo(id: number) {
      set((state: StoreInterface) => ({
        ...state,
        todos: toggleSingleTodo(state.todos, id),
      }));
    },
    removeSingleTodo(id: number) {
      set((state: StoreInterface) => ({
        ...state,
        todos: removeSingleTodo(state.todos, id),
      }));
    },
  };
});
