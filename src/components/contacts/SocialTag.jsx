import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

// SocialTag component for displaying social links
const SocialTag = () => {
  const SocialLinks = [
    { name: 'jc5892@rit.edu', href: 'mailto:jc5892@rit.edu', icon: <Mail size={20} /> },
    {
      name: 'linkedin.com/in/jasonchen0080',
      href: 'https://linkedin.com/in/jasonchen0080',
      icon: <Linkedin size={20} />,
    },
    { name: 'github.com/xentriom', href: 'https://github.com/xentriom', icon: <Github size={20} /> },
    { name: 'github.com/ScobbleQ', href: 'https://github.com/ScobbleQ', icon: <Github size={20} /> },
  ];

  return (
    <motion.ul
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="p-4 glassmorph-700 text-indigo-400 mb-4"
    >
      {SocialLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-indigo-700 transition-colors duration-200 space-y-2"
            aria-label={link.name}
          >
            {link.icon}
            <span className="font-medium">{link.name}</span>
          </a>
        </li>
      ))}
    </motion.ul>
  );
};

export default SocialTag;
