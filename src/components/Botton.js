import { useState } from "react";

const Button = (props) => {
  const [numOfClicks, SetNumOfClicks] = useState(0);

  const handleClick = () => {
    SetNumOfClicks(numOfClicks + 1);
    props.increamentNumOfClicks();
  };

  return (
    <div>
      <button onClick={handleClick}>{props.title}</button>
      <span>{numOfClicks} Times! </span>
    </div>
  );
};

export default Button;
