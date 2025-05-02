
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

// This would normally come from an API
const mockProducts = [
  {
    id: "1",
    name: "Smart Home Security Camera",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&q=80&w=500",
    category: "Security"
  },
  {
    id: "2",
    name: "Biometric Door Lock",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1622557850710-1ec5c4f46a43?auto=format&q=80&w=500",
    category: "Home Security"
  },
  {
    id: "3",
    name: "Smart Doorbell with HD Video",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&q=80&w=500",
    category: "Smart Home"
  },
  {
    id: "4",
    name: "Wireless Security System",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&q=80&w=500",
    category: "Security"
  }
];

const FeaturedProducts = () => {
  const [products, setProducts] = useState(mockProducts);
  const [loading, setLoading] = useState(false);

  // Simulate fetching products
  useEffect(() => {
    setLoading(true);
    // In a real app, this would be an API call
    const timer = setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="text-muted-foreground mt-1">
              Discover our top-rated security solutions
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/products">View All</Link>
          </Button>
        </div>

        {loading ? (
          <div className="product-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-[350px] rounded-md bg-muted animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
