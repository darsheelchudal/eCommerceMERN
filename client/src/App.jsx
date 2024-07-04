import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import Login from "./components/User/Login";
import Register from "./components/User/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
