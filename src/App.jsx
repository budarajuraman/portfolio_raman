import React from 'react'
import { Route , Routes } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Home from '../src/pages/Home/Home'
import About from '../src/pages/About/About'
import Projects from '../src/pages/Projects/Projects'
import Contact from '../src/pages/Contact/Contact'
import Container from '../src/components/Container/Container'
import './App.css'


const App = () => {

  const timelineItems = [
    {
      category: { tag: `Bachelor's of Engineering`, color: '#2196F3' },
      date: '2021 - Present',
      text: 'Pursuing ECE at Chaitanya Bharathi Institute of Technology',
      score : '9.48 CGPA'
    },
    {
      category: { tag: 'Intermediate', color: '#2196F3' },
      date: '2019 - 2021',
      text: 'Completed at Sri Chaitanya Junior College',
      score : '98.1%'
      
    },
    {
      category: { tag: 'X', color: '#2196F3' },
      date: '2018 - 2019',
      text: 'Completed at Sri Chaitanya techno school',
      score : '10 GPA'
    },
  ];

  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/education' element={<Container timelineItems={timelineItems} />} />
        </Routes>
      </div>
    </>
    

  )
}

export default App
