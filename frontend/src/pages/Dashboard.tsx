import { useState } from "react";
import { StockSearch } from "@/components/StockSearch";
import { StockCards } from "@/components/StockCards";
import { useToast } from "@/hooks/use-toast";

// Mock data for demonstration
const mockStockData = {
  ticker: "AAPL",
  currentPrice: 185.92,
  marketCap: "$2.89T",
  dailyChange: 2.45,
  dailyChangePercent: 1.34,
};

const mockNews = [
  {
    headline: "Apple Reports Record Quarterly Earnings Beating Analyst Expectations",
    url: "#",
    source: "Financial Times",
    publishedAt: "2024-01-19T10:30:00Z",
  },
  {
    headline: "New iPhone Models Drive Strong Consumer Demand in Holiday Season",
    url: "#",
    source: "Reuters",
    publishedAt: "2024-01-18T14:15:00Z",
  },
  {
    headline: "Apple Announces Major Investment in Renewable Energy Infrastructure",
    url: "#",
    source: "Bloomberg",
    publishedAt: "2024-01-17T09:45:00Z",
  },
];

const mockAiAnalysis = `SWOT Analysis for AAPL:

STRENGTHS:
• Strong brand loyalty and ecosystem lock-in
• Diversified revenue streams across hardware and services
• Exceptional cash flow generation and balance sheet strength
• Leading position in premium smartphone market

WEAKNESSES:
• High dependence on iPhone sales for revenue
• Premium pricing limits market share in emerging markets
• Regulatory scrutiny over App Store policies
• Supply chain vulnerabilities in Asia

OPPORTUNITIES:
• Growth in services segment with higher margins
• Expansion into new product categories (AR/VR, automotive)
• Emerging markets adoption of premium devices
• AI integration across product ecosystem

THREATS:
• Intense competition from Android manufacturers
• Economic slowdown affecting consumer spending
• Trade tensions and regulatory challenges in China
• Potential market saturation in developed countries

RECOMMENDATION: BUY
Target Price: $210
Current technical indicators suggest bullish momentum with strong support at $180.`;

export default function Dashboard() {
  const [searchResults, setSearchResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSearch = async (ticker: string) => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const mockData = {
        ...mockStockData,
        ticker: ticker,
        currentPrice: Math.random() * 200 + 50, // Random price between 50-250
        dailyChange: (Math.random() - 0.5) * 10, // Random change between -5 to +5
        dailyChangePercent: (Math.random() - 0.5) * 5, // Random percentage
      };
      
      setSearchResults({
        stockData: mockData,
        news: mockNews,
        aiAnalysis: mockAiAnalysis.replace("AAPL", ticker),
      });
      
      setIsLoading(false);
      
      toast({
        title: "Analysis Complete",
        description: `Generated comprehensive analysis for ${ticker}`,
      });
    }, 2000);
  };

  const handleClear = () => {
    setSearchResults(null);
    toast({
      title: "Results Cleared",
      description: "Ready for new stock analysis",
    });
  };

  return (
    <div className="space-y-8">
      {!searchResults ? (
        <div className="flex items-center justify-center min-h-[60vh]">
          <StockSearch onSearch={handleSearch} isLoading={isLoading} />
        </div>
      ) : (
        <StockCards
          stockData={searchResults.stockData}
          news={searchResults.news}
          aiAnalysis={searchResults.aiAnalysis}
          onClear={handleClear}
        />
      )}
    </div>
  );
}