import type { LucideIcon } from "lucide-react"
import * as LucideIcons from "lucide-react"

// Extract all icon names from Lucide
export type IconName = keyof typeof LucideIcons

// Helper function to get icon component by name
export function getIconByName(name: IconName): LucideIcon {
  return LucideIcons[name] || LucideIcons.HelpCircle
}

