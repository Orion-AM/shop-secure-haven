
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const categories = [
  {
    id: "security",
    name: "Security",
    description: "Professional security equipment and systems",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&q=80&w=500",
    productCount: 15,
    color: "bg-blue-500"
  },
  {
    id: "home-security",
    name: "Home Security",
    description: "Protect your home with advanced security solutions",
    image: "https://images.unsplash.com/photo-1622557850710-1ec5c4f46a43?auto=format&q=80&w=500",
    productCount: 24,
    color: "bg-green-500"
  },
  {
    id: "smart-home",
    name: "Smart Home",
    description: "Connected devices for modern living",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&q=80&w=500",
    productCount: 32,
    color: "bg-purple-500"
  },
  {
    id: "personal-safety",
    name: "Personal Safety",
    description: "Keep yourself safe with personal protection devices",
    image: "https://images.unsplash.com/photo-1599577180698-29bc5cc5d4b9?auto=format&q=80&w=500",
    productCount: 18,
    color: "bg-orange-500"
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Digital security tools and software solutions",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&q=80&w=500",
    productCount: 15,
    color: "bg-red-500"
  },
  {
    id: "surveillance",
    name: "Surveillance",
    description: "Monitor and protect with advanced camera systems",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&q=80&w=500",
    productCount: 28,
    color: "bg-indigo-500"
  }
];

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Product Categories</h1>
        <p className="text-muted-foreground mb-6">
          Browse our comprehensive range of security and safety products by category
        </p>
        
        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search categories..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map(category => (
          <Link 
            key={category.id} 
            to={`/products?category=${encodeURIComponent(category.name)}`}
            className="block group"
          >
            <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg group-hover:scale-105">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${category.color}`} />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.productCount} Products</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm font-medium text-primary">
                    View Products
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {category.productCount} items
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold mb-2">No categories found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search terms
          </p>
        </div>
      )}

      {/* Featured Category Banner */}
      <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Our security experts are here to help you find the perfect products for your specific needs. 
          Contact us for personalized recommendations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            Contact Our Experts
          </Link>
          <Link to="/products" className="inline-flex items-center justify-center px-6 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
            Browse All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
