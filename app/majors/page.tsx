import { LayoutWrapper } from "@/components/layout-wrapper"
import { majors } from "@/lib/data"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function MajorsPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen pt-20 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">All Majors</h1>
          <p className="text-muted-foreground mb-12">
            Select a major to explore available fields and internship opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {majors.map((major) => (
              <Link
                key={major.id}
                href={`/majors/${major.id}`}
                className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {major.name}
                    </h2>
                    <p className="text-muted-foreground mt-2">{major.description}</p>
                  </div>
                  <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
