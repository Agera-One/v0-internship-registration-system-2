import { LayoutWrapper } from "@/components/layout-wrapper"
import { getFieldsByMajor, getMajorById, getInternshipsByMajor } from "@/lib/data"
import Link from "next/link"
import { InternshipCard } from "@/components/internship-card"
import { ArrowRight } from "lucide-react"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function MajorDetailPage({ params }: PageProps) {
  const { id } = await params
  const major = getMajorById(id)
  const fields = getFieldsByMajor(id)
  const internships = getInternshipsByMajor(major?.name || "")

  if (!major) {
    return (
      <LayoutWrapper>
        <div className="min-h-screen pt-20 pb-16 px-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">Major not found</h1>
          </div>
        </div>
      </LayoutWrapper>
    )
  }

  return (
    <LayoutWrapper>
      <div className="min-h-screen pt-20 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">{major.name}</h1>
            <p className="text-lg text-muted-foreground">{major.description}</p>
          </div>

          {/* Fields Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Fields of Study</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {fields.map((field) => (
                <Link
                  key={field.id}
                  href={`/fields/${field.id}`}
                  className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {field.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">{field.description}</p>
                  <ArrowRight
                    className="text-primary opacity-0 group-hover:opacity-100 mt-4 transition-all"
                    size={18}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Internships Section */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Available Internships ({internships.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internships.map((internship) => (
                <InternshipCard key={internship.id} internship={internship} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
