"use client";

import { User, Dog, Cat, Bird, Users } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

export type SubjectType = "person" | "pet-dog" | "pet-cat" | "pet-other" | "group";

interface SubjectTypeSelectorProps {
  value: SubjectType;
  onChange: (value: SubjectType) => void;
  disabled?: boolean;
}

const subjectTypes: { value: SubjectType; label: string; icon: React.ReactNode; description: string }[] = [
  {
    value: "person",
    label: "Person",
    icon: <User className="h-5 w-5" />,
    description: "Single person portrait",
  },
  {
    value: "pet-dog",
    label: "Dog",
    icon: <Dog className="h-5 w-5" />,
    description: "Your furry friend",
  },
  {
    value: "pet-cat",
    label: "Cat",
    icon: <Cat className="h-5 w-5" />,
    description: "Your feline companion",
  },
  {
    value: "pet-other",
    label: "Other Pet",
    icon: <Bird className="h-5 w-5" />,
    description: "Birds, rabbits, etc.",
  },
  {
    value: "group",
    label: "Group",
    icon: <Users className="h-5 w-5" />,
    description: "Family or friends",
  },
];

export function SubjectTypeSelector({
  value,
  onChange,
  disabled,
}: SubjectTypeSelectorProps) {
  return (
    <div className="w-full max-w-xl mx-auto space-y-4">
      <div className="text-center space-y-1">
        <h3 className="text-lg font-medium">What&apos;s in your photo?</h3>
        <p className="text-sm text-muted-foreground">
          Help us create the best plushie version
        </p>
      </div>

      <RadioGroup
        value={value}
        onValueChange={(v) => onChange(v as SubjectType)}
        disabled={disabled}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
      >
        {subjectTypes.map((type) => (
          <Label
            key={type.value}
            htmlFor={type.value}
            className={cn(
              "flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all",
              "hover:border-primary/50 hover:bg-muted/50",
              value === type.value
                ? "border-primary bg-primary/5"
                : "border-muted",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            <RadioGroupItem
              value={type.value}
              id={type.value}
              className="sr-only"
            />
            <div
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                value === type.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {type.icon}
            </div>
            <div className="text-center">
              <p className="font-medium text-sm">{type.label}</p>
              <p className="text-xs text-muted-foreground hidden sm:block">
                {type.description}
              </p>
            </div>
          </Label>
        ))}
      </RadioGroup>
    </div>
  );
}
