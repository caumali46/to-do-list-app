import { useEffect } from "react";
import { TodosList } from "./components/TodosList";
import { Title } from "./components/UI/Title";
import { NewTodoControls } from "./components/NewTodoControls";
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
        title="What do you have to do today?"
        subtitle="Add your tasks"
      />
      <NewTodoControls />
      <TodosList />
    </div>
  );
} 