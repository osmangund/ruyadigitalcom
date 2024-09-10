import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export function getCurrentYear() {
  return new Date().getFullYear()
}

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
