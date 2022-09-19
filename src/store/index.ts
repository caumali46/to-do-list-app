import create from "zustand";
import {
  TodoInterface,
  getAllTodo,
  addNewTodo,
  toggleSingleTodo,
  removeSingleTodo

} from './reducer';

// Interfaces
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
