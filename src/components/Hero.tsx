import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Button } from '../styles/GlobalStyles';
import { personalInfo } from '../data/portfolioData';
import { Download, Mail, ChevronDown } from 'lucide-react';

const typingBlink = keyframes`
  0%, 100% { border-color: #00ff41; }
  50% { border-color: transparent; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const particleFloat = keyframes`
  0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-10vh) rotate(720deg); opacity: 0; }
`;

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      url('/images/arcane/hero-bg.png') center/cover no-repeat,
      linear-gradient(135deg, #0a0614 0%, #120b1e 50%, #0a0614 100%);
    opacity: 0.4;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(ellipse at 20% 50%, rgba(123, 47, 190, 0.15) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 100%, rgba(200, 155, 60, 0.08) 0%, transparent 40%);
    z-index: 1;
  }

  @media (max-width: 768px) {
    min-height: 100vh;
    padding: 0;
  }
`;

const Particle = styled.div<{ delay: number; left: number; size: number }>`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: ${({ size }) => size > 3 ? 'rgba(0, 212, 255, 0.6)' : 'rgba(123, 47, 190, 0.6)'};
  border-radius: 50%;
  left: ${({ left }) => left}%;
  animation: ${particleFloat} ${({ delay }) => 8 + delay * 2}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
  z-index: 1;
  box-shadow: 0 0 ${({ size }) => size * 2}px ${({ size }) => size > 3 ? 'rgba(0, 212, 255, 0.4)' : 'rgba(123, 47, 190, 0.4)'};
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const TerminalBox = styled(motion.div)`
  background: rgba(10, 6, 20, 0.85);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 8px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  box-shadow: 
    0 0 30px rgba(0, 212, 255, 0.1),
    0 0 60px rgba(123, 47, 190, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
`;

const TerminalTopBar = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  background: rgba(123, 47, 190, 0.1);
  border-bottom: 1px solid rgba(0, 212, 255, 0.15);
  gap: 0.5rem;
`;

const Dot = styled.span<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;

const TerminalTitle = styled.span`
  margin-left: 0.75rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
`;

const TerminalBodyStyled = styled.div`
  padding: 2rem 2rem 2.5rem;
  font-family: 'Fira Code', monospace;
  line-height: 2;

  @media (max-width: 480px) {
    padding: 1.5rem 1rem 2rem;
  }
`;

const TerminalLine = styled(motion.div)<{ indented?: boolean }>`
  margin-bottom: 0.25rem;
  padding-left: ${({ indented }) => indented ? '1.5rem' : '0'};
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Prompt = styled.span`
  color: ${({ theme }) => theme.colors.arcanePurple};
  font-weight: 600;
`;

const Command = styled.span`
  color: ${({ theme }) => theme.colors.terminalGreen};
`;

const Output = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.hexBlue};
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
`;

const GoldText = styled.span`
  color: ${({ theme }) => theme.colors.arcaneGold};
  text-shadow: 0 0 10px rgba(200, 155, 60, 0.3);
`;

const NameText = styled.span`
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.hexBlue};
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.2);
  display: block;
  margin: 0.5rem 0;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    letter-spacing: 1px;
  }
`;

const TitleText = styled.span`
  font-family: 'Orbitron', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.arcaneGold};
  text-shadow: 0 0 10px rgba(200, 155, 60, 0.3);
  display: block;
  margin-bottom: 0.75rem;
  letter-spacing: 1px;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 16px;
  background: ${({ theme }) => theme.colors.terminalGreen};
  animation: ${typingBlink} 1s step-end infinite;
  vertical-align: middle;
  margin-left: 4px;
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  padding-left: 0;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
  }
`;

const HeroButton = styled(Button)`
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(123, 47, 190, 0.15) 100%);
  color: ${({ theme }) => theme.colors.hexBlue};
  border: 1px solid rgba(0, 212, 255, 0.3);
  
  &:hover {
    background: linear-gradient(135deg, rgba(0, 212, 255, 0.25) 0%, rgba(123, 47, 190, 0.25) 100%);
    border-color: ${({ theme }) => theme.colors.hexBlue};
    box-shadow: ${({ theme }) => theme.shadows.glow};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

const SecondaryHeroButton = styled(Button)`
  background: transparent;
  color: ${({ theme }) => theme.colors.arcaneGold};
  border: 1px solid rgba(200, 155, 60, 0.3);

  &:hover {
    background: rgba(200, 155, 60, 0.1);
    border-color: ${({ theme }) => theme.colors.arcaneGold};
    box-shadow: 0 0 15px rgba(200, 155, 60, 0.3);
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.hexBlue};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.6;
  z-index: 2;
  animation: ${float} 3s ease-in-out infinite;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.terminalGreen};
  }

  @media (max-width: 480px) {
    bottom: 1rem;
  }
`;

const ScrollText = styled.span`
  font-family: 'Fira Code', monospace;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Hero: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= 8) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

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

  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    size: Math.random() * 4 + 2,
  }));

  const lineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <HeroContainer id="home">
      {particles.map(p => (
        <Particle key={p.id} left={p.left} delay={p.delay} size={p.size} />
      ))}

      <Container>
        <HeroContent>
          <TerminalBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TerminalTopBar>
              <Dot color="#ff5f57" />
              <Dot color="#febc2e" />
              <Dot color="#28c840" />
              <TerminalTitle>lasindu@arcane ~ portfolio</TerminalTitle>
            </TerminalTopBar>

            <TerminalBodyStyled>
              {visibleLines >= 1 && (
                <TerminalLine
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.3 }}
                >
                  <Prompt>❯ </Prompt>
                  <Command>./initialize_system.sh</Command>
                </TerminalLine>
              )}

              {visibleLines >= 2 && (
                <TerminalLine
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.3 }}
                  indented
                >
                  <GoldText>[HEXTECH]</GoldText> <Output>Booting arcane protocols...</Output>
                </TerminalLine>
              )}

              {visibleLines >= 3 && (
                <TerminalLine
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.3 }}
                  indented
                >
                  <Highlight>[OK]</Highlight> <Output>System ready.</Output>
                </TerminalLine>
              )}

              {visibleLines >= 4 && (
                <TerminalLine
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.3 }}
                >
                  <Prompt>❯ </Prompt>
                  <Command>cat identity.cfg</Command>
                </TerminalLine>
              )}

              {visibleLines >= 5 && (
                <TerminalLine
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.4 }}
                  indented
                >
                  <NameText>{personalInfo.name}</NameText>
                </TerminalLine>
              )}

              {visibleLines >= 6 && (
                <TerminalLine
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.3 }}
                  indented
                >
                  <TitleText>{personalInfo.title}</TitleText>
                </TerminalLine>
              )}

              {visibleLines >= 7 && (
                <TerminalLine
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.3 }}
                  indented
                  style={{ color: '#8b7faa', fontSize: '0.85rem', maxWidth: '600px' }}
                >
                  {personalInfo.bio}
                </TerminalLine>
              )}

              {visibleLines >= 8 && (
                <TerminalLine
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.3 }}
                >
                  <Prompt>❯ </Prompt>
                  <Command>ready</Command>
                  <Cursor />
                </TerminalLine>
              )}

              {visibleLines >= 8 && (
                <HeroButtons
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <HeroButton onClick={handleDownloadCV}>
                    <Download size={16} />
                    [download_cv]
                  </HeroButton>
                  <SecondaryHeroButton onClick={handleScrollToContact}>
                    <Mail size={16} />
                    [contact_me]
                  </SecondaryHeroButton>
                </HeroButtons>
              )}
            </TerminalBodyStyled>
          </TerminalBox>
        </HeroContent>
      </Container>

      <ScrollIndicator
        onClick={handleScrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <ScrollText>scroll down</ScrollText>
        <ChevronDown size={16} />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;