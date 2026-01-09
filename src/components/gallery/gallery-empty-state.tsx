"use client";

import Link from "next/link";
import { ImagePlus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GalleryEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
        <ImagePlus className="w-10 h-10 text-muted-foreground" />
      </div>

      <h3 className="text-xl font-semibold mb-2">No plushies yet</h3>

      <p className="text-muted-foreground max-w-sm mb-6">
        Your gallery is empty. Create your first adorable plushie transformation
        and it will appear here!
      </p>

      <Link href="/generate">
        <Button size="lg" className="gap-2">
          <Sparkles className="w-4 h-4" />
          Create Your First Plushie
        </Button>
      </Link>

      <p className="text-xs text-muted-foreground mt-4">
        It only takes a few seconds!
      </p>
    </div>
  );
}
