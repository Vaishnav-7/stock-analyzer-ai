import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface StockSearchProps {
  onSearch: (ticker: string) => void;
  isLoading: boolean;
}

export function StockSearch({ onSearch, isLoading }: StockSearchProps) {
  const [ticker, setTicker] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticker.trim()) {
      toast({
        title: "Please enter a stock ticker",
        description: "Enter a valid stock symbol like AAPL, TSLA, or MSFT",
        variant: "destructive",
      });
      return;
    }
    onSearch(ticker.toUpperCase());
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          AI Stock Research Assistant
        </h1>
        <p className="text-lg text-muted-foreground">
          Enter a stock ticker to get comprehensive analysis powered by AI
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Enter stock ticker (e.g., AAPL, TSLA, MSFT)"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            className="search-input h-14 text-lg pl-12 pr-4 rounded-xl"
            disabled={isLoading}
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
        
        <Button
          type="submit"
          disabled={isLoading || !ticker.trim()}
          className="btn-analyze w-full h-14 text-lg rounded-xl font-semibold"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Search className="mr-2 h-5 w-5" />
              Analyze Stock
            </>
          )}
        </Button>
      </form>
    </div>
  );
}