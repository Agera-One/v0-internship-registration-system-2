import Link from "next/link"
import type { Internship } from "@/lib/data"
import { MapPin, Briefcase, Clock, ArrowUpRight } from "lucide-react"

interface InternshipCardProps {
  internship: Internship
}

export function InternshipCard({ internship }: InternshipCardProps) {
  return (
    <Link href={`/internships/${internship.id}`}>
      <div className="group h-full bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all cursor-pointer overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10">
          {/* Company Logo and Info */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors leading-tight">
                {internship.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1.5 font-medium">{internship.company.name}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-xs text-primary font-bold flex-shrink-0 ml-3">
              {internship.company.name.substring(0, 2).toUpperCase()}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-card-foreground/70 mb-5 line-clamp-2 leading-relaxed">{internship.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/15 text-primary">
              {internship.field}
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-accent/15 text-accent-foreground">
              {internship.major.substring(0, 3)}
            </span>
          </div>

          {/* Footer Info */}
          <div className="flex flex-col gap-3 text-sm text-muted-foreground mb-4 pb-4 border-b border-border/50">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary/60" />
              <span>{internship.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary/60" />
              <span>{internship.duration}</span>
            </div>
            {internship.salary && (
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-accent/60" />
                <span className="font-semibold text-foreground">{internship.salary}</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between pt-4">
            <span className="text-xs text-muted-foreground font-medium">View Details</span>
            <ArrowUpRight
              size={16}
              className="text-primary opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
