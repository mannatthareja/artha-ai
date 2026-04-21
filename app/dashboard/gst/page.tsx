"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Calculator,
  FileText,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowRight,
  Plus,
  Download,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const deadlines = [
  {
    title: "GSTR-1 Filing",
    date: "April 11, 2024",
    daysLeft: 3,
    status: "urgent",
  },
  {
    title: "GSTR-3B Filing",
    date: "April 20, 2024",
    daysLeft: 12,
    status: "upcoming",
  },
  {
    title: "TDS Payment",
    date: "April 30, 2024",
    daysLeft: 22,
    status: "upcoming",
  },
  {
    title: "Advance Tax (Q1)",
    date: "June 15, 2024",
    daysLeft: 68,
    status: "normal",
  },
]

const alerts = [
  {
    type: "warning",
    message: "GSTR-1 filing deadline in 3 days",
    action: "File Now",
  },
  {
    type: "info",
    message: "New GST rates effective from April 1, 2024",
    action: "Learn More",
  },
]

export default function GSTCompliancePage() {
  const [amount, setAmount] = useState("")
  const [gstRate, setGstRate] = useState("18")
  const [calculationResult, setCalculationResult] = useState<{
    cgst: number
    sgst: number
    igst: number
    total: number
  } | null>(null)

  const calculateGST = () => {
    const baseAmount = parseFloat(amount) || 0
    const rate = parseFloat(gstRate) / 100
    const gstAmount = baseAmount * rate

    setCalculationResult({
      cgst: gstAmount / 2,
      sgst: gstAmount / 2,
      igst: gstAmount,
      total: baseAmount + gstAmount,
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-foreground">
          GST & Compliance
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage GST calculations, invoices, and compliance deadlines
        </p>
      </div>

      {/* Alerts */}
      {alerts.length > 0 && (
        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`border-0 shadow-sm ${
                  alert.type === "warning"
                    ? "bg-warning/10 border-l-4 border-l-warning"
                    : "bg-accent/10 border-l-4 border-l-accent"
                }`}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AlertTriangle
                      className={`h-5 w-5 ${
                        alert.type === "warning"
                          ? "text-warning"
                          : "text-accent"
                      }`}
                    />
                    <span className="font-medium">{alert.message}</span>
                  </div>
                  <Button size="sm" variant="outline">
                    {alert.action}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      <Tabs defaultValue="calculator" className="space-y-6">
        <TabsList>
          <TabsTrigger value="calculator">GST Calculator</TabsTrigger>
          <TabsTrigger value="invoice">Invoice Generator</TabsTrigger>
          <TabsTrigger value="calendar">Compliance Calendar</TabsTrigger>
        </TabsList>

        {/* GST Calculator */}
        <TabsContent value="calculator">
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-primary/10">
                      <Calculator className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-base font-medium">
                      Calculate GST
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount (excluding GST)</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rate">GST Rate</Label>
                    <Select value={gstRate} onValueChange={setGstRate}>
                      <SelectTrigger className="bg-secondary/50">
                        <SelectValue placeholder="Select rate" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5%</SelectItem>
                        <SelectItem value="12">12%</SelectItem>
                        <SelectItem value="18">18%</SelectItem>
                        <SelectItem value="28">28%</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={calculateGST} className="w-full">
                    Calculate
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {calculationResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="border-0 shadow-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base font-medium">
                      Calculation Result
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-secondary/50">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Base Amount
                            </p>
                            <p className="text-xl font-semibold">
                              ₹{parseFloat(amount).toLocaleString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              GST Rate
                            </p>
                            <p className="text-xl font-semibold">{gstRate}%</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">
                            CGST ({parseInt(gstRate) / 2}%)
                          </span>
                          <span className="font-medium">
                            ₹{calculationResult.cgst.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">
                            SGST ({parseInt(gstRate) / 2}%)
                          </span>
                          <span className="font-medium">
                            ₹{calculationResult.sgst.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">
                            IGST ({gstRate}%)
                          </span>
                          <span className="font-medium">
                            ₹{calculationResult.igst.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-primary/10">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Total Amount</span>
                          <span className="text-2xl font-bold text-primary">
                            ₹{calculationResult.total.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </TabsContent>

        {/* Invoice Generator */}
        <TabsContent value="invoice">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-primary/10">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-base font-medium">
                      Generate Invoice
                    </CardTitle>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Invoice
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                      Seller Details
                    </h3>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label>Business Name</Label>
                        <Input
                          placeholder="Your Business Name"
                          className="bg-secondary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>GSTIN</Label>
                        <Input
                          placeholder="22AAAAA0000A1Z5"
                          className="bg-secondary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Address</Label>
                        <Input
                          placeholder="Business Address"
                          className="bg-secondary/50"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                      Buyer Details
                    </h3>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label>Buyer Name</Label>
                        <Input
                          placeholder="Buyer Business Name"
                          className="bg-secondary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Buyer GSTIN</Label>
                        <Input
                          placeholder="22AAAAA0000A1Z5"
                          className="bg-secondary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Buyer Address</Label>
                        <Input
                          placeholder="Buyer Address"
                          className="bg-secondary/50"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button>
                    Generate Invoice
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Compliance Calendar */}
        <TabsContent value="calendar">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-primary/10">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-base font-medium">
                    Upcoming Deadlines
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deadlines.map((deadline, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-secondary/50"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-2 rounded-lg ${
                            deadline.status === "urgent"
                              ? "bg-destructive/10"
                              : deadline.status === "upcoming"
                              ? "bg-warning/10"
                              : "bg-primary/10"
                          }`}
                        >
                          {deadline.status === "urgent" ? (
                            <AlertTriangle className="h-4 w-4 text-destructive" />
                          ) : deadline.status === "upcoming" ? (
                            <Clock className="h-4 w-4 text-warning" />
                          ) : (
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{deadline.title}</p>
                          <p className="text-sm text-muted-foreground">
                            Due: {deadline.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge
                          variant="secondary"
                          className={
                            deadline.status === "urgent"
                              ? "bg-destructive/10 text-destructive"
                              : deadline.status === "upcoming"
                              ? "bg-warning/10 text-warning"
                              : "bg-primary/10 text-primary"
                          }
                        >
                          {deadline.daysLeft} days left
                        </Badge>
                        <Button size="sm" variant="outline">
                          Set Reminder
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
