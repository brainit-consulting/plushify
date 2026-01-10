import Link from "next/link";
import {
  Mail,
  MessageCircle,
  HelpCircle,
  BookOpen,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const quickLinks = [
  {
    icon: BookOpen,
    title: "How It Works",
    description: "Learn the basics of creating plushie images",
    href: "/how-it-works",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Find answers to common questions",
    href: "/faq",
  },
];

export default function HelpPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              How Can We Help?
            </h1>
            <p className="text-xl text-muted-foreground">
              We&apos;re here to help you get the most out of Plushify
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-6 text-center">Quick Links</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {quickLinks.map((link, i) => (
                <Link key={i} href={link.href}>
                  <Card className="h-full border-2 border-transparent hover:border-primary/20 transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <link.icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{link.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {link.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Contact Support
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {/* Email Support */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Email Support</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Send us an email and we&apos;ll get back to you as soon as
                        possible.
                      </p>
                      <a
                        href="mailto:support@plushify.com"
                        className="text-primary hover:underline font-medium"
                      >
                        support@plushify.com
                      </a>
                    </div>
                  </div>

                  <div className="border-t" />

                  {/* Response Time */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Response Time</h3>
                      <p className="text-muted-foreground text-sm">
                        We typically respond to support requests within 24-48
                        hours during business days. Priority support is
                        available for Pro and Elite plan customers.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Include */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-center mb-6">
              When Contacting Us, Please Include
            </h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {[
                    "Your account email address",
                    "A clear description of the issue or question",
                    "Any error messages you've encountered",
                    "Screenshots if applicable",
                    "The device and browser you're using",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-medium text-primary">
                          {i + 1}
                        </span>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
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
