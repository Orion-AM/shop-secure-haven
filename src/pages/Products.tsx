
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

// Mock products data with stock information
const mockProducts = [
  {
    id: "1",
    name: "Smart Home Security Camera",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&q=80&w=500",
    category: "Security Cameras",
    stock: 15
  },
  {
    id: "2",
    name: "Biometric Door Lock",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1622557850710-1ec5c4f46a43?auto=format&q=80&w=500",
    category: "Door Locks",
    stock: 8
  },
  {
    id: "3",
    name: "Smart Doorbell with HD Video",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&q=80&w=500",
    category: "Smart Doorbells",
    stock: 23
  },
  {
    id: "4",
    name: "Wireless Security System",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&q=80&w=500",
    category: "Alarm Systems",
    stock: 5
  },
  {
    id: "5",
    name: "Motion Sensor Lights",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&q=80&w=500",
    category: "Security Cameras",
    stock: 0
  },
  {
    id: "6",
    name: "Personal Safety Alarm",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1599577180698-29bc5cc5d4b9?auto=format&q=80&w=500",
    category: "Personal Safety",
    stock: 45
  },
  {
    id: "7",
    name: "Secure Cloud Storage",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&q=80&w=500",
    category: "Cybersecurity",
    stock: 12
  },
  {
    id: "8",
    name: "Password Manager",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&q=80&w=500",
    category: "Cybersecurity",
    stock: 30
  }
];

const categories = ["All", "Security Cameras", "Door Locks", "Smart Doorbells", "Alarm Systems", "Personal Safety", "Cybersecurity"];

const Products = () => {
  const { category: urlCategory } = useParams();
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(mockProducts);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || "");
  const [selectedCategory, setSelectedCategory] = useState(
    urlCategory ? urlCategory.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : "All"
  );
  const [sortOption, setSortOption] = useState("featured");
  const [showInStock, setShowInStock] = useState(false);

  // Simulate fetching products
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      let filteredProducts = [...mockProducts];
      
      // Apply search filter
      if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      // Apply category filter
      if (selectedCategory !== "All") {
        filteredProducts = filteredProducts.filter(product => 
          product.category === selectedCategory
        );
      }
      
      // Apply stock filter
      if (showInStock) {
        filteredProducts = filteredProducts.filter(product => product.stock > 0);
      }
      
      // Apply sorting
      switch(sortOption) {
        case "price-low":
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case "price-high":
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case "newest":
          // In a real app, we'd sort by date
          break;
        default:
          // featured - default sort
          break;
      }
      
      setProducts(filteredProducts);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory, sortOption, showInStock]);

  // Update category when URL changes
  useEffect(() => {
    if (urlCategory) {
      const formattedCategory = urlCategory.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
      setSelectedCategory(formattedCategory);
    }
  }, [urlCategory]);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">
        {selectedCategory === "All" ? "All Products" : selectedCategory}
      </h1>
      
      {/* Search and Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
        <div className="lg:col-span-1">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-medium text-lg">Search</h3>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-3">
              <h3 className="font-medium text-lg">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={selectedCategory === category}
                      onCheckedChange={() => setSelectedCategory(category)}
                    />
                    <Label htmlFor={category} className="text-sm font-normal cursor-pointer">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-3">
              <h3 className="font-medium text-lg">Availability</h3>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="in-stock"
                  checked={showInStock}
                  onCheckedChange={setShowInStock}
                />
                <Label htmlFor="in-stock" className="text-sm font-normal cursor-pointer">
                  In Stock Only
                </Label>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-3">
              <h3 className="font-medium text-lg">Price Range</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="min-price" className="text-sm">Min</Label>
                  <Input
                    id="min-price"
                    type="number"
                    placeholder="$0"
                    min={0}
                  />
                </div>
                <div>
                  <Label htmlFor="max-price" className="text-sm">Max</Label>
                  <Input
                    id="max-price"
                    type="number"
                    placeholder="$1000"
                    min={0}
                  />
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Apply Filter
              </Button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">
              Showing {products.length} products
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Sort by:</span>
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {loading ? (
            <div className="product-grid">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-[350px] rounded-md bg-muted animate-pulse" />
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="product-grid">
              {products.map((product) => (
                <div key={product.id} className="relative">
                  <ProductCard {...product} />
                  <div className="absolute top-2 left-2">
                    {product.stock === 0 ? (
                      <Badge variant="destructive">Out of Stock</Badge>
                    ) : product.stock < 10 ? (
                      <Badge variant="secondary">Low Stock ({product.stock})</Badge>
                    ) : (
                      <Badge variant="default">In Stock ({product.stock})</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
