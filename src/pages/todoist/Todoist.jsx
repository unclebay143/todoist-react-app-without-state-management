import React, { useState } from "react";
import TodoistHeader from "../../components/layout/TodoistHeader";
import { TodoListContainer } from "../../components/todoist-layout/TodoListContainer";
import "./todoist.css";

const Todoist = ({ todos, settodos, isLoading, fetchTodos }) => {
  console.log("Todoist", todos);
  const [isEditMode, setIsEditMode] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState({});

  return (
    <React.Fragment>
      {/*  
      
      display title in input, make actual change, and http call - setIsEditMode(false)
      */}
      <TodoistHeader
        fetchTodos={fetchTodos}
        todos={todos}
        settodos={settodos}
        isEditMode={isEditMode}
        todoToEdit={todoToEdit}
        setIsEditMode={setIsEditMode}
      />

      {/* 
         detect when user clicked the edit button of a todo - setIsEditMode(true)
       */}
      <TodoListContainer
        fetchTodos={fetchTodos}
        isLoading={isLoading}
        todos={todos}
        settodos={settodos}
        setIsEditMode={setIsEditMode}
        setTodoToEdit={setTodoToEdit}
      />
    </React.Fragment>
  );
};

export default Todoist;

// convert your todoist to react.
// convert the ul to a component - TodoListContainer.

// Up to date with class demo on todo app
// Team:
// 1. React Repo
// 2. Convert 4 pages
// 3. Ensure to get familiar with the syntax
// 4. Practice
