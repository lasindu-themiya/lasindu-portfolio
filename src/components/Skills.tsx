import React, { JSX } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Section, SectionTitle, Grid } from '../styles/GlobalStyles';
import { skills } from '../data/portfolioData';
import { Icon } from './icons/IconMappings';

const SkillsContainer = styled(Section)`
  background: ${({ theme }) => theme.colors.background};
`;

const SkillCategory = styled(motion.div)`
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

const CategoryBar = styled.div`
  padding: 0.6rem 1rem;
  background: rgba(123, 47, 190, 0.1);
  border-bottom: 1px solid rgba(0, 212, 255, 0.1);
  font-family: 'Fira Code', monospace;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textLight};
  display: flex;
  align-items: center;
  gap: 0.4rem;

  .dots {
    display: flex;
    gap: 0.3rem;
    span {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      &:nth-child(1) { background: #ff5f57; }
      &:nth-child(2) { background: #febc2e; }
      &:nth-child(3) { background: #28c840; }
    }
  }

  .process-name {
    color: ${({ theme }) => theme.colors.terminalGreen};
  }
`;

const CategoryBody = styled.div`
  padding: 1.25rem;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;

  .icon-wrap {
    color: ${({ theme }) => theme.colors.arcanePurple};
    background: rgba(123, 47, 190, 0.15);
    padding: 0.5rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.hexBlue};
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(0, 212, 255, 0.05);
  padding: 0.35rem 0.75rem;
  border-radius: 3px;
  border: 1px solid rgba(0, 212, 255, 0.1);
  transition: all 0.3s ease;
  cursor: default;
  font-family: 'Fira Code', monospace;

  &:hover {
    background: rgba(0, 212, 255, 0.15);
    border-color: ${({ theme }) => theme.colors.hexBlue};
    box-shadow: 0 0 10px rgba(0, 212, 255, 0.2);
    transform: translateY(-2px);

    .skill-name {
      color: ${({ theme }) => theme.colors.hexBlue};
      text-shadow: 0 0 8px rgba(0, 212, 255, 0.3);
    }
  }

  .skill-icon {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.arcanePurple};
  }

  .skill-name {
    font-weight: 400;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s ease;
  }
`;

const SkillsOverview = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  .subtitle {
    font-family: 'Fira Code', monospace;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.6;
    margin-top: 0.5rem;
  }
`;

const Skills: React.FC = () => {
  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'React': <Icon name="FaReact" className="skill-icon" size={16} />,
      'Node.js': <Icon name="FaNodeJs" className="skill-icon" size={16} />,
      'TypeScript': <Icon name="SiTypescript" className="skill-icon" size={16} />,
      'JavaScript': <Icon name="SiJavascript" className="skill-icon" size={16} />,
      'Python': <Icon name="FaPython" className="skill-icon" size={16} />,
      'MongoDB': <Icon name="SiMongodb" className="skill-icon" size={16} />,
      'PostgreSQL': <Icon name="SiPostgresql" className="skill-icon" size={16} />,
      'Express.js': <Icon name="SiExpress" className="skill-icon" size={16} />,
      'Next.js': <Icon name="SiNextdotjs" className="skill-icon" size={16} />,
      'Git': <Icon name="FaGitAlt" className="skill-icon" size={16} />,
      'Docker': <Icon name="FaDocker" className="skill-icon" size={16} />,
      'AWS': <Icon name="FaAws" className="skill-icon" size={16} />,
      'Firebase': <Icon name="SiFirebase" className="skill-icon" size={16} />,
      'Java': <Icon name="FaJava" className="skill-icon" size={16} />,
      'SpringBoot': <Icon name="SiSpringboot" className="skill-icon" size={16} />,
      'PHP': <Icon name="SiPhp" className="skill-icon" size={16} />,
      'HTML': <Icon name="SiHtml5" className="skill-icon" size={16} />,
      'CSS': <Icon name="SiCss3" className="skill-icon" size={16} />,
      'Flutter': <Icon name="SiFlutter" className="skill-icon" size={16} />,
      'Kotlin': <Icon name="SiKotlin" className="skill-icon" size={16} />,
      'Bootstrap': <Icon name="SiBootstrap" className="skill-icon" size={16} />,
      'Arduino': <Icon name="SiArduino" className="skill-icon" size={16} />,
      'C++': <Icon name="SiCplusplus" className="skill-icon" size={16} />,
      'C#': <Icon name="SiCsharp" className="skill-icon" size={16} />,
      'MySQL': <Icon name="SiMysql" className="skill-icon" size={16} />,
    };

    return iconMap[skillName] || <Icon name="FaCode" className="skill-icon" size={16} />;
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'Frontend': <Icon name="FaLaptopCode" size={18} />,
      'Backend': <Icon name="FaCode" size={18} />,
      'Tools & Technologies': <Icon name="FaTools" size={18} />,
      'Soft Skills': <Icon name="FaUsers" size={18} />,
    };

    return iconMap[category] || <Icon name="FaCode" size={18} />;
  };

  const getProcessName = (category: string) => {
    return category.toLowerCase().replace(/[&\s]+/g, '_') + '.exe';
  };

  return (
    <SkillsContainer id="skills">
      <Container>
        <SectionTitle>// SKILLS</SectionTitle>
        
        <SkillsOverview>
          <motion.div
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {'>'} Proficient in a diverse range of technologies enabling full-stack 
            development from concept to deployment.
          </motion.div>
        </SkillsOverview>

        <Grid columns={2}>
          {skills.map((skillCategory, index) => (
            <SkillCategory
              key={skillCategory.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CategoryBar>
                <div className="dots">
                  <span /><span /><span />
                </div>
                [PROCESS] <span className="process-name">{getProcessName(skillCategory.category)}</span>
              </CategoryBar>

              <CategoryBody>
                <CategoryHeader>
                  <span className="icon-wrap">
                    {getCategoryIcon(skillCategory.category)}
                  </span>
                  <h3>{skillCategory.category}</h3>
                </CategoryHeader>
                
                <SkillsList>
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <SkillItem
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: (index * 0.05) + (skillIndex * 0.03) 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {getSkillIcon(skill)}
                      <span className="skill-name">{skill}</span>
                    </SkillItem>
                  ))}
                </SkillsList>
              </CategoryBody>
            </SkillCategory>
          ))}
        </Grid>
      </Container>
    </SkillsContainer>
  );
};

export default Skills;
