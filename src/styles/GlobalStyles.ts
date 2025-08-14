import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ isDarkMode: boolean }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    line-height: 1.6;
    color: ${({ isDarkMode }) => isDarkMode ? '#e2e8f0' : '#333'};
    background-color: ${({ isDarkMode }) => isDarkMode ? '#0f172a' : '#ffffff'};
    transition: background-color 0.3s ease, color 0.3s ease;
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
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Ensure mobile viewport is handled correctly */
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }

  /* Prevent horizontal scroll on mobile */
  html, body {
    overflow-x: hidden;
    width: 100%;
  }
`;

export const getTheme = (isDarkMode: boolean) => ({
  colors: {
    primary: '#3b82f6',
    primaryDark: '#2563eb',
    secondary: isDarkMode ? '#94a3b8' : '#64748b',
    accent: '#f59e0b',
    background: isDarkMode ? '#0f172a' : '#ffffff',
    backgroundAlt: isDarkMode ? '#1e293b' : '#f8fafc',
    text: isDarkMode ? '#f1f5f9' : '#1e293b',
    textLight: isDarkMode ? '#94a3b8' : '#64748b',
    white: '#ffffff',
    border: isDarkMode ? '#334155' : '#e2e8f0',
    success: '#10b981',
    error: '#ef4444',
    gradient: isDarkMode 
      ? 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)' 
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    cardBg: isDarkMode ? '#1e293b' : '#ffffff',
    navBg: isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    // Footer specific colors
    footerBg: isDarkMode ? '#020617' : '#1e293b',
    footerText: isDarkMode ? '#f1f5f9' : '#f8fafc',
    footerTextLight: isDarkMode ? '#94a3b8' : 'rgba(248, 250, 252, 0.8)',
    footerSocialBg: isDarkMode ? 'rgba(148, 163, 184, 0.1)' : 'rgba(248, 250, 252, 0.1)',
  },
  shadows: {
    small: isDarkMode 
      ? '0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4)' 
      : '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    medium: isDarkMode 
      ? '0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.4)' 
      : '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)',
    large: isDarkMode 
      ? '0 10px 15px rgba(0, 0, 0, 0.4), 0 4px 6px rgba(0, 0, 0, 0.3)' 
      : '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
    hover: isDarkMode 
      ? '0 20px 25px rgba(0, 0, 0, 0.5), 0 10px 10px rgba(0, 0, 0, 0.3)' 
      : '0 20px 25px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.04)',
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
    small: '4px',
    medium: '8px',
    large: '12px',
    xl: '16px',
  },
});

// Legacy theme for backward compatibility
export const theme = getTheme(false);

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  width: 100%;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.sm};
    max-width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

export const Section = styled.section`
  padding: ${theme.spacing.xxl} 0;
  width: 100%;
  overflow-x: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl} 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 2rem 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
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
  font-size: 1rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    width: 100%;
    justify-content: center;
  }

  ${({ variant = 'primary', theme }) => {
    switch (variant) {
      case 'secondary':
        return `
          background: ${theme.colors.backgroundAlt};
          color: ${theme.colors.text};
          border: 1px solid ${theme.colors.border};
          
          &:hover {
            background: ${theme.colors.border};
            transform: translateY(-2px);
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};
          
          &:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
            transform: translateY(-2px);
          }
        `;
      default:
        return `
          background: ${theme.colors.gradient};
          color: ${theme.colors.white};
          border: none;
          
          &:hover {
            filter: brightness(1.1);
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.medium};
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
  background: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8rem;
    padding: 0.375rem 0.75rem;
  }
`;

export const GradientText = styled.span`
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
`;
