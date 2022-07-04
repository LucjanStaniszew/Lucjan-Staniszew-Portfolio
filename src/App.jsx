import TopBar from './components/topbar/TopBar';
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Works from "./components/works/works";
import AboutMe from './components/Aboutme/AboutMe';
import Contact from "./components/contact/contact";
import "./app.scss";

function App() {
  return (
    <div className="app">
     <TopBar/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       <Works/>
       <AboutMe/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;