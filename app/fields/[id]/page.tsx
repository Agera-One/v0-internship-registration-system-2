import { LayoutWrapper } from "@/components/layout-wrapper"
import { getFieldById, getInternshipsByField, getMajorById } from "@/lib/data"
import { InternshipCard } from "@/components/internship-card"
import Link from "next/link"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function FieldDetailPage({ params }: PageProps) {
  const { id } = await params
  const field = getFieldById(id)
  const internships = getInternshipsByField(id)
  const major = field ? getMajorById(field.majorId) : null

  if (!field) {
    return (
      <LayoutWrapper>
        <div className="min-h-screen pt-20 pb-16 px-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">Field not found</h1>
          </div>
        </div>
      </LayoutWrapper>
    )
  }

  return (
    <LayoutWrapper>
      <div className="min-h-screen pt-20 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex gap-2 mb-8 text-sm">
            <Link href="/" className="text-primary hover:underline">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/majors" className="text-primary hover:underline">
              Majors
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href={`/majors/${field.majorId}`} className="text-primary hover:underline">
              {major?.name}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{field.name}</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">{field.name}</h1>
            <p className="text-lg text-muted-foreground">{field.description}</p>
            <p className="text-sm text-muted-foreground mt-4">
              Major:{" "}
              <Link href={`/majors/${field.majorId}`} className="text-primary hover:underline">
                {major?.name}
              </Link>
            </p>
          </div>

          {/* Internships */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Available Internships ({internships.length})</h2>
            {internships.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {internships.map((internship) => (
                  <InternshipCard key={internship.id} internship={internship} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No internships available for this field yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
