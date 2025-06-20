
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Menu, User, Search, LogOut, Settings, Shield, Heart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useSearch } from "@/contexts/SearchContext";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { isAuthenticated, user, logout, isAdmin } = useAuth();
  const { itemCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { searchTerm, setSearchTerm, setIsSearching } = useSearch();
  const [mobileSearchVisible, setMobileSearchVisible] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setIsSearching(true);
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-10">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="px-2 py-1 text-lg font-medium">Home</Link>
                <Link to="/products" className="px-2 py-1 text-lg font-medium">Products</Link>
                <Link to="/categories" className="px-2 py-1 text-lg font-medium">Categories</Link>
                <Link to="/about" className="px-2 py-1 text-lg font-medium">About</Link>
                <Link to="/contact" className="px-2 py-1 text-lg font-medium">Contact</Link>
                {isAuthenticated ? (
                  <>
                    <Link to="/account" className="px-2 py-1 text-lg font-medium">My Account</Link>
                    {!isAdmin && (
                      <Link to="/wishlist" className="px-2 py-1 text-lg font-medium flex items-center">
                        <Heart className="h-4 w-4 mr-2" />
                        Wishlist
                      </Link>
                    )}
                    {isAdmin && (
                      <Link to="/admin" className="px-2 py-1 text-lg font-medium flex items-center">
                        <Shield className="h-4 w-4 mr-2" />
                        Admin Panel
                      </Link>
                    )}
                  </>
                ) : (
                  <>
                    <Link to="/auth/login" className="px-2 py-1 text-lg font-medium">Sign In</Link>
                    <Link to="/auth/admin-login" className="px-2 py-1 text-lg font-medium flex items-center">
                      <Shield className="h-4 w-4 mr-2" />
                      Admin Login
                    </Link>
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>

          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">SecureHaven</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link to="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/products" className="transition-colors hover:text-primary">
              Products
            </Link>
            <Link to="/categories" className="transition-colors hover:text-primary">
              Categories
            </Link>
            <Link to="/about" className="transition-colors hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>

        <form onSubmit={handleSearch} className="hidden md:flex items-center relative w-full max-w-sm mx-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-8 bg-background"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileSearchVisible(!mobileSearchVisible)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {!isAdmin && isAuthenticated && (
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                    {wishlistCount > 99 ? '99+' : wishlistCount}
                  </span>
                )}
              </Button>
            </Link>
          )}

          {!isAdmin && (
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {itemCount > 99 ? '99+' : itemCount}
                  </span>
                )}
              </Button>
            </Link>
          )}

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isAdmin ? <Shield className="h-5 w-5" /> : <User className="h-5 w-5" />}
                  <span className="sr-only">Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="px-2 py-1.5 text-sm font-medium">
                  Hello, {user?.name || 'User'}
                  {isAdmin && <span className="text-xs text-muted-foreground block">Admin Account</span>}
                </div>
                <DropdownMenuSeparator />
                {!isAdmin && (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/account">My Account</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/account?tab=orders">My Orders</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/wishlist" className="flex items-center">
                        <Heart className="h-4 w-4 mr-2" />
                        Wishlist ({wishlistCount})
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </>
                )}
                {isAdmin && (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/admin" className="flex items-center">
                        <Settings className="h-4 w-4 mr-2" />
                        Admin Panel
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </>
                )}
                <DropdownMenuItem onClick={logout} className="text-red-500">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/auth/login">
                <Button size="sm" variant="outline">
                  Sign in
                </Button>
              </Link>
              <Link to="/auth/admin-login">
                <Button size="sm" variant="default">
                  <Shield className="h-4 w-4 mr-1" />
                  Admin
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <form 
        onSubmit={handleSearch}
        className={cn(
          "md:hidden container overflow-hidden transition-all duration-300",
          mobileSearchVisible ? "h-14 py-2" : "h-0 py-0"
        )}
      >
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-8 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </header>
  );
};

export default Navbar;
