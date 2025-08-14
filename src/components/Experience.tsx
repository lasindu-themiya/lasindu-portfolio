import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Section, SectionTitle, Tag } from '../styles/GlobalStyles';
import { experiences } from '../data/portfolioData';
import { Icon } from './icons/IconMappings';

const ExperienceContainer = styled(Section)``;

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.border};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      left: 30px;
    }
  }
`;

const ExperienceItem = styled(motion.div)<{ index: number }>`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  width: calc(50% - 40px);
  
  ${({ index, theme }) => index % 2 === 0 ? `
    left: 0;
    padding-right: ${theme.spacing.lg};
    
    .timeline-content {
      text-align: right;
    }
    
    .timeline-arrow {
      right: -8px;
      border-left: 8px solid ${theme.colors.cardBg};
      border-right: none;
    }
  ` : `
    left: calc(50% + 40px);
    padding-left: ${theme.spacing.lg};
    
    .timeline-content {
      text-align: left;
    }
    
    .timeline-arrow {
      left: -8px;
      border-right: 8px solid ${theme.colors.cardBg};
      border-left: none;
    }
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - 80px);
    left: 60px !important;
    padding-left: ${({ theme }) => theme.spacing.lg} !important;
    padding-right: 0 !important;
    
    .timeline-content {
      text-align: left !important;
    }
    
    .timeline-arrow {
      left: -8px !important;
      right: auto !important;
      border-right: 8px solid ${({ theme }) => theme.colors.cardBg} !important;
      border-left: none !important;
    }
  }
`;

const TimelineIcon = styled.div<{ index: number }>`
  position: absolute;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  z-index: 2;
  
  ${({ index }) => index % 2 === 0 ? `
    right: -60px;
  ` : `
    left: -60px;
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    left: -60px !important;
    right: auto !important;
  }
`;

const ExperienceCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }

  .timeline-arrow {
    position: absolute;
    top: 30px;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }
`;

const CompanyName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Position = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.875rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Description = styled.ul`
  list-style: none;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  li {
    position: relative;
    padding-left: ${({ theme }) => theme.spacing.md};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.6;

    &::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
    }
  }
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Experience: React.FC = () => {
  return (
    <ExperienceContainer id="experience">
      <Container>
        <SectionTitle>Work Experience</SectionTitle>
        
        <Timeline>
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={experience.id}
              index={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TimelineIcon index={index}>
                <Icon name="FaBriefcase" size={20} />
              </TimelineIcon>
              
              <ExperienceCard className="timeline-content">
                <div className="timeline-arrow"></div>
                
                <CompanyName>{experience.company}</CompanyName>
                <Position>{experience.position}</Position>
                
                <Duration>
                  <Icon name="FaCalendarAlt" size={16} />
                  {experience.duration}
                </Duration>
                
                <Description>
                  {experience.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </Description>
                
                <Technologies>
                  {experience.technologies.map((tech, idx) => (
                    <Tag key={idx}>{tech}</Tag>
                  ))}
                </Technologies>
              </ExperienceCard>
            </ExperienceItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceContainer>
  );
};

export default Experience;
