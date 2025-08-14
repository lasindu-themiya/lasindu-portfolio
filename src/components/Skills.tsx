import React, { JSX } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Section, SectionTitle, Grid } from '../styles/GlobalStyles';
import { skills } from '../data/portfolioData';
import { Icon } from './icons/IconMappings';

const SkillsContainer = styled(Section)``;

const SkillCategory = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  .icon {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.backgroundAlt};
    padding: ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .skill-icon {
    font-size: 1rem;
  }

  .skill-name {
    font-weight: 500;
    font-size: 0.875rem;
  }
`;

const SkillsOverview = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  h3 {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const Skills: React.FC = () => {
  // Icon mapping for technologies
  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'React': <Icon name="FaReact" className="skill-icon" size={24} />,
      'Node.js': <Icon name="FaNodeJs" className="skill-icon" size={24} />,
      'TypeScript': <Icon name="SiTypescript" className="skill-icon" size={24} />,
      'JavaScript': <Icon name="SiJavascript" className="skill-icon" size={24} />,
      'Python': <Icon name="FaPython" className="skill-icon" size={24} />,
      'MongoDB': <Icon name="SiMongodb" className="skill-icon" size={24} />,
      'PostgreSQL': <Icon name="SiPostgresql" className="skill-icon" size={24} />,
      'Express.js': <Icon name="SiExpress" className="skill-icon" size={24} />,
      'Next.js': <Icon name="SiNextdotjs" className="skill-icon" size={24} />,
      'Git': <Icon name="FaGitAlt" className="skill-icon" size={24} />,
      'Docker': <Icon name="FaDocker" className="skill-icon" size={24} />,
      'AWS': <Icon name="FaAws" className="skill-icon" size={24} />,
      'Firebase': <Icon name="SiFirebase" className="skill-icon" size={24} />,
      'Java': <Icon name="FaJava" className="skill-icon" size={24} />,
      'SpringBoot': <Icon name="SiSpringboot" className="skill-icon" size={24} />,
      'PHP': <Icon name="SiPhp" className="skill-icon" size={24} />,
      'HTML': <Icon name="SiHtml5" className="skill-icon" size={24} />,
      'CSS': <Icon name="SiCss3" className="skill-icon" size={24} />,
      'Flutter': <Icon name="SiFlutter" className="skill-icon" size={24} />,
      'Kotlin': <Icon name="SiKotlin" className="skill-icon" size={24} />,
      'Bootstrap': <Icon name="SiBootstrap" className="skill-icon" size={24} />,
      'Arduino': <Icon name="SiArduino" className="skill-icon" size={24} />,
      'C++': <Icon name="SiCplusplus" className="skill-icon" size={24} />,
      'C#': <Icon name="SiCsharp" className="skill-icon" size={24} />,
      'MySQL': <Icon name="SiMysql" className="skill-icon" size={24} />,
    };

    return iconMap[skillName] || <Icon name="FaCode" className="skill-icon" size={24} />;
  };

  // Category icon mapping
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'Frontend': <Icon name="FaLaptopCode" className="icon" size={24} />,
      'Backend': <Icon name="FaCode" className="icon" size={24} />,
      'Tools & Technologies': <Icon name="FaTools" className="icon" size={24} />,
      'Soft Skills': <Icon name="FaUsers" className="icon" size={24} />,
    };

    return iconMap[category] || <Icon name="FaCode" className="icon" size={24} />;
  };

  return (
    <SkillsContainer id="skills">
      <Container>
        <SectionTitle>Skills & Technologies</SectionTitle>
        
        <SkillsOverview>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Technical Expertise & Professional Skills
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm proficient in a wide range of technologies and tools that enable me to build 
            full-stack applications from concept to deployment. Here's an overview of my technical 
            skills and professional competencies.
          </motion.p>
        </SkillsOverview>

        <Grid columns={2}>
          {skills.map((skillCategory, index) => (
            <SkillCategory
              key={skillCategory.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CategoryHeader>
                {getCategoryIcon(skillCategory.category)}
                <h3>{skillCategory.category}</h3>
              </CategoryHeader>
              
              <SkillsList>
                {skillCategory.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: (index * 0.1) + (skillIndex * 0.05) 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {getSkillIcon(skill)}
                    <span className="skill-name">{skill}</span>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </Grid>
      </Container>
    </SkillsContainer>
  );
};

export default Skills;
