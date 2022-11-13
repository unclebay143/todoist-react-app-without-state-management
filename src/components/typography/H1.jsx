import React from "react";

const H1 = (props) => {
  console.log(props);
  const {
    text,
    redColor,
    blueColor,
    objectOfDetails,
    number,
    arrayOfStudents,
    labelColor,
    labelText,
    showLabel,
    children,
  } = props;

  return (
    <>
      <h1 className={`${redColor && "red-color"} ${blueColor && "blue-color"}`}>
        {text || children || "Please enter a text"}
      </h1>

      {showLabel ? (
        <label style={{ color: labelColor }}>{labelText}</label>
      ) : null}
      <br />
    </>
  );
};

export default H1;

// console.log(useState);
// const [greetingText, setGreetingText] = useState("Hello, World");
// const [TextColor, setTextColor] = useState("pink");
// const [showLabel, setShowLabel] = useState(false);

// const details = {
//   name: "unclebigbay",
//   profession: "CSE",
// };
// const students = ["bigbay", "faith", "shewa", "blessing"];

{
  /* <H1
        text={greetingText} // string
        redColor // boolean
        blueColor // boolean
        objectOfDetails={details} // object
        arrayOfStudents={students} // array
        number={1234} // number
        labelText='Moshood'
        labelColor={TextColor}
        showLabel={showLabel}
      /> 

      <button onClick={() => setGreetingText("Good Afternoon")}>
        Change Greeting Text
      </button>

      <button onClick={() => setTextColor("yellow")}>
        Change Label Text Color
      </button>

  <button onClick={() => setShowLabel(!showLabel)}>Toggle Label</button> */
}
