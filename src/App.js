// import logo from "./logo.svg";

import { Register } from "./register/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./login/login";
import Homepage from "./homepage/homepage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
      {/* <Register /> */}
    </div>
  );
}

export default App;
