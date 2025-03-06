import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/footer/Footer.js';
import HeroSection from './components/hero-section/HeroSection.js';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
