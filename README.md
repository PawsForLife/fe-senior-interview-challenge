# Senior Frontend Engineer - Coding Challenge

Welcome! The goal of this challenge is to build a simple Product Listing Page
(PLP) using the features of the provided Next.js App Router boilerplate.

## Your Task

Your solution should be implemented by leveraging the conventions and features
of Next.js. You will fetch and display a list of products from a local API
endpoint.

### Core Requirements

1. **Fetch Data:** On the main page (`/app/page.tsx`), fetch the product data
   from the `/api/products` endpoint.
2. **Create a `ProductCard` Component:** Build a reusable component to display
   a single product's image, name, and price.
3. **Render a Responsive Grid:** Display the products in a responsive grid
   using Tailwind CSS.
   - **Mobile (< 768px):** 2 columns
   - **Tablet (>= 768px):** 3 columns
   - **Desktop (>= 1024px):** 4 columns
