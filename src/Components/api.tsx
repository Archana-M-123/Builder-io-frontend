const BASE_URL = "http://localhost:8000";

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/categories`);
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export interface TestimonialCardProps {
  imageUrl: string;
  name: string;
  rating: string[];
  description: string;
}

export const fetchTestimonials = async () => {
  try {
    const response = await fetch(`${BASE_URL}/testimonials`);
    if (!response.ok) {
      throw new Error("Failed to fetch testimonials");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    throw error;
  }
};

export const fetchLatestUpdates = async () => {
  try {
    const response = await fetch(`${BASE_URL}/latest-updates`);
    if (!response.ok) {
      throw new Error("Failed to fetch latest updates");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching latest updates:", error);
    throw error;
  }
};
