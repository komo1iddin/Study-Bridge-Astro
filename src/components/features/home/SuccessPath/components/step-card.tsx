import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/react/card"
import { Button } from "@/components/ui/react/button"
import { Badge } from "@/components/ui/react/badge"
import { StepBenefit } from "./step-benefit"
import type { StepType } from "../data/steps"

interface StepCardProps {
  step: StepType
  totalSteps: number
  activeStep: number
  goToNextStep: () => void
  goToPrevStep: () => void
}

export function StepCard({ step, totalSteps, activeStep, goToNextStep, goToPrevStep }: StepCardProps) {
  return (
    <Card className="border border-gray-200 shadow-lg bg-white rounded-xl overflow-hidden">
      <div className="h-2 w-full" style={{ backgroundColor: step.bgColor }}></div>
      <CardContent className="p-5 sm:p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-6 md:mb-8">
          <motion.div
            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{
              backgroundColor: step.color,
              boxShadow: `0 10px 15px -5px ${step.color}40`,
            }}
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {React.createElement(step.icon, {
              className: "w-8 h-8 md:w-10 md:h-10 text-white",
            })}
          </motion.div>
          <div className="text-center md:text-left flex-1">
            <Badge
              className="mb-2 font-normal"
              style={{
                backgroundColor: step.bgColor,
                color: step.color,
              }}
            >
              Bosqich {activeStep + 1}/{totalSteps}
            </Badge>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-600 text-base md:text-lg">{step.description}</p>
          </div>
        </div>

        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          {step.benefits.map((benefit, idx) => (
            <StepBenefit key={idx} benefit={benefit} color={step.color} bgColor={step.bgColor} index={idx} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <Button
            variant="outline"
            onClick={goToPrevStep}
            className="bg-white hover:bg-gray-50 border-gray-200 order-2 sm:order-1 sm:flex-1"
          >
            <ArrowLeft className="w-4 h-4 mr-2 md:mr-3" />
            Oldingi qadam
          </Button>
          <Button
            onClick={goToNextStep}
            className="text-white transition-all duration-300 order-1 sm:order-2 sm:flex-1"
            style={{
              backgroundColor: step.color,
              boxShadow: `0 4px 14px -4px ${step.color}40`,
            }}
          >
            Keyingi qadam
            <ArrowRight className="w-4 h-4 ml-2 md:mr-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

