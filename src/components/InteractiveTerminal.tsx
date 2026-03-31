import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minus } from 'lucide-react';

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const ToggleButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(123, 47, 190, 0.6), rgba(0, 212, 255, 0.4));
  border: 1px solid rgba(0, 212, 255, 0.4);
  color: #00d4ff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(123, 47, 190, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(123, 47, 190, 0.25);
  }

  @media (max-width: 480px) {
    bottom: 1rem;
    right: 1rem;
    width: 44px;
    height: 44px;
  }
`;

const TerminalOverlay = styled(motion.div)`
  position: fixed;
  bottom: 6rem;
  right: 2rem;
  width: 480px;
  max-height: 400px;
  z-index: 9999;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(6, 3, 14, 0.97);
  border: 1px solid rgba(0, 212, 255, 0.25);
  box-shadow: 
    0 0 30px rgba(0, 212, 255, 0.15),
    0 0 60px rgba(123, 47, 190, 0.1),
    0 20px 60px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);

  @media (max-width: 600px) {
    left: 1rem;
    right: 1rem;
    bottom: 5rem;
    width: auto;
    max-height: 350px;
  }
`;

const TermBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  background: rgba(123, 47, 190, 0.12);
  border-bottom: 1px solid rgba(0, 212, 255, 0.12);
  cursor: default;
  user-select: none;
`;

const BarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    &.r { background: #ff5f57; }
    &.y { background: #febc2e; }
    &.g { background: #28c840; }
  }

  .title {
    margin-left: 0.5rem;
    font-family: 'Fira Code', monospace;
    font-size: 0.7rem;
    color: #8b7faa;
  }
`;

const BarButtons = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    background: none;
    border: none;
    color: #8b7faa;
    cursor: pointer;
    padding: 2px;
    display: flex;
    align-items: center;
    transition: color 0.2s;

    &:hover {
      color: #00d4ff;
    }
  }
`;

const TermBody = styled.div`
  padding: 0.75rem 1rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  line-height: 1.7;
  max-height: 320px;
  overflow-y: auto;
  color: #c8d6e5;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(123, 47, 190, 0.3);
    border-radius: 2px;
  }

  @media (max-width: 600px) {
    max-height: 270px;
    font-size: 0.75rem;
  }
`;

const OutputLine = styled.div<{ color?: string }>`
  color: ${({ color }) => color || '#c8d6e5'};
  margin-bottom: 0.15rem;
  word-break: break-word;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  margin-top: 0.25rem;
`;

const PromptSpan = styled.span`
  color: #7b2fbe;
  font-weight: 600;
  white-space: nowrap;
  margin-right: 0.35rem;
`;

const InputField = styled.input`
  background: transparent;
  border: none;
  color: #00ff41;
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  outline: none;
  flex: 1;
  caret-color: #00ff41;
  width: 100%;

  &::placeholder {
    color: rgba(139, 127, 170, 0.4);
  }

  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

const SuggestionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(0, 212, 255, 0.08);
`;

const SuggestionTag = styled.button`
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.15);
  color: #4fa8d1;
  font-family: 'Fira Code', monospace;
  font-size: 0.65rem;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(0, 212, 255, 0.18);
    border-color: #00d4ff;
    color: #00d4ff;
  }
`;

interface HistoryLine {
  text: string;
  color?: string;
}

const COMMANDS: Record<string, { description: string; section?: string; action?: string }> = {
  home: { description: 'Navigate to home', section: '#home' },
  about: { description: 'Navigate to about section', section: '#about' },
  experience: { description: 'View work experience', section: '#experience' },
  projects: { description: 'Browse projects', section: '#projects' },
  skills: { description: 'View skills & technologies', section: '#skills' },
  contact: { description: 'Get in touch', section: '#contact' },
  help: { description: 'List available commands', action: 'help' },
  clear: { description: 'Clear terminal', action: 'clear' },
  whoami: { description: 'Display identity', action: 'whoami' },
  resume: { description: 'Download resume', action: 'resume' },
  socials: { description: 'Show social links', action: 'socials' },
  date: { description: 'Show current date', action: 'date' },
};

const InteractiveTerminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryLine[]>([
    { text: '  Welcome to Lasindu\'s terminal!', color: '#00d4ff' },
    { text: '  Type "help" to see commands or click a suggestion below.', color: '#8b7faa' },
    { text: '' },
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const addOutput = (lines: HistoryLine[]) => {
    setHistory(prev => [...prev, ...lines]);
  };

  const processCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    
    addOutput([{ text: `❯ ${cmd}`, color: '#00ff41' }]);
    setCmdHistory(prev => [trimmed, ...prev]);
    setCmdIndex(-1);

    if (!trimmed) return;

    const command = COMMANDS[trimmed];

    if (!command) {
      // Check partial matches
      const matches = Object.keys(COMMANDS).filter(c => c.startsWith(trimmed));
      if (matches.length === 1) {
        // Auto-execute the single match
        processMatchedCommand(matches[0]);
        return;
      } else if (matches.length > 1) {
        addOutput([
          { text: `  Did you mean: ${matches.join(', ')}?`, color: '#c89b3c' },
        ]);
        return;
      }

      addOutput([
        { text: `  Command not found: "${trimmed}"`, color: '#ff4444' },
        { text: '  Type "help" to see available commands.', color: '#8b7faa' },
      ]);
      return;
    }

    processMatchedCommand(trimmed);
  };

  const processMatchedCommand = (name: string) => {
    const command = COMMANDS[name];
    if (!command) return;

    if (command.section) {
      const el = document.querySelector(command.section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        addOutput([
          { text: `  Navigating to ${name}...`, color: '#00d4ff' },
        ]);
      }
      return;
    }

    switch (command.action) {
      case 'help':
        addOutput([
          { text: '  ┌─────────────────────────────────────────┐', color: '#7b2fbe' },
          { text: '  │  AVAILABLE COMMANDS                     │', color: '#7b2fbe' },
          { text: '  ├─────────────────────────────────────────┤', color: '#7b2fbe' },
          ...Object.entries(COMMANDS).map(([key, val]) => ({
            text: `  │  ${key.padEnd(14)} ${val.description}`,
            color: key === 'help' || key === 'clear' ? '#8b7faa' : '#c8d6e5',
          })),
          { text: '  └─────────────────────────────────────────┘', color: '#7b2fbe' },
        ]);
        break;

      case 'clear':
        setHistory([]);
        break;

      case 'whoami':
        addOutput([
          { text: '  ┌──────────────────────────────────┐', color: '#00d4ff' },
          { text: '  │  IDENTITY FILE                   │', color: '#00d4ff' },
          { text: '  ├──────────────────────────────────┤', color: '#00d4ff' },
          { text: '  │  Name:     Lasindu Themiya       │', color: '#c8d6e5' },
          { text: '  │  Role:     Full Stack Developer  │', color: '#c8d6e5' },
          { text: '  │  Location: Galle, Sri Lanka      │', color: '#c8d6e5' },
          { text: '  │  Status:   ● ONLINE              │', color: '#00ff41' },
          { text: '  └──────────────────────────────────┘', color: '#00d4ff' },
        ]);
        break;

      case 'resume':
        addOutput([{ text: '  Downloading resume...', color: '#c89b3c' }]);
        const link = document.createElement('a');
        link.href = '/documents/Lasindu_Themiya.pdf';
        link.download = 'Lasindu_Themiya_Resume.pdf';
        link.click();
        addOutput([{ text: '  [OK] Download started.', color: '#00ff41' }]);
        break;

      case 'socials':
        addOutput([
          { text: '  ┌──────────────────────────────────────────────┐', color: '#c89b3c' },
          { text: '  │  SOCIAL LINKS                                │', color: '#c89b3c' },
          { text: '  ├──────────────────────────────────────────────┤', color: '#c89b3c' },
          { text: '  │  GitHub:   github.com/lasindu-themiya        │', color: '#c8d6e5' },
          { text: '  │  LinkedIn: linkedin.com/in/lasindu-themiya   │', color: '#c8d6e5' },
          { text: '  │  Email:    lasinduthemiya96@gmail.com        │', color: '#c8d6e5' },
          { text: '  └──────────────────────────────────────────────┘', color: '#c89b3c' },
        ]);
        break;

      case 'date':
        addOutput([
          { text: `  ${new Date().toLocaleString()}`, color: '#c89b3c' },
        ]);
        break;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      processCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const newIndex = Math.min(cmdIndex + 1, cmdHistory.length - 1);
        setCmdIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdIndex > 0) {
        const newIndex = cmdIndex - 1;
        setCmdIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      } else {
        setCmdIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const trimmed = input.trim().toLowerCase();
      if (trimmed) {
        const matches = Object.keys(COMMANDS).filter(c => c.startsWith(trimmed));
        if (matches.length === 1) {
          setInput(matches[0]);
        } else if (matches.length > 1) {
          addOutput([
            { text: `❯ ${input}`, color: '#00ff41' },
            { text: `  Matches: ${matches.join('  ')}`, color: '#8b7faa' },
          ]);
        }
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleSuggestion = (cmd: string) => {
    processCommand(cmd);
    setInput('');
    inputRef.current?.focus();
  };

  const suggestions = ['help', 'about', 'projects', 'skills', 'contact', 'whoami', 'resume'];

  return (
    <>
      <ToggleButton
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Open terminal (navigate with commands)"
      >
        {isOpen ? <X size={20} /> : <TerminalIcon size={20} />}
      </ToggleButton>

      <AnimatePresence>
        {isOpen && (
          <TerminalOverlay
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <TermBar>
              <BarLeft>
                <span className="dot r" />
                <span className="dot y" />
                <span className="dot g" />
                <span className="title">interactive terminal</span>
              </BarLeft>
              <BarButtons>
                <button onClick={() => setHistory([])} title="Clear">
                  <Minus size={14} />
                </button>
                <button onClick={() => setIsOpen(false)} title="Close">
                  <X size={14} />
                </button>
              </BarButtons>
            </TermBar>

            <TermBody ref={bodyRef} onClick={() => inputRef.current?.focus()}>
              {history.map((line, i) => (
                <OutputLine key={i} color={line.color}>
                  {line.text}
                </OutputLine>
              ))}

              <InputRow>
                <PromptSpan>❯</PromptSpan>
                <InputField
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type a command..."
                  spellCheck={false}
                  autoComplete="off"
                />
              </InputRow>

              <SuggestionRow>
                {suggestions.map(cmd => (
                  <SuggestionTag key={cmd} onClick={() => handleSuggestion(cmd)}>
                    {cmd}
                  </SuggestionTag>
                ))}
              </SuggestionRow>
            </TermBody>
          </TerminalOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default InteractiveTerminal;
