import { useEffect } from "react";
import { TodosList } from "./components/TodosList";
import { Title } from "./components/shared/Title";
import { AddNewTodo } from "./components/AddNewTodo";
import { getTodoListService } from './utils/task.services';
import { useStore } from "./store";


export default function App() {
  const getAllTodo = useStore((state) => state.getAllTodo);

  useEffect(() => {
    const fetchAllTodos = async () => {
      return await getTodoListService().then((res: any) => {
        if (res?.data) {
          getAllTodo(res?.data);
        }
      });
    }
    fetchAllTodos();
  });
  
  return (
    <div className="mx-auto mt-16 mb-12 max-w-2xl p-6 sm:mt-24">
      <Title
        title="What do you need to do?"
        subtitle="What is your main focus for today"
      />
      <AddNewTodo />
      <TodosList />
    </div>
  );
} 