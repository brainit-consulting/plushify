"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ShowcaseItem {
  id: string;
  originalUrl: string;
  plushieUrl: string;
  label: string;
}

// Mock showcase items with placeholder images
const showcaseItems: ShowcaseItem[] = [
  {
    id: "1",
    originalUrl: "https://placehold.co/400x400/E8E8E8/666?text=Person",
    plushieUrl: "https://placehold.co/400x400/FFB6C1/FFF?text=Plushie",
    label: "Portrait",
  },
  {
    id: "2",
    originalUrl: "https://placehold.co/400x400/E8E8E8/666?text=Dog",
    plushieUrl: "https://placehold.co/400x400/DDA0DD/FFF?text=Plushie+Dog",
    label: "Pet Dog",
  },
  {
    id: "3",
    originalUrl: "https://placehold.co/400x400/E8E8E8/666?text=Cat",
    plushieUrl: "https://placehold.co/400x400/98FB98/FFF?text=Plushie+Cat",
    label: "Pet Cat",
  },
  {
    id: "4",
    originalUrl: "https://placehold.co/400x400/E8E8E8/666?text=Family",
    plushieUrl: "https://placehold.co/400x400/87CEEB/FFF?text=Plushie+Family",
    label: "Family",
  },
];

function BeforeAfterCard({ item }: { item: ShowcaseItem }) {
  const [showPlushie, setShowPlushie] = useState(false);

  return (
    <Card
      className="relative overflow-hidden cursor-pointer group"
      onMouseEnter={() => setShowPlushie(true)}
      onMouseLeave={() => setShowPlushie(false)}
      onClick={() => setShowPlushie(!showPlushie)}
    >
      <div className="relative aspect-square">
        {/* Original Image */}
        <Image
          src={item.originalUrl}
          alt={`Original ${item.label}`}
          fill
          className={cn(
            "object-cover transition-opacity duration-500",
            showPlushie ? "opacity-0" : "opacity-100"
          )}
          sizes="(max-width: 640px) 50vw, 25vw"
        />
        {/* Plushie Image */}
        <Image
          src={item.plushieUrl}
          alt={`Plushie ${item.label}`}
          fill
          className={cn(
            "object-cover transition-opacity duration-500",
            showPlushie ? "opacity-100" : "opacity-0"
          )}
          sizes="(max-width: 640px) 50vw, 25vw"
        />

        {/* Label */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
          <p className="text-white text-sm font-medium">{item.label}</p>
        </div>

        {/* Hover indicator */}
        <div
          className={cn(
            "absolute top-3 right-3 px-2 py-1 rounded text-xs font-medium transition-all",
            showPlushie
              ? "bg-primary text-primary-foreground"
              : "bg-black/50 text-white"
          )}
        >
          {showPlushie ? "Plushie" : "Original"}
        </div>
      </div>
    </Card>
  );
}

export function BeforeAfterShowcase() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">See the Magic</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hover or tap to see the transformation. Every photo becomes an
            adorable plushie!
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {showcaseItems.map((item) => (
            <BeforeAfterCard key={item.id} item={item} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span>Original</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-primary font-medium">Plushie</span>
          </div>
        </div>
      </div>
    </section>
  );
}
