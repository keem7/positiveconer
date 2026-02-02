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
    <section id="products" className="py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-medium text-muted-foreground tracking-wide uppercase"
          >
            {filteredProducts.length} {filteredProducts.length === 1 ? "item" : "items"}
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-2 tracking-tight">
            {categoryLabel}
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index % 8}
              onImageClick={onProductClick}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">
              No products found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
