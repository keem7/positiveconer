import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-semibold mb-4">
              Positive Corner
            </h3>
            <p className="text-accent font-medium tracking-widest text-sm mb-4">
              CRAFTING POSITIVITY TOGETHER
            </p>
            <p className="text-primary-foreground/70 leading-relaxed">
              Your destination for premium jewelry, custom gear, electronics, and authentic sports merchandise. Quality meets affordability.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-semibold mb-4">
              Categories
            </h4>
            <ul className="space-y-2">
              {["Fine Jewelry", "Phone Frames & Cases", "Customized Gear", "Electronics", "Sports"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {item}
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
            <h4 className="font-display text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <div>
                  <a
                    href="tel:+1234567890"
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <div>
                  <a
                    href="tel:+0987654321"
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    +0 (987) 654-321
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <a
                  href="mailto:hello@positivecorner.com"
                  className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                >
                  hello@positivecorner.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
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
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Positive Corner. All rights reserved.
          </p>
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
    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-accent hover:text-primary transition-all duration-300"
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
