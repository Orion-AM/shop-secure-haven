
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

const Cart = () => {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  // Calculate shipping and tax
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  // Proceed to checkout
  const checkout = () => {
    setLoading(true);
    // Simulate checkout process
    setTimeout(() => {
      toast.success("Order placed successfully!");
      clearCart();
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      
      {items.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                {items.map((item, index) => (
                  <div key={item.id}>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 gap-4">
                      <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link to={`/products/${item.id}`} className="font-medium hover:text-primary transition-colors">
                          {item.name}
                        </Link>
                        <p className="text-muted-foreground text-sm mt-1">
                          Unit Price: ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center border rounded-md">
                          <button
                            className="px-3 py-1 border-r"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="px-4 py-1">{item.quantity}</span>
                          <button
                            className="px-3 py-1 border-l"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-sm text-red-600 hover:underline mt-1"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    {index < items.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-6"
                  size="lg"
                  onClick={checkout}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Proceed to Checkout"}
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  By proceeding, you agree to our Terms of Service and Privacy Policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
            <ShoppingCart className="w-8 h-8 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Button asChild>
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
