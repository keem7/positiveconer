import { motion } from "framer-motion";
import { Category, categories } from "@/data/products";
import { Menu, X, ShoppingBag, Heart } from "lucide-react";
import { useState } from "react";
import { useShop } from "@/contexts/ShopContext";
import logo from "@/assets/logo.jpeg";

interface HeaderProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
  onCartOpen: () => void;
  onWishlistOpen: () => void;
}

const Header = ({ activeCategory, onCategoryChange, onCartOpen, onWishlistOpen }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart, wishlist } = useShop();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 bg-glass border-b border-border/50"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <img 
              src={logo} 
              alt="Positive Corner" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <div>
              <h1 className="font-display text-lg md:text-xl font-semibold text-foreground">
                Positive Corner
              </h1>
              <p className="text-xs text-muted-foreground tracking-wide hidden sm:block">
                Crafting Positivity Together
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                onClick={() => onCategoryChange(category.id)}
                className={`
                  relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                  ${
                    activeCategory === category.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-secondary rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </motion.button>
            ))}
          </nav>

          {/* Right Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-1"
          >
            {/* Wishlist */}
            <button
              onClick={onWishlistOpen}
              className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary transition-colors"
              aria-label="Wishlist"
            >
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-accent text-accent-foreground text-xs font-medium rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              onClick={onCartOpen}
              className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-accent text-accent-foreground text-xs font-medium rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>

            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center gap-1 ml-2 pl-2 border-l border-border">
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary transition-colors ml-1"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: mobileMenuOpen ? "auto" : 0, opacity: mobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  onCategoryChange(category.id);
                  setMobileMenuOpen(false);
                }}
                className={`
                  w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all
                  ${
                    activeCategory === category.id
                      ? "bg-secondary text-primary"
                      : "text-muted-foreground hover:bg-secondary/50"
                  }
                `}
              >
                {category.label}
              </button>
            ))}
            
            {/* Mobile Socials */}
            <div className="flex items-center gap-2 px-4 pt-4">
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
          </div>
        </motion.div>
      </div>
    </motion.header>
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
    className="w-9 h-9 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
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

export default Header;
