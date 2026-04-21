"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { month: "Jan", actual: 35000, predicted: 35000 },
  { month: "Feb", actual: 42000, predicted: 40000 },
  { month: "Mar", actual: 38000, predicted: 45000 },
  { month: "Apr", actual: 52000, predicted: 50000 },
  { month: "May", actual: null, predicted: 55000 },
  { month: "Jun", actual: null, predicted: 62000 },
  { month: "Jul", actual: null, predicted: 68000 },
  { month: "Aug", actual: null, predicted: 75000 },
]

export function SavingsPredictionChart() {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <defs>
            <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="currentColor"
            className="text-border"
            opacity={0.3}
          />
          <XAxis
            dataKey="month"
            stroke="currentColor"
            className="text-muted-foreground"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="currentColor"
            className="text-muted-foreground"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `₹${value / 1000}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
            formatter={(value: number | null) =>
              value ? [`₹${value.toLocaleString()}`, ""] : ["-", ""]
            }
          />
          <Area
            type="monotone"
            dataKey="predicted"
            name="Predicted"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            strokeDasharray="5 5"
            fill="url(#colorPredicted)"
          />
          <Area
            type="monotone"
            dataKey="actual"
            name="Actual"
            stroke="hsl(var(--accent))"
            strokeWidth={2}
            fill="url(#colorActual)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
