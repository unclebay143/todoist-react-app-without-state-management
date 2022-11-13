import React from "react";

const H2 = ({ text, styles, classname }) => {
  return (
    <h2 className={classname} style={{ styles }}>
      {text}
    </h2>
  );
};

export default H2;
