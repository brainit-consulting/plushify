"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface PricingTier {
  name: string;
  credits: number;
  price: number;
  popular: boolean;
  badge?: string;
  features: string[];
}

interface PricingCardProps {
  tier: PricingTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative flex flex-col border-2 transition-all hover:shadow-lg",
        tier.popular
          ? "border-primary shadow-plushify scale-105 z-10"
          : "border-transparent hover:border-primary/20"
      )}
    >
      {tier.badge && (
        <Badge
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1",
            tier.popular
              ? "bg-primary"
              : "bg-[oklch(0.88_0.17_90)] text-[oklch(0.35_0.17_90)]"
          )}
        >
          {tier.badge}
        </Badge>
      )}
      <CardHeader className="text-center pb-4 pt-8">
        <h3 className="text-xl font-bold">{tier.name}</h3>
        <div className="mt-4">
          <span className="text-5xl font-bold">${tier.price}</span>
        </div>
        <p className="text-muted-foreground mt-2">
          {tier.credits} credits
        </p>
        <p className="text-sm text-muted-foreground">
          ${(tier.price / tier.credits).toFixed(2)} per plushie
        </p>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {tier.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-4">
        <Button
          asChild
          className={cn(
            "w-full",
            tier.popular ? "" : "variant-outline"
          )}
          variant={tier.popular ? "default" : "outline"}
          size="lg"
        >
          <Link href="/register">
            Get Started
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
