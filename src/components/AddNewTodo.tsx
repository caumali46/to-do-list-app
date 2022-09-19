import { useState } from 'react';
import { useStore } from "../store";
import { Header } from "./shared/Header";
import { Input } from "./shared/Input";
import { Button } from "./shared/Button";
import toast, { Toaster } from 'react-hot-toast';

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
        .then((res: any) => { toast.success('Successfully added new task!'); })
        .catch((e: any) => { toast.error(e?.message); })
        .finally(() => {
          setProcessingNewTodo(false);
        });
    }
  }

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
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
