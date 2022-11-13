import React from "react";

const TodoActionButton = ({ classname, icon, func }) => {
  return (
    <span onClick={() => func()} className={classname}>
      {icon}
    </span>
  );
};

export default TodoActionButton;
