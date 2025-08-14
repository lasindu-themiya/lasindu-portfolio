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
  border-top: 1px solid ${({ theme }) => theme.colors.border};
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
    font-size: 1.125rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.footerText};
  }

  p {
    color: ${({ theme }) => theme.colors.footerTextLight};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  a {
    color: ${({ theme }) => theme.colors.footerTextLight};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.footerSocialBg};
  color: ${({ theme }) => theme.colors.footerTextLight};
  border-radius: 50%;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-3px);
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};

  a {
    display: inline-block;
    padding: ${({ theme }) => theme.spacing.xs} 0;
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s ease;

    &:hover {
      border-bottom-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
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
  color: ${({ theme }) => theme.colors.footerTextLight};
  font-size: 0.875rem;
  margin: 0;

  .heart {
    color: #ff6b6b;
    margin: 0 4px;
  }
`;

const BackToTop = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-3px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 auto;
  }
`;

const Footer: React.FC = () => {
  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <h4>{personalInfo.name}</h4>
            <p>
              A passionate full-stack developer dedicated to creating innovative 
              web solutions and exceptional user experiences.
            </p>
            <p>
              Always learning, always building, always improving.
            </p>
            <SocialLinks>
              {contactInfo.linkedin && (
                <SocialLink 
                  href={contactInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <Icon name="FaLinkedin" size={20} />
                </SocialLink>
              )}
              {contactInfo.github && (
                <SocialLink 
                  href={contactInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <Icon name="FaGithub" size={20} />
                </SocialLink>
              )}
              <SocialLink 
                href={`mailto:${contactInfo.email}`}
                title="Email"
              >
                <Icon name="FaEnvelope" size={20} />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h4>Quick Links</h4>
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
            <h4>Get In Touch</h4>
            <p>
              <strong>Email:</strong><br />
              <a href={`mailto:${contactInfo.email}`}>
                {contactInfo.email}
              </a>
            </p>
            {contactInfo.phone && (
              <p>
                <strong>Phone:</strong><br />
                <a href={`tel:${contactInfo.phone}`}>
                  {contactInfo.phone}
                </a>
              </p>
            )}
            <p>
              <strong>Location:</strong><br />
              {contactInfo.location}
            </p>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © 2025 {personalInfo.name}. Made with
            <Icon name="FaHeart" className="heart" size={16} />
            using React & TypeScript.
          </Copyright>
          <BackToTop 
            onClick={scrollToTop}
            title="Back to top"
          >
            <Icon name="FaArrowUp" size={16} />
          </BackToTop>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
