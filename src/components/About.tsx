import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Section, SectionTitle } from '../styles/GlobalStyles';
import { personalInfo, education, certifications } from '../data/portfolioData';
import { Icon } from './icons/IconMappings';

const AboutContainer = styled(Section)`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/arcane/section-bg.png') center/cover no-repeat;
    opacity: 0.05;
    pointer-events: none;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const TerminalWindow = styled(motion.div)`
  background: rgba(10, 6, 20, 0.85);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 6px;
  overflow: hidden;
  backdrop-filter: blur(10px);
`;

const TerminalBar = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem 1rem;
  background: rgba(123, 47, 190, 0.1);
  border-bottom: 1px solid rgba(0, 212, 255, 0.15);
  gap: 0.5rem;
  
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    &.r { background: #ff5f57; }
    &.y { background: #febc2e; }
    &.g { background: #28c840; }
  }

  .title {
    margin-left: 0.75rem;
    color: ${({ theme }) => theme.colors.textLight};
    font-family: 'Fira Code', monospace;
    font-size: 0.75rem;
  }
`;

const TerminalBody = styled.div`
  padding: 1.5rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  line-height: 1.8;
`;

const Prompt = styled.span`
  color: ${({ theme }) => theme.colors.arcanePurple};
  font-weight: 600;
`;

const Command = styled.span`
  color: ${({ theme }) => theme.colors.terminalGreen};
`;

const OutputText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin: 0.5rem 0;
  padding-left: 1rem;
  line-height: 1.7;
  font-size: 0.85rem;
`;

const ProfileFrame = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 380px;
  margin: 0 auto;

  img.profile {
    width: 100%;
    border-radius: 6px;
    border: 2px solid rgba(0, 212, 255, 0.3);
    box-shadow: 
      0 0 20px rgba(0, 212, 255, 0.15),
      0 0 40px rgba(123, 47, 190, 0.1);
    position: relative;
    z-index: 2;
  }

  .arcane-frame {
    position: absolute;
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
    background: url('/images/arcane/profile-frame.png') center/cover no-repeat;
    opacity: 0.3;
    z-index: 1;
    pointer-events: none;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

const StatBox = styled(motion.div)`
  background: rgba(123, 47, 190, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: 4px;
  padding: 1rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.hexBlue};
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.15);
  }

  .number {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.hexBlue};
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
  }

  .label {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.textLight};
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 0.25rem;
  }
`;

const EducationSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;

const EduGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const EduCard = styled(motion.div)`
  background: rgba(10, 6, 20, 0.85);
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: 6px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.hexBlue};
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.1);
  }

  .header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;

    .icon-wrap {
      color: ${({ theme }) => theme.colors.arcanePurple};
      background: rgba(123, 47, 190, 0.15);
      padding: 0.5rem;
      border-radius: 4px;
    }

    h4 {
      font-family: 'Orbitron', sans-serif;
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.hexBlue};
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }

  .school {
    color: ${({ theme }) => theme.colors.arcaneGold};
    font-weight: 600;
    font-size: 0.85rem;
    margin-bottom: 0.25rem;
  }

  .year {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }

  .degree {
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 0.8rem;
    line-height: 1.6;
  }
`;

const CertList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const CertTag = styled.span`
  background: rgba(200, 155, 60, 0.15);
  color: ${({ theme }) => theme.colors.arcaneGold};
  padding: 0.3rem 0.75rem;
  border-radius: 3px;
  font-size: 0.75rem;
  font-family: 'Fira Code', monospace;
  border: 1px solid rgba(200, 155, 60, 0.2);
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.arcaneGold};
    box-shadow: 0 0 10px rgba(200, 155, 60, 0.2);
  }
`;

const About: React.FC = () => {
  const stats = [
    { number: '2+', label: 'Years Exp' },
    { number: '50+', label: 'Projects' },
    { number: '10+', label: 'Technologies' },
    { number: '99%', label: 'Satisfaction' },
  ];

  return (
    <AboutContainer id="about">
      <Container>
        <SectionTitle>{'// ABOUT'}</SectionTitle>
        
        <AboutContent>
          <TerminalWindow
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TerminalBar>
              <span className="dot r" />
              <span className="dot y" />
              <span className="dot g" />
              <span className="title">cat about.txt</span>
            </TerminalBar>
            <TerminalBody>
              <div>
                <Prompt>❯ </Prompt>
                <Command>cat about.txt</Command>
              </div>
              <OutputText>
                I'm a full-stack developer with a passion for creating innovative web solutions. 
                With over 2 years of experience in the Education sector.
              </OutputText>
              <OutputText>
                My expertise spans across modern JavaScript frameworks, backend technologies like PHP, 
                and cloud platforms. I believe in writing clean, maintainable code and staying 
                up-to-date with the latest industry trends and best practices.
              </OutputText>

              <StatsGrid>
                {stats.map((stat, index) => (
                  <StatBox
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="number">{stat.number}</div>
                    <div className="label">{stat.label}</div>
                  </StatBox>
                ))}
              </StatsGrid>
            </TerminalBody>
          </TerminalWindow>

          <ProfileFrame
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="arcane-frame" />
            <img 
              className="profile"
              src="/images/profile.jpg" 
              alt={personalInfo.name}
              onError={(e) => {
                e.currentTarget.src = `https://via.placeholder.com/400x400/120b1e/00d4ff?text=${personalInfo.name.charAt(0)}`;
              }}
            />
          </ProfileFrame>
        </AboutContent>

        <EducationSection>
          <EduGrid>
            <EduCard
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="header">
                <span className="icon-wrap">
                  <Icon name="FaGraduationCap" size={20} />
                </span>
                <h4>Education</h4>
              </div>
              {education.map((edu, index) => (
                <div key={index} style={{ marginBottom: index < education.length - 1 ? '1rem' : '0', paddingBottom: index < education.length - 1 ? '1rem' : '0', borderBottom: index < education.length - 1 ? '1px solid rgba(0, 212, 255, 0.1)' : 'none' }}>
                  <div className="degree">{edu.degree}</div>
                  <div className="school">{edu.school}</div>
                  <div className="year">{edu.year}</div>
                  <p>{edu.description}</p>
                </div>
              ))}
            </EduCard>

            <EduCard
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="header">
                <span className="icon-wrap">
                  <Icon name="FaCertificate" size={20} />
                </span>
                <h4>Certifications</h4>
              </div>
              <p>Professional certifications validating expertise in technical domains.</p>
              <CertList>
                {certifications.map((cert, idx) => (
                  <CertTag key={idx}>
                    <Icon name="FaCertificate" size={12} />
                    {cert}
                  </CertTag>
                ))}
              </CertList>
            </EduCard>
          </EduGrid>
        </EducationSection>
      </Container>
    </AboutContainer>
  );
};

export default About;