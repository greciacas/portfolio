import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './screens/Projects';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
