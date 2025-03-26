import { motion } from "framer-motion"
import { type StepType, colors } from "../data/steps"

interface MobileStepIndicatorProps {
  steps: StepType[]
  activeStep: number
  goToStep: (index: number) => void
}

export function MobileStepIndicator({ steps, activeStep, goToStep }: MobileStepIndicatorProps) {
  const progressWidth = `${(activeStep / (steps.length - 1)) * 100}%`
  const previousWidth = `${(Math.max(0, activeStep - 1) / (steps.length - 1)) * 100}%`

  return (
    <div className="flex flex-col w-full mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-500">
          Bosqich {activeStep + 1}/{steps.length}
        </span>
        <div className="flex space-x-1">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeStep ? "w-4" : ""
              }`}
              style={{
                backgroundColor:
                  index === activeStep 
                    ? steps[activeStep].color 
                    : index < activeStep 
                      ? colors.primary[600] 
                      : "#D1D5DB",
              }}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            backgroundColor: colors.primary[600],
          }}
          initial={{ width: previousWidth }}
          animate={{ width: progressWidth }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
          layout
        />
      </div>
    </div>
  )
}