import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface TrainingItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface GalleryItem {
  title: string;
  category: 'Animation' | 'Multimedia' | 'Robotics with AI';
  imageUrl: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
}

export interface BlogPost {
  title: string;
  date: string;
}