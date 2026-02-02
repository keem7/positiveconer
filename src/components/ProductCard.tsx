import { motion } from "framer-motion";
import { Product, getWhatsAppLink, categories } from "@/data/products";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index: number;
  onImageClick: (product: Product) => void;
}

const ProductCard = ({ product, index, onImageClick }: ProductCardProps) => {
  const categoryLabel = categories.find(c => c.id === product.category)?.label;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group bg-card rounded-sm overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500"
    >
      {/* Image Container */}
      <div
        onClick={() => onImageClick(product)}
        className="relative aspect-square overflow-hidden cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="px-4 py-2 bg-background/90 text-primary text-sm font-medium rounded-sm">
              View Details
            </span>
          </motion.div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 text-xs font-medium bg-background/90 text-primary rounded-sm">
            {product.subcategory}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display text-lg font-medium text-foreground mb-1 line-clamp-1">
          {product.name}
        </h3>
        
        {product.description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="flex items-center justify-between">
          {/* Price */}
          <span className="font-display text-xl font-semibold text-accent">
            ${product.price}
          </span>

          {/* WhatsApp Button */}
          <a
            href={getWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold-gradient text-primary font-medium text-sm rounded-sm hover:shadow-gold transition-all duration-300"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">Buy via WhatsApp</span>
            <span className="sm:hidden">Buy</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
