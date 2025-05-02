
import { createContext, useContext, useState, ReactNode } from "react";

// Search context type
type SearchContextType = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isSearching: boolean;
  setIsSearching: (value: boolean) => void;
};

// Create context
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Provider component
export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  return (
    <SearchContext.Provider value={{
      searchTerm,
      setSearchTerm,
      isSearching,
      setIsSearching
    }}>
      {children}
    </SearchContext.Provider>
  );
}

// Custom hook for using search context
export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
