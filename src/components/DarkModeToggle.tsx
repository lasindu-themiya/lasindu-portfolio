import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

const ToggleButton = styled(motion.button)<{ isDarkMode: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1001;
  background: ${({ theme, isDarkMode }) => isDarkMode ? theme.colors.cardBg : theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: all 0.3s ease;
  pointer-events: auto;

  &:hover {
    transform: scale(1.1);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 15px;
    right: 15px;
    width: 45px;
    height: 45px;
  }
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ToggleButton
      onClick={toggleDarkMode}
      isDarkMode={isDarkMode}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <IconWrapper>
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </IconWrapper>
    </ToggleButton>
  );
};

export default DarkModeToggle;
