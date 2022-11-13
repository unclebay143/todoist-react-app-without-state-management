import React from "react";
import { ComponentFour } from "./ComponentFour";

export const ComponentThree = (props) => {
  return (
    <div>
      ComponentThree
      <ComponentFour
        greetingsForComponentFour={props.greetingsForComponentThree}
      />
    </div>
  );
};
