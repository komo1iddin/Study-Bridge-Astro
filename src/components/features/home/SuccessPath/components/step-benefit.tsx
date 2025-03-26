import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

interface StepBenefitProps {
  benefit: string
  color: string
  bgColor: string
  index: number
}

export function StepBenefit({ benefit, color, bgColor, index }: StepBenefitProps) {
  return (
    <motion.div
      className="flex items-start gap-3 p-4 md:p-5 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-300"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ backgroundColor: bgColor }}
      >
        <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: color }} />
      </div>
      <span className="text-gray-700 text-sm md:text-base">{benefit}</span>
    </motion.div>
  )
}

