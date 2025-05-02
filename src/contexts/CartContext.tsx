
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "sonner";

// Cart item type
export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

// Cart context type
type CartContextType = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
};

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error parsing cart data:", error);
        localStorage.removeItem("cart");
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  // Add item to cart
  const addItem = (product: Omit<CartItem, "quantity">) => {
    setItems(currentItems => {
      // Check if item already exists in cart
      const existingItem = currentItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Increase quantity of existing item
        const updatedItems = currentItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        toast.success(`Updated quantity of ${product.name} in cart`);
        return updatedItems;
      } else {
        // Add new item with quantity 1
        toast.success(`Added ${product.name} to cart`);
        return [...currentItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeItem = (id: string) => {
    const itemToRemove = items.find(item => item.id === id);
    if (itemToRemove) {
      setItems(items.filter(item => item.id !== id));
      toast.success(`Removed ${itemToRemove.name} from cart`);
    }
  };

  // Update item quantity
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    
    setItems(currentItems => 
      currentItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setItems([]);
    toast.success("Cart has been cleared");
  };

  // Calculate item count
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  // Calculate subtotal
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount,
      subtotal
    }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook for using cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
