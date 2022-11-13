import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TodoInput from "./TodoInput";

const EditTodoForm = ({ fetchTodos, todoToEdit, setIsEditMode }) => {
  console.log(todoToEdit);
  const { id, title } = todoToEdit;

  const editTodo = async (newTitle) => {
    console.log(id, newTitle);

    // 1. stop loading state for updating ✅
    // 2 . set isEditMode to false  ✅
    // 3. Update the UI after updating the todo ✅
    const response = await axios
      .post("http://localhost:8080/edit", {
        id,
        title: newTitle,
      })
      .then((response) => {
        setIsEditMode(false);
        fetchTodos();
        toast.success("Todo item updated successfully");
        return response;
      })
      .catch((error) => {
        console.log(error);
        toast.error("Unable to update todo item");
        return error;
      });

    return response;
  };

  return (
    <React.Fragment>
      <Formik
        enableReinitialize={true}
        initialValues={{ title: title }}
        onSubmit={(values, { setSubmitting }) => {
          editTodo(values.title).then((response) => {
            console.log(response);
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

              <button type='submit' className='edit-btn'>
                {isSubmitting ? "Updating" : "Update"}
              </button>
            </form>
          </>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default EditTodoForm;
