import { useState } from "react";
import { Router, Route, Routes } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-2xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
