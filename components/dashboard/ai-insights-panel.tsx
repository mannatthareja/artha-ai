"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, TrendingUp, AlertTriangle, Sparkles, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const insights = [
  {
    id: 1,
    type: "warning",
    icon: AlertTriangle,
    title: "Overspending Alert",
    description: "You overspent on dining by 18% compared to last month. Consider setting a budget limit.",
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    id: 2,
    type: "tip",
    icon: Lightbulb,
    title: "Tax Saving Opportunity",
    description: "Switching to the new tax regime can save you ₹12,000 this financial year.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 3,
    type: "trend",
    icon: TrendingUp,
    title: "Investment Insight",
    description: "Your SIP returns are up 15%. Consider increasing your monthly investment by ₹5,000.",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
]

export function AIInsightsPanel() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-primary/10">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <CardTitle className="text-base font-medium">AI Insights</CardTitle>
          </div>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
            View All
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
          >
            <div className={`p-2 rounded-lg ${insight.bgColor} shrink-0`}>
              <insight.icon className={`h-4 w-4 ${insight.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm">{insight.title}</p>
              <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">
                {insight.description}
              </p>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}
