import styled, { createGlobalStyle, keyframes } from 'styled-components';

const scanline = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(100vh); }
`;

const flicker = keyframes`
  0%, 100% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0.8; }
  94% { opacity: 1; }
  95% { opacity: 0.6; }
  96% { opacity: 1; }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 5px rgba(0, 212, 255, 0.3), 0 0 10px rgba(0, 212, 255, 0.1); }
  50% { box-shadow: 0 0 10px rgba(0, 212, 255, 0.5), 0 0 20px rgba(0, 212, 255, 0.2); }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Fira Code', 'JetBrains Mono', 'Cascadia Code', monospace;
    line-height: 1.6;
    color: #c8d6e5;
    background-color: #0a0614;
    transition: background-color 0.3s ease, color 0.3s ease;
    position: relative;
  }

  /* CRT Scanline overlay */
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: rgba(0, 212, 255, 0.03);
    z-index: 10000;
    pointer-events: none;
    animation: ${scanline} 8s linear infinite;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: 'Fira Code', monospace;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }

  html, body {
    overflow-x: hidden;
    width: 100%;
  }
`;

export const arcaneTheme = {
  colors: {
    primary: '#00d4ff',
    primaryDark: '#0099cc',
    secondary: '#94a3b8',
    accent: '#c89b3c',
    background: '#0a0614',
    backgroundAlt: '#120b1e',
    text: '#e2d6ff',
    textLight: '#8b7faa',
    white: '#ffffff',
    border: 'rgba(123, 47, 190, 0.3)',
    success: '#00ff41',
    error: '#ff4444',
    gradient: 'linear-gradient(135deg, #7b2fbe 0%, #00d4ff 100%)',
    cardBg: 'rgba(18, 11, 30, 0.9)',
    navBg: 'rgba(10, 6, 20, 0.95)',
    footerBg: '#06030e',
    footerText: '#e2d6ff',
    footerTextLight: '#8b7faa',
    footerSocialBg: 'rgba(123, 47, 190, 0.15)',
    terminalGreen: '#00ff41',
    hexBlue: '#00d4ff',
    arcaneGold: '#c89b3c',
    arcanePurple: '#7b2fbe',
    arcanePurpleGlow: '#9b4dca',
    terminalBg: 'rgba(10, 6, 20, 0.85)',
    terminalBorder: 'rgba(0, 212, 255, 0.2)',
  },
  shadows: {
    small: '0 1px 3px rgba(0, 0, 0, 0.4), 0 0 5px rgba(123, 47, 190, 0.1)',
    medium: '0 4px 6px rgba(0, 0, 0, 0.4), 0 0 10px rgba(123, 47, 190, 0.15)',
    large: '0 10px 15px rgba(0, 0, 0, 0.5), 0 0 20px rgba(123, 47, 190, 0.2)',
    hover: '0 20px 25px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 212, 255, 0.15)',
    glow: '0 0 10px rgba(0, 212, 255, 0.4), 0 0 20px rgba(0, 212, 255, 0.2)',
    hexGlow: '0 0 15px rgba(0, 212, 255, 0.5), 0 0 30px rgba(0, 212, 255, 0.2)',
    purpleGlow: '0 0 15px rgba(123, 47, 190, 0.5), 0 0 30px rgba(123, 47, 190, 0.2)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    large: '1200px',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
  borderRadius: {
    small: '2px',
    medium: '4px',
    large: '6px',
    xl: '8px',
  },
};

// Legacy compat
export const getTheme = () => arcaneTheme;
export const theme = arcaneTheme;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${arcaneTheme.spacing.md};
  width: 100%;

  @media (max-width: ${arcaneTheme.breakpoints.tablet}) {
    padding: 0 ${arcaneTheme.spacing.sm};
    max-width: 100%;
  }

  @media (max-width: ${arcaneTheme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

export const Section = styled.section`
  padding: ${arcaneTheme.spacing.xxl} 0;
  width: 100%;
  overflow-x: hidden;
  position: relative;

  @media (max-width: ${arcaneTheme.breakpoints.tablet}) {
    padding: ${arcaneTheme.spacing.xl} 0;
  }

  @media (max-width: ${arcaneTheme.breakpoints.mobile}) {
    padding: 2rem 0;
  }
`;

export const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(123, 47, 190, 0.15);
  border-bottom: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 6px 6px 0 0;
  font-size: 0.8rem;
  color: ${arcaneTheme.colors.hexBlue};

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    
    &.red { background: #ff5f57; }
    &.yellow { background: #febc2e; }
    &.green { background: #28c840; }
  }

  .title {
    margin-left: 0.75rem;
    color: ${arcaneTheme.colors.textLight};
    font-family: 'Fira Code', monospace;
  }
`;

export const TerminalWindow = styled.div`
  background: ${arcaneTheme.colors.terminalBg};
  border: 1px solid ${arcaneTheme.colors.terminalBorder};
  border-radius: 6px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  animation: ${glowPulse} 4s ease-in-out infinite;
`;

export const TerminalBody = styled.div`
  padding: 1.5rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.8;
`;

export const SectionTitle = styled.h2`
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.hexBlue};
  position: relative;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5), 0 0 20px rgba(0, 212, 255, 0.2);

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: ${({ theme }) => theme.colors.gradient};
    box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.5rem;
    letter-spacing: 2px;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
`;

export const CommandPrompt = styled.span`
  color: ${arcaneTheme.colors.terminalGreen};
  font-weight: 600;
  
  &::before {
    content: '❯ ';
    color: ${arcaneTheme.colors.arcanePurple};
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.terminalBorder};
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
    border-color: ${({ theme }) => theme.colors.hexBlue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem;
    margin: 0 0.5rem;
  }
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'outline' }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  text-decoration: none;
  font-family: 'Fira Code', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.75rem 1.5rem;
    font-size: 0.8rem;
    width: 100%;
    justify-content: center;
  }

  ${({ variant = 'primary', theme }) => {
    switch (variant) {
      case 'secondary':
        return `
          background: ${theme.colors.backgroundAlt};
          color: ${theme.colors.hexBlue};
          border: 1px dashed ${theme.colors.terminalBorder};
          
          &:hover {
            background: rgba(0, 212, 255, 0.1);
            border-color: ${theme.colors.hexBlue};
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.glow};
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: ${theme.colors.hexBlue};
          border: 1px solid ${theme.colors.hexBlue};
          
          &:hover {
            background: rgba(0, 212, 255, 0.1);
            color: ${theme.colors.white};
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.glow};
          }
        `;
      default:
        return `
          background: ${theme.colors.gradient};
          color: ${theme.colors.white};
          border: none;
          
          &:hover {
            filter: brightness(1.2);
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.hexGlow};
          }
        `;
    }
  }}
`;

export const Grid = styled.div<{ columns?: number; gap?: string }>`
  display: grid;
  grid-template-columns: repeat(${({ columns = 3 }) => columns}, 1fr);
  gap: ${({ gap, theme }) => gap || theme.spacing.lg};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1rem;
    padding: 0 0.5rem;
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Tag = styled.span`
  background: rgba(0, 212, 255, 0.1);
  color: ${({ theme }) => theme.colors.hexBlue};
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(0, 212, 255, 0.2);
  font-family: 'Fira Code', monospace;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 212, 255, 0.2);
    box-shadow: 0 0 8px rgba(0, 212, 255, 0.3);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.7rem;
    padding: 0.2rem 0.5rem;
  }
`;

export const GradientText = styled.span`
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
`;
