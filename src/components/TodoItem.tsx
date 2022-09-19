import { useStore } from "../store";
import { SmallButton } from "./UI/SmallButton";
import { TodoItemWrapper } from "./UI/TodoItemWrapper";

interface TodoItemInteface {
  id: number;
  description: string;
  isDone: boolean;
}

export function TodoItem({ id, description, isDone }: TodoItemInteface) {
  const removeSingleTodo = useStore((state) => state.removeSingleTodo);
  const toggleSingleTodo = useStore((state) => state.toggleSingleTodo);

  return (
    <TodoItemWrapper text={description} isDone={isDone}>
      <SmallButton
        imageSrc={`/icons/check.svg`}
        alt="Mark task as done icon"
        onClick={() => toggleSingleTodo(id)}
      />
      <SmallButton
        imageSrc={`icons/trash.svg`}
        alt="Remove task from list icon"
        onClick={() => removeSingleTodo(id)}
      />
    </TodoItemWrapper>
  );
}
