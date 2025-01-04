import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Services } from "../pages/Services";
import { Register } from "../pages/Register";
import Login from "../pages/Login";
import ProtectedRoute from "./router/ProtectedRoute";

const App = () => {

  let loggedIn = Boolean(window.sessionStorage.getItem('loggedIn'));

  const [isAuthenticated, setIsAuthenticated] = useState(loggedIn);

  useEffect(() => {
    setIsAuthenticated(loggedIn);
  }, [loggedIn]);

  return (<>
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute isAuthenticated
          ={isAuthenticated} />} >
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="dashboard"
            element={<Dashboard logout
              ={logout} />} /> */}
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter >
  </>
  )
}
export default App;


