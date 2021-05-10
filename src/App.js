import './App.css';
import HeadLine from './components/HeadLine';
import Navbar from './components/Navbar';
import About from './components/About';
import TechStack from './components/TechStack';
import WorkExperience from './components/WorkExperience';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <HeadLine />
      <About />
      <TechStack />
      <WorkExperience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
