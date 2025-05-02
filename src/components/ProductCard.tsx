
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({ id, name, price, image });
  };

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
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
