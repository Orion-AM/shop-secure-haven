
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addItem } = useCart();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="container py-16">
        <div className="text-center">
          <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h1 className="text-2xl font-bold mb-2">Your Wishlist</h1>
          <p className="text-muted-foreground mb-6">
            Please log in to view your saved items
          </p>
          <Link to="/auth/login">
            <Button>Sign In</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
  };

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Heart className="w-8 h-8 text-red-500" />
            My Wishlist
          </h1>
          <p className="text-muted-foreground mt-1">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>
        
        {wishlistItems.length > 0 && (
          <Button variant="outline" onClick={clearWishlist}>
            <Trash2 className="w-4 h-4 mr-2" />
            Clear All
          </Button>
        )}
      </div>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-16">
          <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
          <p className="text-muted-foreground mb-6">
            Save items you love for later by clicking the heart icon
          </p>
          <Link to="/products">
            <Button>Browse Products</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <Link to={`/products/${item.id}`}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Link>
              <CardContent className="p-4">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">{item.category}</p>
                  <Link to={`/products/${item.id}`}>
                    <h3 className="font-medium leading-tight text-lg truncate hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="font-semibold">${item.price.toFixed(2)}</p>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 space-y-2">
                <Button 
                  onClick={() => handleAddToCart(item)}
                  className="w-full"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => removeFromWishlist(item.id)}
                  className="w-full text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Remove
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
