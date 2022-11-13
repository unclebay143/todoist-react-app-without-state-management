import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodoistHeader from "../../components/layout/TodoistHeader";
import axios from "axios";
import { DotNutSpinner } from "../../components/Loader/DotNutSpinner";
import { DNASpinner } from "../../components/Loader/DNASpinner";

export const TodoDetails = () => {
  const { todo_id } = useParams();
  const [todo, setTodo] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  const fetchTodos = async () => {
    const { data } = await axios.get(`http://localhost:8080/todos/${todo_id}`);
    if (data.length > 0) {
      setTodo(...data);
      setIsFetching(false);
    } else {
      setTodo(null);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todo);

  const { title, id, isCompleted } = todo || {};

  return (
    <React.Fragment>
      <section style={{ textAlign: "center" }}>
        <TodoistHeader hideForm />

        {/* {isFetching && <DotNutSpinner />} */}
        {isFetching && <DNASpinner />}

        {isFetching ||
          (todo && (
            <>
              <h2>{title.toUpperCase()}</h2>
              <h3>{id.toUpperCase()}</h3>
              <p>{isCompleted ? "Done" : "In progress"}</p>
            </>
          ))}

        {!isFetching && todo === null && (
          <>Todo with id: {todo_id} is not found</>
        )}
      </section>
    </React.Fragment>
  );
};
