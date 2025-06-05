
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "sonner";
import { useAuth } from "./AuthContext";

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface WishlistContextType {
  wishlistItems: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (itemId: string) => void;
  isInWishlist: (itemId: string) => boolean;
  clearWishlist: () => void;
  wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const { user, isAuthenticated } = useAuth();

  // Load wishlist from localStorage when user logs in
  useEffect(() => {
    if (isAuthenticated && user) {
      const stored = localStorage.getItem(`wishlist_${user.id}`);
      if (stored) {
        setWishlistItems(JSON.parse(stored));
      }
    } else {
      setWishlistItems([]);
    }
  }, [user, isAuthenticated]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (user && wishlistItems.length > 0) {
      localStorage.setItem(`wishlist_${user.id}`, JSON.stringify(wishlistItems));
    }
  }, [wishlistItems, user]);

  const addToWishlist = (item: WishlistItem) => {
    if (!isAuthenticated) {
      toast.error("Please login to add items to your wishlist");
      return;
    }

    if (!isInWishlist(item.id)) {
      setWishlistItems(prev => [...prev, item]);
      toast.success(`${item.name} added to wishlist`);
    }
  };

  const removeFromWishlist = (itemId: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== itemId));
    toast.success("Item removed from wishlist");
  };

  const isInWishlist = (itemId: string) => {
    return wishlistItems.some(item => item.id === itemId);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
    if (user) {
      localStorage.removeItem(`wishlist_${user.id}`);
    }
  };

  return (
    <WishlistContext.Provider value={{
      wishlistItems,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      clearWishlist,
      wishlistCount: wishlistItems.length
    }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
