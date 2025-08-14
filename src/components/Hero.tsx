import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Button } from '../styles/GlobalStyles';
import { personalInfo } from '../data/portfolioData';
import { Download, Mail, ChevronDown } from 'lucide-react';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: ${({ theme }) => theme.colors.background};
  background-image: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.primaryDark} 100%);
  overflow: hidden;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    min-height: 100vh;
    padding: 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 100%;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;
    line-height: 1.1;
  }
`;

const NameHighlight = styled.span`
  color: white;
  font-weight: 700;
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 3rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 500px;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    max-width: 100%;
    margin: 0 auto 2rem;
    padding: 0 1rem;
    line-height: 1.5;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 0 1rem;
  }
`;

const HeroButton = styled(Button)`
  background: white;
  color: #3b82f6;
  border: 2px solid transparent;

  &:hover {
    background: transparent;
    color: white;
    border-color: white;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
    padding: 1rem 1.5rem;
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: white;
  border: 2px solid white;

  &:hover {
    background: white;
    color: #3b82f6;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
    padding: 1rem 1.5rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 480px) {
    bottom: 1rem;
  }
`;

const ScrollText = styled.span`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/documents/Lasindu_Themiya.pdf';
    link.download = 'Lasindu_Themiya_Resume.pdf';
    link.click();
  };

  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer id="home">
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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {personalInfo.title}
          </HeroSubtitle>

          <HeroDescription
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {personalInfo.bio}
          </HeroDescription>

          <HeroButtons
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <HeroButton onClick={handleDownloadCV}>
              <Download size={20} />
              Download Resume
            </HeroButton>
            <SecondaryButton onClick={handleScrollToContact}>
              <Mail size={20} />
              Get In Touch
            </SecondaryButton>
          </HeroButtons>
        </HeroContent>
      </Container>

      <ScrollIndicator
        onClick={handleScrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1, delay: 1.5 }}
        whileHover={{ opacity: 1 }}
      >
        <ScrollText>Scroll Down</ScrollText>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;