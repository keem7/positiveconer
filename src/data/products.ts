export type Category = 
  | "all"
  | "watches" 
  | "chains" 
  | "wallets" 
  | "water-bottles" 
  | "bracelets"
  | "led-lights"
  | "jerseys";

export interface Product {
  id: string;
  name: string;
  category: Category;
  subcategory: string;
  price: number;
  image: string;
  description?: string;
}

export const categories: { id: Category; label: string; tagline: string }[] = [
  { id: "all", label: "All Products", tagline: "Browse our entire collection" },
  { id: "watches", label: "Watches", tagline: "Get your own customized watch" },
  { id: "chains", label: "Chains", tagline: "Get your own customized chain" },
  { id: "wallets", label: "Wallets", tagline: "Get your own customized wallet" },
  { id: "water-bottles", label: "Water Bottles", tagline: "Get your own customized water bottle" },
  { id: "bracelets", label: "Bracelets", tagline: "Get your own customized bracelet" },
  { id: "led-lights", label: "LED Lights", tagline: "Get your own customized LED light" },
  { id: "jerseys", label: "Jerseys", tagline: "Get your own customized jersey" },
];

export const products: Product[] = [
  // Watches
  {
    id: "w-001",
    name: "Classic Gold Watch",
    category: "watches",
    subcategory: "Watches",
    price: 350,
    image: "/products/necklace-1.jpg",
    description: "Get your own customized watch"
  },
  {
    id: "w-002",
    name: "Silver Executive Watch",
    category: "watches",
    subcategory: "Watches",
    price: 420,
    image: "/products/ring-1.jpg",
    description: "Get your own customized watch"
  },
  {
    id: "w-003",
    name: "Black Diamond Watch",
    category: "watches",
    subcategory: "Watches",
    price: 550,
    image: "/products/ring-2.jpg",
    description: "Get your own customized watch"
  },
  // Chains
  {
    id: "c-001",
    name: "Cuban Link Chain",
    category: "chains",
    subcategory: "Chains",
    price: 289,
    image: "/products/necklace-1.jpg",
    description: "Get your own customized chain"
  },
  {
    id: "c-002",
    name: "Rope Chain Gold",
    category: "chains",
    subcategory: "Chains",
    price: 320,
    image: "/products/necklace-2.jpg",
    description: "Get your own customized chain"
  },
  {
    id: "c-003",
    name: "Pendant Chain Set",
    category: "chains",
    subcategory: "Chains",
    price: 380,
    image: "/products/bracelet-1.jpg",
    description: "Get your own customized chain"
  },
  // Wallets
  {
    id: "wl-001",
    name: "Executive Leather Wallet",
    category: "wallets",
    subcategory: "Wallets",
    price: 129,
    image: "/products/wallet-1.jpg",
    description: "Get your own customized wallet"
  },
  {
    id: "wl-002",
    name: "Slim Card Wallet",
    category: "wallets",
    subcategory: "Wallets",
    price: 79,
    image: "/products/wallet-2.jpg",
    description: "Get your own customized wallet"
  },
  {
    id: "wl-003",
    name: "Premium Bifold Wallet",
    category: "wallets",
    subcategory: "Wallets",
    price: 99,
    image: "/products/phone-case-1.jpg",
    description: "Get your own customized wallet"
  },
  // Water Bottles
  {
    id: "wb-001",
    name: "Insulated Steel Bottle",
    category: "water-bottles",
    subcategory: "Water Bottles",
    price: 45,
    image: "/products/bottle-1.jpg",
    description: "Get your own customized water bottle"
  },
  {
    id: "wb-002",
    name: "Sport Water Bottle",
    category: "water-bottles",
    subcategory: "Water Bottles",
    price: 35,
    image: "/products/bottle-1.jpg",
    description: "Get your own customized water bottle"
  },
  {
    id: "wb-003",
    name: "Premium Flask Bottle",
    category: "water-bottles",
    subcategory: "Water Bottles",
    price: 55,
    image: "/products/bottle-1.jpg",
    description: "Get your own customized water bottle"
  },
  // Bracelets
  {
    id: "br-001",
    name: "Gold Link Bracelet",
    category: "bracelets",
    subcategory: "Bracelets",
    price: 199,
    image: "/products/bracelet-1.jpg",
    description: "Get your own customized bracelet"
  },
  {
    id: "br-002",
    name: "Silver Chain Bracelet",
    category: "bracelets",
    subcategory: "Bracelets",
    price: 159,
    image: "/products/bracelet-1.jpg",
    description: "Get your own customized bracelet"
  },
  {
    id: "br-003",
    name: "Diamond Tennis Bracelet",
    category: "bracelets",
    subcategory: "Bracelets",
    price: 280,
    image: "/products/bracelet-1.jpg",
    description: "Get your own customized bracelet"
  },
  // LED Lights
  {
    id: "led-001",
    name: "RGB LED Strip",
    category: "led-lights",
    subcategory: "LED Lights",
    price: 39,
    image: "/products/led-1.jpg",
    description: "Get your own customized LED light"
  },
  {
    id: "led-002",
    name: "Smart Desk Lamp",
    category: "led-lights",
    subcategory: "LED Lights",
    price: 89,
    image: "/products/led-2.jpg",
    description: "Get your own customized LED light"
  },
  {
    id: "led-003",
    name: "Neon Sign Custom",
    category: "led-lights",
    subcategory: "LED Lights",
    price: 149,
    image: "/products/led-3.jpg",
    description: "Get your own customized LED light"
  },
  {
    id: "led-004",
    name: "Gaming LED Setup",
    category: "led-lights",
    subcategory: "LED Lights",
    price: 75,
    image: "/products/led-1.jpg",
    description: "Get your own customized LED light"
  },
  // Jerseys
  {
    id: "mu-001",
    name: "Manchester United Home Kit",
    category: "jerseys",
    subcategory: "Manchester United",
    price: 350,
    image: "/products/man-utd-home.jpg",
    description: "Get your own customized jersey"
  },
  {
    id: "mu-002",
    name: "Manchester United Away Kit",
    category: "jerseys",
    subcategory: "Manchester United",
    price: 350,
    image: "/products/man-utd-away.jpg",
    description: "Get your own customized jersey"
  },
  {
    id: "mu-003",
    name: "Manchester United Third Kit",
    category: "jerseys",
    subcategory: "Manchester United",
    price: 350,
    image: "/products/man-utd-third.jpg",
    description: "Get your own customized jersey"
  },
  // Arsenal
  {
    id: "ars-001",
    name: "Arsenal Home Kit",
    category: "jerseys",
    subcategory: "Arsenal",
    price: 350,
    image: "/products/arsenal-home.jpg",
    description: "Get your own customized jersey"
  },
  {
    id: "ars-002",
    name: "Arsenal Away Kit",
    category: "jerseys",
    subcategory: "Arsenal",
    price: 350,
    image: "/products/arsenal-away.jpg",
    description: "Get your own customized jersey"
  },
  {
    id: "ars-003",
    name: "Arsenal Third Kit",
    category: "jerseys",
    subcategory: "Arsenal",
    price: 350,
    image: "/products/arsenal-third.jpg",
    description: "Get your own customized jersey"
  },
];

export const WHATSAPP_NUMBER = "23278722136";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const generateWhatsAppMessage = (product: Product): string => {
  const productUrl = `${window.location.origin}/product/${product.id}`;
  const message = `Hello Positive Corner! I am interested in the ${product.name}.\n\n${productUrl}\n\nIs this available for order?`;
  return encodeURIComponent(message);
};

export const getWhatsAppLink = (product: Product): string => {
  return `${WHATSAPP_BASE_URL}?text=${generateWhatsAppMessage(product)}`;
};
