// Mock data for Plushify UI development
// Replace with real API calls when backend is ready

export type SubjectType = "person" | "pet-dog" | "pet-cat" | "pet-other" | "group";

export interface GalleryItem {
  id: string;
  originalUrl: string;
  plushieUrl: string;
  subjectType: SubjectType;
  createdAt: Date;
}

// Sample mock gallery items for development/demo
// Using placeholder images - replace with real images in production
export const mockGalleryItems: GalleryItem[] = [
  {
    id: "1",
    originalUrl: "https://placehold.co/800x800/E8E8E8/666?text=Original+1",
    plushieUrl: "https://placehold.co/800x800/FFB6C1/FFF?text=Plushie+1",
    subjectType: "person",
    createdAt: new Date("2024-01-15T10:30:00"),
  },
  {
    id: "2",
    originalUrl: "https://placehold.co/800x800/E8E8E8/666?text=Original+2",
    plushieUrl: "https://placehold.co/800x800/DDA0DD/FFF?text=Plushie+2",
    subjectType: "pet-dog",
    createdAt: new Date("2024-01-14T15:45:00"),
  },
  {
    id: "3",
    originalUrl: "https://placehold.co/800x800/E8E8E8/666?text=Original+3",
    plushieUrl: "https://placehold.co/800x800/98FB98/FFF?text=Plushie+3",
    subjectType: "pet-cat",
    createdAt: new Date("2024-01-13T09:15:00"),
  },
  {
    id: "4",
    originalUrl: "https://placehold.co/800x800/E8E8E8/666?text=Original+4",
    plushieUrl: "https://placehold.co/800x800/87CEEB/FFF?text=Plushie+4",
    subjectType: "group",
    createdAt: new Date("2024-01-12T14:20:00"),
  },
  {
    id: "5",
    originalUrl: "https://placehold.co/800x800/E8E8E8/666?text=Original+5",
    plushieUrl: "https://placehold.co/800x800/FFDAB9/FFF?text=Plushie+5",
    subjectType: "person",
    createdAt: new Date("2024-01-11T11:00:00"),
  },
  {
    id: "6",
    originalUrl: "https://placehold.co/800x800/E8E8E8/666?text=Original+6",
    plushieUrl: "https://placehold.co/800x800/E6E6FA/FFF?text=Plushie+6",
    subjectType: "pet-other",
    createdAt: new Date("2024-01-10T16:30:00"),
  },
];

// User mock data
export const mockUserCredits = 5;

// Subject type labels for display
export const subjectTypeLabels: Record<SubjectType, string> = {
  person: "Person",
  "pet-dog": "Dog",
  "pet-cat": "Cat",
  "pet-other": "Other Pet",
  group: "Group",
};

// Get gallery item by ID
export function getGalleryItemById(id: string): GalleryItem | undefined {
  return mockGalleryItems.find((item) => item.id === id);
}

// Get adjacent gallery items for navigation
export function getAdjacentItems(
  id: string,
  items: GalleryItem[]
): { prev: GalleryItem | null; next: GalleryItem | null } {
  const index = items.findIndex((item) => item.id === id);
  return {
    prev: index > 0 ? (items[index - 1] ?? null) : null,
    next: index < items.length - 1 ? (items[index + 1] ?? null) : null,
  };
}
