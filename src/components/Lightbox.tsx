import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ChevronRight, Heart, ShoppingBag } from "lucide-react";
import { Product, getWhatsAppLink, categories, products } from "@/data/products";
import { useEffect, useMemo } from "react";
import { useShop } from "@/contexts/ShopContext";

interface LightboxProps {
  product: Product | null;
  onClose: () => void;
  onProductChange: (product: Product) => void;
}

const Lightbox = ({ product, onClose, onProductChange }: LightboxProps) => {
  const { addToCart, addToWishlist, removeFromWishlist, isInCart, isInWishlist } = useShop();

  // Get related products from same category/subcategory
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter(p => p.id !== product.id && (p.subcategory === product.subcategory || p.category === product.category))
      .sort((a, b) => {
        // Prioritize same subcategory
        if (a.subcategory === product.subcategory && b.subcategory !== product.subcategory) return -1;
        if (b.subcategory === product.subcategory && a.subcategory !== product.subcategory) return 1;
        return 0;
      })
      .slice(0, 6);
  }, [product]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [product]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!product) return null;

  const categoryLabel = categories.find(c => c.id === product.category)?.label;

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 overflow-y-auto"
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={onClose}
            className="fixed top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={20} />
          </motion.button>

          {/* Content Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl my-auto"
          >
            {/* Main Product Card */}
            <div className="bg-card rounded-3xl overflow-hidden shadow-elevated flex flex-col lg:flex-row">
              {/* Image */}
              <div className="lg:w-3/5 aspect-square lg:aspect-auto relative bg-secondary">
                <motion.img
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
                
                {/* Wishlist Button */}
                <button
                  onClick={handleWishlistToggle}
                  className={`absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
                    isInWishlist(product.id)
                      ? "bg-accent text-accent-foreground"
                      : "bg-background/95 backdrop-blur-sm text-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <Heart size={20} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                </button>
              </div>

              {/* Details */}
              <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  {/* Breadcrumb */}
                  <motion.div
                    key={`breadcrumb-${product.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground mb-4"
                  >
                    <span>{categoryLabel}</span>
                    <ChevronRight size={14} />
                    <span>{product.subcategory}</span>
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    key={`title-${product.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4 tracking-tight"
                  >
                    {product.name}
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    key={`desc-${product.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-muted-foreground leading-relaxed"
                  >
                    {product.description || "Premium quality product from our exclusive collection. Designed with attention to detail and crafted for lasting elegance."}
                  </motion.p>
                </div>

                {/* Price & CTA */}
                <motion.div
                  key={`cta-${product.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 pt-8 border-t border-border"
                >
                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Price</p>
                      <span className="font-display text-4xl font-semibold text-accent">
                        Le {product.price.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {/* Add to Cart Button */}
                    <button
                      onClick={() => addToCart(product)}
                      disabled={isInCart(product.id)}
                      className={`w-full inline-flex items-center justify-center gap-3 px-8 py-4 font-medium rounded-2xl transition-all duration-300 ${
                        isInCart(product.id)
                          ? "bg-secondary text-muted-foreground cursor-not-allowed"
                          : "bg-foreground text-background hover:shadow-elevated hover:scale-[1.02]"
                      }`}
                    >
                      <ShoppingBag size={20} />
                      {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
                    </button>

                    {/* WhatsApp Button */}
                    <a
                      href={getWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-2xl hover:shadow-elevated transition-all duration-300 hover:scale-[1.02]"
                    >
                      <MessageCircle size={20} />
                      Order via WhatsApp
                    </a>
                  </div>

                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Add to cart or start a conversation on WhatsApp
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Related Products Section */}
            {relatedProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  More Like This
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                  {relatedProducts.map((relatedProduct, index) => (
                    <motion.button
                      key={relatedProduct.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      onClick={() => onProductChange(relatedProduct)}
                      className="group text-left"
                    >
                      <div className="relative aspect-square rounded-xl overflow-hidden bg-secondary mb-2">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/placeholder.svg";
                          }}
                        />
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                      </div>
                      <p className="text-xs font-medium text-foreground truncate group-hover:text-accent transition-colors">
                        {relatedProduct.name}
                      </p>
                      <p className="text-xs text-accent font-semibold">
                        Le {relatedProduct.price.toLocaleString()}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
