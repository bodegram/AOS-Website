import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../app/home/homepage";
import About from "../app/home/about/About";
import Contact from "../app/home/contact/Contact";

export default function Navigator() {
  return (
    <>
     
        <Routes>
          <Route path="" element={ <HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      
    </>
  );
}
