import "./App.css";
import React, { useEffect, useState } from "react";
import Todoist from "./pages/todoist/Todoist";
import { TodoDetails } from "./pages/todo-details/TodoDetails";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { ContactUs } from "./pages/contact-us/ContactUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:8080/todos");
    console.log(response);
    setTodos(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <Routes>
        <Route
          index
          element={
            <Todoist
              fetchTodos={fetchTodos}
              isLoading={isLoading}
              todos={todos}
              settodos={setTodos}
            />
          }
        />
        <Route path=':todo_id' element={<TodoDetails todos={todos} />} />
        <Route path='contact' element={<ContactUs />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
