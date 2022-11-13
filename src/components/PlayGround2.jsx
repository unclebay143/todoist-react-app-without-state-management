import React, { useState } from "react";
import "./playground-2.css";

const PlayGround2 = () => {
  const [counter, setCounter] = useState(200);

  function markAsRead() {
    setCounter(0);
  }

  function markAsUnRead() {
    setCounter(200);
  }

  return (
    <>
      <section className='container-fluid'>
        <div className='mb-3 playground-2-container bg-danger text-warning'>
          PlayGround2 2
        </div>

        <button type='button' className='btn btn-primary position-relative'>
          Inbox
          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
            {counter - 50}

            {counter > 1 ? "+" : null}

            <span className='visually-hidden'>unread messages</span>
          </span>
        </button>

        <button className='btn btn-danger mx-4' onClick={() => markAsRead()}>
          mark as read
        </button>
        <button className='btn btn-success mx-4' onClick={() => markAsUnRead()}>
          mark as Unread
        </button>

        <div className='mt-3'>
          <div className='alert alert-primary' role='alert'>
            A simple primary alert—check it out!
          </div>
          <div className='alert alert-secondary' role='alert'>
            A simple secondary alert—check it out!
          </div>
          <div className='alert alert-success' role='alert'>
            A simple success alert—check it out!
          </div>
          <div className='alert alert-danger' role='alert'>
            A simple danger alert—check it out!
          </div>
          <div className='alert alert-warning' role='alert'>
            A simple warning alert—check it out!
          </div>
          <div className='alert alert-info' role='alert'>
            A simple info alert—check it out!
          </div>
          <div className='alert alert-light' role='alert'>
            A simple light alert—check it out!
          </div>
          <div className='alert alert-dark' role='alert'>
            A simple dark alert—check it out!
          </div>
        </div>

        <div style={{ width: "250px", margin: "0 auto" }}>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='name@example.com'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlTextarea1' className='form-label'>
              Example textarea
            </label>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows={3}
              defaultValue={""}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PlayGround2;
