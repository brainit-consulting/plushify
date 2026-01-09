import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  credits: number;
  price: number;
  popular: boolean;
  badge?: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    credits: 30,
    price: 9,
    popular: false,
    features: ["30 plushie generations", "High-resolution downloads", "Gallery storage"],
  },
  {
    name: "Pro",
    credits: 100,
    price: 19,
    popular: true,
    badge: "Most Popular",
    features: ["100 plushie generations", "High-resolution downloads", "Priority support"],
  },
  {
    name: "Elite",
    credits: 200,
    price: 29,
    popular: false,
    badge: "Best Value",
    features: ["200 plushie generations", "Unlimited gallery storage", "Early access to features"],
  },
];

export function PricingPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Start free with 5 credits, then choose a plan that fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                "relative border-2 transition-all hover:shadow-lg",
                tier.popular
                  ? "border-primary shadow-md scale-105"
                  : "border-transparent hover:border-primary/20"
              )}
            >
              {tier.badge && (
                <Badge
                  className={cn(
                    "absolute -top-3 left-1/2 -translate-x-1/2",
                    tier.popular
                      ? "bg-primary"
                      : "bg-[oklch(0.88_0.17_90)] text-[oklch(0.35_0.17_90)]"
                  )}
                >
                  {tier.badge}
                </Badge>
              )}
              <CardHeader className="text-center pb-2">
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <div className="mt-2">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  <span className="text-muted-foreground ml-1">
                    / {tier.credits} credits
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  ${(tier.price / tier.credits).toFixed(2)} per plushie
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/pricing">
            <Button variant="outline" className="gap-2">
              View Full Pricing Details
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
