
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// User type definition
type User = {
  id: string;
  email: string;
  name: string;
};

// Auth context type
type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
  isAuthenticated: boolean;
};

// Default context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Check for existing user session on mount
  useEffect(() => {
    const checkAuthStatus = () => {
      const storedUser = localStorage.getItem("user");
      const isAuth = localStorage.getItem("isAuthenticated");
      
      if (storedUser && isAuth === "true") {
        setUser(JSON.parse(storedUser));
      }
      
      setIsLoading(false);
    };
    
    checkAuthStatus();
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // In a real app, this would call an API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login with user data
      const userData: User = {
        id: "user-" + Math.random().toString(36).substr(2, 9),
        email,
        name: email.split("@")[0]
      };
      
      // Store user data
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("isAuthenticated", "true");
      
      setUser(userData);
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid email or password");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Register function
  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // In a real app, this would call an API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Registration successful! Please log in.");
      navigate("/auth/login");
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again.");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    setUser(null);
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      login,
      logout,
      register,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for using auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
