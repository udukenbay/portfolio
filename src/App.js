import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Resume from './components/Resume/Resume';
import MainPage from './components/MainPage/MainPage';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
       <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route exact path="*" element={<MainPage />}></Route>
          <Route exact path="/aboutme" element={<AboutMe />}></Route>
          <Route exact path="/resume" element={<Resume />}></Route>
          <Route exact path="/skills" element={<Skills />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/contact" element={<ContactMe />}></Route>

        </Routes>
       </Router>
      
    </>
  );
}

export default App;
