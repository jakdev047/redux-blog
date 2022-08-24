import React from "react";
import { ToastContainer } from "react-toastify";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/main.css";
import "./assets/css/responsive.css";

function App() {
  return (
    <div className="app">
      <h2>blog</h2>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
