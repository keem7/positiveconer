import { useMemo } from "react";
import { motion } from "framer-motion";
import { Product, Category, products, categories } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  activeCategory: Category;
  onProductClick: (product: Product) => void;
}

const ProductGrid = ({ activeCategory, onProductClick }: ProductGridProps) => {
  // Group products by category for section view
  const groupedProducts = useMemo(() => {
    const groups: { category: typeof categories[0]; products: Product[] }[] = [];
    
    categories.forEach((cat) => {
      if (cat.id === "all") return;
      const categoryProducts = products.filter((p) => p.category === cat.id);
      if (categoryProducts.length > 0) {
        groups.push({ category: cat, products: categoryProducts });
      }
    });
    
    return groups;
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") {
      return products;
    }
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  // If viewing all, show sections
  if (activeCategory === "all") {
    return (
      <section id="products" className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Main Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm font-medium text-muted-foreground tracking-wide uppercase"
            >
              Our Collections
            </motion.span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-2 tracking-tight">
              Browse By Category
            </h2>
          </motion.div>

          {/* Category Sections */}
          <div className="space-y-24">
            {groupedProducts.map((group, groupIndex) => (
              <motion.div
                key={group.category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              >
                {/* Section Header */}
                <div className="flex items-end justify-between mb-10 pb-6 border-b border-border">
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
                      {group.category.label}
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      {group.category.tagline}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {group.products.length} {group.products.length === 1 ? "item" : "items"}
                  </span>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {group.products.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={index % 4}
                      onImageClick={onProductClick}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Single category view
  const categoryData = categories.find(c => c.id === activeCategory);

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
            {categoryData?.label || "Products"}
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            {categoryData?.tagline}
          </p>
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
