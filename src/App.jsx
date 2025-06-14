import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar'
import './index.css';
import { Hero } from './components/Hero';
import { Myself } from './components/Myself';
import Skills from './components/Skills';
import { Work } from './components/Work';
import Form from './components/Form';
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Myself/>
    <Skills/>
    <Work/>
    <Form/>
    <Footer/>
    
    
    </>

  );
}
