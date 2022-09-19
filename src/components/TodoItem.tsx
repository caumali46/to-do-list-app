import { useStore } from "../store";
import { SmallButton } from "./shared/SmallButton";
import { TodoItemWrapper } from "./shared/TodoItemWrapper";
import toast from 'react-hot-toast';

import { completeTodoService, deleteTodoService } from '../utils/task.services';

interface TodoItemInteface {
  id: number;
  description: string;
  isDone: boolean;
}

export function TodoItem({ id, description, isDone }: TodoItemInteface) {
  const todos = useStore((state) => state.todos);
  const removeSingleTodo = useStore((state) => state.removeSingleTodo);
  const toggleSingleTodo = useStore((state) => state.toggleSingleTodo);

  // Mark Todo as completed
  const markAsDoneAsyncAction = async (id: number) => {
    const getTodo = todos.filter((todo: any) => todo.id === id);
    if (getTodo?.length) {
      const todo = getTodo[0];
      toggleSingleTodo(id);
      return await completeTodoService(id, { is_completed: !todo?.isDone })
      .then((res: any) => { toast.success('Successfully marked task as complete!'); })
      .catch((e: any) => { toast.error(e?.message); });
    }
  }

  const deleteTodoAsyncAction = async (id: number) => {
    if (id) {
      removeSingleTodo(id);
      return await deleteTodoService(id)
        .then((res: any) => { toast.success('Successfully removed task!'); })
        .catch((e: any) => { toast.error(e?.message); });
    }
  }

  return (
    <TodoItemWrapper text={description} isDone={isDone}>
      <SmallButton
        imageSrc={`/icons/check.svg`}
        alt="Mark task as done icon"
        onClick={() => markAsDoneAsyncAction(id)}
      />
      <SmallButton
        imageSrc={`icons/trash.svg`}
        alt="Remove task from list icon"
        onClick={() => deleteTodoAsyncAction(id)}
      />
    </TodoItemWrapper>
  );
}
