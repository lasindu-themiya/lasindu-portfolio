import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, arcaneTheme } from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveTerminal from './components/InteractiveTerminal';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <ThemeProvider theme={arcaneTheme}>
      <GlobalStyle />
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <InteractiveTerminal />
        <Analytics />
      </div>
    </ThemeProvider>
  );
}

export default App;
