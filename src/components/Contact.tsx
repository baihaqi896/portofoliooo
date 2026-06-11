import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageCircle, Github, Instagram, Send, MapPin, Phone, Smile, Terminal } from 'lucide-react';
import { personalInfo } from '../data';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t('Nama wajib diisi', 'Name is required');
    if (!formData.email.trim()) newErrors.email = t('Email wajib diisi', 'Email is required');
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t('Format email tidak valid', 'Invalid email format');
    if (!formData.message.trim()) newErrors.message = t('Pesan wajib diisi', 'Message is required');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const touchpoints = [
    {
      id: 'email',
      name: t('Email Resmi', 'Official Email'),
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'hover:text-red-400 group-hover:bg-red-500/10',
      icon: Mail,
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Business',
      value: personalInfo.phone,
      href: personalInfo.whatsapp,
      color: 'hover:text-green-400 group-hover:bg-green-500/10',
      icon: MessageCircle,
    },
    {
      id: 'github',
      name: 'GitHub Repository',
      value: '@baihaqi896',
      href: personalInfo.github,
      color: 'hover:text-purple-400 group-hover:bg-purple-500/10',
      icon: Github,
    },
    {
      id: 'instagram',
      name: 'Instagram Social',
      value: '@baihaqi_nur_m',
      href: personalInfo.instagram,
      color: 'hover:text-pink-400 group-hover:bg-pink-500/10',
      icon: Instagram,
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-transparent overflow-hidden">
      {/* Background blurs */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px] bottom-0 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p
            className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            // 08. CONTACT GATEWAY
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('Hubungi Saya', 'Contact Me')}<span className="text-cyan-400">_</span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Left: Contact Info & Touchpoints */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              className="space-y-4 text-center lg:text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white">
                {language === 'ID' ? (
                  <>Mulai Proyek Baru atau <span className="text-cyan-400">Undang Wawancara</span>?</>
                ) : (
                  <>Start a New Project or <span className="text-cyan-400">Invite to Interview</span>?</>
                )}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {t(
                  'Silakan hubungi saya secara langsung melalui media sosial atau formulir email interaktif di samping. Saya akan membalas pesan Anda dalam waktu kurang dari 24 jam.',
                  'Feel free to connect with me directly via social media or the interactive email form on the right. I will respond to your messages in less than 24 hours.'
                )}
              </p>
            </motion.div>

            {/* Touchpoint Links list */}
            <div className="grid grid-cols-1 gap-3.5 w-full">
              {touchpoints.map((tp, idx) => {
                const IconComp = tp.icon;
                return (
                  <motion.a
                    key={tp.id}
                    href={tp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-[32px] transition-all duration-300 relative overflow-hidden min-h-[64px]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-400 group-hover:text-white transition-all ${tp.color}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest leading-none mb-1">
                          {tp.name}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors leading-none truncate max-w-[180px] sm:max-w-xs">
                          {tp.value}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-white/40 group-hover:text-cyan-400 transition-colors mr-1">
                      {t('SAMBUNG >', 'CONNECT >')}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Right: Glassmorphism Message Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col gap-5"
            >
              <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-4">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-white/30 uppercase tracking-widest">
                  Secure Mail Dispatcher
                </span>
              </div>

              {/* Success Notification */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center gap-3 text-green-400 text-xs sm:text-sm"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <Smile className="w-5 h-5 shrink-0" />
                    <div>
                      <strong>{t('Pesan Terkirim!', 'Message Sent!')}</strong> {t('Terima kasih, Baihaqi akan merespons Anda segera.', 'Thank you, Baihaqi will respond to you shortly.')}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Input name */}
              <div className="flex flex-col gap-1.5 align-left">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest text-left">
                  {t('Nama Lengkap *', 'Full Name *')}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t('Ketik nama Anda di sini...', 'Type your name here...')}
                  className={`w-full p-3.5 bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10 focus:border-cyan-400'} text-white text-sm rounded-xl focus:outline-none transition-colors font-mono`}
                />
                {errors.name && <span className="text-[10px] font-mono text-red-500 text-left">{errors.name}</span>}
              </div>

              {/* Input email */}
              <div className="flex flex-col gap-1.5 align-left">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest text-left">
                  {t('Alamat Surat Elektronik (Email) *', 'Email Address *')}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contoh@perusahaan.com"
                  className={`w-full p-3.5 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-cyan-400'} text-white text-sm rounded-xl focus:outline-none transition-colors font-mono`}
                />
                {errors.email && <span className="text-[10px] font-mono text-red-500 text-left">{errors.email}</span>}
              </div>

              {/* Input subject */}
              <div className="flex flex-col gap-1.5 align-left">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest text-left">
                  {t('Subjek Pesan / Perihal', 'Subject / Topic')}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t('Penawaran kerja sama, magang, dll.', 'Business partnership, internship, etc.')}
                  className="w-full p-3.5 bg-white/5 border border-white/10 focus:border-cyan-400 text-white text-sm rounded-xl focus:outline-none transition-colors font-mono"
                />
              </div>

              {/* Input message */}
              <div className="flex flex-col gap-1.5 align-left">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest text-left">
                  {t('Pesan Anda *', 'Your Message *')}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('Tulis detail kebutuhan atau pesan kolaborasi Anda...', 'Write your details or collaboration message here...')}
                  rows={4}
                  className={`w-full p-3.5 bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10 focus:border-cyan-400'} text-white text-sm rounded-xl focus:outline-none transition-colors font-mono resize-none`}
                />
                {errors.message && <span className="text-[10px] font-mono text-red-500 text-left">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="interactive-hover w-full min-h-[44px] py-4 bg-white text-[#050505] hover:bg-white/90 font-mono font-bold text-xs tracking-widest rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                    {t('MENGIRIM...', 'SENDING...')}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-neutral-950" />
                    {t('KIRIM DISPATCH', 'SEND DISPATCH')}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

