// app/api/products/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const products = [
    {
      id: 1,
      name: "Wireless Noise-Cancelling Headphones",
      price: 249.99,
      category: "Electronics",
      imageUrl: "https://placehold.co/300x300.png?text=Headphones",
    },
    {
      id: 2,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      category: "Apparel",
      imageUrl: "https://placehold.co/300x300.png?text=T-Shirt",
    },
    {
      id: 3,
      name: "Smart Home Hub",
      price: 129.0,
      category: "Electronics",
      imageUrl: "https://placehold.co/300x300.png?text=Smart+Hub",
    },
    {
      id: 4,
      name: "Gourmet Coffee Beans",
      price: 19.99,
      category: "Groceries",
      imageUrl: "https://placehold.co/300x300.png?text=Coffee",
    },
    {
      id: 5,
      name: "Leather Messenger Bag",
      price: 149.5,
      category: "Accessories",
      imageUrl: "https://placehold.co/300x300.png?text=Bag",
    },
    {
      id: 6,
      name: "Modern Desk Lamp",
      price: 79.99,
      category: "Home Goods",
      imageUrl: "https://placehold.co/300x300.png?text=Lamp",
    },
    {
      id: 7,
      name: "Running Shoes",
      price: 119.99,
      category: "Apparel",
      imageUrl: "https://placehold.co/300x300.png?text=Shoes",
    },
    {
      id: 8,
      name: "4K Action Camera",
      price: 399.0,
      category: "Electronics",
      imageUrl: "https://placehold.co/300x300.png?text=Camera",
    },
  ];

  return NextResponse.json(products);
}
