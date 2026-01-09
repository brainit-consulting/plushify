"use client";

import { Coins, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface CreditIndicatorProps {
  creditsAvailable: number;
  creditCost?: number;
  className?: string;
}

export function CreditIndicator({
  creditsAvailable,
  creditCost = 1,
  className,
}: CreditIndicatorProps) {
  const hasEnoughCredits = creditsAvailable >= creditCost;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm",
        hasEnoughCredits
          ? "bg-muted text-muted-foreground"
          : "bg-destructive/10 text-destructive",
        className
      )}
    >
      {hasEnoughCredits ? (
        <>
          <Coins className="w-4 h-4" />
          <span>
            This will use <strong>{creditCost} credit</strong>
          </span>
          <span className="text-muted-foreground/60">
            ({creditsAvailable} available)
          </span>
        </>
      ) : (
        <>
          <AlertCircle className="w-4 h-4" />
          <span>
            You need {creditCost} credit but only have {creditsAvailable}
          </span>
        </>
      )}
    </div>
  );
}
