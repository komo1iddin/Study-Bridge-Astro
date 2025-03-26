"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/react/badge"
import { colors } from "../data/steps"

interface HeaderSectionProps {
  title: string
  subtitle: string
  badgeText: string
}

export function HeaderSection({ title, subtitle, badgeText }: HeaderSectionProps) {
  return (
    <motion.div
      className="text-center mb-8 md:mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Badge
        className="mb-4 px-4 py-1.5 text-sm font-medium bg-blue-600 text-white border-0"
        style={{ backgroundColor: colors.blue[600] }}
      >
        {badgeText}
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    </motion.div>
  )
}

