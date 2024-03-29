import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Register  from "./pages/Register/register";
import Talent from "./pages/Talent/talent";
import Enterprise from "./pages/Enterprise/enterprise";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/talent"
          element={<Talent />}
        />
        <Route
          path="/enterprise"
          element={<Enterprise />}
        />
      </Routes>
    </div>
  );
};
export default App;