"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pricingFaqs = [
  {
    question: "How do credits work?",
    answer:
      "Each credit allows you to generate one plushie image. When you upload a photo and click generate, one credit is used. Credits never expire and roll over if unused.",
  },
  {
    question: "Do I get free credits to start?",
    answer:
      "Yes! Every new account receives 5 free credits to try out Plushify. No credit card required to sign up and use your free credits.",
  },
  {
    question: "Can I buy more credits later?",
    answer:
      "Absolutely! You can purchase additional credit packs at any time. Your new credits are added to your existing balance immediately.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express) as well as PayPal for your convenience.",
  },
  {
    question: "Is there a subscription or recurring charge?",
    answer:
      "No, Plushify uses a one-time credit purchase model. You only pay for the credits you buy, with no recurring charges or subscriptions.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "If you're not satisfied with your purchase, contact us within 14 days for unused credits and we'll provide a full refund. Used credits are non-refundable.",
  },
  {
    question: "Do credits expire?",
    answer:
      "No, your credits never expire. Use them whenever you're ready to create your next plushie masterpiece!",
  },
];

export function PricingFaq() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Pricing Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {pricingFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
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
      </div>
    </section>
  );
}
