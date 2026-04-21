"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Calculator,
  FileText,
  Receipt,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Shield,
  Zap,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeProvider } from "@/components/theme-provider"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { DashboardPreview } from "@/components/landing/dashboard-preview"

const features = [
  {
    icon: Calculator,
    title: "Smart Tax Planning",
    description:
      "AI-powered tax calculations with old vs new regime comparison. Maximize your savings effortlessly.",
  },
  {
    icon: Receipt,
    title: "GST Compliance",
    description:
      "Automated GST calculations, invoice generation, and deadline reminders. Never miss a filing date.",
  },
  {
    icon: FileText,
    title: "Document Analysis",
    description:
      "Upload salary slips, Form 16, and invoices. Our AI extracts and organizes data instantly.",
  },
  {
    icon: BarChart3,
    title: "Financial Insights",
    description:
      "Real-time dashboards with spending patterns, savings predictions, and actionable recommendations.",
  },
]

const benefits = [
  "Automated expense categorization",
  "Tax-saving recommendations",
  "GST filing reminders",
  "Secure document storage",
  "24/7 AI assistant",
  "Multi-device sync",
]

export default function LandingPage() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ca-theme">
      <div className="min-h-screen bg-background">
        <LandingNavbar />

        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-3xl opacity-30" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Sparkles className="h-4 w-4" />
                  Powered by Advanced AI
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance"
              >
                Your AI{" "}
                <span className="text-primary">Chartered Accountant</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
              >
                Simplify your finances with intelligent tax planning, automated
                GST compliance, and real-time insights. All powered by AI.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 rounded-xl"
                >
                  <Link href="/dashboard">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 rounded-xl"
                >
                  <Link href="/dashboard">View Demo</Link>
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  Bank-grade security
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  Instant setup
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  10,000+ users trust us
                </div>
              </motion.div>
            </div>

            {/* Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-20"
            >
              <DashboardPreview />
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Everything you need to manage finances
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Powerful features designed to simplify your financial life
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow bg-card">
                    <CardContent className="p-6">
                      <div className="p-3 rounded-xl bg-primary/10 w-fit">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mt-4 font-semibold text-lg">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Why choose FinanceAI?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Join thousands of users who have simplified their financial
                  management with our AI-powered platform.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10">
                  <Button asChild size="lg" className="rounded-xl">
                    <Link href="/dashboard">
                      Start for free
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 lg:p-12">
                  <div className="h-full rounded-2xl bg-card shadow-xl p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-primary/10">
                          <Sparkles className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-semibold">AI Recommendation</span>
                      </div>
                      <p className="mt-4 text-muted-foreground">
                        Based on your income pattern, switching to the new tax
                        regime could save you up to
                      </p>
                      <p className="mt-2 text-4xl font-bold text-primary">
                        ₹24,000
                      </p>
                      <p className="text-sm text-muted-foreground">
                        this financial year
                      </p>
                    </div>
                    <Button className="w-full rounded-xl mt-6">
                      Apply Recommendation
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-sidebar text-sidebar-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl font-bold">
                Ready to transform your finances?
              </h2>
              <p className="mt-4 text-lg text-sidebar-foreground/70">
                Join thousands of users who save time and money with FinanceAI.
                Start your free trial today.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8"
                >
                  <Link href="/dashboard">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent rounded-xl px-8"
                >
                  <Link href="/dashboard/chat">Talk to AI Assistant</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-primary/10">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
                <span className="font-semibold">FinanceAI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                © 2024 FinanceAI. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
