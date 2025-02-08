import { motion } from 'motion/react';

// ContactForm component for displaying a contact form
const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;
    alert(name.value + email.value + message.value);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="p-4 bg-gray-700/20 backdrop-blur-lg rounded-lg shadow-xl border-gray-700"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-grow gap-4 mb-4">
        <div className="flex-1">
          <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-1 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-1 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full p-1 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-500 text-gray-200 py-2 px-4 rounded-md cursor-pointer hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-700"
      >
        Send Message
      </button>
    </motion.form>
  );
};

export default ContactForm;
