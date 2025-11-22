import Link from "next/link"
import type { Internship } from "@/lib/data"
import { MapPin, Briefcase, Clock } from "lucide-react"

interface InternshipCardProps {
  internship: Internship
}

export function InternshipCard({ internship }: InternshipCardProps) {
  return (
    <Link href={`/internships/${internship.id}`}>
      <div className="group h-full bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
        {/* Company Logo and Info */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
              {internship.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{internship.company.name}</p>
          </div>
          {/* Logo Placeholder */}
          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-xs text-muted-foreground font-semibold">
            {internship.company.name.substring(0, 2).toUpperCase()}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-card-foreground/70 mb-4 line-clamp-2">{internship.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
            {internship.field}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-foreground">
            {internship.major.substring(0, 3)}
          </span>
        </div>

        {/* Footer Info */}
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{internship.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{internship.duration}</span>
          </div>
          {internship.salary && (
            <div className="flex items-center gap-2">
              <Briefcase size={16} />
              <span>{internship.salary}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
