import Link from "next/link";
import { Sparkles, Upload, Download, ImageIcon, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Turn Anyone Into an{" "}
              <span className="text-primary">Adorable Plushie</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Upload photos of yourself, friends, family, or pets and watch our AI
              transform them into cute, huggable plushie-style images.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/register">
                  Try It Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/how-it-works">See How It Works</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Start with 5 free credits. No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 border-y bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">10,000+</p>
              <p className="text-sm text-muted-foreground">Plushies Created</p>
            </div>
            <div className="h-8 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">4.9/5 rating</span>
            </div>
            <div className="h-8 w-px bg-border hidden sm:block" />
            <div>
              <p className="text-2xl font-bold text-primary">30 sec</p>
              <p className="text-sm text-muted-foreground">Average Generation</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Creating your plushie is as easy as 1-2-3
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-2 border-transparent hover:border-primary/20 transition-colors">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Upload</h3>
                <p className="text-muted-foreground">
                  Upload a photo of anyone or any pet you want to transform
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-transparent hover:border-primary/20 transition-colors">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. AI Magic</h3>
                <p className="text-muted-foreground">
                  Our AI transforms your photo into an adorable plushie style
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-transparent hover:border-primary/20 transition-colors">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Download</h3>
                <p className="text-muted-foreground">
                  Download your plushie image and share it with the world
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Plushify?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Sparkles, title: "AI-Powered", desc: "State-of-the-art AI for stunning results" },
              { icon: ImageIcon, title: "High Quality", desc: "Crystal clear, high-resolution images" },
              { icon: Upload, title: "Easy to Use", desc: "Simple drag-and-drop interface" },
              { icon: Download, title: "Instant Download", desc: "Get your plushie in seconds" },
            ].map((feature, i) => (
              <div key={i} className="text-center p-6">
                <feature.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Create Your First Plushie?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of happy users who have transformed their photos into
              adorable plushies.
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/register">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
