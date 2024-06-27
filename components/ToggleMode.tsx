"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Moon, Sun, Cloud, Star, Heart } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const themeIcons: Record<string, React.ComponentType> = {
  light: Sun,
  dark: Moon,
  pink: Heart,
  blue: Cloud,
  system: Star,
};

export function ToggleMode() {
  const { theme, setTheme, themes } = useTheme();
  const [mounted, setMounted] = useState(false);
  const ThemeIcon = theme ? themeIcons[theme] : Sun;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="outline" size="icon" disabled={true}></Button>;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <ThemeIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuItem key={theme} onClick={() => setTheme(theme)}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
