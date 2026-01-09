"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Filter, SortDesc, Sparkles, X } from "lucide-react";
import { toast } from "sonner";
import { GalleryCard } from "@/components/gallery/gallery-card";
import { GalleryEmptyState } from "@/components/gallery/gallery-empty-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSession } from "@/lib/auth-client";
import {
  mockGalleryItems,
  type GalleryItem,
  type SubjectType,
  subjectTypeLabels,
} from "@/lib/mock-data";

type SortOption = "newest" | "oldest";
type FilterOption = "all" | SubjectType;

export default function GalleryPage() {
  const router = useRouter();
  const { data: session, isPending: isSessionPending } = useSession();

  const [items, setItems] = useState<GalleryItem[]>(mockGalleryItems);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [filterBy, setFilterBy] = useState<FilterOption>("all");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isSessionPending && !session) {
      router.push("/login?callbackURL=/gallery");
    }
  }, [session, isSessionPending, router]);

  // Filter and sort items
  const displayedItems = useMemo(() => {
    let filtered = items;

    // Apply filter
    if (filterBy !== "all") {
      filtered = filtered.filter((item) => item.subjectType === filterBy);
    }

    // Apply sort
    return [...filtered].sort((a, b) => {
      if (sortBy === "newest") {
        return b.createdAt.getTime() - a.createdAt.getTime();
      }
      return a.createdAt.getTime() - b.createdAt.getTime();
    });
  }, [items, sortBy, filterBy]);

  const handleDeleteClick = (id: string) => {
    setItemToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (itemToDelete) {
      setItems((prev) => prev.filter((item) => item.id !== itemToDelete));
      toast.success("Plushie deleted");
    }
    setDeleteDialogOpen(false);
    setItemToDelete(null);
  };

  const clearFilter = () => {
    setFilterBy("all");
  };

  // Loading state while checking session
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
    return null; // Will redirect
  }

  return (
    <main id="main-content" className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-primary" />
                My Gallery
              </h1>
              <p className="text-muted-foreground mt-1">
                {items.length} {items.length === 1 ? "creation" : "creations"}
              </p>
            </div>

            <Link href="/generate">
              <Button className="gap-2">
                <Sparkles className="w-4 h-4" />
                Create New
              </Button>
            </Link>
          </div>
        </div>

        {/* Filters and Sort */}
        {items.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <Select
                value={filterBy}
                onValueChange={(v) => setFilterBy(v as FilterOption)}
              >
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="person">Person</SelectItem>
                  <SelectItem value="pet-dog">Dog</SelectItem>
                  <SelectItem value="pet-cat">Cat</SelectItem>
                  <SelectItem value="pet-other">Other Pet</SelectItem>
                  <SelectItem value="group">Group</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <SortDesc className="w-4 h-4 text-muted-foreground" />
              <Select
                value={sortBy}
                onValueChange={(v) => setSortBy(v as SortOption)}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {filterBy !== "all" && (
              <Badge
                variant="secondary"
                className="gap-1 cursor-pointer hover:bg-secondary/80"
                onClick={clearFilter}
              >
                {subjectTypeLabels[filterBy]}
                <X className="w-3 h-3" />
              </Badge>
            )}
          </div>
        )}

        {/* Gallery Grid or Empty State */}
        {displayedItems.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedItems.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onDelete={handleDeleteClick}
              />
            ))}
          </div>
        ) : items.length > 0 ? (
          // Has items but filter shows none
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">
              No plushies match your filter
            </p>
            <Button variant="outline" onClick={clearFilter}>
              Clear Filter
            </Button>
          </div>
        ) : (
          <GalleryEmptyState />
        )}
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
            <Button variant="destructive" onClick={handleDeleteConfirm}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
