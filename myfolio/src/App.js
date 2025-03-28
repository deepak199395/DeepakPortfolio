import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Education from './Components/Education';
import Project from './Components/Project';
import About from './Components/About.js';
import Experince from './Components/Experince.js';
import Contacts from './Components/Contacts.js';
import TechnologyStack from './Components/TeachnologyStack.js';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/experince" element={<Experince/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/teachnologyStack" element={<TechnologyStack/>}/>
   </Routes>
  </BrowserRouter>
  )
}

export default App

