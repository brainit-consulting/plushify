"use client";

import Image from "next/image";
import { X, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ImagePreviewCardProps {
  file: File;
  previewUrl: string;
  onRemove: () => void;
  onReplace: () => void;
  disabled?: boolean;
}

export function ImagePreviewCard({
  file,
  previewUrl,
  onRemove,
  onReplace,
  disabled,
}: ImagePreviewCardProps) {
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden">
      <div className="relative aspect-square bg-muted">
        <Image
          src={previewUrl}
          alt="Preview of uploaded image"
          fill
          className="object-contain"
          sizes="(max-width: 448px) 100vw, 448px"
        />
        {!disabled && (
          <div className="absolute top-2 right-2 flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              onClick={onReplace}
              className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
              aria-label="Replace image"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={onRemove}
              className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
              aria-label="Remove image"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
      <div className="p-4 border-t bg-muted/30">
        <p className="text-sm font-medium truncate" title={file.name}>
          {file.name}
        </p>
        <p className="text-xs text-muted-foreground">
          {formatFileSize(file.size)}
        </p>
      </div>
    </Card>
  );
}
