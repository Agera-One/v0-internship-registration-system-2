"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home, Book, Briefcase, Info } from "lucide-react"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/majors", label: "Majors", icon: Book },
    { href: "/internships", label: "Internship List", icon: Briefcase },
    { href: "/about", label: "About", icon: Info },
  ]

  return (
    <>
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-transform duration-300 z-50",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-sidebar-border">
            <h1 className="text-xl font-bold text-sidebar-primary">InternHub</h1>
            <p className="text-sm text-sidebar-foreground/60 mt-1">Vocational Internships</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6">
            {links.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 px-6 py-3 mx-2 rounded-lg transition-colors",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={20} />
                  <span className="font-medium">{link.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-sidebar-border">
            <p className="text-xs text-sidebar-foreground/60">© 2025 InternHub. All rights reserved.</p>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed md:hidden bottom-6 right-6 p-3 bg-sidebar-primary text-sidebar-primary-foreground rounded-full shadow-lg z-40"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 md:hidden z-40" onClick={() => setIsOpen(false)} />}
    </>
  )
}
