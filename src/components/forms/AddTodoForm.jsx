import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import TodoInput from "./TodoInput";

const AddTodoForm = ({ fetchTodos }) => {
  // Create an addTodo function
  const addTodo = async (title) => {
    const newTodo = { title };
    const response = await axios.post("http://localhost:8080/add", newTodo, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    fetchTodos(); // refetch the todos to update ui

    toast.success("New Todo Item Added", {
      position: "top-center",
    });

    return response;
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={{ title: "" }}
        onSubmit={(values, { setSubmitting }) => {
          addTodo(values.title).then((response) => {
            setSubmitting(false);
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <>
            {/* <pre>{JSON.stringify({ values }, 2, null)}</pre> */}
            <form onSubmit={handleSubmit}>
              <TodoInput
                name='title'
                handleChange={handleChange}
                value={values.title}
              />

              <button type='submit' className='add-btn'>
                {isSubmitting ? "Adding" : "Add"}
              </button>
            </form>
          </>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default AddTodoForm;
