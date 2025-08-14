import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme, Container, Section, SectionTitle, Grid, Tag, Button } from '../styles/GlobalStyles';
import { projects } from '../data/portfolioData';
import { Icon } from './icons/IconMappings';

const ProjectsContainer = styled(Section)`
  background: ${theme.colors.backgroundAlt};
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${theme.shadows.hover};
  }
`;

const ProjectImage = styled.div`
  position: relative;
  height: 200px;
  background: ${theme.colors.gradient};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  .placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: ${theme.colors.white};
    font-size: 3rem;
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.md};
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const OverlayButton = styled.button`
  background: ${theme.colors.white};
  color: ${theme.colors.primary};
  border: none;
  padding: ${theme.spacing.sm};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.25rem;

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.lg};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm};
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.md};
  flex: 1;
`;

const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  justify-content: space-between;
  align-items: center;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.xl};
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 2px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.medium};
  background: ${({ active }) => active ? theme.colors.primary : 'transparent'};
  color: ${({ active }) => active ? theme.colors.white : theme.colors.primary};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  // Get unique technologies for filter buttons
  const allTechnologies = projects.reduce((acc: string[], project) => {
    project.technologies.forEach(tech => {
      if (!acc.includes(tech)) {
        acc.push(tech);
      }
    });
    return acc;
  }, []);

  const filterOptions = ['All', ...allTechnologies.slice(0, 5)]; // Show top 5 technologies

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  const handleProjectLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <ProjectsContainer id="projects">
      <Container>
        <SectionTitle>Featured Projects</SectionTitle>
        
        <FilterButtons>
          {filterOptions.map(option => (
            <FilterButton
              key={option}
              active={filter === option}
              onClick={() => setFilter(option)}
            >
              {option}
            </FilterButton>
          ))}
        </FilterButtons>

        <Grid columns={3}>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
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
                      <Icon name="FaGithub" size={20} />
                    </OverlayButton>
                  )}
                  {project.liveUrl && (
                    <OverlayButton
                      onClick={() => handleProjectLink(project.liveUrl!)}
                      title="View Live Demo"
                    >
                      <Icon name="FaExternalLinkAlt" size={20} />
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
                  <div style={{ display: 'flex', gap: theme.spacing.sm }}>
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        onClick={() => handleProjectLink(project.githubUrl!)}
                      >
                        <Icon name="FaGithub" size={16} />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="primary"
                        onClick={() => handleProjectLink(project.liveUrl!)}
                      >
                        <Icon name="FaExternalLinkAlt" size={16} />
                        Live Demo
                      </Button>
                    )}
                  </div>
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
