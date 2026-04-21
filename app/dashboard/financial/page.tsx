"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Download,
  Filter,
  TrendingUp,
  TrendingDown,
  Utensils,
  Car,
  Home,
  Zap,
  ShoppingBag,
  Sparkles,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SavingsPredictionChart } from "@/components/financial/savings-prediction-chart"
import { MonthlyComparisonChart } from "@/components/financial/monthly-comparison-chart"

const categories = [
  {
    name: "Housing",
    amount: 45000,
    percentage: 35,
    change: -2.3,
    icon: Home,
    color: "bg-chart-1",
  },
  {
    name: "Food & Dining",
    amount: 28500,
    percentage: 22,
    change: 18.5,
    icon: Utensils,
    color: "bg-chart-2",
  },
  {
    name: "Transportation",
    amount: 15000,
    percentage: 12,
    change: -5.2,
    icon: Car,
    color: "bg-chart-3",
  },
  {
    name: "Utilities",
    amount: 12000,
    percentage: 9,
    change: 3.1,
    icon: Zap,
    color: "bg-chart-4",
  },
  {
    name: "Shopping",
    amount: 18000,
    percentage: 14,
    change: 25.8,
    icon: ShoppingBag,
    color: "bg-chart-5",
  },
]

const aiSuggestions = [
  {
    title: "Reduce dining expenses",
    description: "Your food spending is 18% higher than last month. Consider meal prepping to save ₹5,000/month.",
    savings: "₹5,000",
  },
  {
    title: "Switch utility provider",
    description: "Comparing rates could reduce your electricity bill by 15%.",
    savings: "₹1,800",
  },
  {
    title: "Cancel unused subscriptions",
    description: "You have 3 subscriptions with minimal usage. Consider reviewing them.",
    savings: "₹2,500",
  },
]

export default function FinancialDashboardPage() {
  const [selectedMonth, setSelectedMonth] = useState("april")
  const [selectedYear, setSelectedYear] = useState("2024")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            Financial Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Track and analyze your spending patterns
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={selectedMonth} onValueChange={setSelectedMonth}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="january">January</SelectItem>
              <SelectItem value="february">February</SelectItem>
              <SelectItem value="march">March</SelectItem>
              <SelectItem value="april">April</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Category Breakdown */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Expense Categories</h2>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`p-2 rounded-lg ${category.color}/10`}
                    >
                      <category.icon
                        className={`h-4 w-4`}
                        style={{
                          color: `hsl(var(--${category.color.replace("bg-", "")}))`,
                        }}
                      />
                    </div>
                    <div
                      className={`flex items-center gap-1 text-xs font-medium ${
                        category.change < 0 ? "text-primary" : "text-destructive"
                      }`}
                    >
                      {category.change < 0 ? (
                        <TrendingDown className="h-3 w-3" />
                      ) : (
                        <TrendingUp className="h-3 w-3" />
                      )}
                      {Math.abs(category.change)}%
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{category.name}</p>
                  <p className="text-xl font-semibold mt-1">
                    ₹{category.amount.toLocaleString()}
                  </p>
                  <div className="mt-3 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full ${category.color} rounded-full`}
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {category.percentage}% of total
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">
                Monthly Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <MonthlyComparisonChart />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">
                Savings Prediction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SavingsPredictionChart />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* AI Suggestions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-primary/10">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <CardTitle className="text-base font-medium">
                AI Savings Suggestions
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              {aiSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <p className="font-medium text-sm">{suggestion.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {suggestion.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Potential savings
                    </span>
                    <span className="font-semibold text-primary">
                      {suggestion.savings}/mo
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
