import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import TodoActionButton from "../forms/TodoActionButton";

const TodoListCard = (props) => {
  const {
    todo,
    todos,
    settodos,
    setIsDeleting,
    setTodoIdToDelete,
    fetchTodos,
    setIsEditMode,
    setTodoToEdit,
  } = props;

  const { id, title, isCompleted } = todo;

  const [isUpdating, setIsUpdating] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTodoIdToDelete(id);
  };

  // Toggle Compete Function
  async function toggleComplete() {
    setIsUpdating(true);
    try {
      await axios.patch("http://localhost:8080/todos/" + id);
      fetchTodos();
      toast.success("Todo Status Updated");
      setIsUpdating(false);
    } catch (error) {
      toast.error("Unable to update Todo Status");
      setIsUpdating(false);
    }
  }

  const handleEditMode = () => {
    console.log(todo);
    setTodoToEdit(todo);
    setIsEditMode(true);
  };

  return (
    <>
      <li
        className={`${isCompleted && "checked"} ${
          isUpdating && "animate-pulse text-blue-600"
        }`}
      >
        {title}
        <Link to={`/${id}`} className='view-more-icon'>
          👁
        </Link>
        <TodoActionButton
          func={toggleComplete}
          classname='complete-status-icon'
          icon='✅'
        />
        <TodoActionButton
          classname='edit-icon'
          func={handleEditMode}
          icon='✍️'
        />
        <TodoActionButton func={handleDelete} classname='close' icon='🗑' />
      </li>
    </>
  );
};

{
}
export default TodoListCard;
