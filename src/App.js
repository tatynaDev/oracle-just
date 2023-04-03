import React from "react";
import { Routes, Route} from 'react-router-dom'
import Main from "./pages/mainPage";
import './index.scss'
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import Contacts from "./pages/Contacts/Contacts";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/services" element={<ServicePage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </div>
  );
}

export default App;
