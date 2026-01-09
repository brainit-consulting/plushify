"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const processingMessages = [
  "Analyzing your image...",
  "Finding the perfect plushie style...",
  "Adding soft, cuddly textures...",
  "Fluffing up the details...",
  "Stitching together the magic...",
  "Adding final touches...",
  "Almost ready to cuddle!",
];

interface ProcessingOverlayProps {
  onComplete: () => void;
  duration?: number; // Duration in milliseconds
}

export function ProcessingOverlay({
  onComplete,
  duration = 45000, // 45 seconds default
}: ProcessingOverlayProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const messageInterval = duration / processingMessages.length;

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      // Update message based on progress
      const newMessageIndex = Math.min(
        Math.floor(elapsed / messageInterval),
        processingMessages.length - 1
      );
      setMessageIndex(newMessageIndex);

      if (newProgress >= 100) {
        clearInterval(progressInterval);
        setTimeout(onComplete, 500); // Small delay before showing result
      }
    }, 100);

    return () => clearInterval(progressInterval);
  }, [duration, onComplete]);

  return (
    <div className="w-full max-w-md mx-auto text-center space-y-8">
      {/* Animated Icon */}
      <div className="relative w-32 h-32 mx-auto">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-[oklch(0.55_0.17_300)]/20 animate-pulse" />
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-primary/30 to-[oklch(0.55_0.17_300)]/30 animate-pulse delay-75" />
        <div className="absolute inset-4 rounded-full bg-background flex items-center justify-center">
          <Sparkles className="w-12 h-12 text-primary animate-bounce" />
        </div>
        {/* Floating sparkles */}
        <div className="absolute -top-2 -right-2 w-4 h-4 text-[oklch(0.88_0.17_90)] animate-ping">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="absolute -bottom-1 -left-1 w-3 h-3 text-primary animate-ping delay-300">
          <Sparkles className="w-3 h-3" />
        </div>
        <div className="absolute top-1/2 -right-4 w-3 h-3 text-[oklch(0.55_0.17_300)] animate-ping delay-500">
          <Sparkles className="w-3 h-3" />
        </div>
      </div>

      {/* Status Message */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-[oklch(0.55_0.17_300)] bg-clip-text text-transparent">
          Creating Your Plushie
        </h3>
        <p className="text-muted-foreground h-6 transition-all duration-300">
          {processingMessages[messageIndex]}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <Progress value={progress} className="h-2" />
        <p className="text-sm text-muted-foreground">
          {Math.round(progress)}% complete
        </p>
      </div>

      {/* Fun fact */}
      <p className="text-xs text-muted-foreground/60 italic">
        Fun fact: Each plushie is unique, just like the original!
      </p>
    </div>
  );
}
