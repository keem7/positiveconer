export type Category = 
  | "all"
  | "jewelry" 
  | "phone-frames" 
  | "customized-gear" 
  | "electronics" 
  | "sports";

export interface Product {
  id: string;
  name: string;
  category: Category;
  subcategory: string;
  price: number;
  image: string;
  description?: string;
}

export const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "jewelry", label: "Fine Jewelry" },
  { id: "phone-frames", label: "Phone Frames & Cases" },
  { id: "customized-gear", label: "Customized Gear" },
  { id: "electronics", label: "Electronics" },
  { id: "sports", label: "Sports" },
];

export const products: Product[] = [
  // Fine Jewelry
  {
    id: "j-001",
    name: "Golden Elegance Necklace",
    category: "jewelry",
    subcategory: "Necklaces",
    price: 289,
    image: "/products/necklace-1.jpg",
    description: "18K gold-plated pendant with Austrian crystals"
  },
  {
    id: "j-002",
    name: "Diamond Eternity Ring",
    category: "jewelry",
    subcategory: "Rings",
    price: 459,
    image: "/products/ring-1.jpg",
    description: "Sterling silver with cubic zirconia stones"
  },
  {
    id: "j-003",
    name: "Pearl Drop Bracelet",
    category: "jewelry",
    subcategory: "Bracelets",
    price: 199,
    image: "/products/bracelet-1.jpg",
    description: "Freshwater pearls on delicate gold chain"
  },
  {
    id: "j-004",
    name: "Sapphire Pendant Necklace",
    category: "jewelry",
    subcategory: "Necklaces",
    price: 349,
    image: "/products/necklace-2.jpg",
    description: "Blue sapphire centerpiece with halo setting"
  },
  {
    id: "j-005",
    name: "Rose Gold Stackable Rings",
    category: "jewelry",
    subcategory: "Rings",
    price: 179,
    image: "/products/ring-2.jpg",
    description: "Set of 3 minimalist rose gold bands"
  },
  // Phone Frames & Cases
  {
    id: "p-001",
    name: "Midnight Leather Case",
    category: "phone-frames",
    subcategory: "Premium Cases",
    price: 89,
    image: "/products/phone-case-1.jpg",
    description: "Genuine Italian leather with gold accents"
  },
  {
    id: "p-002",
    name: "Crystal Clear Frame",
    category: "phone-frames",
    subcategory: "Premium Cases",
    price: 69,
    image: "/products/phone-case-2.jpg",
    description: "Shockproof transparent case with gold trim"
  },
  {
    id: "p-003",
    name: "Marble Luxury Case",
    category: "phone-frames",
    subcategory: "Premium Cases",
    price: 79,
    image: "/products/phone-case-3.jpg",
    description: "Real marble finish with protective edges"
  },
  // Customized Gear
  {
    id: "c-001",
    name: "Executive Leather Wallet",
    category: "customized-gear",
    subcategory: "Wallets",
    price: 129,
    image: "/products/wallet-1.jpg",
    description: "RFID-blocking genuine leather with monogram"
  },
  {
    id: "c-002",
    name: "Premium Snapback Cap",
    category: "customized-gear",
    subcategory: "Caps",
    price: 59,
    image: "/products/cap-1.jpg",
    description: "Custom embroidered wool blend cap"
  },
  {
    id: "c-003",
    name: "Insulated Steel Bottle",
    category: "customized-gear",
    subcategory: "Water Bottles",
    price: 45,
    image: "/products/bottle-1.jpg",
    description: "24hr cold / 12hr hot vacuum insulated"
  },
  {
    id: "c-004",
    name: "Classic Dad Cap",
    category: "customized-gear",
    subcategory: "Caps",
    price: 49,
    image: "/products/cap-2.jpg",
    description: "Adjustable cotton cap with embroidery"
  },
  {
    id: "c-005",
    name: "Slim Card Wallet",
    category: "customized-gear",
    subcategory: "Wallets",
    price: 79,
    image: "/products/wallet-2.jpg",
    description: "Minimalist design, holds 6 cards"
  },
  // Electronics
  {
    id: "e-001",
    name: "Ambient LED Light Strip",
    category: "electronics",
    subcategory: "LED Lights",
    price: 39,
    image: "/products/led-1.jpg",
    description: "5m RGB strip with remote control"
  },
  {
    id: "e-002",
    name: "Smart Desk Lamp",
    category: "electronics",
    subcategory: "LED Lights",
    price: 89,
    image: "/products/led-2.jpg",
    description: "Touch control with wireless charging base"
  },
  {
    id: "e-003",
    name: "Portable Power Bank",
    category: "electronics",
    subcategory: "Gadgets",
    price: 59,
    image: "/products/gadget-1.jpg",
    description: "20000mAh fast charging power bank"
  },
  {
    id: "e-004",
    name: "Neon Sign Custom",
    category: "electronics",
    subcategory: "LED Lights",
    price: 149,
    image: "/products/led-3.jpg",
    description: "Custom LED neon sign for room decor"
  },
  // Sports - Soccer Jerseys
  {
    id: "s-001",
    name: "Real Madrid Home Jersey",
    category: "sports",
    subcategory: "Football Jerseys",
    price: 89,
    image: "/products/jersey-1.jpg",
    description: "2024/25 Season authentic replica"
  },
  {
    id: "s-002",
    name: "Barcelona Away Jersey",
    category: "sports",
    subcategory: "Football Jerseys",
    price: 89,
    image: "/products/jersey-2.jpg",
    description: "2024/25 Season authentic replica"
  },
  {
    id: "s-003",
    name: "Manchester United Home",
    category: "sports",
    subcategory: "Football Jerseys",
    price: 89,
    image: "/products/jersey-3.jpg",
    description: "2024/25 Season authentic replica"
  },
  {
    id: "s-004",
    name: "PSG Third Kit Jersey",
    category: "sports",
    subcategory: "Football Jerseys",
    price: 95,
    image: "/products/jersey-4.jpg",
    description: "Limited edition third kit"
  },
  {
    id: "s-005",
    name: "Liverpool Home Jersey",
    category: "sports",
    subcategory: "Football Jerseys",
    price: 89,
    image: "/products/jersey-5.jpg",
    description: "2024/25 Season authentic replica"
  },
  {
    id: "s-006",
    name: "Bayern Munich Home",
    category: "sports",
    subcategory: "Football Jerseys",
    price: 89,
    image: "/products/jersey-6.jpg",
    description: "2024/25 Season authentic replica"
  },
];

export const WHATSAPP_NUMBER = "23278722136";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const generateWhatsAppMessage = (product: Product): string => {
  const message = `Hello Positive Corner! I am interested in the ${product.name} from the ${
    categories.find(c => c.id === product.category)?.label || product.category
  } section. Is this available for order?`;
  return encodeURIComponent(message);
};

export const getWhatsAppLink = (product: Product): string => {
  return `${WHATSAPP_BASE_URL}?text=${generateWhatsAppMessage(product)}`;
};
