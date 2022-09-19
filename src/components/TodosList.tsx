import { TodoItem } from "./TodoItem";
import { Message } from "./UI/Message";
import { useStore } from "../store";

export function TodosList() {
  const todos = useStore((state) => state.todos);

  return (
    <>
      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
      ) : (
        <Message text="You don't have any tasks anymore :(" />
      )}
    </>
  );
}
