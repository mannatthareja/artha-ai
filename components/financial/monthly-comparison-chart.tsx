"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const data = [
  { month: "Jan", current: 82000, previous: 75000 },
  { month: "Feb", current: 88000, previous: 80000 },
  { month: "Mar", current: 78000, previous: 85000 },
  { month: "Apr", current: 95000, previous: 82000 },
]

export function MonthlyComparisonChart() {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="currentColor"
            className="text-border"
            opacity={0.3}
            vertical={false}
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
            formatter={(value: number) => [`₹${value.toLocaleString()}`, ""]}
          />
          <Legend
            verticalAlign="top"
            height={36}
            iconType="circle"
            iconSize={8}
          />
          <Bar
            dataKey="current"
            name="This Year"
            fill="hsl(var(--primary))"
            radius={[4, 4, 0, 0]}
            barSize={24}
          />
          <Bar
            dataKey="previous"
            name="Last Year"
            fill="hsl(var(--muted))"
            radius={[4, 4, 0, 0]}
            barSize={24}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
