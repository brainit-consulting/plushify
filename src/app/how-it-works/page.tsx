import Link from "next/link";
import {
  Upload,
  Sparkles,
  Download,
  ArrowRight,
  Camera,
  Sun,
  User,
  CheckCircle2,
  ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Your Photo",
    description:
      "Choose a clear photo of a person, pet, or group. We support JPG, PNG, and WEBP files up to 10MB. The better the original photo, the better your plushie will look!",
    tips: [
      "Use a well-lit photo with a clear face",
      "Avoid blurry or heavily filtered images",
      "Single subjects work best",
    ],
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Magic Happens",
    description:
      "Our advanced AI analyzes your photo and transforms it into an adorable plushie-style image. This usually takes about 30-60 seconds. Watch the magic unfold!",
    tips: [
      "Generation takes 30-60 seconds",
      "AI preserves key features",
      "Each result is unique",
    ],
  },
  {
    number: "03",
    icon: Download,
    title: "Download & Share",
    description:
      "Once your plushie is ready, download it in high resolution. Share it with friends, use it as a profile picture, or print it out for a unique gift!",
    tips: [
      "High-resolution downloads included",
      "Images saved to your gallery",
      "Share directly to social media",
    ],
  },
];

const bestPracticeTips = [
  {
    icon: Camera,
    title: "Good Lighting",
    description: "Natural daylight or well-lit indoor photos work best",
  },
  {
    icon: User,
    title: "Clear Face",
    description: "Make sure the face is visible and unobstructed",
  },
  {
    icon: Sun,
    title: "Simple Background",
    description: "Plain backgrounds help the AI focus on the subject",
  },
  {
    icon: ImageIcon,
    title: "High Quality",
    description: "Higher resolution photos produce better results",
  },
];

const exampleGallery = [
  { type: "Person", placeholder: true },
  { type: "Dog", placeholder: true },
  { type: "Cat", placeholder: true },
  { type: "Group", placeholder: true },
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              How Plushify Works
            </h1>
            <p className="text-xl text-muted-foreground">
              Transform your photos into adorable plushie-style images in just
              three simple steps.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div
                  className={`space-y-4 ${index % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-bold text-primary/30">
                      {step.number}
                    </span>
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">{step.title}</h2>
                  <p className="text-muted-foreground">{step.description}</p>
                  <ul className="space-y-2">
                    {step.tips.map((tip, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <Card className="aspect-square bg-muted/50 flex items-center justify-center">
                    <CardContent className="text-center p-8">
                      <step.icon className="w-24 h-24 mx-auto text-primary/20 mb-4" />
                      <p className="text-sm text-muted-foreground">
                        Step {step.number} illustration
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Best Results */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Tips for Best Results
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bestPracticeTips.map((tip, i) => (
                <Card
                  key={i}
                  className="text-center border-2 border-transparent hover:border-primary/20 transition-colors"
                >
                  <CardContent className="pt-6 pb-4">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <tip.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {tip.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Example Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4">
              What You Can Create
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Plushify works with all kinds of subjects
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {exampleGallery.map((example, i) => (
                <Card
                  key={i}
                  className="aspect-square overflow-hidden bg-muted/50"
                >
                  <CardContent className="h-full flex flex-col items-center justify-center p-4">
                    <Sparkles className="w-12 h-12 text-primary/20 mb-2" />
                    <p className="text-sm font-medium">{example.type}</p>
                    <p className="text-xs text-muted-foreground">Example</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/register">
                  Get Started Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
