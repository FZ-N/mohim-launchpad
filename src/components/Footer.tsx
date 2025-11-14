import { Mail, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <span className="text-primary-foreground font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-xl text-foreground">MOHIM</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Morocco's National Digital Health Transformation Initiative
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About MOHIM
                </a>
              </li>
              <li>
                <a href="/use-case" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Use Case
                </a>
              </li>
              <li>
                <a href="/technology" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Technology
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@mohim.ma" className="hover:text-primary transition-colors">
                  contact@mohim.ma
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>mohim.ma</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MOHIM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
