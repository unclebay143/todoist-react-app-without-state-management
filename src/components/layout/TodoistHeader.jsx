import React from "react";
import H2 from "../typography/H2";
import { HeaderLinks } from "./HeaderLinks";
import AddTodoForm from "../forms/AddTodoForm";
import EditTodoForm from "../forms/EditTodoForm";

const TodoistHeader = ({
  hideForm,
  todos,
  fetchTodos,
  isEditMode,
  setIsEditMode,
  editTodo,
  todoToEdit,
}) => {
  console.log("TodoistHeader", todos);

  return (
    <>
      <header className='header'>
        <H2 text={"Todoist"} styles={{ margin: 5 }} />
        {hideForm ? null : (
          <React.Fragment>
            {isEditMode ? (
              <EditTodoForm
                setIsEditMode={setIsEditMode}
                todoToEdit={todoToEdit}
                editTodo={editTodo}
                fetchTodos={fetchTodos}
              />
            ) : (
              <AddTodoForm fetchTodos={fetchTodos} />
            )}
          </React.Fragment>
        )}
      </header>
      <HeaderLinks />
    </>
  );
};

export default TodoistHeader;
