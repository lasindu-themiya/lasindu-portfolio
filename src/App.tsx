import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, getTheme } from './styles/GlobalStyles';
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react";

const AppContent: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const currentTheme = getTheme(isDarkMode);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle isDarkMode={isDarkMode} />
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <Analytics />
      </div>
    </ThemeProvider>
  );
};

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

export default App;
