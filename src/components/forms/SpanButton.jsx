import React from "react";

export const SpanButton = ({ label, classname, func }) => {
  return (
    <span onClick={() => func()} className={classname}>
      {label}
    </span>
  );
};
