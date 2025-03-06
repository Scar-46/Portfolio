import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Layout from './components/Layout';
import Portfolio from './components/Portfolio';
import Toggle from './components/Toggle';
import { useState } from 'react';
import './App.scss';

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}></Toggle>
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
      <section id="portfolio" className="section">
        <Portfolio />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
    </div>
  );
}

export default App;
