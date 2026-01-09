"use client";

import { Download, Share2, Sparkles, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ComparisonSlider } from "./comparison-slider";

interface ResultDisplayProps {
  originalUrl: string;
  plushieUrl: string;
  onCreateAnother: () => void;
}

export function ResultDisplay({
  originalUrl,
  plushieUrl,
  onCreateAnother,
}: ResultDisplayProps) {
  const handleDownload = async () => {
    try {
      const response = await fetch(plushieUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `plushie-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      toast.success("Image downloaded!");
    } catch {
      toast.error("Failed to download image");
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Plushie Creation",
          text: "Check out this adorable plushie version of my photo!",
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or share failed
        if ((err as Error).name !== "AbortError") {
          toast.error("Failed to share");
        }
      }
    } else {
      // Fallback: copy link to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard!");
      } catch {
        toast.error("Failed to copy link");
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Success Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[oklch(0.85_0.12_165)]/20 text-[oklch(0.45_0.12_165)] rounded-full">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Plushification Complete!</span>
        </div>
        <h2 className="text-2xl font-bold">Your Plushie is Ready</h2>
        <p className="text-muted-foreground">
          Drag the slider to compare the original with your new plushie
        </p>
      </div>

      {/* Comparison Slider */}
      <Card className="overflow-hidden">
        <ComparisonSlider originalUrl={originalUrl} plushieUrl={plushieUrl} />
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button onClick={handleDownload} size="lg" className="gap-2">
          <Download className="w-4 h-4" />
          Download Plushie
        </Button>
        <Button onClick={handleShare} variant="outline" size="lg" className="gap-2">
          <Share2 className="w-4 h-4" />
          Share
        </Button>
        <Button
          onClick={onCreateAnother}
          variant="ghost"
          size="lg"
          className="gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Create Another
        </Button>
      </div>

      {/* Tip */}
      <p className="text-center text-sm text-muted-foreground">
        Love your plushie? Save it to your gallery from your dashboard!
      </p>
    </div>
  );
}
