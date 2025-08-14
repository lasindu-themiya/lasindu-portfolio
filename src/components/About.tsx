import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme, Container, Section, SectionTitle, Grid } from '../styles/GlobalStyles';
import { personalInfo, education, certifications } from '../data/portfolioData';
import { Icon } from './icons/IconMappings';

const AboutContainer = styled(Section)`
  background: ${theme.colors.backgroundAlt};
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xxl};
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
    text-align: center;
  }
`;

const AboutText = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.text};
  }

  p {
    font-size: 1.125rem;
    line-height: 1.8;
    color: ${theme.colors.textLight};
    margin-bottom: ${theme.spacing.md};
  }
`;

const ProfileImage = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  img {
    width: 100%;
    border-radius: ${theme.borderRadius.xl};
    box-shadow: ${theme.shadows.large};
  }

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: 10px;
    bottom: 10px;
    background: ${theme.colors.gradient};
    border-radius: ${theme.borderRadius.xl};
    z-index: -1;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: ${theme.spacing.xl};
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
`;

const StatItem = styled.div`
  text-align: center;

  .number {
    font-size: 2rem;
    font-weight: 700;
    color: ${theme.colors.primary};
    display: block;
  }

  .label {
    font-size: 0.875rem;
    color: ${theme.colors.textLight};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const EducationSection = styled.div`
  margin-top: ${theme.spacing.xxl};
`;

const EducationGrid = styled(Grid)`
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled(motion.div)`
  background: ${theme.colors.white};
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .icon {
    font-size: 2rem;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.md};
  }

  h4 {
    font-size: 1.25rem;
    margin-bottom: ${theme.spacing.sm};
    color: ${theme.colors.text};
  }

  .school {
    color: ${theme.colors.primary};
    font-weight: 600;
    margin-bottom: ${theme.spacing.xs};
  }

  .year {
    color: ${theme.colors.textLight};
    font-size: 0.875rem;
    margin-bottom: ${theme.spacing.sm};
  }

  p {
    color: ${theme.colors.textLight};
    line-height: 1.6;
  }
`;

const EducationItem = styled.div<{ hasMultiple: boolean; isLast: boolean }>`
  ${({ hasMultiple, isLast }) => 
    hasMultiple && !isLast && `
      margin-bottom: ${theme.spacing.lg};
      padding-bottom: ${theme.spacing.md};
      border-bottom: 1px solid ${theme.colors.border || '#e5e7eb'};
    `}
`;

const CertificationsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};

  .cert-item {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    border-radius: ${theme.borderRadius.medium};
    font-size: 0.875rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: ${theme.spacing.xs};
  }
`;

const About: React.FC = () => {
  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' },
    { number: '10+', label: 'Technologies' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  const hasMultipleEducations = education.length > 1;

  return (
    <AboutContainer id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        
        <AboutContent>
          <AboutText>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Passionate Developer & Problem Solver
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm a full-stack developer with a passion for creating innovative web solutions. 
              With over 2 years of experience in the Education sector.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              My expertise spans across modern JavaScript frameworks, backend technologies like PHP, 
              and cloud platforms. I believe in writing clean, maintainable code and staying 
              up-to-date with the latest industry trends and best practices.
            </motion.p>

            <StatsContainer>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <StatItem>
                    <span className="number">{stat.number}</span>
                    <span className="label">{stat.label}</span>
                  </StatItem>
                </motion.div>
              ))}
            </StatsContainer>
          </AboutText>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ProfileImage>
              <img 
                src="/images/profile.jpg" 
                alt={personalInfo.name}
                onError={(e) => {
                  // Fallback to a placeholder if image doesn't exist
                  e.currentTarget.src = `https://via.placeholder.com/400x400/667eea/ffffff?text=${personalInfo.name.charAt(0)}`;
                }}
              />
            </ProfileImage>
          </motion.div>
        </AboutContent>

        <EducationSection>
          <EducationGrid>
            <EducationCard
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Icon name="FaGraduationCap" className="icon" size={24} />
              <h4>Education</h4>
              {education.map((edu, index) => (
                <EducationItem 
                  key={index} 
                  hasMultiple={hasMultipleEducations} 
                  isLast={index === education.length - 1}
                >
                  <div className="school">{edu.school}</div>
                  <div className="year">{edu.year}</div>
                  <h5>{edu.degree}</h5>
                  <p>{edu.description}</p>
                </EducationItem>
              ))}
            </EducationCard>

            <EducationCard
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Icon name="FaCertificate" className="icon" size={24} />
              <h4>Certifications</h4>
              <p>Professional certifications that validate my expertise in various technologies and methodologies.</p>
              
              <CertificationsList>
                {certifications.map((cert, index) => (
                  <span key={index} className="cert-item">
                    <Icon name="FaCertificate" size={16} />
                    {cert}
                  </span>
                ))}
              </CertificationsList>
            </EducationCard>
          </EducationGrid>
        </EducationSection>
      </Container>
    </AboutContainer>
  );
};

export default About;