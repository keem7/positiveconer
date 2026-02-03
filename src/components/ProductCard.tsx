import { motion } from "framer-motion";
import { Product, getWhatsAppLink, categories } from "@/data/products";
import { MessageCircle, ExternalLink, Heart, ShoppingBag } from "lucide-react";
import { useShop } from "@/contexts/ShopContext";

interface ProductCardProps {
  product: Product;
  index: number;
  onImageClick: (product: Product) => void;
}

const ProductCard = ({ product, index, onImageClick }: ProductCardProps) => {
  const { addToCart, addToWishlist, removeFromWishlist, isInCart, isInWishlist } = useShop();
  const categoryLabel = categories.find(c => c.id === product.category)?.label;

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="group"
    >
      {/* Image Container */}
      <div
        onClick={() => onImageClick(product)}
        className="relative aspect-square overflow-hidden rounded-2xl bg-secondary cursor-pointer"
      >
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
        
        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-center justify-center transition-opacity"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-background/95 text-foreground text-sm font-medium rounded-full shadow-elevated"
          >
            <ExternalLink size={14} />
            Quick View
          </motion.span>
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 text-xs font-medium bg-background/95 backdrop-blur-sm text-foreground rounded-full shadow-soft">
            {product.subcategory}
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 ${
            isInWishlist(product.id)
              ? "bg-accent text-accent-foreground"
              : "bg-background/95 backdrop-blur-sm text-foreground hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          <Heart size={16} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Content */}
      <div className="pt-5 pb-2">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-base font-medium text-foreground truncate group-hover:text-accent transition-colors duration-300">
              {product.name}
            </h3>
            {product.description && (
              <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                {product.description}
              </p>
            )}
          </div>
          
          {/* Price */}
          <span className="font-display text-lg font-semibold text-accent whitespace-nowrap">
            ${product.price}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleAddToCart}
            disabled={isInCart(product.id)}
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
              isInCart(product.id)
                ? "text-muted-foreground cursor-not-allowed"
                : "text-foreground hover:text-accent"
            }`}
          >
            <ShoppingBag size={16} />
            <span>{isInCart(product.id) ? "In Cart" : "Add to Cart"}</span>
          </button>
          
          <span className="text-border">|</span>
          
          <a
            href={getWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-300"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
