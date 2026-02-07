import { useState } from "react";
import { Category, Product } from "@/data/products";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Lightbox from "@/components/Lightbox";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CartDrawer from "@/components/CartDrawer";
import WishlistDrawer from "@/components/WishlistDrawer";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    // Instantly scroll to top so user doesn't see footer during re-render
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        onCartOpen={() => setCartOpen(true)}
        onWishlistOpen={() => setWishlistOpen(true)}
      />
      
      <main>
        <HeroSection />
        
        <ProductGrid
          activeCategory={activeCategory}
          onProductClick={setSelectedProduct}
          onCategoryChange={handleCategoryChange}
        />
      </main>

      <Footer />

      <Lightbox
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onProductChange={setSelectedProduct}
      />

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <WishlistDrawer isOpen={wishlistOpen} onClose={() => setWishlistOpen(false)} />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
