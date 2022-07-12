// import Button from "./Button";
// import styled from './App.module.css';
import { useState } from "react";
/*
  function App() {
    return (
      <div>
        <h1 className={styled.title}>Welcome back!</h1>
        <Button text={"Continue"} />
      </div >
    );
  }
*/
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div >
  );
}

export default App;
