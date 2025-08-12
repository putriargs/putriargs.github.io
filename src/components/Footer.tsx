import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Pargs.uk</h3>
            <p className="text-primary-foreground/80 mb-4">
              AI Engineer passionate about creating intelligent solutions 
              that make a difference.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@pargs.uk" 
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">AI Consulting</li>
              <li className="text-primary-foreground/80">Machine Learning</li>
              <li className="text-primary-foreground/80">Custom AI Solutions</li>
              <li className="text-primary-foreground/80">Data Analysis</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © {currentYear} Pargs.uk. All rights reserved.
          </p>
          <p className="text-primary-foreground/80 text-sm flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-accent fill-current" /> using AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;