import { LayoutWrapper } from "@/components/layout-wrapper"
import { getInternshipById } from "@/lib/data"
import Link from "next/link"
import { MapPin, Calendar, DollarSign, CheckCircle, ArrowLeft } from "lucide-react"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function InternshipDetailPage({ params }: PageProps) {
  const { id } = await params
  const internship = getInternshipById(id)

  if (!internship) {
    return (
      <LayoutWrapper>
        <div className="min-h-screen pt-20 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/internships" className="flex items-center gap-2 text-primary hover:underline mb-8">
              <ArrowLeft size={20} />
              Back to Internships
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Internship not found</h1>
          </div>
        </div>
      </LayoutWrapper>
    )
  }

  return (
    <LayoutWrapper>
      <div className="min-h-screen pt-20 pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link href="/internships" className="flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft size={20} />
            Back to Internships
          </Link>

          {/* Header */}
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">{internship.title}</h1>
                <p className="text-xl text-primary">{internship.company.name}</p>
              </div>
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center text-xs text-muted-foreground font-bold">
                {internship.company.name.substring(0, 2).toUpperCase()}
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-accent" size={20} />
                <span className="text-foreground">{internship.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-accent" size={20} />
                <span className="text-foreground">{internship.duration}</span>
              </div>
              {internship.salary && (
                <div className="flex items-center gap-3">
                  <DollarSign className="text-accent" size={20} />
                  <span className="text-foreground">{internship.salary}</span>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                {internship.major}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent-foreground">
                {internship.field}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary/10 text-secondary-foreground">
                Posted on {new Date(internship.postedDate).toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <section className="bg-card border border-border rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">About This Internship</h2>
                <p className="text-foreground/80 leading-relaxed">{internship.description}</p>
              </section>

              {/* Requirements */}
              <section className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {internship.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-foreground/80">{req}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-card border border-border rounded-lg p-8 sticky top-24">
                <h3 className="text-lg font-bold text-foreground mb-6">Apply Now</h3>
                <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors mb-4">
                  Submit Application
                </button>
                <button className="w-full px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-colors">
                  Save Internship
                </button>

                {/* Company Info */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-2">Company</h4>
                  <p className="text-foreground/70 text-sm">{internship.company.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
