import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { Product, getWhatsAppLink, categories } from "@/data/products";

interface LightboxProps {
  product: Product | null;
  onClose: () => void;
}

const Lightbox = ({ product, onClose }: LightboxProps) => {
  if (!product) return null;

  const categoryLabel = categories.find(c => c.id === product.category)?.label;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-background/10 text-background hover:bg-background/20 transition-all duration-300"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full bg-background rounded-sm overflow-hidden shadow-elevated flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Image */}
            <div className="md:w-3/5 aspect-square md:aspect-auto relative bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
            </div>

            {/* Details */}
            <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="text-sm font-medium text-accent uppercase tracking-widest">
                  {categoryLabel}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mt-2 mb-4">
                  {product.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {product.description}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Type:</span> {product.subcategory}
                </p>
              </div>

              <div className="mt-8">
                <div className="mb-6">
                  <span className="font-display text-4xl font-bold text-accent">
                    ${product.price}
                  </span>
                </div>

                <a
                  href={getWhatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gold-gradient text-primary font-semibold rounded-sm hover:shadow-gold transition-all duration-300"
                >
                  <MessageCircle size={20} />
                  Buy via WhatsApp
                </a>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  Click to send us a message on WhatsApp
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
