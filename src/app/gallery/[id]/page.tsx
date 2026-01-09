"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  Download,
  Share2,
  Trash2,
  ZoomIn,
  ZoomOut,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { ComparisonSlider } from "@/components/generate/comparison-slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSession } from "@/lib/auth-client";
import {
  mockGalleryItems,
  getGalleryItemById,
  getAdjacentItems,
  subjectTypeLabels,
} from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function GalleryDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const { data: session, isPending: isSessionPending } = useSession();

  // Derive item from id using useMemo
  const item = useMemo(() => getGalleryItemById(id), [id]);
  const { prev, next } = useMemo(
    () => getAdjacentItems(id, mockGalleryItems),
    [id]
  );

  const [isZoomed, setIsZoomed] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isSessionPending && !session) {
      router.push("/login?callbackURL=/gallery/" + id);
    }
  }, [session, isSessionPending, router, id]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && prev) {
        router.push(`/gallery/${prev.id}`);
      } else if (e.key === "ArrowRight" && next) {
        router.push(`/gallery/${next.id}`);
      } else if (e.key === "Escape") {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          router.push("/gallery");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prev, next, router, isZoomed]);

  const handleDownload = useCallback(async () => {
    if (!item) return;

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
  }, [item]);

  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Plushie Creation",
          text: "Check out this adorable plushie I created!",
          url: window.location.href,
        });
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          toast.error("Failed to share");
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard!");
      } catch {
        toast.error("Failed to copy link");
      }
    }
  }, []);

  const handleDelete = useCallback(() => {
    toast.success("Plushie deleted");
    router.push("/gallery");
  }, [router]);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }).format(date);
  };

  // Loading state
  if (isSessionPending) {
    return (
      <main id="main-content" className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      </main>
    );
  }

  // Not authenticated
  if (!session) {
    return null;
  }

  // Item not found
  if (!item) {
    return (
      <main id="main-content" className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center py-16">
          <h1 className="text-2xl font-bold mb-4">Plushie not found</h1>
          <p className="text-muted-foreground mb-6">
            This plushie doesn&apos;t exist or may have been deleted.
          </p>
          <Link href="/gallery">
            <Button>Back to Gallery</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Gallery
          </Link>

          <div className="flex items-center gap-2">
            {prev && (
              <Link href={`/gallery/${prev.id}`}>
                <Button variant="outline" size="icon" aria-label="Previous image">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
            )}
            {next && (
              <Link href={`/gallery/${next.id}`}>
                <Button variant="outline" size="icon" aria-label="Next image">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Image Viewer */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              {showComparison ? (
                <ComparisonSlider
                  originalUrl={item.originalUrl}
                  plushieUrl={item.plushieUrl}
                />
              ) : (
                <div
                  className={cn(
                    "relative aspect-square bg-muted cursor-zoom-in",
                    isZoomed && "cursor-zoom-out"
                  )}
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  <Image
                    src={item.plushieUrl}
                    alt={`Plushie creation - ${subjectTypeLabels[item.subjectType]}`}
                    fill
                    className={cn(
                      "object-contain transition-transform duration-300",
                      isZoomed && "scale-150"
                    )}
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />

                  {/* Zoom indicator */}
                  <div className="absolute bottom-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full">
                    {isZoomed ? (
                      <ZoomOut className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <ZoomIn className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                </div>
              )}
            </Card>

            {/* View Toggle */}
            <div className="flex justify-center gap-2 mt-4">
              <Button
                variant={showComparison ? "outline" : "default"}
                size="sm"
                onClick={() => setShowComparison(false)}
              >
                Plushie View
              </Button>
              <Button
                variant={showComparison ? "default" : "outline"}
                size="sm"
                onClick={() => setShowComparison(true)}
              >
                Compare Original
              </Button>
            </div>
          </div>

          {/* Details Panel */}
          <div className="space-y-6">
            {/* Metadata */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Details</h2>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm text-muted-foreground">Type</dt>
                  <dd>
                    <Badge variant="secondary">
                      {subjectTypeLabels[item.subjectType]}
                    </Badge>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Created</dt>
                  <dd className="text-sm">{formatDate(item.createdAt)}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">ID</dt>
                  <dd className="text-sm font-mono text-muted-foreground">
                    {item.id}
                  </dd>
                </div>
              </dl>
            </Card>

            {/* Actions */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Actions</h2>
              <div className="space-y-3">
                <Button
                  className="w-full gap-2"
                  onClick={handleDownload}
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
                <Button
                  variant="outline"
                  className="w-full gap-2"
                  onClick={handleShare}
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  className="w-full gap-2 text-destructive hover:text-destructive hover:bg-destructive/10"
                  onClick={() => setDeleteDialogOpen(true)}
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </Button>
              </div>
            </Card>

            {/* Keyboard Hints */}
            <p className="text-xs text-muted-foreground text-center">
              Use <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">←</kbd>{" "}
              <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">→</kbd> to
              navigate,{" "}
              <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">Esc</kbd>{" "}
              to go back
            </p>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Plushie?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              plushie creation from your gallery.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Fullscreen Zoom Overlay */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={() => setIsZoomed(false)}
          >
            <X className="w-6 h-6" />
          </Button>
          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={item.plushieUrl}
              alt={`Plushie creation - ${subjectTypeLabels[item.subjectType]}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}
