import React from "react";
import { Router } from "@reach/router";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import StudentList from "./Components/StudentList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Router>
        <HomePage path="/home" />
        <StudentList path="/students" />
      </Router>
    </div>
  );
}

export default App;
