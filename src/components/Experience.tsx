import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Section, SectionTitle, Tag } from '../styles/GlobalStyles';
import { experiences } from '../data/portfolioData';
import { Icon } from './icons/IconMappings';

const ExperienceContainer = styled(Section)`
  background: ${({ theme }) => theme.colors.background};
`;

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, 
      ${({ theme }) => theme.colors.arcanePurple},
      ${({ theme }) => theme.colors.hexBlue},
      ${({ theme }) => theme.colors.arcanePurple}
    );
    box-shadow: 0 0 10px rgba(123, 47, 190, 0.3);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 2.5rem;
  padding-left: 70px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-left: 50px;
    margin-bottom: 2rem;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 21px;
  top: 1.2rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient};
  border: 2px solid ${({ theme }) => theme.colors.background};
  z-index: 2;
  box-shadow: 0 0 12px rgba(0, 212, 255, 0.4);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    left: 11px;
    width: 18px;
    height: 18px;
  }
`;

const ExpCard = styled.div`
  background: rgba(10, 6, 20, 0.85);
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: 6px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.hexBlue};
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.1);
  }
`;

const CardHeader = styled.div`
  padding: 0.6rem 1rem;
  background: rgba(123, 47, 190, 0.1);
  border-bottom: 1px solid rgba(0, 212, 255, 0.1);
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textLight};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .dots {
    display: flex;
    gap: 0.35rem;
    span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      &:nth-child(1) { background: #ff5f57; }
      &:nth-child(2) { background: #febc2e; }
      &:nth-child(3) { background: #28c840; }
    }
  }
`;

const CardBody = styled.div`
  padding: 1.25rem 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`;

const CompanyName = styled.h3`
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.hexBlue};
  margin-bottom: 0.25rem;
  letter-spacing: 1px;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.2);
`;

const Position = styled.h4`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.arcaneGold};
  margin-bottom: 0.75rem;
`;

const Duration = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.75rem;
  margin-bottom: 1rem;
  background: rgba(123, 47, 190, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 3px;
  border: 1px solid rgba(123, 47, 190, 0.2);
  font-family: 'Fira Code', monospace;
`;

const Description = styled.ul`
  list-style: none;
  margin-bottom: 1rem;

  li {
    position: relative;
    padding-left: 1.25rem;
    margin-bottom: 0.4rem;
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.6;
    font-size: 0.8rem;

    &::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.arcanePurple};
      font-weight: bold;
    }
  }
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const Experience: React.FC = () => {
  return (
    <ExperienceContainer id="experience">
      <Container>
        <SectionTitle>// EXPERIENCE</SectionTitle>
        
        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <TimelineDot />
              
              <ExpCard>
                <CardHeader>
                  <div className="dots">
                    <span /><span /><span />
                  </div>
                  cat experience_{String(index + 1).padStart(2, '0')}.log
                </CardHeader>
                
                <CardBody>
                  <CompanyName>{experience.company}</CompanyName>
                  <Position>{experience.position}</Position>
                  
                  <Duration>
                    <Icon name="FaCalendarAlt" size={12} />
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
                </CardBody>
              </ExpCard>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceContainer>
  );
};

export default Experience;
