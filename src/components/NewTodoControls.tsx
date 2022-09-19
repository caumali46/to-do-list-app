import { useStore } from "../store";
import { Header } from "./UI/Header";
import { Input } from "./UI/Input";
import { Button } from "./UI/Button";

export function NewTodoControls() {
  const inputValue = useStore((state) => state.inputValue);
  const addNewTodo = useStore((state) => state.addNewTodo);
  const setInputValue = useStore((state) => state.setInputValue);

  return (
    <>
      <Header>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button children="Add new task" onClick={addNewTodo} />
      </Header>
    </>
  );
}
