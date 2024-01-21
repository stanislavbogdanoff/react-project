import { useEffect } from "react";
import "./Counter.css";

const Counter = ({ counterNum, someString }) => {
  useEffect(() => {
    if (counterNum % 2 === 0) {
      console.log("Четное");
    } else {
      console.log("Нечетное");
    }
  }, [counterNum, someString]);

  return (
    <h2>
      The current counter is:
      <span className={`counter ${counterNum % 2 === 0 ? "red" : "blue"}`}>
        {counterNum}
      </span>
    </h2>
  );
};

export default Counter;
