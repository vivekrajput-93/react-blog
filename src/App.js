import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { CreatePost } from "./pages/CreatePost";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase";
import { Button } from "@mantine/core";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home </Link>
          {!isAuth ? (
            <Link to="/login">Login</Link>
          ) : (
            <>
              <Link to="/createPost"> Post</Link>
              <Button onClick={signUserOut} variant="light" color="gray">
                Log Out
              </Button>
            </>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/createPost" element={<CreatePost isAuth={isAuth} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
