import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProfileForm from "./pages/ProfileForm";
import GeneratePlan from "./pages/GeneratePlan";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/generate" element={<GeneratePlan />} />
      </Routes>
    </BrowserRouter>
  );
}
