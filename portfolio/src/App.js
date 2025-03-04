import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Layout from './components/Layout';
import Portfolio from './components/Portfolio';
import './App.scss';

function App() {

  return (
    <div>
      <Layout />
      <section id="home" className="section">
        <Home />
      </section>
      <section id="about" className="section">
        <About />
      </section>
      <section id="experience" className="section">
        <Experience />
      </section>
      {/* <section id="portfolio" className="section">
        <Portfolio />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section> */}
    </div>
  );
}

export default App;
