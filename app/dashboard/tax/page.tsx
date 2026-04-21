"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Calculator,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Info,
  TrendingDown,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const deductions = [
  { id: "80c", label: "Section 80C (PPF, ELSS, etc.)", max: 150000 },
  { id: "80d", label: "Section 80D (Health Insurance)", max: 25000 },
  { id: "80tta", label: "Section 80TTA (Savings Interest)", max: 10000 },
  { id: "hra", label: "HRA Exemption", max: null },
]

const taxSavingTips = [
  {
    title: "Maximize 80C Investments",
    description: "You have ₹45,000 unutilized in 80C. Consider investing in ELSS for tax benefits and growth.",
    potential: "₹14,040",
  },
  {
    title: "Health Insurance for Parents",
    description: "Additional ₹50,000 deduction available under 80D for senior citizen parents.",
    potential: "₹15,600",
  },
  {
    title: "NPS Contribution",
    description: "Extra ₹50,000 deduction under 80CCD(1B) for NPS investments.",
    potential: "₹15,600",
  },
]

export default function TaxAssistantPage() {
  const [salary, setSalary] = useState("")
  const [deductionValues, setDeductionValues] = useState<Record<string, string>>({})
  const [calculated, setCalculated] = useState(false)

  const handleCalculate = () => {
    setCalculated(true)
  }

  const oldRegimeTax = 185000
  const newRegimeTax = 162500
  const savings = oldRegimeTax - newRegimeTax

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Tax Assistant</h1>
        <p className="text-muted-foreground mt-1">
          Calculate your tax liability and get AI-powered recommendations
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Input Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2"
        >
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-primary/10">
                  <Calculator className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-base font-medium">
                  Income & Deductions
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Income Section */}
              <div className="space-y-4">
                <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                  Income Details
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="salary">Annual Salary (CTC)</Label>
                    <Input
                      id="salary"
                      type="number"
                      placeholder="e.g., 1200000"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                      className="bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="other">Other Income</Label>
                    <Input
                      id="other"
                      type="number"
                      placeholder="e.g., 50000"
                      className="bg-secondary/50"
                    />
                  </div>
                </div>
              </div>

              {/* Deductions Section */}
              <div className="space-y-4">
                <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                  Deductions
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {deductions.map((deduction) => (
                    <div key={deduction.id} className="space-y-2">
                      <Label htmlFor={deduction.id} className="text-sm">
                        {deduction.label}
                        {deduction.max && (
                          <span className="text-muted-foreground ml-1">
                            (Max: ₹{deduction.max.toLocaleString()})
                          </span>
                        )}
                      </Label>
                      <Input
                        id={deduction.id}
                        type="number"
                        placeholder="Enter amount"
                        value={deductionValues[deduction.id] || ""}
                        onChange={(e) =>
                          setDeductionValues((prev) => ({
                            ...prev,
                            [deduction.id]: e.target.value,
                          }))
                        }
                        className="bg-secondary/50"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <Button onClick={handleCalculate} className="w-full sm:w-auto">
                Calculate Tax
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tax Saving Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-0 shadow-sm h-fit">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-primary/10">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-base font-medium">
                  AI Tax Tips
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {taxSavingTips.map((tip, index) => (
                <div
                  key={index}
                  className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <p className="font-medium text-sm">{tip.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {tip.description}
                  </p>
                  <div className="mt-2 flex items-center gap-1 text-primary text-sm font-medium">
                    <TrendingDown className="h-3 w-3" />
                    Save {tip.potential}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Results */}
      {calculated && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-base font-medium">
                Tax Calculation Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="comparison" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="comparison">Regime Comparison</TabsTrigger>
                  <TabsTrigger value="breakdown">Tax Breakdown</TabsTrigger>
                </TabsList>

                <TabsContent value="comparison">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Old Regime Card */}
                    <Card className="border border-border">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-medium text-muted-foreground">
                            Old Regime
                          </span>
                        </div>
                        <p className="text-3xl font-bold">
                          ₹{oldRegimeTax.toLocaleString()}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Total tax liability
                        </p>
                        <div className="mt-4 space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Deductions
                            </span>
                            <span>₹2,35,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Taxable Income
                            </span>
                            <span>₹9,65,000</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* New Regime Card */}
                    <Card className="border-2 border-primary relative">
                      <div className="absolute -top-3 left-4 px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded">
                        Recommended
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-medium text-muted-foreground">
                            New Regime
                          </span>
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-3xl font-bold text-primary">
                          ₹{newRegimeTax.toLocaleString()}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Total tax liability
                        </p>
                        <div className="mt-4 space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Std. Deduction
                            </span>
                            <span>₹50,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Taxable Income
                            </span>
                            <span>₹11,50,000</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Savings Card */}
                    <Card className="border-0 bg-primary/5">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <TrendingDown className="h-5 w-5 text-primary" />
                          <span className="text-sm font-medium">
                            Your Savings
                          </span>
                        </div>
                        <p className="text-3xl font-bold text-primary">
                          ₹{savings.toLocaleString()}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          By choosing new regime
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* AI Explanation */}
                  <div className="mt-6 p-4 rounded-xl bg-secondary/50">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                        <Sparkles className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">AI Recommendation</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Based on your income and deductions, the{" "}
                          <span className="text-foreground font-medium">
                            New Tax Regime
                          </span>{" "}
                          is more beneficial for you. Even though you lose
                          deductions worth ₹2,35,000, the lower tax rates in the
                          new regime result in a net savings of ₹22,500. This
                          recommendation may change if you increase your 80C and
                          80D investments.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="breakdown">
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-secondary/50">
                      <div className="flex items-center gap-2 mb-4">
                        <Info className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Tax slab breakdown for New Regime (FY 2024-25)
                        </span>
                      </div>
                      <div className="space-y-3">
                        {[
                          { slab: "₹0 - ₹3,00,000", rate: "0%", tax: "₹0" },
                          { slab: "₹3,00,001 - ₹6,00,000", rate: "5%", tax: "₹15,000" },
                          { slab: "₹6,00,001 - ₹9,00,000", rate: "10%", tax: "₹30,000" },
                          { slab: "₹9,00,001 - ₹12,00,000", rate: "15%", tax: "₹45,000" },
                          { slab: "₹12,00,001 - ₹15,00,000", rate: "20%", tax: "₹60,000" },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between py-2 border-b border-border last:border-0"
                          >
                            <span className="text-sm">{item.slab}</span>
                            <div className="flex items-center gap-4">
                              <span className="text-sm text-muted-foreground">
                                {item.rate}
                              </span>
                              <span className="text-sm font-medium w-20 text-right">
                                {item.tax}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
