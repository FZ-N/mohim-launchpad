import { NavLink } from '@/components/NavLink';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import iheCatalystLogo from '@/assets/ihe-catalyst-logo.jpg'; // Catalyst logo

export const Navigation = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/use-case', label: t('nav.usecase') },
    { to: '/technology', label: t('nav.technology') },
    { to: '/events', label: t('nav.events') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Only Catalyst Logo */}
          <NavLink to="/" className="flex items-center space-x-4">
            <img src={iheCatalystLogo} alt="IHE Catalyst Logo" className="h-14 w-auto" />
            {/* If you want to display a name alongside the logo, uncomment this */}
            {/* <span className="font-bold text-xl text-foreground hidden sm:inline">IHE Catalyst</span> */}
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted"
                activeClassName="text-primary bg-muted"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-medium uppercase">{language}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                activeClassName="text-primary bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
