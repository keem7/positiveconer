import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { useShop } from "@/contexts/ShopContext";
import { WHATSAPP_NUMBER, categories } from "@/data/products";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cart, removeFromCart, cartTotal, clearCart } = useShop();

  const getWhatsAppCheckoutLink = () => {
    const items = cart
      .map((p) => {
        const cat = categories.find((c) => c.id === p.category)?.label;
        return `- ${p.name} (${cat}) - Le ${p.price.toLocaleString()}`;
      })
      .join("\n");
    
    const message = `Hello Positive Corner! I'd like to order:\n\n${items}\n\nTotal: Le ${cartTotal.toLocaleString()}\n\nIs this available?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-background/80 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-[95] w-full max-w-md bg-card border-l border-border shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} />
                <h2 className="font-display text-lg font-semibold">Your Cart</h2>
                <span className="px-2 py-0.5 bg-secondary text-xs rounded-full">
                  {cart.length}
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag size={48} className="mx-auto text-muted-foreground/30 mb-4" />
                  <p className="text-muted-foreground">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="flex gap-4 p-3 bg-secondary/50 rounded-xl"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm truncate">{product.name}</h3>
                        <p className="text-xs text-muted-foreground">{product.subcategory}</p>
                        <p className="text-accent font-semibold mt-1">Le {product.price.toLocaleString()}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="self-start p-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-border space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total</span>
                  <span className="font-display text-2xl font-semibold text-accent">
                    Le {cartTotal.toLocaleString()}
                  </span>
                </div>
                
                <a
                  href={getWhatsAppCheckoutLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:shadow-elevated transition-all"
                >
                  <MessageCircle size={20} />
                  Checkout via WhatsApp
                </a>

                <button
                  onClick={clearCart}
                  className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Clear cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
