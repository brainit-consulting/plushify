import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  category: string;
  items: FaqItem[];
}

const faqData: FaqCategory[] = [
  {
    category: "Getting Started",
    items: [
      {
        question: "How do I create my first plushie?",
        answer:
          "Simply sign up for a free account, navigate to the Generate page, upload a photo, and click Generate. Our AI will transform your photo into an adorable plushie-style image in about 30-60 seconds.",
      },
      {
        question: "What types of photos work best?",
        answer:
          "Clear, well-lit photos with visible faces work best. We recommend using photos with simple backgrounds where the subject is clearly visible. Avoid blurry, heavily filtered, or low-resolution images.",
      },
      {
        question: "How many free credits do I get?",
        answer:
          "Every new account receives 5 free credits to try out Plushify. No credit card required! Each credit allows you to generate one plushie image.",
      },
      {
        question: "What file formats are supported?",
        answer:
          "We support JPG, PNG, and WEBP image formats. Files can be up to 10MB in size. For best results, use high-resolution images.",
      },
    ],
  },
  {
    category: "Image Generation",
    items: [
      {
        question: "How long does generation take?",
        answer:
          "Most images are generated within 30-60 seconds. Complex photos or high server load may occasionally take a bit longer. You'll see a progress indicator while your plushie is being created.",
      },
      {
        question: "Can I generate multiple subjects in one photo?",
        answer:
          "Yes! You can upload group photos. Just select 'Group/Family' as the subject type. Keep in mind that individual subjects may work better for the most detailed results.",
      },
      {
        question: "What if I don't like the result?",
        answer:
          "Each generation is unique. If you're not satisfied with a result, you can try generating again with the same or a different photo. Consider using a clearer photo or adjusting the subject type for better results.",
      },
      {
        question: "Can I edit the generated image?",
        answer:
          "Currently, generated images cannot be edited within Plushify. However, you can download your image and use any image editing software to make adjustments.",
      },
    ],
  },
  {
    category: "Account & Billing",
    items: [
      {
        question: "How do credits work?",
        answer:
          "Each credit allows you to generate one plushie image. Credits never expire and are tied to your account. You can purchase more credits at any time from our pricing page.",
      },
      {
        question: "Do credits expire?",
        answer:
          "No, your credits never expire! Once purchased, they remain in your account until you use them. Generate plushies whenever you're ready.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, Mastercard, American Express) as well as PayPal. All payments are processed securely.",
      },
      {
        question: "Can I get a refund?",
        answer:
          "Yes, we offer refunds for unused credits within 14 days of purchase. Contact our support team and we'll process your refund. Used credits are non-refundable.",
      },
      {
        question: "Is there a subscription option?",
        answer:
          "Currently, Plushify uses a credit-based system with one-time purchases. There are no recurring subscriptions or hidden fees.",
      },
    ],
  },
  {
    category: "Privacy & Security",
    items: [
      {
        question: "What happens to my uploaded photos?",
        answer:
          "Your photos are processed securely and used only to generate your plushie images. We do not share, sell, or use your photos for any other purpose. You can delete your images from your gallery at any time.",
      },
      {
        question: "How long are my images stored?",
        answer:
          "Generated images are stored in your gallery indefinitely until you choose to delete them. You have full control over your content.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Yes, we use industry-standard encryption and security practices to protect your data. All uploads and downloads are encrypted in transit.",
      },
      {
        question: "Can I delete my account and data?",
        answer:
          "Yes, you can request account deletion at any time. This will permanently remove your account, all generated images, and associated data from our servers.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <HelpCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about Plushify
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-xl font-bold mb-4 text-primary">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.items.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                    >
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can&apos;t find what you&apos;re looking for? Our support team is here to
              help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/help">
                  Contact Support
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/how-it-works">How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
