import { motion } from 'motion/react';
import SocialTag from '../components/contacts/SocialTag';
import ContactForm from '../components/contacts/ContactForm';

const Contacts = () => {
  return (
    <>
      <title>Contacts | Jason</title>
      <meta name="description" content="Hey, I'm Jason, a student at RIT. Let's connect!" />

      <SocialTag />
      <ContactForm />
    </>
  );
};

export default Contacts;
