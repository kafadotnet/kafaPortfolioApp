import './mainmin.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import Stacks from './pages/Stacks';
import Portfolio from './pages/Portfolio';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< HomePage />} />
          <Route path='/about-me' element={< AboutMe />} />
          <Route path='/stacks' element={<Stacks />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/testimonials' element={<TestimonialsPage />} />
          <Route path='/contact-me' element={<ContactPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
