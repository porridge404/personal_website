import React, { useState } from 'react';
import { Mail, Send, Linkedin, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Get Supabase URL from environment variables
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Supabase configuration missing. Please set up your environment variables.');
      }

      const response = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if environment variables are configured
  const isConfigured = import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY;

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <MessageSquare size={32} className="text-emerald-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Let's <span className="text-emerald-400">Connect!</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Always happy to connect, don't hesitate to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information - Simplified */}
          <div className="space-y-6">
            {/* LinkedIn Connection */}
            <a 
              href="https://www.linkedin.com/in/stuartcansdale/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-slate-800 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-700 transition-all duration-300 rounded-lg p-6 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Linkedin className="text-blue-400 group-hover:text-blue-300 transition-colors" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    Add me on LinkedIn
                  </h3>
                </div>
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Email Connection */}
            <a 
              href="mailto:stuartcansdale@gmail.com" 
              className="group block bg-slate-800 border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-700 transition-all duration-300 rounded-lg p-6 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <Mail className="text-emerald-400 group-hover:text-emerald-300 transition-colors" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Send me an email
                  </h3>
                </div>
                <div className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start space-x-3">
                <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-400 font-medium">Message sent successfully!</p>
                  <p className="text-green-300 text-sm mt-1">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start space-x-3">
                <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-400 font-medium">Failed to send message</p>
                  <p className="text-red-300 text-sm mt-1">
                    {errorMessage || 'Please try again or email me directly at stuartcansdale@gmail.com'}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting || !isConfigured}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting || !isConfigured}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || !isConfigured}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || !isConfigured}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !isConfigured}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 px-6 rounded-lg hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 flex items-center justify-center space-x-2 font-bold hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
              >
                <Send size={20} />
                <span>
                  {!isConfigured ? 'Setup Required' : isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
              </button>
            </form>

            {/* Direct Email Alternative */}
            {!isConfigured && (
              <div className="mt-6 p-4 bg-slate-700 border border-slate-600 rounded-lg">
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Alternative:</strong> Email me directly at:
                </p>
                <a 
                  href="mailto:stuartcansdale@gmail.com" 
                  className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                >
                  stuartcansdale@gmail.com
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;