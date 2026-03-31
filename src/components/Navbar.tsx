import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Menu, X, Terminal } from 'lucide-react';

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const NavbarContainer = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0.75rem 0;
  transition: all 0.3s ease;
  background: ${({ scrolled, theme }) => 
    scrolled ? theme.colors.navBg : 'transparent'
  };
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(15px)' : 'none'};
  border-bottom: ${({ scrolled, theme }) => 
    scrolled ? `1px solid ${theme.colors.terminalBorder}` : 'none'
  };
  ${({ scrolled, theme }) => scrolled && `
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.1);
  `}
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

const NavControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 0.5rem;
  }
`;

const Logo = styled.a`
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.terminalGreen};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  .prompt {
    color: ${({ theme }) => theme.colors.arcanePurple};
  }

  .user {
    color: ${({ theme }) => theme.colors.hexBlue};
  }

  .path {
    color: ${({ theme }) => theme.colors.arcaneGold};
  }

  .cursor {
    display: inline-block;
    width: 8px;
    height: 16px;
    background: ${({ theme }) => theme.colors.terminalGreen};
    animation: ${blink} 1s step-end infinite;
    margin-left: 2px;
    vertical-align: middle;
  }

  &:hover {
    text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.75rem;
  }
`;

const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => isOpen ? '0' : '-100%'};
    width: 300px;
    height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease;
    box-shadow: ${({ theme }) => theme.shadows.large};
    border-left: 1px solid ${({ theme }) => theme.colors.terminalBorder};
    gap: 1rem;
    z-index: 1001;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100vw;
    border-left: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: 400;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  padding: 0.4rem 0.75rem;
  border-radius: 3px;
  border: 1px solid transparent;

  &::before {
    content: './';
    color: ${({ theme }) => theme.colors.arcanePurple};
    font-weight: 600;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.hexBlue};
    background: rgba(0, 212, 255, 0.05);
    border-color: rgba(0, 212, 255, 0.15);
    text-shadow: 0 0 8px rgba(0, 212, 255, 0.3);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.terminalBorder};
  color: ${({ theme }) => theme.colors.hexBlue};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 212, 255, 0.1);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.terminalBorder};
  color: ${({ theme }) => theme.colors.hexBlue};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 212, 255, 0.1);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10, 6, 20, 0.8);
    backdrop-filter: blur(4px);
    z-index: 999;
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
    visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
  }
`;

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { href: '#home', label: 'home' },
    { href: '#about', label: 'about' },
    { href: '#experience', label: 'experience' },
    { href: '#projects', label: 'projects' },
    { href: '#skills', label: 'skills' },
    { href: '#contact', label: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NavbarContainer scrolled={scrolled}>
        <NavContent>
          <Logo href="#home" onClick={() => handleNavClick('#home')}>
            <Terminal size={16} />
            <span>
              <span className="user">lasindu</span>
              <span className="prompt">@</span>
              <span className="path">portfolio</span>
              <span className="prompt">:~$</span>
              <span className="cursor" />
            </span>
          </Logo>
          
          <NavLinks isOpen={mobileMenuOpen}>
            <CloseButton
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <X size={24} />
            </CloseButton>
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </NavLinks>

          <NavControls>
            <MobileMenuButton
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </MobileMenuButton>
          </NavControls>
        </NavContent>
      </NavbarContainer>
      
      <Overlay 
        isOpen={mobileMenuOpen} 
        onClick={() => setMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Navbar;
