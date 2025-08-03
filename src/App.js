import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Dashboard from "././Components/Dashboard/Dashboard";
import './App.css';
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />



        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
