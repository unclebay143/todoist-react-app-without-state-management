import React from "react";
import { Formik, Field } from "formik";
import LoginSchema from "../pages/utils/schema/login-schema";

export const Login = () => {
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
          cpassword: "",
          email: "",
          stack: "",
        }}
        // validationSchema
        validationSchema={LoginSchema}
        // validate
        // validate={(values) => {
        //   const { username, password, stack, email } = values;
        //   const errors = {};
        //   if (!username) errors.username = "Username cannot be empty";
        //   if (!password) errors.password = "Password cannot be empty";
        //   if (!email) errors.email = "Email cannot be empty";
        //   if (!stack) errors.stack = "Stack cannot be empty";
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const { username, cpassword, password, stack, email } = values;
          setSubmitting(true);
          console.log("submitting form");
          console.log(
            `${username} - ${password} - ${email}and your stack is ${stack}`
          );

          setTimeout(() => {
            setSubmitting(false);
            console.log("form submitted");
            resetForm();
          }, 4000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleReset,
          isSubmitting,
        }) => (
          <React.Fragment>
            <pre>{JSON.stringify(values, 2, null)}</pre>
            <pre>{JSON.stringify(errors, 2, null)}</pre>
            <form>
              <input
                type='text'
                placeholder='Enter username'
                name='username'
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && touched.username && <p>{errors.username}</p>}

              <br />
              <input
                type='password'
                placeholder='Enter password'
                name='password'
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && touched.password && <p>{errors.password}</p>}
              <br />
              <input
                type='password'
                placeholder='Confirm password'
                name='cpassword'
                value={values.cpassword}
                onChange={handleChange}
              />
              {errors.cpassword && touched.cpassword && (
                <p>{errors.cpassword}</p>
              )}
              <br />

              <input
                type={"email"}
                placeholder='Enter email address'
                name='email'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && touched.email && <p>{errors.email}</p>}
              <br />

              <Field as='select' name='stack'>
                <option value=''>Select Stack</option>
                <option value='backend'>Backend</option>
                <option value='frontend'>Frontend</option>
                <option value='Devops'>Devops</option>
              </Field>

              {errors.stack && touched.stack && <p>{errors.stack}</p>}

              <br />
              <button
                disabled={isSubmitting}
                type='button'
                onClick={handleSubmit}
              >
                {isSubmitting ? "Loading" : "Login"}
              </button>
              {/* Reset form */}
              <button type='reset' onClick={handleReset}>
                Reset form
              </button>
            </form>
            {isSubmitting ? (
              <h3>Form is submitting, please don't close this window!!!</h3>
            ) : null}

            {values.username && <p> Your username is: {values.username}</p>}
            {values.password && (
              <p> Your password is: {values.password.slice(0, 3)}***</p>
            )}
          </React.Fragment>
        )}
      </Formik>
    </>
  );
};
