"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Upload,
  FileText,
  CheckCircle2,
  AlertCircle,
  Clock,
  Eye,
  Trash2,
  Download,
  Filter,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Document {
  id: string
  name: string
  type: string
  uploadedAt: string
  status: "processed" | "processing" | "needs_review"
  extractedData?: {
    income?: string
    deductions?: string
    tds?: string
  }
}

const documents: Document[] = [
  {
    id: "1",
    name: "Form_16_2024.pdf",
    type: "Form 16",
    uploadedAt: "2024-04-15",
    status: "processed",
    extractedData: {
      income: "₹12,00,000",
      deductions: "₹1,50,000",
      tds: "₹1,20,000",
    },
  },
  {
    id: "2",
    name: "Salary_Slip_March.pdf",
    type: "Salary Slip",
    uploadedAt: "2024-04-10",
    status: "processed",
    extractedData: {
      income: "₹1,00,000",
      deductions: "₹15,000",
      tds: "₹10,000",
    },
  },
  {
    id: "3",
    name: "Investment_Proof_80C.pdf",
    type: "Investment Proof",
    uploadedAt: "2024-04-08",
    status: "needs_review",
  },
  {
    id: "4",
    name: "Rent_Receipt_Q4.pdf",
    type: "Rent Receipt",
    uploadedAt: "2024-04-05",
    status: "processing",
  },
]

const statusConfig = {
  processed: {
    label: "Processed",
    icon: CheckCircle2,
    color: "bg-primary/10 text-primary",
  },
  processing: {
    label: "Processing",
    icon: Clock,
    color: "bg-chart-4/10 text-chart-4",
  },
  needs_review: {
    label: "Needs Review",
    icon: AlertCircle,
    color: "bg-destructive/10 text-destructive",
  },
}

export default function DocumentAnalyzerPage() {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    // Handle file upload
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-foreground">
          Document Analyzer
        </h1>
        <p className="text-muted-foreground mt-1">
          Upload and analyze your financial documents with AI
        </p>
      </div>

      {/* Upload Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card
          className={`border-2 border-dashed transition-colors ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <CardContent className="p-8">
            <div className="flex flex-col items-center justify-center text-center">
              <div
                className={`p-4 rounded-2xl mb-4 transition-colors ${
                  isDragging ? "bg-primary/20" : "bg-secondary"
                }`}
              >
                <Upload
                  className={`h-8 w-8 transition-colors ${
                    isDragging ? "text-primary" : "text-muted-foreground"
                  }`}
                />
              </div>
              <h3 className="font-semibold text-lg">
                Drag and drop your documents
              </h3>
              <p className="text-muted-foreground text-sm mt-1 mb-4">
                Support for PDF, JPG, PNG files up to 10MB
              </p>
              <Button>
                <Upload className="h-4 w-4 mr-2" />
                Browse Files
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Document Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Total Documents", value: "12", icon: FileText },
          { label: "Processed", value: "9", icon: CheckCircle2 },
          { label: "Needs Review", value: "3", icon: AlertCircle },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Documents Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-medium">
                Uploaded Documents
              </CardTitle>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Document</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Uploaded</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Extracted Data</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.map((doc) => {
                  const status = statusConfig[doc.status]
                  return (
                    <TableRow key={doc.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-secondary">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <span className="font-medium">{doc.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {doc.type}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {new Date(doc.uploadedAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={`${status.color} gap-1`}
                        >
                          <status.icon className="h-3 w-3" />
                          {status.label}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {doc.extractedData ? (
                          <div className="text-sm space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-muted-foreground">Income:</span>
                              <span className="font-medium text-primary">
                                {doc.extractedData.income}
                              </span>
                            </div>
                            {doc.extractedData.tds && (
                              <div className="flex items-center gap-2">
                                <span className="text-muted-foreground">TDS:</span>
                                <span className="font-medium">
                                  {doc.extractedData.tds}
                                </span>
                              </div>
                            )}
                          </div>
                        ) : (
                          <span className="text-muted-foreground text-sm">
                            {doc.status === "processing"
                              ? "Analyzing..."
                              : "Review required"}
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
