import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Section, SectionTitle, Button } from '../styles/GlobalStyles';
import { contactInfo } from '../data/portfolioData';
import { Icon } from './icons/IconMappings';

const ContactContainer = styled(Section)`
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const ContactInfo = styled(motion.div)`
  h3 {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  .icon {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.backgroundAlt};
    padding: ${({ theme }) => theme.spacing.sm};
    border-radius: 50%;
    min-width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    .label {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: ${({ theme }) => theme.spacing.xs};
    }

    .value {
      color: ${({ theme }) => theme.colors.textLight};
      word-break: break-all;

      a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: ${({ theme }) => theme.colors.primaryDark};
          text-decoration: underline;
        }
      }
    }
  }
`;

const ContactForm = styled(motion.form)`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.medium};

  h3 {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  position: relative;

  label {
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }

  .required {
    color: ${({ theme }) => theme.colors.error};
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 1rem;
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.background};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 1rem;
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 120px;
  resize: vertical;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.background};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md};
  font-size: 1.125rem;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.cardBg};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all 0.3s ease;
  font-size: 1.25rem;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const StatusMessage = styled.div<{ type: 'success' | 'error' }>`
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  background: ${props => props.type === 'success' ? '#d4edda' : '#f8d7da'};
  color: ${props => props.type === 'success' ? '#155724' : '#721c24'};
  border: 1px solid ${props => props.type === 'success' ? '#c3e6cb' : '#f5c6cb'};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear status when user starts typing
    if (status.type) {
      setStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });
    
    try {
      // Use relative path for production, localhost for development
      const apiUrl = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:3001/api/contact'
        : '/api/contact';
        
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: result.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: <Icon name="FaEnvelope" className="icon" size={24} />,
      label: 'Email',
      value: contactInfo.email,
      link: `mailto:${contactInfo.email}`
    },
    {
      icon: <Icon name="FaPhone" className="icon" size={24} />,
      label: 'Phone',
      value: contactInfo.phone || 'Available on request',
      link: contactInfo.phone ? `tel:${contactInfo.phone}` : undefined
    },
    {
      icon: <Icon name="FaMapMarkerAlt" className="icon" size={24} />,
      label: 'Location',
      value: contactInfo.location,
      link: undefined
    }
  ];

  return (
    <ContactContainer id="contact">
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>
        
        <ContactContent>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Let's Work Together</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a project in mind, want to collaborate, or just 
              want to say hello, feel free to reach out!
            </p>

            {contactItems.map((item, index) => (
              <ContactItem
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.icon}
                <div className="content">
                  <div className="label">{item.label}</div>
                  <div className="value">
                    {item.link ? (
                      <a href={item.link}>{item.value}</a>
                    ) : (
                      item.value
                    )}
                  </div>
                </div>
              </ContactItem>
            ))}

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
            </SocialLinks>
          </ContactInfo>

          <ContactForm
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <h3>Send Me a Message</h3>

            {status.type && (
              <StatusMessage type={status.type}>
                <Icon 
                  name={status.type === 'success' ? 'FaCheckCircle' : 'FaExclamationTriangle'} 
                  size={20} 
                />
                {status.message}
              </StatusMessage>
            )}

            <FormGroup>
              <label htmlFor="name">
                <Icon name="FaUser" style={{ marginRight: '8px' }} size={16} />
                Name <span className="required">*</span>
              </label>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
                disabled={isSubmitting}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="email">
                <Icon name="FaEnvelope" style={{ marginRight: '8px' }} size={16} />
                Email <span className="required">*</span>
              </label>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
                disabled={isSubmitting}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="subject">
                <Icon name="FaCommentAlt" style={{ marginRight: '8px' }} size={16} />
                Subject <span className="required">*</span>
              </label>
              <FormInput
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                required
                disabled={isSubmitting}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="message">
                <Icon name="FaCommentAlt" style={{ marginRight: '8px' }} size={16} />
                Message <span className="required">*</span>
              </label>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project or just say hello!"
                required
                disabled={isSubmitting}
              />
            </FormGroup>

            <SubmitButton 
              type="submit" 
              disabled={isSubmitting}
            >
              <Icon name={isSubmitting ? 'FaSpinner' : 'FaPaperPlane'} size={16} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactContainer>
  );
};

export default Contact;
