import './App.css';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';

function App() {
  return (
    <div className="App">
      <Project1 />
      <Project2 />
      <Project3 />
    </div>
  );
}

export default App;

// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Project1 from './components/Project1';
// import Project2 from './components/Project2';
// import Project3 from './components/Project3';

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route exact path='/projects' element={<Project1/>}/>
//         <Route exact path='/projects' element={<Project2/>}/>
//         <Route exact path='/projects' element={<Project3/>}/>
//       </Routes>
//     </div>
//   );
// }

// export default App;
