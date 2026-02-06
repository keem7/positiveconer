import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Heart, ShoppingBag, ChevronRight } from "lucide-react";
import { products, categories, getWhatsAppLink } from "@/data/products";
import { useShop } from "@/contexts/ShopContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, removeFromWishlist, isInCart, isInWishlist } = useShop();

  const product = products.find((p) => p.id === productId);
  const categoryLabel = product ? categories.find((c) => c.id === product.category)?.label : "";

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
          <button
            onClick={() => navigate("/")}
            className="text-primary hover:underline"
          >
            Return to home
          </button>
        </div>
      </div>
    );
  }

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  // Get absolute URL for OG image
  const baseUrl = window.location.origin;
  const imageUrl = `${baseUrl}${product.image}`;
  const productUrl = `${baseUrl}/product/${product.id}`;

  return (
    <>
      <Helmet>
        <title>{product.name} - Le {product.price.toLocaleString()} | Positive Corner</title>
        <meta name="description" content={product.description || `${product.name} from our ${categoryLabel} collection. Le ${product.price.toLocaleString()}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${product.name} - Le ${product.price.toLocaleString()}`} />
        <meta property="og:description" content={product.description || `Get your own customized ${product.subcategory} from Positive Corner`} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={productUrl} />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="Positive Corner" />
        
        {/* Product-specific */}
        <meta property="product:price:amount" content={product.price.toString()} />
        <meta property="product:price:currency" content="SLL" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${product.name} - Le ${product.price.toLocaleString()}`} />
        <meta name="twitter:description" content={product.description || `Get your own customized ${product.subcategory}`} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header
          activeCategory="all"
          onCategoryChange={() => navigate("/")}
          onCartOpen={() => {}}
          onWishlistOpen={() => {}}
        />

        <main className="container mx-auto px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
          >
            <button onClick={() => navigate("/")} className="hover:text-foreground transition-colors">
              Home
            </button>
            <ChevronRight size={14} />
            <span>{categoryLabel}</span>
            <ChevronRight size={14} />
            <span className="text-foreground">{product.name}</span>
          </motion.div>

          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            <span className="font-medium">Back</span>
          </motion.button>

          {/* Product Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-3xl bg-secondary"
            >
              <img
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

              {/* Subcategory Badge */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 text-sm font-medium bg-background/95 backdrop-blur-sm text-foreground rounded-full shadow-soft">
                  {product.subcategory}
                </span>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-2">
                {categoryLabel}
              </span>
              
              <h1 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                {product.name}
              </h1>

              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                {product.description || "Premium quality product from our exclusive collection. Designed with attention to detail and crafted for lasting elegance."}
              </p>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-border">
                <p className="text-sm text-muted-foreground mb-1">Price</p>
                <span className="font-display text-4xl font-semibold text-accent">
                  Le {product.price.toLocaleString()}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
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

              <p className="text-center text-sm text-muted-foreground mt-6">
                Add to cart or start a conversation on WhatsApp
              </p>
            </motion.div>
          </div>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default ProductPage;
