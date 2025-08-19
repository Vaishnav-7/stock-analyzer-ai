import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, Zap, Shield } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced SWOT analysis using LangChain and GPT models for comprehensive stock evaluation.",
    },
    {
      icon: TrendingUp,
      title: "Real-Time Data",
      description: "Live stock prices and market data powered by Finnhub API for accurate, up-to-date information.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized algorithms deliver comprehensive analysis in seconds, not hours.",
    },
    {
      icon: Shield,
      title: "Professional Grade",
      description: "Built with enterprise-level reliability and security for serious investors.",
    },
  ];

  const technologies = [
    "React", "TypeScript", "Tailwind CSS", "LangChain", "Finnhub API", 
    "Shadcn/ui", "Vite", "GPT Models"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          About Stock AI Research Assistant
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Empowering investors with AI-driven insights and real-time market analysis 
          for smarter investment decisions.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="financial-card">
            <CardHeader className="flex flex-row items-center space-y-0 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mr-4">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Technology Stack */}
      <Card className="financial-card">
        <CardHeader>
          <CardTitle className="text-xl">Technology Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Built with modern, cutting-edge technologies to ensure reliability, 
            performance, and scalability.
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mission Statement */}
      <Card className="financial-card">
        <CardHeader>
          <CardTitle className="text-xl">Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            We believe that sophisticated financial analysis should be accessible to everyone. 
            Our AI-powered platform democratizes institutional-grade stock research, 
            providing retail investors with the same analytical capabilities traditionally 
            reserved for Wall Street professionals.
          </p>
          <p className="text-muted-foreground">
            By combining artificial intelligence with real-time market data, we deliver 
            actionable insights that help investors make informed decisions with confidence.
          </p>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <div className="text-center py-8 border-t border-border/50">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Ready to Start Your Analysis?
        </h3>
        <p className="text-muted-foreground">
          Navigate to the Analyze Stock page to begin your comprehensive stock research journey.
        </p>
      </div>
    </div>
  );
}