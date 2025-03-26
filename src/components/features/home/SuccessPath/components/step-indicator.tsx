import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { type StepType, colors } from "../data/steps"

interface StepIndicatorProps {
  step: StepType
  isActive: boolean
  isCompleted: boolean
  onClick: () => void
  isMobile: boolean
}

export function StepIndicator({ step, isActive, isCompleted, onClick, isMobile }: StepIndicatorProps) {
  const Icon = step.icon

  return (
    <div
      className={cn(
        "relative flex-1 group cursor-pointer",
        isCompleted ? "text-blue-600" : isActive ? "text-current" : "text-gray-400"
      )}
      onClick={onClick}
    >
      {/* Connector line */}
      {step.id !== 1 && (
        <div
          className={cn(
            "absolute left-0 right-0 top-5 h-1 -translate-x-1/2 transition-all duration-500",
            isCompleted ? "bg-blue-600" : "bg-gray-200"
          )}
        />
      )}

      {/* Step circle */}
      <div className="relative flex flex-col items-center group">
        <motion.div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300",
            isActive
              ? "ring-4"
              : isCompleted
                ? "bg-blue-600 text-white"
                : "bg-white border-2 border-gray-300"
          )}
          initial={{ scale: 1 }}
          animate={{
            scale: isActive ? 1.1 : 1
          }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          style={{
            backgroundColor: isActive ? step.color : isCompleted ? colors.primary[600] : "white",
            boxShadow: isActive ? `0 0 0 4px ${step.color}20` : "none",
            color: isActive || isCompleted ? "white" : step.color
          }}
        >
          {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
        </motion.div>

      {/* Step title */}
      {!isMobile && (
        <div className="mt-3 text-center">
          <div
            className={cn(
              "text-sm font-semibold mb-1 transition-colors duration-300",
              isActive ? "text-current" : isCompleted ? "text-blue-600" : "text-gray-500"
            )}
            style={{ 
              color: isActive ? step.color : isCompleted ? colors.primary[600] : undefined 
            }}
          >
            {step.title}
          </div>
          <div className="text-xs text-gray-500">{step.shortDesc}</div>
        </div>
      )}
      </div>
    </div>
  )
}