import { useState } from 'react';
import { useStore } from "../store";
import { Header } from "./shared/Header";
import { Input } from "./shared/Input";
import { Button } from "./shared/Button";

import { addNewTodoService } from '../utils/task.services';


export function AddNewTodo() {
  const inputValue = useStore((state) => state.inputValue);
  const addNewTodo = useStore((state) => state.addNewTodo);
  const setInputValue = useStore((state) => state.setInputValue);

  const [processingNewTodo, setProcessingNewTodo] = useState<boolean>(false);
  
  const addNewTodoAsyncAction = async () =>
  {
    if (inputValue) {
      addNewTodo();
      setProcessingNewTodo(true);
      const dataObject = { description: inputValue };

      return await addNewTodoService(dataObject)
        .then((res: any) => { })
        .finally(() => {
          setProcessingNewTodo(false);
        });
    }
  }

  return (
    <>
      <Header>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button children="Add new task" onClick={addNewTodoAsyncAction} />
      </Header>
    </>
  );
}
