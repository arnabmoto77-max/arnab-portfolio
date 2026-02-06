
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Mail, 
  MessageCircle, 
  Phone, 
  Youtube,
  ArrowUpRight
} from 'lucide-react';

const ContactItem: React.FC<{ 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  href: string;
  delay: number;
}> = ({ icon, label, value, href, delay }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="group flex items-center justify-between p-8 border border-white/5 bg-zinc-950/50 hover:bg-zinc-900 transition-all duration-500 rounded-sm"
  >
    <div className="flex items-center space-x-6">
      <div className="p-4 bg-white/5 text-white/40 group-hover:text-white group-hover:bg-white/10 transition-colors">
        {icon}
      </div>
      <div>
        <span className="block text-[10px] tracking-[0.3em] uppercase text-white/30 mb-1">{label}</span>
        <span className="text-xl font-light tracking-wide">{value}</span>
      </div>
    </div>
    <ArrowUpRight className="text-white/10 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
  </motion.a>
);

const Booking: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 min-h-screen bg-[#050505]"
    >
      <div className="container mx-auto max-w-5xl">
        <header className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif mb-6"
          >
            Let's Start a <br /> <span className="italic font-normal">Conversation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/40 tracking-widest uppercase text-sm"
          >
            Available for worldwide assignments and collaborations.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactItem 
            icon={<MessageCircle />} 
            label="WhatsApp" 
            value="+91 98765 43210" 
            href="https://wa.me/919876543210" 
            delay={0.4}
          />
          <ContactItem 
            icon={<Instagram />} 
            label="Instagram" 
            value="@arnab.visuals" 
            href="https://instagram.com" 
            delay={0.5}
          />
          <ContactItem 
            icon={<Mail />} 
            label="Email" 
            value="hello@arnabbiswas.com" 
            href="mailto:hello@arnabbiswas.com" 
            delay={0.6}
          />
          <ContactItem 
            icon={<Phone />} 
            label="Call" 
            value="+91 98765 43210" 
            href="tel:+919876543210" 
            delay={0.7}
          />
          <ContactItem 
            icon={<Youtube />} 
            label="YouTube" 
            value="Arnab Biswas Films" 
            href="https://youtube.com" 
            delay={0.8}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col justify-center p-8 bg-white/5 rounded-sm"
          >
            <h3 className="text-sm tracking-widest uppercase mb-4 opacity-50">Studio Inquiries</h3>
            <p className="text-white/40 leading-relaxed text-sm">
              For commercial projects, music videos, and film production, please include basic project details, timeline, and budget overview.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-32 text-center"
        >
          <div className="w-px h-24 bg-white/10 mx-auto mb-12" />
          <p className="text-white/20 italic font-serif text-2xl">
            Currently based in Kolkata, West Bengal.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Booking;
