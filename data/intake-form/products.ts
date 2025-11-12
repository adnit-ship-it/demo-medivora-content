import type { Product } from "~/types/intake-form/checkout";

// --- PRODUCT DATA ---

// This is the master list of all available products.

export const products: Product[] = [
  {
    id: "new-product-bundleid",
    name: "new product",
    category: "newcategory",
    description: "asdasdasdas",
    img: "",
    thumbnail: "",
    prices: {
      monthly: 21,
      threeMonthly: 32,
      sixMonthly: 12
    },
    productBundleIds: {
      monthly: "312",
      threeMonthly: "213",
      sixMonthly: "123"
    },
    type: "oral_pills",
    popular: true,
    features: [
      "31231",
      "123123",
      "321323",
      "213"
    ]
  },
  {
    id: "mounjaro-injection",
    name: "Mounjaro Injection",
    category: "weight-loss",
    description: "Weekly GLP-1 injection for weight loss and diabetes management",
    img: "/assets/images/products/mounjaro-injection.png",
    thumbnail: "/assets/images/products/mounjaro-injection.png",
    prices: {
      monthly: 399,
      threeMonthly: 349,
      sixMonthly: 349
    },
    productBundleIds: {
      monthly: "awdwad12-awdad-112321",
      threeMonthly: "awdwad12-awdad-112321",
      sixMonthly: "awdwad12-awdad-112321"
    },
    popular: true,
    availability: "in_stock",
    type: "injection",
    features: [
      "Weekly subcutaneous injection",
      "GLP-1 receptor agonist",
      "Effective for weight loss",
      "Diabetes management",
      "Prescription required"
    ]
  },
  {
    id: "ozempic-injection",
    name: "Ozempic Injection edited",
    category: "weight-loss2",
    description: "Weekly GLP-1 injection for weight loss and blood sugar control edited",
    img: "/assets/images/products/ozempic-injection.png",
    thumbnail: "/assets/images/products/ozempic-injection.png",
    prices: {
      monthly: 39,
      threeMonthly: 34,
      sixMonthly: 34
    },
    productBundleIds: {
      monthly: "awdwad12-awdad-1123212",
      threeMonthly: "awdwad12-awdad-1123212",
      sixMonthly: "awdwad12-awdad-1123212"
    },
    availability: "out_of_stock",
    type: "oral_drops",
    features: [
      "Weekly subcutaneous injection",
      "GLP-1 receptor agonist",
      "Weight loss support",
      "new wdired msadp"
    ],
    popular: true
  },
  {
    id: "methylcobalamin-injection",
    name: "Methylcobalamin Injection",
    category: "energy",
    description: "Vitamin B12 injection for energy and neurological health",
    img: "/assets/images/products/methylcobalamin-injection.png",
    thumbnail: "/assets/images/products/methylcobalamin-injection.png",
    prices: {
      monthly: 399,
      threeMonthly: 349,
      sixMonthly: 349
    },
    productBundleIds: {
      monthly: "awdwad12-awdad-112321",
      threeMonthly: "awdwad12-awdad-112321",
      sixMonthly: "awdwad12-awdad-112321"
    },
    availability: "in_stock",
    type: "injection",
    features: [
      "Vitamin B12 supplement",
      "Energy boost",
      "Neurological support",
      "Methylated form for better absorption",
      "Prescription required"
    ]
  }
];


export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getPopularProducts(): Product[] {
  return products.filter((product) => product.popular);
}

