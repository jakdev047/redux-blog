import React from "react";
import { ToastContainer } from "react-toastify";
import BlogPages from "./pages/blogPages";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/main.css";
import "./assets/css/responsive.css";

function App() {
  return (
    <div className="app">
      <BlogPages />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
