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
          "fixed left-0 top-0 h-screen w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-transform duration-300 z-50 flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="p-6 border-b border-sidebar-border bg-gradient-to-r from-sidebar to-sidebar/80">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-sidebar-primary to-accent rounded-lg flex items-center justify-center text-sidebar-primary-foreground font-bold text-sm">
              IH
            </div>
            <h1 className="text-xl font-bold text-sidebar-primary">InternHub</h1>
          </div>
          <p className="text-xs text-sidebar-foreground/60 ml-13 font-medium">Vocational Internships</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4">
          {links.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium mb-2",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} />
                <span>{link.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-6 border-t border-sidebar-border bg-sidebar/50">
          <p className="text-xs text-sidebar-foreground/60 font-medium">© 2025 InternHub</p>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed md:hidden bottom-6 right-6 p-3 bg-sidebar-primary text-sidebar-primary-foreground rounded-full shadow-lg z-40 hover:shadow-xl transition-shadow active:scale-95"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 md:hidden z-40" onClick={() => setIsOpen(false)} />}
    </>
  )
}
