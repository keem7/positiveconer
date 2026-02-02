import { motion } from "framer-motion";
import { Category, categories } from "@/data/products";

interface HeaderProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const Header = ({ activeCategory, onCategoryChange }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <h1 className="font-display text-2xl md:text-3xl font-semibold text-primary tracking-wide">
              Positive Corner
            </h1>
            <p className="text-sm text-accent font-medium tracking-widest uppercase">
              Crafting Positivity Together
            </p>
          </motion.div>

          {/* Social Icons - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-4"
          >
            <SocialLink href="https://tiktok.com/@positivecorner247" label="TikTok">
              <TikTokIcon />
            </SocialLink>
            <SocialLink href="https://instagram.com/positivecorner247" label="Instagram">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://facebook.com/positivecorner247" label="Facebook">
              <FacebookIcon />
            </SocialLink>
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="pb-4 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1 md:gap-2 min-w-max">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => onCategoryChange(category.id)}
                className={`
                  px-4 py-2 text-sm font-medium rounded-sm transition-all duration-300
                  ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary hover:bg-secondary"
                  }
                `}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </nav>
      </div>
    </header>
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
    className="w-10 h-10 flex items-center justify-center rounded-full text-primary hover:bg-secondary hover:text-accent transition-all duration-300"
  >
    {children}
  </a>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

export default Header;
