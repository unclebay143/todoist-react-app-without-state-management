import React, { useState } from "react";

export const PlayGroundForm = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [isSubmitting, setisSubmitting] = useState(false);

  const handleUsernameChange = (e) => {
    setusername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
  };

  const handleSubmit = () => {
    setisSubmitting(true);
    console.log("submitting form");
    console.log(`${username} - ${password}`);
    setTimeout(() => {
      setisSubmitting(false);
      console.log("form submitted");
    }, 4000);
  };

  return (
    <React.Fragment>
      <form>
        <input
          type='text'
          placeholder='Enter username'
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type='password'
          placeholder='Enter password'
          value={password}
          onChange={handlePasswordChange}
        />
        <button disabled={isSubmitting} type='button' onClick={handleSubmit}>
          {isSubmitting ? "Loading" : "Login"}
        </button>
      </form>
      {isSubmitting ? (
        <h3>Form is submitting, please don't close this window!!!</h3>
      ) : null}

      {username && <p> Your username is: {username}</p>}
      {password && <p> Your password is: {password.slice(0, 3)}***</p>}
    </React.Fragment>
  );
};
