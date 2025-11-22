import { LayoutWrapper } from "@/components/layout-wrapper"
import { majors } from "@/lib/data"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen pt-20 pb-16 px-6 md:px-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Find Your Perfect Internship
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Explore internship opportunities across Software Engineering, Culinary, Tourism, and Hotel Accommodation.
            Connect with globally recognized companies and kickstart your career.
          </p>
        </div>

        {/* Majors Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Choose Your Major</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {majors.map((major) => (
              <Link
                key={major.id}
                href={`/majors/${major.id}`}
                className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-lg hover:bg-card/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {major.name}
                    </h3>
                    <p className="text-muted-foreground mt-2">{major.description}</p>
                  </div>
                  <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
