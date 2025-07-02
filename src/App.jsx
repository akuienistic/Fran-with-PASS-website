import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header.jsx';
import Body from './Body.jsx';
import AboutPass from './AboutPass.jsx';
import Contact from './Contact.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

    useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false 
    });
  }, []);
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/" element={
            <>
              <Body />
            </>
          }
        />
        <Route path="/AboutPass" element={<AboutPass/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}
export default App;
