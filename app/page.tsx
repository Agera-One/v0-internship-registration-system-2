import { LayoutWrapper } from "@/components/layout-wrapper"
import { majors } from "@/lib/data"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto mb-20">
          <div className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Welcome to Your Career Journey
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            Find Your Perfect{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Internship</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-balance leading-relaxed max-w-2xl">
            Explore internship opportunities across Software Engineering, Culinary, Tourism, and Hotel Accommodation.
            Connect with globally recognized companies and kickstart your career.
          </p>
          <Link
            href="/internships"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:bg-primary/90 transition-all"
          >
            Browse Internships
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Choose Your Major</h2>
            <p className="text-muted-foreground">Select your field of study to explore tailored opportunities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {majors.map((major) => (
              <Link
                key={major.id}
                href={`/majors/${major.id}`}
                className="group bg-card border border-border rounded-xl p-8 hover:border-primary hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors leading-tight">
                        {major.name}
                      </h3>
                      <p className="text-muted-foreground mt-3 leading-relaxed">{major.description}</p>
                    </div>
                    <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 flex-shrink-0 mt-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
