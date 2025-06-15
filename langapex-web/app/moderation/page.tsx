"use client";

import { motion } from 'framer-motion';

const ModerationPage = () => {
  const rules = [
    {
      title: 'Be Respectful',
      description: 'No personal attacks, hate speech, discrimination, or harassment. Disagreements are fine—be civil and constructive.',
      icon: '🤝'
    },
    {
      title: 'Stay On Topic',
      description: 'Keep discussions relevant to alumni matters (events, opportunities, memories, networking). Use designated threads or channels for off-topic discussions.',
      icon: '🎯'
    },
    {
      title: 'No Spam or Promotions',
      description: 'No unsolicited advertising, self-promotion, or chain messages. Alumni-owned business promos must be approved by admins first.',
      icon: '🚫'
    },
    {
      title: 'Privacy Matters',
      description: 'Do not share screenshots or forward messages outside the group without permission. Respect members\'privacy and consent.',
      icon: '🔒'
    },
    {
      title: 'Politics or Religion',
      description: 'To maintain group harmony, avoid debates on political or religious topics unless directly relevant to alumni interests.',
      icon: '⚖️'
    },
    {
      title: 'Language and Tone',
      description: 'Use language appropriate for a diverse and professional community. Avoid excessive profanity, slurs, or anything vulgar.',
      icon: '💬'
    },
    {
      title: 'Event Posting',
      description: 'Alumni-related events must be shared with clear details (who/what/when/where). Admins may pin or highlight approved events.',
      icon: '📅'
    },
    {
      title: 'Admin Authority',
      description: 'Admins reserve the right to delete content or remove members who violate rules. Repeated or serious violations can result in permanent removal.',
      icon: '👮'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            🛡️ Alumni Telegram Group Chat Moderation Rules
          </motion.h1>
          <p className="text-lg text-gray-600">Guidelines to maintain a respectful and productive community</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <span className="text-2xl">{rule.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{rule.title}</h3>
                  <p className="text-gray-600">{rule.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center text-gray-500 text-sm"
        >
          These rules are subject to change and interpretation by the admin team.
        </motion.div>
      </div>
    </div>
  );
};

export default ModerationPage;
