import React from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
  Send,
  Download,
  ArrowDown,
  ArrowUp,
  Menu,
  X,
  Eye,
  ExternalLink,
  Code,
  Briefcase,
  Calendar,
  Heart,
  GraduationCap,
  Award,
  Monitor,
  Wrench,
  Users,
  CheckCircle,
  AlertTriangle,
  Loader
} from 'lucide-react';

// For technology icons, we'll use react-icons
import { 
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws
} from 'react-icons/fa';

import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiNextdotjs
} from 'react-icons/si';

// Icon component mapping
export const IconMap = {
  // User & Contact
  FaUser: User,
  FaEnvelope: Mail,
  FaPhone: Phone,
  FaMapMarkerAlt: MapPin,
  
  // Social
  FaGithub: Github,
  FaLinkedin: Linkedin,
  
  // Communication
  FaCommentAlt: MessageCircle,
  FaPaperPlane: Send,
  
  // Actions
  FaDownload: Download,
  FaArrowDown: ArrowDown,
  FaArrowUp: ArrowUp,
  
  // Navigation
  FaBars: Menu,
  FaTimes: X,
  
  // Visual
  FaEye: Eye,
  FaExternalLinkAlt: ExternalLink,
  
  // Tech - General
  FaCode: Code,
  FaBriefcase: Briefcase,
  FaCalendarAlt: Calendar,
  
  // Other
  FaHeart: Heart,
  FaGraduationCap: GraduationCap,
  FaCertificate: Award,
  
  // Skills categories
  FaLaptopCode: Monitor,
  FaTools: Wrench,
  FaUsers: Users,
  
  // Tech skills - specific icons
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  FaPython: FaPython,
  FaGitAlt: FaGitAlt,
  FaDocker: FaDocker,
  FaAws: FaAws,
  SiTypescript: SiTypescript,
  SiJavascript: SiJavascript,
  SiMongodb: SiMongodb,
  SiPostgresql: SiPostgresql,
  SiExpress: SiExpress,
  SiNextdotjs: SiNextdotjs,
  
  // Status icons
  FaCheckCircle: CheckCircle,
  FaExclamationTriangle: AlertTriangle,
  FaSpinner: Loader,
};

// Icon component type
export type IconName = keyof typeof IconMap;

// Dynamic icon component
interface IconProps {
  name: IconName;
  className?: string;
  style?: React.CSSProperties;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, style, size = 24 }) => {
  const IconComponent = IconMap[name];
  
  if (!IconComponent) {
    return <Code className={className} style={style} size={size} />;
  }
  
  return <IconComponent className={className} style={style} size={size} />;
};

export default Icon;
