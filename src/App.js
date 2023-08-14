import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Page/About/About';
import Home from './Page/Home/Home';
import { Route, Routes, } from 'react-router-dom';
import Projects from './Page/Projects/Projects';
import Detail from './Page/Detail/Detail';
import Contact from './Page/Contact/Contact';
import FooterNavBar from './Components/FooterNavBar/FooterNavBar';

function App() {

  return (
    <div className="App">

        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/detail" element={<Detail />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <FooterNavBar/>
    </div>
  );
}

export default App;
