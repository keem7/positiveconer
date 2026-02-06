import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Product, Category, products, categories } from "@/data/products";
import ProductCard from "./ProductCard";
import { ExternalLink, ArrowLeft } from "lucide-react";

interface ProductGridProps {
  activeCategory: Category;
  onProductClick: (product: Product) => void;
  onCategoryChange?: (category: Category) => void;
}

const ProductGrid = ({ activeCategory, onProductClick, onCategoryChange }: ProductGridProps) => {
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  // Get collections with a representative product for each category
  const collections = useMemo(() => {
    return categories
      .filter((cat) => cat.id !== "all")
      .map((cat) => {
        const categoryProducts = products.filter((p) => p.category === cat.id);
        return {
          category: cat,
          products: categoryProducts,
          representativeProduct: categoryProducts[0] || null,
        };
      })
      .filter((col) => col.representativeProduct !== null);
  }, []);

  // Get team collections for jerseys
  const teamCollections = useMemo(() => {
    const jerseyProducts = products.filter((p) => p.category === "jerseys");
    const teams = [...new Set(jerseyProducts.map((p) => p.subcategory))];
    return teams.map((team) => {
      const teamProducts = jerseyProducts.filter((p) => p.subcategory === team);
      return {
        team,
        products: teamProducts,
        representativeProduct: teamProducts[0],
      };
    });
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") {
      return products;
    }
    if (activeCategory === "jerseys" && activeSubcategory) {
      return products.filter((product) => product.subcategory === activeSubcategory);
    }
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory, activeSubcategory]);

  const categoryData = categories.find((c) => c.id === activeCategory);

  const handleBackClick = () => {
    if (activeSubcategory) {
      setActiveSubcategory(null);
    } else {
      onCategoryChange?.("all");
    }
  };

  // If viewing all, show collection cards (one per category)
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

          {/* Collection Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group cursor-pointer"
                onClick={() => {
                  setActiveSubcategory(null);
                  onCategoryChange?.(collection.category.id);
                }}
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary">
                  <motion.img
                    src={collection.representativeProduct?.image}
                    alt={collection.category.label}
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
                      View Collection
                    </motion.span>
                  </motion.div>

                  {/* Item Count Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 text-xs font-medium bg-background/95 backdrop-blur-sm text-foreground rounded-full shadow-soft">
                      {collection.products.length} {collection.products.length === 1 ? "item" : "items"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-5 pb-2">
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {collection.category.label}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {collection.category.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Jerseys category - show team collections if no subcategory selected
  if (activeCategory === "jerseys" && !activeSubcategory) {
    return (
      <section id="products" className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            <span className="font-medium">Back to Collections</span>
          </motion.button>

          {/* Section Header */}
          <motion.div
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
              {teamCollections.length} {teamCollections.length === 1 ? "team" : "teams"}
            </motion.span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-2 tracking-tight">
              {categoryData?.label || "Jerseys"}
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Choose your team
            </p>
          </motion.div>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamCollections.map((team, index) => (
              <motion.div
                key={team.team}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group cursor-pointer"
                onClick={() => setActiveSubcategory(team.team)}
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary">
                  <motion.img
                    src={team.representativeProduct?.image}
                    alt={team.team}
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
                      View Kits
                    </motion.span>
                  </motion.div>

                  {/* Kit Count Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 text-xs font-medium bg-background/95 backdrop-blur-sm text-foreground rounded-full shadow-soft">
                      {team.products.length} {team.products.length === 1 ? "kit" : "kits"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-5 pb-2">
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {team.team}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Home, Away & Third Kits
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Single category view - show all products in that category
  return (
    <section id="products" className="py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={handleBackClick}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          <span className="font-medium">
            {activeSubcategory ? `Back to ${categoryData?.label}` : "Back to Collections"}
          </span>
        </motion.button>

        {/* Section Header */}
        <motion.div
          key={activeCategory + (activeSubcategory || "")}
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
            {activeSubcategory || categoryData?.label || "Products"}
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            {activeSubcategory ? `${activeSubcategory} Kits` : categoryData?.tagline}
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
