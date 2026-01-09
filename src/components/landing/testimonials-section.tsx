import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    role: "Pet Parent",
    avatar: "https://placehold.co/100x100/FFB6C1/FFF?text=SM",
    content:
      "I turned my golden retriever into a plushie and it's the cutest thing ever! The whole family loves it. Already planning to do the rest of our pets!",
    rating: 5,
  },
  {
    id: "2",
    name: "James L.",
    role: "Gift Giver",
    avatar: "https://placehold.co/100x100/87CEEB/FFF?text=JL",
    content:
      "Made plushie versions of my parents for their anniversary. They were so touched! Such a unique and thoughtful gift idea.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily R.",
    role: "Creative Mom",
    avatar: "https://placehold.co/100x100/98FB98/FFF?text=ER",
    content:
      "My kids absolutely LOVE seeing themselves as plushies. We've printed them out and they're now hanging in their rooms. So fun!",
    rating: 5,
  },
  {
    id: "4",
    name: "Michael T.",
    role: "Social Media Creator",
    avatar: "https://placehold.co/100x100/DDA0DD/FFF?text=MT",
    content:
      "The quality blew me away. I use these for my content and my followers can't get enough. Fast, easy, and the results are incredible.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-primary text-primary" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Loved by Thousands</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See what our happy customers are saying about their plushie
            transformations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-2 border-transparent hover:border-primary/20 transition-colors"
            >
              <CardContent className="pt-6">
                <StarRating rating={testimonial.rating} />
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
