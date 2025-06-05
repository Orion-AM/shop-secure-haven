
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const categories = [
  {
    id: 1,
    name: "Security Cameras",
    description: "Indoor and outdoor surveillance cameras with HD recording",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&q=80&w=500",
    productCount: 25,
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "Door Locks",
    description: "Smart locks, deadbolts, and biometric security systems",
    image: "https://images.unsplash.com/photo-1622557850710-1ec5c4f46a43?auto=format&q=80&w=500",
    productCount: 18,
    color: "bg-green-500"
  },
  {
    id: 3,
    name: "Smart Doorbells",
    description: "Video doorbells with motion detection and mobile alerts",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&q=80&w=500",
    productCount: 12,
    color: "bg-purple-500"
  },
  {
    id: 4,
    name: "Alarm Systems",
    description: "Complete home and business security alarm solutions",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&q=80&w=500",
    productCount: 15,
    color: "bg-red-500"
  },
  {
    id: 5,
    name: "Personal Safety",
    description: "Personal alarms, emergency devices, and safety equipment",
    image: "https://images.unsplash.com/photo-1599577180698-29bc5cc5d4b9?auto=format&q=80&w=500",
    productCount: 8,
    color: "bg-orange-500"
  },
  {
    id: 6,
    name: "Cybersecurity",
    description: "Digital security tools, VPNs, and privacy protection",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&q=80&w=500",
    productCount: 22,
    color: "bg-indigo-500"
  }
];

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategorySlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="container py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our comprehensive range of security products organized by category. 
          Find exactly what you need to protect your home, business, or loved ones.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search categories..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <Link 
            key={category.id} 
            to={`/categories/${getCategorySlug(category.name)}`}
            className="block group"
          >
            <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg group-hover:-translate-y-1">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className={`absolute top-4 left-4 w-3 h-3 rounded-full ${category.color}`} />
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {category.name}
                </CardTitle>
                <CardDescription>
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {category.productCount} products
                  </span>
                  <span className="text-sm font-medium text-primary group-hover:underline">
                    Shop Now →
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
            Try adjusting your search term or browse all categories
          </p>
        </div>
      )}
    </div>
  );
};

export default Categories;
