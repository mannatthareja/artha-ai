"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Navbar } from "@/components/layout/navbar"
import { MobileSidebar } from "@/components/layout/mobile-sidebar"
import { ThemeProvider } from "@/components/theme-provider"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sidebarWidth = sidebarCollapsed ? 72 : 260

  return (
    <ThemeProvider defaultTheme="light" storageKey="ca-theme">
      <div className="min-h-screen bg-background">
        {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <Sidebar
            collapsed={sidebarCollapsed}
            onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          />
        </div>

        {/* Mobile sidebar */}
        <MobileSidebar
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />

        {/* Desktop Navbar */}
        <header
          className="hidden lg:flex sticky top-0 z-30 h-16 items-center gap-4 border-b border-border bg-card/80 backdrop-blur-md px-4 md:px-6 transition-all duration-200"
          style={mounted ? { marginLeft: sidebarWidth, width: `calc(100% - ${sidebarWidth}px)` } : {}}
        >
          <Navbar
            onMenuClick={() => setMobileOpen(true)}
            sidebarCollapsed={sidebarCollapsed}
          />
        </header>

        {/* Mobile navbar */}
        <header className="lg:hidden sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-card/80 backdrop-blur-md px-4">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 hover:bg-secondary rounded-lg"
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <span className="font-semibold text-lg">FinanceAI</span>
        </header>

        {/* Main content */}
        <main
          className="transition-all duration-200"
          style={mounted ? { marginLeft: typeof window !== "undefined" && window.innerWidth >= 1024 ? sidebarWidth : 0 } : {}}
        >
          <div className="p-4 md:p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </ThemeProvider>
  )
}
