//import React from 'react';
import { Routes, Route } from "react-router-dom";
import Loginform from "./Loginform.jsx";
//import Dashboard from "./Dashboard.jsx";
import SignupForm from "./SignupForm.jsx";
import FrontPage from "./frontpage.jsx";
import App from "./Dashboard.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<FrontPage/>} />
      <Route path="/login" element = {<Loginform/>} />
      <Route path="/dashboard" element={<App/>} />
      <Route path="/signup" element={<SignupForm/>} />
    </Routes>
  );
};

export default AppRouter;
