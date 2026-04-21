"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

interface HealthScoreCardProps {
  score: number
}

export function HealthScoreCard({ score }: HealthScoreCardProps) {
  const circumference = 2 * Math.PI * 80
  const strokeDashoffset = circumference - (score / 100) * circumference

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-primary"
    if (score >= 60) return "text-chart-4"
    return "text-destructive"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent"
    if (score >= 60) return "Good"
    if (score >= 40) return "Fair"
    return "Needs Attention"
  }

  return (
    <Card className="border-0 shadow-sm h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">
          Financial Health Score
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center py-6">
        <div className="relative">
          <svg width="200" height="200" className="-rotate-90">
            {/* Background circle */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              className="text-muted/30"
            />
            {/* Progress circle */}
            <motion.circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              strokeLinecap="round"
              className={getScoreColor(score)}
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              className={`text-4xl font-bold ${getScoreColor(score)}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {score}
            </motion.span>
            <span className="text-sm text-muted-foreground">out of 100</span>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className={`font-medium ${getScoreColor(score)}`}>
            {getScoreLabel(score)}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Your finances are on track. Keep up the good work!
          </p>
        </div>

        <div className="w-full mt-6 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Savings Rate</span>
            <span className="font-medium">33%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Debt to Income</span>
            <span className="font-medium">18%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Emergency Fund</span>
            <span className="font-medium">6 months</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
