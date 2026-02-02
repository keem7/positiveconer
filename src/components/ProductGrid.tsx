import { useMemo } from "react";
import { motion } from "framer-motion";
import { Product, Category, products, categories } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  activeCategory: Category;
  onProductClick: (product: Product) => void;
}

const ProductGrid = ({ activeCategory, onProductClick }: ProductGridProps) => {
  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") {
      return products;
    }
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const categoryLabel = categories.find(c => c.id === activeCategory)?.label || "All Products";

  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">
            {categoryLabel}
          </h2>
          <p className="text-muted-foreground">
            {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"} available
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onImageClick={onProductClick}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
