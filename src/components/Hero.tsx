import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme, Container, Button } from '../styles/GlobalStyles';
import { personalInfo } from '../data/portfolioData';
import { Icon } from './icons/IconMappings';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(135deg, #7787ccff 0%, #7a4ea5ff 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: ${theme.colors.white};
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: ${theme.spacing.md};
  line-height: 1.2;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const NameHighlight = styled.span`
  color: ${theme.colors.white};
  font-weight: 700;
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: ${theme.spacing.lg};
  opacity: 0.9;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.25rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto ${theme.spacing.xl};
  opacity: 0.9;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const HeroButton = styled(Button)`
  background: ${theme.colors.white};
  color: ${theme.colors.primary};
  border: 2px solid transparent;

  &:hover {
    background: transparent;
    color: ${theme.colors.white};
    border-color: ${theme.colors.white};
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: ${theme.colors.white};
  border: 2px solid ${theme.colors.white};

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${theme.colors.white};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const ScrollText = styled.span`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/images/particles.svg') repeat;
  opacity: 0.1;
  animation: float 20s infinite linear;

  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
    100% { transform: translateY(0px) rotate(360deg); }
  }
`;

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    // Replace with your actual CV/Resume file path
    const link = document.createElement('a');
    link.href = '/documents/Lasindu_Themiya.pdf';
    link.download = 'Lasindu_Themiya_Resume.pdf';
    link.click();
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer id="home">
      <AnimatedBackground />
      <Container>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <NameHighlight>{personalInfo.name}</NameHighlight>
          </HeroTitle>
          
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {personalInfo.title}
          </HeroSubtitle>
          
          <HeroDescription
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {personalInfo.bio}
          </HeroDescription>
          
          <HeroButtons
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <HeroButton onClick={handleScrollToProjects}>
              View My Work
            </HeroButton>
            <SecondaryButton onClick={handleDownloadCV}>
              <Icon name="FaDownload" size={20} />
              Download CV
            </SecondaryButton>
          </HeroButtons>
        </HeroContent>
      </Container>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={handleScrollToAbout}
        whileHover={{ y: 5 }}
      >
        <ScrollText>Scroll Down</ScrollText>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Icon name="FaArrowDown" size={24} />
        </motion.div>
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;