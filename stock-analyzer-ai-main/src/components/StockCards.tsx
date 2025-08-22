import { TrendingUp, TrendingDown, Newspaper, Brain, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface StockData {
  ticker: string;
  currentPrice: number;
  marketCap: string;
  dailyChange: number;
  dailyChangePercent: number;
}

interface NewsItem {
  headline: string;
  url: string;
  source: string;
  publishedAt: string;
}

interface StockCardsProps {
  stockData: StockData;
  news: NewsItem[];
  aiAnalysis: string;
  onClear: () => void;
}

export function StockCards({ stockData, news, aiAnalysis, onClear }: StockCardsProps) {
  const isPositive = stockData.dailyChange >= 0;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 animate-slide-up">
      {/* Header with Clear Button */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Analysis Results for {stockData.ticker}
          </h2>
          <p className="text-muted-foreground">
            Comprehensive stock analysis powered by AI
          </p>
        </div>
        <Button
          onClick={onClear}
          variant="outline"
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Clear Results
        </Button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stock Info Card */}
        <Card className="financial-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold">Stock Information</CardTitle>
            {isPositive ? (
              <TrendingUp className="h-5 w-5 text-success" />
            ) : (
              <TrendingDown className="h-5 w-5 text-danger" />
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Current Price</span>
                <span className="text-xl font-bold text-foreground">
                  ${stockData.currentPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Market Cap</span>
                <span className="font-semibold text-foreground">
                  {stockData.marketCap}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Daily Change</span>
                <div className="text-right">
                  <div className={`font-semibold ${isPositive ? 'text-success' : 'text-danger'}`}>
                    {isPositive ? '+' : ''}${stockData.dailyChange.toFixed(2)}
                  </div>
                  <div className={`text-sm ${isPositive ? 'text-success' : 'text-danger'}`}>
                    {isPositive ? '+' : ''}{stockData.dailyChangePercent.toFixed(2)}%
                  </div>
                </div>
              </div>
            </div>
            <Badge
              variant={isPositive ? "default" : "destructive"}
              className={isPositive ? "bg-success text-success-foreground" : ""}
            >
              {isPositive ? "Up" : "Down"} Today
            </Badge>
          </CardContent>
        </Card>

        {/* News Card */}
        <Card className="financial-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold">Latest News</CardTitle>
            <Newspaper className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent className="space-y-3">
            {news.map((item, index) => (
              <div key={index} className="space-y-1">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:text-primary-glow transition-colors duration-200 line-clamp-2"
                >
                  {item.headline}
                </a>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>{item.source}</span>
                  <span>{new Date(item.publishedAt).toLocaleDateString()}</span>
                </div>
                {index < news.length - 1 && <hr className="border-border/50" />}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* AI Analysis Card */}
        <Card className="financial-card md:col-span-2 lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold">AI Analysis</CardTitle>
            <Brain className="h-5 w-5 text-primary animate-glow-pulse" />
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none">
              <div className="whitespace-pre-wrap text-sm text-card-foreground leading-relaxed">
                {aiAnalysis}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="text-center py-6 border-t border-border/50">
        <p className="text-sm text-muted-foreground">
          Powered by LangChain + Finnhub API • Data updated in real-time
        </p>
      </div>
    </div>
  );
}