import React from "react";
import Navbar from './layouts/Navbar'
import LandingPage from './pages/LandingPage'
import AboutMePage from './pages/AboutMePage'
import SkillsPage from './pages/SkillsPage'
import ProjectPage from './pages/ProjectPage'
import ResumePage from './pages/ResumePage'
import Footer from './components/home/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/aboutme" component={AboutMePage} />
          <Route exact path="/skills" component={SkillsPage} />
          <Route exact path="/project" component={ProjectPage} />
          <Route exact path="/resume" component={ResumePage}/>
          <Route exact path="/project" component={ProjectPage}/>
        </Switch> 
      <Footer/>
    </Router>
  );
}

export default App;


