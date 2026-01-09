"use client";

import Link from "next/link";
import { Lock, Sparkles, ImageIcon, User, CreditCard } from "lucide-react";
import { UserProfile } from "@/components/auth/user-profile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useSession } from "@/lib/auth-client";

// Mock data for development - will be replaced with real data later
const mockUserCredits = 5;
const mockTotalCreations = 0;

export default function DashboardPage() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <Lock className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h1 className="text-2xl font-bold mb-2">Protected Page</h1>
            <p className="text-muted-foreground mb-6">
              You need to sign in to access the dashboard
            </p>
          </div>
          <UserProfile />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      {/* Welcome Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome back, {session.user.name?.split(" ")[0] || "there"}!
            </h1>
            <p className="text-muted-foreground mt-1">
              Ready to create some adorable plushies?
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              <CreditCard className="w-4 h-4 mr-1" />
              {mockUserCredits} credits
            </Badge>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Create New Plushie - Primary Action */}
        <Card className="md:col-span-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Create New Plushie
            </CardTitle>
            <CardDescription>
              Upload a photo and transform it into an adorable plushie
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/generate">
                <Sparkles className="w-4 h-4 mr-2" />
                Start Creating
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* View Gallery */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5" />
              Your Gallery
            </CardTitle>
            <CardDescription>
              {mockTotalCreations} plushies created
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Creations or Empty State */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Creations</CardTitle>
          <CardDescription>Your latest plushie transformations</CardDescription>
        </CardHeader>
        <CardContent>
          {mockTotalCreations === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">No plushies yet</h3>
              <p className="text-muted-foreground mb-4">
                Create your first plushie and it will appear here
              </p>
              <Button asChild>
                <Link href="/generate">Create Your First Plushie</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Placeholder for when we have real data */}
              <p className="text-muted-foreground col-span-full text-center py-8">
                Your recent creations will appear here
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Account Quick Link */}
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1">
                <p><strong>Name:</strong> {session.user.name}</p>
                <p><strong>Email:</strong> {session.user.email}</p>
              </div>
              <Button asChild variant="outline">
                <Link href="/profile">Manage Account</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
