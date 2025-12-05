import { NavLink } from '@/components/NavLink';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import mohimLogo from '@/assets/mohim_logo.jpeg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [forumSubmenuOpen, setForumSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/use-case', label: t('nav.usecase') },
    { to: '/technology', label: t('nav.technology') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const forumSubLinks = [
    { to: '/events', label: t('nav.program') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/presentations', label: t('nav.presentations') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-medium border-b border-border/50' 
        : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src={mohimLogo} 
                alt="MOHIM Logo" 
                className="h-14 w-auto rounded-xl transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.slice(0, 4).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-all rounded-xl hover:bg-primary/5"
                activeClassName="text-primary bg-primary/10"
              >
                {link.label}
              </NavLink>
            ))}

            {/* Forum 2025 Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-all rounded-xl hover:bg-primary/5 flex items-center gap-1.5">
                  {t('nav.events')}
                  <ChevronDown className="h-4 w-4 opacity-60" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="bg-white/95 backdrop-blur-xl border-border/50 shadow-strong rounded-xl p-2 min-w-[160px]">
                {forumSubLinks.map((link) => (
                  <DropdownMenuItem key={link.to} asChild>
                    <Link
                      to={link.to}
                      className="w-full cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-primary/5 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink
              to="/contact"
              className="px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-all rounded-xl hover:bg-primary/5"
              activeClassName="text-primary bg-primary/10"
            >
              {t('nav.contact')}
            </NavLink>
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 rounded-xl hover:bg-primary/5 text-foreground/70 hover:text-primary"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wide">{language}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden rounded-xl hover:bg-primary/5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-xl border-t border-border/50">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.slice(0, 4).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                activeClassName="text-primary bg-primary/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            {/* Forum 2025 Mobile Submenu */}
            <div className="border-t border-border/50 pt-2 mt-2">
              <button
                onClick={() => setForumSubmenuOpen(!forumSubmenuOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
              >
                {t('nav.events')}
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${forumSubmenuOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${forumSubmenuOpen ? 'max-h-40' : 'max-h-0'}`}>
                <div className="ml-4 space-y-1 pt-1">
                  {forumSubLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                      activeClassName="text-primary bg-primary/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            <NavLink
              to="/contact"
              className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
              activeClassName="text-primary bg-primary/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
