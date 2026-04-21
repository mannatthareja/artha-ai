"use client"

import { TrendingUp, Wallet, PiggyBank, Receipt } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const previewStats = [
  { title: "Total Income", value: "₹12,45,000", icon: TrendingUp, color: "text-primary" },
  { title: "Expenses", value: "₹8,32,500", icon: Wallet, color: "text-accent" },
  { title: "Savings", value: "₹4,12,500", icon: PiggyBank, color: "text-chart-3" },
  { title: "Tax Liability", value: "₹1,85,000", icon: Receipt, color: "text-chart-4" },
]

export function DashboardPreview() {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl opacity-30 -z-10" />
      
      {/* Preview card */}
      <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
        {/* Window header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/50" />
            <div className="w-3 h-3 rounded-full bg-warning/50" />
            <div className="w-3 h-3 rounded-full bg-primary/50" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-muted-foreground">app.financeai.com/dashboard</span>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-6">
          {/* Header */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Welcome back, John</h3>
            <p className="text-sm text-muted-foreground">Here&apos;s your financial overview</p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {previewStats.map((stat) => (
              <Card key={stat.title} className="border-0 bg-secondary/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    <span className="text-xs text-muted-foreground">{stat.title}</span>
                  </div>
                  <p className="text-lg font-semibold">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Chart placeholder */}
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 h-48 rounded-xl bg-secondary/50 flex items-end justify-around px-4 pb-4">
              {[40, 65, 50, 80, 60, 90, 75, 85, 70, 95, 80, 100].map((height, i) => (
                <div
                  key={i}
                  className="w-4 rounded-t bg-primary/70"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="h-48 rounded-xl bg-secondary/50 flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-muted/30"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset="62.8"
                    className="text-primary"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
