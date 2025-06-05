
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = () => {
    addItem({ id, name, price, image });
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking heart
    
    if (isInWishlist(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist({ id, name, price, image, category });
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md relative">
      <div className="absolute top-2 right-2 z-10">
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "w-8 h-8 rounded-full bg-white/80 hover:bg-white",
            isInWishlist(id) && "text-red-500 hover:text-red-600"
          )}
          onClick={handleWishlistToggle}
        >
          <Heart 
            className={cn(
              "h-4 w-4",
              isInWishlist(id) && "fill-current"
            )} 
          />
        </Button>
      </div>
      
      <Link to={`/products/${id}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">{category}</p>
          <Link to={`/products/${id}`} className="block">
            <h3 className="font-medium leading-tight text-lg truncate hover:text-primary transition-colors">
              {name}
            </h3>
          </Link>
          <p className="font-semibold">${price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full"
        >
          <ShoppingCart className="h-4 w-4 mr-2" /> Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
