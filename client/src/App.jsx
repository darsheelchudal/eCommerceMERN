import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1 className="text font-bold underline">Hello world!</h1>
    <Footer />
    </>
  );
}

export default App;
