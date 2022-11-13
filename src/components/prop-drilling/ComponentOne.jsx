import React, { useState } from "react";
import { ComponentTwo } from "./ComponentTwo";

export const ComponentOne = () => {
  const [greetings, setGreetings] = useState("This is the update prop");
  return (
    <div>
      ComponentOne - {greetings}
      <ComponentTwo greetingsForComponentTwo={greetings} />
    </div>
  );
};
