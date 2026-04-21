"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const data = [
  { month: "Jan", income: 85000, expenses: 62000 },
  { month: "Feb", income: 92000, expenses: 68000 },
  { month: "Mar", income: 88000, expenses: 71000 },
  { month: "Apr", income: 105000, expenses: 65000 },
  { month: "May", income: 110000, expenses: 72000 },
  { month: "Jun", income: 98000, expenses: 69000 },
  { month: "Jul", income: 115000, expenses: 78000 },
  { month: "Aug", income: 108000, expenses: 74000 },
  { month: "Sep", income: 120000, expenses: 82000 },
  { month: "Oct", income: 125000, expenses: 85000 },
  { month: "Nov", income: 118000, expenses: 79000 },
  { month: "Dec", income: 145000, expenses: 88000 },
]

export function IncomeExpenseChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
        >
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
            formatter={(value: number) => [`₹${value.toLocaleString()}`, ""]}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />
          <Legend
            verticalAlign="top"
            height={36}
            iconType="circle"
            iconSize={8}
          />
          <Line
            type="monotone"
            dataKey="income"
            name="Income"
            stroke="hsl(var(--primary))"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="expenses"
            name="Expenses"
            stroke="hsl(var(--accent))"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
