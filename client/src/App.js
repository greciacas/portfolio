import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import Projects from './screens/Projects/Projects';
import Home from './screens/Home/Home';
import About from './screens/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
