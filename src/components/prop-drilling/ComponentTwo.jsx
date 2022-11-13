import React from "react";
import { ComponentThree } from "./ComponentThree";

export const ComponentTwo = (props) => {
  const { greetingsForComponentTwo } = props;

  return (
    <div>
      ComponentTwo
      <ComponentThree greetingsForComponentThree={greetingsForComponentTwo} />
    </div>
  );
};
