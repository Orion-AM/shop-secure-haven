import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Heart } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Reviews from "@/components/Reviews";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { cn } from "@/lib/utils";

// Mock product data
const mockProduct = {
  id: "2",
  name: "Biometric Door Lock",
  price: 249.99,
  description: "This advanced biometric door lock provides state-of-the-art security for your home or office. Featuring fingerprint recognition, PIN code access, and mobile app control, it ensures only authorized users gain entry. The sleek, modern design complements any door style while offering military-grade protection.",
  features: [
    "Fingerprint recognition with 99.9% accuracy",
    "Smartphone app control and monitoring",
    "PIN code backup access",
    "Tamper alarm with instant notifications",
    "Easy installation on standard doors",
    "Long-lasting battery with low-power alerts",
    "Weather-resistant construction"
  ],
  images: [
    "https://images.unsplash.com/photo-1622557850710-1ec5c4f46a43?auto=format&q=80&w=500",
    "https://images.unsplash.com/photo-1599577180698-29bc5cc5d4b9?auto=format&q=80&w=500",
  ],
  category: "Home Security",
  stock: 15,
  rating: 4.8
};

// Mock related products
const relatedProducts = [
  {
    id: "1",
    name: "Smart Home Security Camera",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&q=80&w=500",
    category: "Security"
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

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  // In a real app, we would fetch the product data based on the ID
  const product = mockProduct;
  
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleAddToCart = () => {
    // Add item to cart with current quantity
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0]
      });
    }
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        category: product.category
      });
    }
  };

  return (
    <div className="container py-8">
      <div className="mb-6">
        <Link to="/products" className="text-sm text-primary hover:underline">
          &larr; Back to Products
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg border">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex gap-2 overflow-auto pb-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`cursor-pointer border-2 rounded-md overflow-hidden ${
                  activeImage === index ? "border-primary" : "border-transparent"
                }`}
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="h-20 w-20 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Link to={`/categories/${product.category.toLowerCase().replace(' ', '-')}`} className="text-sm text-primary">
              {product.category}
            </Link>
            <h1 className="text-3xl font-bold mt-1">{product.name}</h1>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-sm text-muted-foreground">
                  ({product.rating})
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>
          
          <p className="text-muted-foreground">{product.description}</p>
          
          <div>
            <div className="flex items-center">
              <span className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
                {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-md">
              <button
                className="px-3 py-1 border-r"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                className="px-3 py-1 border-l"
                onClick={incrementQuantity}
                disabled={quantity >= product.stock}
              >
                +
              </button>
            </div>
            
            <Button onClick={handleAddToCart} className="flex-1" disabled={product.stock === 0}>
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleWishlistToggle}
              className={cn(
                isInWishlist(product.id) && "text-red-500 border-red-500 hover:bg-red-50"
              )}
            >
              <Heart className={cn("h-4 w-4", isInWishlist(product.id) && "fill-current")} />
            </Button>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="description" className="mb-12">
        <TabsList className="grid w-full grid-cols-4 max-w-md">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="specs">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Product Description</h3>
          <p className="text-muted-foreground">{product.description}</p>
        </TabsContent>
        <TabsContent value="features" className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Key Features</h3>
          <ul className="list-disc pl-5 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="text-muted-foreground">{feature}</li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="specs" className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Technical Specifications</h3>
          <div className="space-y-2">
            <div className="grid grid-cols-2 py-2 border-b">
              <span className="font-medium">Dimensions</span>
              <span className="text-muted-foreground">7.5 x 2.8 x 1.2 inches</span>
            </div>
            <div className="grid grid-cols-2 py-2 border-b">
              <span className="font-medium">Weight</span>
              <span className="text-muted-foreground">1.3 lbs</span>
            </div>
            <div className="grid grid-cols-2 py-2 border-b">
              <span className="font-medium">Battery</span>
              <span className="text-muted-foreground">4 AA batteries (included)</span>
            </div>
            <div className="grid grid-cols-2 py-2 border-b">
              <span className="font-medium">Connectivity</span>
              <span className="text-muted-foreground">Bluetooth 5.0, WiFi</span>
            </div>
            <div className="grid grid-cols-2 py-2 border-b">
              <span className="font-medium">Warranty</span>
              <span className="text-muted-foreground">2-year limited warranty</span>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="mt-6">
          <Reviews productId={product.id} productName={product.name} />
        </TabsContent>
      </Tabs>
      
      <Separator className="my-12" />
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
        <div className="product-grid">
          {relatedProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
