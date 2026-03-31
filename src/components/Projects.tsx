import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Section, SectionTitle, Grid, Tag, Button } from '../styles/GlobalStyles';
import { projects } from '../data/portfolioData';
import { Icon } from './icons/IconMappings';

const ProjectsContainer = styled(Section)`
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
    opacity: 0.03;
    pointer-events: none;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(10, 6, 20, 0.9);
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.colors.hexBlue};
    box-shadow: 
      0 0 20px rgba(0, 212, 255, 0.15),
      0 20px 40px rgba(0, 0, 0, 0.4);
  }
`;

const ProjectImage = styled.div`
  position: relative;
  height: 180px;
  background: linear-gradient(135deg, rgba(123, 47, 190, 0.3), rgba(0, 212, 255, 0.1));
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    filter: saturate(0.7) brightness(0.8);
  }

  &:hover img {
    transform: scale(1.05);
    filter: saturate(1) brightness(0.9);
  }

  /* Scanline overlay on images */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.1) 2px,
      rgba(0, 0, 0, 0.1) 4px
    );
    pointer-events: none;
  }

  .placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: ${({ theme }) => theme.colors.arcanePurple};
    font-size: 3rem;
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 6, 20, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const OverlayButton = styled.button`
  background: rgba(0, 212, 255, 0.15);
  color: ${({ theme }) => theme.colors.hexBlue};
  border: 1px solid rgba(0, 212, 255, 0.3);
  padding: 0.75rem;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.hexBlue};
    color: ${({ theme }) => theme.colors.background};
    box-shadow: ${({ theme }) => theme.shadows.glow};
    transform: scale(1.1);
  }
`;

const CardHeader = styled.div`
  padding: 0.5rem 1rem;
  background: rgba(123, 47, 190, 0.08);
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
`;

const ProjectContent = styled.div`
  padding: 1.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-family: 'Orbitron', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.hexBlue};
  margin-bottom: 0.75rem;
  letter-spacing: 0.5px;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.2);
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
  font-size: 0.8rem;
`;

const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 1rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.4rem 1rem;
  border: 1px solid ${({ active, theme }) => active ? theme.colors.hexBlue : theme.colors.terminalBorder};
  border-radius: 3px;
  background: ${({ active }) => active ? 'rgba(0, 212, 255, 0.15)' : 'transparent'};
  color: ${({ active, theme }) => active ? theme.colors.hexBlue : theme.colors.textLight};
  font-weight: 500;
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: lowercase;

  &::before {
    content: '${({ active }) => active ? '● ' : '○ '}';
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.hexBlue};
    color: ${({ theme }) => theme.colors.hexBlue};
    background: rgba(0, 212, 255, 0.08);
  }
`;

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const allTechnologies = projects.reduce((acc: string[], project) => {
    project.technologies.forEach(tech => {
      if (!acc.includes(tech)) {
        acc.push(tech);
      }
    });
    return acc;
  }, []);

  const filterOptions = ['All', ...allTechnologies.slice(0, 5)];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  const handleProjectLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <ProjectsContainer id="projects">
      <Container>
        <SectionTitle>// PROJECTS</SectionTitle>
        
        <FilterButtons>
          {filterOptions.map(option => (
            <FilterButton
              key={option}
              active={filter === option}
              onClick={() => setFilter(option)}
            >
              {option.toLowerCase()}
            </FilterButton>
          ))}
        </FilterButtons>

        <Grid columns={3}>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CardHeader>
                <div className="dots">
                  <span /><span /><span />
                </div>
                ls -la project_{String(index + 1).padStart(2, '0')}/
              </CardHeader>

              <ProjectImage>
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.setAttribute('style', 'display: flex');
                    }}
                  />
                ) : null}
                <div className="placeholder" style={{ display: project.imageUrl ? 'none' : 'flex' }}>
                  <Icon name="FaEye" size={40} />
                </div>
                
                <ProjectOverlay>
                  {project.githubUrl && (
                    <OverlayButton
                      onClick={() => handleProjectLink(project.githubUrl!)}
                      title="View Source Code"
                    >
                      <Icon name="FaGithub" size={18} />
                    </OverlayButton>
                  )}
                  {project.liveUrl && (
                    <OverlayButton
                      onClick={() => handleProjectLink(project.liveUrl!)}
                      title="View Live Demo"
                    >
                      <Icon name="FaExternalLinkAlt" size={18} />
                    </OverlayButton>
                  )}
                </ProjectOverlay>
              </ProjectImage>

              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectTechnologies>
                  {project.technologies.map((tech, idx) => (
                    <Tag key={idx}>{tech}</Tag>
                  ))}
                </ProjectTechnologies>

                <ProjectLinks>
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      onClick={() => handleProjectLink(project.githubUrl!)}
                    >
                      <Icon name="FaGithub" size={14} />
                      code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="primary"
                      onClick={() => handleProjectLink(project.liveUrl!)}
                    >
                      <Icon name="FaExternalLinkAlt" size={14} />
                      demo
                    </Button>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </Grid>
      </Container>
    </ProjectsContainer>
  );
};

export default Projects;
