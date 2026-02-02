import { motion } from "framer-motion";
import { Phone, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-primary font-semibold text-lg">P</span>
              </div>
              <h3 className="font-display text-xl font-semibold">
                Positive Corner
              </h3>
            </div>
            <p className="text-primary-foreground/60 leading-relaxed max-w-md mb-8">
              Your destination for premium jewelry, custom gear, electronics, and authentic 
              sports merchandise. Crafting positivity together since 2020.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <SocialLink href="https://tiktok.com/@positivecorner247" label="TikTok">
                <TikTokIcon />
              </SocialLink>
              <SocialLink href="https://instagram.com/positivecorner247" label="Instagram">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href="https://facebook.com/positivecorner247" label="Facebook">
                <FacebookIcon />
              </SocialLink>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-medium text-sm uppercase tracking-wider text-primary-foreground/40 mb-6">
              Categories
            </h4>
            <ul className="space-y-3">
              {["Fine Jewelry", "Phone Cases", "Custom Gear", "Electronics", "Sports"].map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="group inline-flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors duration-300"
                  >
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-medium text-sm uppercase tracking-wider text-primary-foreground/40 mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  <Phone size={18} />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+0987654321"
                  className="flex items-center gap-3 text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  <Phone size={18} />
                  <span>+0 (987) 654-321</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@positivecorner.com"
                  className="flex items-center gap-3 text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  <Mail size={18} />
                  <span>hello@positivecorner.com</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/40">
              © {currentYear} Positive Corner. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/40">
              <a href="#" className="hover:text-accent transition-colors">Privacy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/60 hover:bg-accent hover:text-primary transition-all duration-300"
  >
    {children}
  </a>
);

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

export default Footer;
