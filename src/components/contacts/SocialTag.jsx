import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const SocialTag = () => {
  const SocialLinks = [
    { name: 'Email', href: 'mailto:c04jason@gmail.com', icon: <Mail size={20} className="text-indigo-400" /> },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/jasonchen0080',
      icon: <Linkedin size={20} className="text-indigo-400" />,
    },
    {
      name: 'GitHub/xentriom',
      href: 'https://github.com/xentriom',
      icon: <Github size={20} className="text-indigo-400" />,
    },
    {
      name: 'GitHub/ScobbleQ',
      href: 'https://github.com/ScobbleQ',
      icon: <Github size={20} className="text-indigo-400" />,
    },
  ];

  return (
    <motion.ul
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="p-4 bg-gray-700/20 backdrop-blur-lg rounded-lg shadow-xl border-gray-700 text-gray-200 mb-4"
    >
      {SocialLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-indigo-400 transition-colors duration-200 space-y-2"
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
