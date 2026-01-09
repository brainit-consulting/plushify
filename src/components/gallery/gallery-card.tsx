"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Trash2, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { type GalleryItem, subjectTypeLabels } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface GalleryCardProps {
  item: GalleryItem;
  onDelete?: (id: string) => void;
}

export function GalleryCard({ item, onDelete }: GalleryCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const response = await fetch(item.plushieUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `plushie-${item.id}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      toast.success("Image downloaded!");
    } catch {
      toast.error("Failed to download image");
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete?.(item.id);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <TooltipProvider>
      <Link href={`/gallery/${item.id}`}>
        <Card
          className={cn(
            "group relative overflow-hidden transition-all duration-300",
            "hover:shadow-lg hover:scale-[1.02]",
            "cursor-pointer"
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image Container */}
          <div className="relative aspect-square bg-muted">
            {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-muted" />
            )}
            <Image
              src={item.plushieUrl}
              alt={`Plushie creation - ${subjectTypeLabels[item.subjectType]}`}
              fill
              className={cn(
                "object-cover transition-opacity duration-300",
                imageLoaded ? "opacity-100" : "opacity-0"
              )}
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              onLoad={() => setImageLoaded(true)}
            />

            {/* Hover Overlay */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent",
                "transition-opacity duration-300",
                isHovered ? "opacity-100" : "opacity-0"
              )}
            />

            {/* Hover Actions */}
            <div
              className={cn(
                "absolute top-2 right-2 flex gap-1",
                "transition-all duration-300",
                isHovered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              )}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
                    onClick={handleDownload}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Download</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>View Details</TooltipContent>
              </Tooltip>

              {onDelete && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-destructive hover:text-destructive-foreground"
                      onClick={handleDelete}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Delete</TooltipContent>
                </Tooltip>
              )}
            </div>

            {/* Bottom Info (visible on hover) */}
            <div
              className={cn(
                "absolute bottom-0 left-0 right-0 p-3",
                "transition-all duration-300",
                isHovered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              )}
            >
              <div className="flex items-center justify-between text-white">
                <Badge
                  variant="secondary"
                  className="bg-white/20 backdrop-blur-sm text-white border-0"
                >
                  {subjectTypeLabels[item.subjectType]}
                </Badge>
                <span className="text-xs text-white/80">
                  {formatDate(item.createdAt)}
                </span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </TooltipProvider>
  );
}
