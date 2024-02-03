import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  const handelCount = () => {
    setNumber((num) => num + 1);
    setNumber((num) => num + 1);
    setNumber((num) => num + 1);
  };
  console.log(number);
  
  return (
    <>
      <h1>{number}</h1>
      <button onClick={handelCount}> +3 </button>
    </>
  );
};
