import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PricingCard, type PricingTier } from "@/components/pricing/pricing-card";
import { PricingFaq } from "@/components/pricing/pricing-faq";
import { Button } from "@/components/ui/button";

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    credits: 30,
    price: 9,
    popular: false,
    features: [
      "30 plushie generations",
      "High-resolution downloads",
      "Gallery storage",
      "Basic support",
    ],
  },
  {
    name: "Pro",
    credits: 100,
    price: 19,
    popular: true,
    badge: "Most Popular",
    features: [
      "100 plushie generations",
      "High-resolution downloads",
      "Gallery storage",
      "Priority support",
      "Bulk download",
    ],
  },
  {
    name: "Elite",
    credits: 200,
    price: 29,
    popular: false,
    badge: "Best Value",
    features: [
      "200 plushie generations",
      "High-resolution downloads",
      "Unlimited gallery storage",
      "Priority support",
      "Bulk download",
      "Early access to features",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Start free with 5 credits. No credit card required.
            </p>
            <div className="inline-flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full text-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Credits never expire</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            All Plans Include
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { title: "AI-Powered Generation", desc: "State-of-the-art AI for stunning results" },
              { title: "High-Resolution", desc: "Download images up to 2048x2048" },
              { title: "Cloud Gallery", desc: "Access your creations from anywhere" },
              { title: "Privacy First", desc: "Your photos are never shared or sold" },
            ].map((feature, i) => (
              <div key={i} className="text-center p-4">
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <PricingFaq />

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Create Your First Plushie?
            </h2>
            <p className="text-muted-foreground mb-6">
              Start with 5 free credits. No credit card required.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link href="/register">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
