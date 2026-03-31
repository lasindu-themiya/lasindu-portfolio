import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Section, SectionTitle, Button } from '../styles/GlobalStyles';
import { contactInfo } from '../data/portfolioData';
import { Icon } from './icons/IconMappings';

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const ContactContainer = styled(Section)`
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

const ContactInfoSection = styled(motion.div)``;

const InfoTerminal = styled.div`
  background: rgba(10, 6, 20, 0.85);
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: 6px;
  overflow: hidden;
  backdrop-filter: blur(10px);
`;

const TermBar = styled.div`
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
`;

const TermBody = styled.div`
  padding: 1.5rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  line-height: 2;
`;

const InfoLine = styled.div`
  margin-bottom: 0.25rem;
  
  .key {
    color: ${({ theme }) => theme.colors.arcanePurple};
  }
  .value {
    color: ${({ theme }) => theme.colors.text};
  }
  a {
    color: ${({ theme }) => theme.colors.hexBlue};
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      text-shadow: 0 0 8px rgba(0, 212, 255, 0.3);
    }
  }
`;

const Prompt = styled.span`
  color: ${({ theme }) => theme.colors.terminalGreen};
`;

const SocialRow = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
  justify-content: center;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: rgba(123, 47, 190, 0.1);
  color: ${({ theme }) => theme.colors.arcanePurple};
  border: 1px solid rgba(123, 47, 190, 0.2);
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 212, 255, 0.15);
    border-color: ${({ theme }) => theme.colors.hexBlue};
    color: ${({ theme }) => theme.colors.hexBlue};
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.2);
    transform: translateY(-3px);
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(10, 6, 20, 0.85);
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: 6px;
  overflow: hidden;
  backdrop-filter: blur(10px);
`;

const FormBar = styled.div`
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
`;

const FormBody = styled.div`
  padding: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.25rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.textLight};
    font-family: 'Fira Code', monospace;
    font-size: 0.8rem;
    
    &::before {
      content: '❯ ';
      color: ${({ theme }) => theme.colors.arcanePurple};
    }

    .required {
      color: ${({ theme }) => theme.colors.error};
    }
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: 3px;
  font-size: 0.85rem;
  font-family: 'Fira Code', monospace;
  transition: all 0.3s ease;
  background: rgba(10, 6, 20, 0.6);
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.hexBlue};
    box-shadow: 0 0 10px rgba(0, 212, 255, 0.15);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
    opacity: 0.5;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: 3px;
  font-size: 0.85rem;
  font-family: 'Fira Code', monospace;
  transition: all 0.3s ease;
  background: rgba(10, 6, 20, 0.6);
  color: ${({ theme }) => theme.colors.text};
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.hexBlue};
    box-shadow: 0 0 10px rgba(0, 212, 255, 0.15);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
    opacity: 0.5;
  }
`;

const ExecuteButton = styled(Button)`
  width: 100%;
  justify-content: center;
  padding: 0.75rem;
  font-size: 0.85rem;
  background: linear-gradient(135deg, rgba(123, 47, 190, 0.3), rgba(0, 212, 255, 0.2));
  border: 1px solid rgba(0, 212, 255, 0.3);
  color: ${({ theme }) => theme.colors.hexBlue};

  &:hover {
    background: linear-gradient(135deg, rgba(123, 47, 190, 0.5), rgba(0, 212, 255, 0.3));
    box-shadow: ${({ theme }) => theme.shadows.glow};
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .cursor {
    display: inline-block;
    width: 6px;
    height: 14px;
    background: ${({ theme }) => theme.colors.hexBlue};
    animation: ${blink} 1s step-end infinite;
    margin-left: 4px;
    vertical-align: middle;
  }
`;

const StatusMessage = styled.div<{ type: 'success' | 'error' }>`
  padding: 0.75rem 1rem;
  border-radius: 3px;
  margin-bottom: 1rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  background: ${props => props.type === 'success' ? 'rgba(0, 255, 65, 0.1)' : 'rgba(255, 68, 68, 0.1)'};
  color: ${props => props.type === 'success' ? '#00ff41' : '#ff4444'};
  border: 1px solid ${props => props.type === 'success' ? 'rgba(0, 255, 65, 0.2)' : 'rgba(255, 68, 68, 0.2)'};
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
    if (status.type) {
      setStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });
    
    try {
      const apiUrl = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:3001/api/contact'
        : '/api/contact';
        
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: 'success',
          message: '[OK] Message transmitted successfully.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: `[ERROR] ${result.message || 'Transmission failed. Retry.'}`
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: '[ERROR] Network failure. Check connection.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactContainer id="contact">
      <Container>
        <SectionTitle>{'// CONTACT'}</SectionTitle>
        
        <ContactContent>
          <ContactInfoSection
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <InfoTerminal>
              <TermBar>
                <div className="dots">
                  <span /><span /><span />
                </div>
                system_info --contact
              </TermBar>
              <TermBody>
                <InfoLine>
                  <Prompt>❯ </Prompt>
                  <span style={{ color: '#00ff41' }}>cat contact.cfg</span>
                </InfoLine>
                <InfoLine>
                  <span className="key">  email</span>: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </InfoLine>
                {contactInfo.phone && (
                  <InfoLine>
                    <span className="key">  phone</span>: <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                  </InfoLine>
                )}
                <InfoLine>
                  <span className="key">  location</span>: <span className="value">{contactInfo.location}</span>
                </InfoLine>
                <InfoLine>
                  <span className="key">  status</span>: <span style={{ color: '#00ff41' }}>● ONLINE</span>
                </InfoLine>
                <InfoLine style={{ marginTop: '1rem' }}>
                  <Prompt>❯ </Prompt>
                  <span style={{ color: '#8b7faa' }}>Ready for new connections and collaborations.</span>
                </InfoLine>
              </TermBody>
            </InfoTerminal>

            <SocialRow>
              {contactInfo.linkedin && (
                <SocialLink 
                  href={contactInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <Icon name="FaLinkedin" size={18} />
                </SocialLink>
              )}
              {contactInfo.github && (
                <SocialLink 
                  href={contactInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <Icon name="FaGithub" size={18} />
                </SocialLink>
              )}
              <SocialLink 
                href={`mailto:${contactInfo.email}`}
                title="Email"
              >
                <Icon name="FaEnvelope" size={18} />
              </SocialLink>
            </SocialRow>
          </ContactInfoSection>

          <ContactForm
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <FormBar>
              <div className="dots">
                <span /><span /><span />
              </div>
              compose_message.sh
            </FormBar>

            <FormBody>
              {status.type && (
                <StatusMessage type={status.type}>
                  {status.message}
                </StatusMessage>
              )}

              <FormGroup>
                <label htmlFor="name">
                  Enter name <span className="required">*</span>
                </label>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="your_name"
                  required
                  disabled={isSubmitting}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="email">
                  Enter email <span className="required">*</span>
                </label>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@domain.com"
                  required
                  disabled={isSubmitting}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="subject">
                  Enter subject <span className="required">*</span>
                </label>
                <FormInput
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="subject_line"
                  required
                  disabled={isSubmitting}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="message">
                  Enter message <span className="required">*</span>
                </label>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="// write your message here..."
                  required
                  disabled={isSubmitting}
                />
              </FormGroup>

              <ExecuteButton 
                type="submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>TRANSMITTING...</>
                ) : (
                  <>[EXECUTE] send_message<span className="cursor" /></>
                )}
              </ExecuteButton>
            </FormBody>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactContainer>
  );
};

export default Contact;
