import { links } from "@/data/nav-links";

export type SectionName = (typeof links)[number]["name"];

export type Theme = "light" | "dark";
