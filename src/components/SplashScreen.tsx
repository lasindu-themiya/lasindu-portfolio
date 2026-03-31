import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const SplashContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #0a0614;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(ellipse at 20% 50%, rgba(123, 47, 190, 0.15) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%);
    z-index: 0;
  }
`;

const TerminalBox = styled(motion.div)`
  width: 90%;
  max-width: 600px;
  background: rgba(10, 6, 20, 0.85);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 
    0 0 30px rgba(0, 212, 255, 0.15),
    inset 0 0 20px rgba(123, 47, 190, 0.1);
  z-index: 1;
  backdrop-filter: blur(10px);
`;

const TermBar = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  background: rgba(123, 47, 190, 0.15);
  border-bottom: 1px solid rgba(0, 212, 255, 0.2);
  gap: 0.5rem;

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    &.r { background: #ff5f57; }
    &.y { background: #febc2e; }
    &.g { background: #28c840; }
  }

  .title {
    margin-left: 0.5rem;
    color: #8b7faa;
    font-family: 'Fira Code', monospace;
    font-size: 0.8rem;
  }
`;

const TermBody = styled.div`
  padding: 2rem;
  font-family: 'Fira Code', monospace;
`;

const LoadingText = styled.div`
  color: #00ff41;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  height: 1.2rem;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  background: rgba(0, 212, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  margin-bottom: 1rem;
`;

const ProgressBarFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #7b2fbe 0%, #00d4ff 100%);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
`;

const LoadingDetails = styled.div`
  display: flex;
  justify-content: space-between;
  color: #8b7faa;
  font-size: 0.8rem;
`;

const Percentage = styled.div`
  color: #00d4ff;
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
  margin-top: 1rem;
  text-align: right;
  font-family: 'Orbitron', sans-serif;
`;

const LogLines = styled.div`
  margin-top: 1.5rem;
  font-size: 0.75rem;
  color: #c8d6e5;
  height: 60px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .log-line {
    opacity: 0.6;
    margin-top: 0.25rem;
    animation: fadeIn 0.2s ease-in;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 0.6; transform: translateY(0); }
  }
`;

interface SplashScreenProps {
  onComplete: () => void;
}

const loadingMessages = [
  "Initializing hextech matrix...",
  "Loading arcane assets...",
  "Establishing secure connection...",
  "Decrypting system logs...",
  "Compiling terminal interface...",
  "Bypassing Piltover security protocols...",
  "Syncing Zaunite network nodes...",
  "System ready."
];

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const duration = 2500; // total duration in ms
    const intervalTime = 50; 
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.floor((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (newProgress === 100) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 600); // brief pause at 100% before transitioning
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    // Update messages and logs based on progress
    const messageIndex = Math.min(
      Math.floor((progress / 100) * loadingMessages.length),
      loadingMessages.length - 1
    );
    
    if (messageIndex !== currentMessageIndex) {
      setCurrentMessageIndex(messageIndex);
      setLogs(prev => {
        const newLogs = [...prev, `> ${loadingMessages[messageIndex]}`];
        return newLogs.slice(-3); // Keep only last 3 logs
      });
    }
  }, [progress, currentMessageIndex]);

  return (
    <AnimatePresence>
      <SplashContainer
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <TerminalBox>
          <TermBar>
            <span className="dot r" />
            <span className="dot y" />
            <span className="dot g" />
            <span className="title">boot_sequence.sh</span>
          </TermBar>
          <TermBody>
            <LoadingText>
              <span style={{ color: '#7b2fbe' }}>❯</span> {loadingMessages[currentMessageIndex]}
            </LoadingText>
            
            <ProgressBarContainer>
              <ProgressBarFill
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </ProgressBarContainer>

            <LoadingDetails>
              <span>[HEXTECH CORE]</span>
              <span>modules/{progress < 100 ? 'loading' : 'ready'}</span>
            </LoadingDetails>

            <Percentage>{progress}%</Percentage>

            <LogLines>
              {logs.map((log, index) => (
                <div key={index + log} className="log-line">
                  {log}
                </div>
              ))}
            </LogLines>
          </TermBody>
        </TerminalBox>
      </SplashContainer>
    </AnimatePresence>
  );
};

export default SplashScreen;
