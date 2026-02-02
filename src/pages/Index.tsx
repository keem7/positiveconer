import { useState } from "react";
import { Category, Product } from "@/data/products";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Lightbox from "@/components/Lightbox";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    // Scroll to products section smoothly
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      <main>
        <HeroSection />
        
        <ProductGrid
          activeCategory={activeCategory}
          onProductClick={setSelectedProduct}
        />
      </main>

      <Footer />

      <Lightbox
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Index;
