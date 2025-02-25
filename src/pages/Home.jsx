import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <title>Jason Chen</title>
      <meta name="description" content="Hey, I'm Jason, a student at RIT. Welcome to my page!" />
      <div className="flex flex-col items-center flex-grow justify-center text-gray-200">
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: 'easeOut',
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold mb-4"
        >
          Heyo, I&apos;m Jason
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.3,
                ease: 'easeOut',
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="text-xl mb-8 opacity-90"
        >
          Making random stuff for the internet
        </motion.p>
        <motion.button
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                delay: 0.6,
                ease: 'easeOut',
              },
            },
            hover: { scale: 1.05 },
            tap: { scale: 0.95 },
          }}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          onClick={() => navigate('/projects')}
          className="px-6 py-3 text-lg glassmorph-indigo"
        >
          Explore My Work
        </motion.button>
      </div>
    </>
  );
};

export default Home;
