import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { DotNutSpinner } from "../Loader/DotNutSpinner";
import { ConfirmationBox } from "../modal/ConfirmationBox";
import TodoListCard from "./TodoListCard";

export const TodoListContainer = ({
  todos,
  settodos,
  isLoading,
  fetchTodos,
  setIsEditMode,
  editTodo,
  setTodoToEdit,
}) => {
  console.log("TodoListContainers", todos);

  const [isDeleting, setIsDeleting] = useState(false);
  const [todoIdToDelete, setTodoIdToDelete] = useState(null);

  function deleteTodo() {
    const response = axios
      .delete(`http://localhost:8080/delete/${todoIdToDelete}`)
      .then((response) => {
        fetchTodos().then(() => {
          setIsDeleting(false);
          toast.success("Todo Deleted Successfully");
        }); //call the function that fetches the todos

        return response;
      })
      .catch((error) => {
        toast.error("Unable to delete todo");
        console.log(error);
      });

    return response;
  }

  if (isDeleting) {
    return (
      <ConfirmationBox
        title='Deleting a todo'
        brief='Are you sure you want to delete this todo?'
        handleOk={deleteTodo}
        handleCancel={() => setIsDeleting(false)}
      />
    );
  }

  return (
    <>
      <ul id='todo-list-container'>
        {isLoading && <DotNutSpinner />}

        {!isLoading && todos.length === 0 && (
          <p style={{ textAlign: "center" }}>no records</p>
        )}

        {todos.map((todo) => {
          return (
            <TodoListCard
              setIsDeleting={setIsDeleting}
              setTodoIdToDelete={setTodoIdToDelete}
              fetchTodos={fetchTodos}
              todo={todo}
              key={todo.id}
              todos={todos}
              settodos={settodos}
              setIsEditMode={setIsEditMode}
              setTodoToEdit={setTodoToEdit}
            />
          );
        })}
      </ul>
    </>
  );
};
