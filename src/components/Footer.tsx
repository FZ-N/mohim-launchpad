import { Mail, Globe, ArrowUpRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import mohimLogo from '@/assets/mohim-logo.png';

export const Footer = () => {
  const quickLinks = [
    { to: '/about', label: 'About MOHIM' },
    { to: '/use-case', label: 'Use Case' },
    { to: '/technology', label: 'Technology' },
    { to: '/events', label: 'Forum 2025' },
  ];

  const resources = [
    { to: '/gallery', label: 'Gallery' },
    { to: '/presentations', label: 'Presentations' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <footer className="relative bg-trust text-trust-foreground overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center space-x-3 mb-6 group">
              <img src={mohimLogo} alt="MOHIM Logo" className="h-12 w-auto rounded-lg" />
              <span className="font-display font-bold text-2xl text-white">MOHIM</span>
            </Link>
            <p className="text-white/70 max-w-md mb-6 leading-relaxed">
              Morocco Health Interoperability & Maturity Lab — Driving digital health transformation through international standards, security frameworks, and collaborative innovation.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:contact@mohim.org" 
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
              >
                <Mail className="w-4 h-4" />
                contact@mohim.org
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-1 group text-sm"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-1 group text-sm"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Globe className="w-4 h-4" />
                <span>mohim.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} MOHIM. All rights reserved.
            </p>
            <p className="text-sm text-white/60 flex items-center gap-1.5">
              Built with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> for healthcare innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
