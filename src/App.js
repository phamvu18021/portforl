
import './App.css';
import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
