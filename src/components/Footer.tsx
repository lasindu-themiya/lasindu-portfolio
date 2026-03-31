import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/GlobalStyles';
import { contactInfo, personalInfo } from '../data/portfolioData';
import { Icon } from './icons/IconMappings';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.footerBg};
  color: ${({ theme }) => theme.colors.footerText};
  padding: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.lg};
  position: relative;
  border-top: 1px solid rgba(0, 212, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.hexBlue}, transparent);
    box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h4 {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.8rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.hexBlue};
    letter-spacing: 2px;
    text-transform: uppercase;
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.2);
  }

  p {
    color: ${({ theme }) => theme.colors.footerTextLight};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    font-size: 0.8rem;
    font-family: 'Fira Code', monospace;
  }

  a {
    color: ${({ theme }) => theme.colors.footerTextLight};
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.hexBlue};
      text-shadow: 0 0 8px rgba(0, 212, 255, 0.3);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(123, 47, 190, 0.1);
  color: ${({ theme }) => theme.colors.textLight};
  border: 1px solid rgba(123, 47, 190, 0.2);
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 212, 255, 0.15);
    border-color: ${({ theme }) => theme.colors.hexBlue};
    color: ${({ theme }) => theme.colors.hexBlue};
    box-shadow: 0 0 10px rgba(0, 212, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  a {
    display: inline-block;
    padding: 0.3rem 0;
    font-family: 'Fira Code', monospace;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.textLight};
    transition: all 0.3s ease;

    &::before {
      content: './';
      color: ${({ theme }) => theme.colors.arcanePurple};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.hexBlue};
      padding-left: 0.5rem;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(0, 212, 255, 0.08);
  padding-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.7rem;
  margin: 0;
  font-family: 'Fira Code', monospace;

  .eof {
    color: ${({ theme }) => theme.colors.arcanePurple};
    margin-right: 0.5rem;
  }
`;

const BackToTop = styled.button`
  background: rgba(123, 47, 190, 0.15);
  color: ${({ theme }) => theme.colors.hexBlue};
  border: 1px solid rgba(0, 212, 255, 0.2);
  padding: 0.5rem;
  border-radius: 4px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Fira Code', monospace;

  &:hover {
    background: rgba(0, 212, 255, 0.15);
    border-color: ${({ theme }) => theme.colors.hexBlue};
    box-shadow: 0 0 10px rgba(0, 212, 255, 0.2);
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 auto;
  }
`;

const SessionEnd = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textLight};
  opacity: 0.6;
  
  .line {
    display: inline-block;
    width: 60px;
    height: 1px;
    background: rgba(0, 212, 255, 0.2);
    vertical-align: middle;
    margin: 0 1rem;
  }
`;

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { href: '#home', label: 'home' },
    { href: '#about', label: 'about' },
    { href: '#experience', label: 'experience' },
    { href: '#projects', label: 'projects' },
    { href: '#skills', label: 'skills' },
    { href: '#contact', label: 'contact' },
  ];

  return (
    <FooterContainer>
      <Container>
        <SessionEnd>
          <span className="line" />
          SESSION ACTIVE
          <span className="line" />
        </SessionEnd>

        <FooterContent>
          <FooterSection>
            <h4>{personalInfo.name}</h4>
            <p>
              {'>'} Full-stack developer crafting innovative web solutions with modern technologies.
            </p>
            <p>
              {'>'} Always learning. Always building.
            </p>
            <SocialLinks>
              {contactInfo.linkedin && (
                <SocialLink 
                  href={contactInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <Icon name="FaLinkedin" size={16} />
                </SocialLink>
              )}
              {contactInfo.github && (
                <SocialLink 
                  href={contactInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <Icon name="FaGithub" size={16} />
                </SocialLink>
              )}
              <SocialLink 
                href={`mailto:${contactInfo.email}`}
                title="Email"
              >
                <Icon name="FaEnvelope" size={16} />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h4>Navigation</h4>
            <QuickLinks>
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </QuickLinks>
          </FooterSection>

          <FooterSection>
            <h4>Connect</h4>
            <p>
              <strong style={{ color: '#c89b3c' }}>email:</strong><br />
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </p>
            {contactInfo.phone && (
              <p>
                <strong style={{ color: '#c89b3c' }}>phone:</strong><br />
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </p>
            )}
            <p>
              <strong style={{ color: '#c89b3c' }}>location:</strong><br />
              {contactInfo.location}
            </p>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            <span className="eof">[EOF]</span>
            © 2025 {personalInfo.name} — Built with React & TypeScript
          </Copyright>
          <BackToTop 
            onClick={scrollToTop}
            title="Back to top"
          >
            <Icon name="FaArrowUp" size={14} />
          </BackToTop>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
