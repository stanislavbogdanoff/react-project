import { useState } from "react";
import Counter from "./components/Counter/Counter";
import Button from "./components/Button/Button";
import PersonsList from "./components/PersonsList/PersonsList";

const personData = [
  {
    id: "asdfasdfasdfasdfasdfasdf",
    name: "John",
    age: 24,
  },
  {
    name: "Jim",
    age: 22,
  },
  {
    name: "Pete",
    age: 35,
  },
  {
    name: "Pete",
    age: 35,
  },
  {
    name: "Pete",
    age: 35,
  },
  {
    name: "Pete",
    age: 35,
  },
];

function App() {
  const [count, setCount] = useState(0);

  console.log(count, "состояние компонента");

  return (
    <div>
      <h1>My react app</h1>
      <PersonsList data={personData} />
      <div>
        <Button changeCountState={setCount} countState={count} />
        <Counter counterNum={count} someString={"some string"} />
        <button
          onClick={() =>
            setCount((count) => {
              return count - 1;
            })
          }
        >
          - 1
        </button>
      </div>
      <h3>
        {/* ternary operator */}
        {count % 2 === 0 ? <i>The number is even</i> : <i>The number is odd</i>}
      </h3>
    </div>
  );
}

export default App;
