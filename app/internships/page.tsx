"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { InternshipCard } from "@/components/internship-card"
import { internships, majors, fields } from "@/lib/data"
import { useState } from "react"
import { Search, X } from "lucide-react"

export default function InternshipsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMajor, setSelectedMajor] = useState<string>("")
  const [selectedField, setSelectedField] = useState<string>("")

  const filteredInternships = internships.filter((internship) => {
    const matchesSearch =
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesMajor = !selectedMajor || internship.major === majors.find((m) => m.id === selectedMajor)?.name
    const matchesField = !selectedField || internship.field === fields.find((f) => f.id === selectedField)?.name
    return matchesSearch && matchesMajor && matchesField
  })

  const availableMajors = majors.filter((major) => internships.some((i) => i.major === major.name))

  const availableFields = selectedMajor ? fields.filter((f) => f.majorId === selectedMajor) : fields

  const hasActiveFilters = searchTerm || selectedMajor || selectedField

  return (
    <LayoutWrapper>
      <div className="min-h-screen pt-20 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-3 text-balance">Internship Listings</h1>
            <p className="text-lg text-muted-foreground">
              Browse <span className="font-semibold text-foreground">{internships.length} opportunities</span> across
              all fields and majors
            </p>
          </div>

          <div className="sticky top-20 bg-background/95 backdrop-blur-sm border-b border-border mb-8 -mx-6 md:-mx-12 px-6 md:px-12 py-6 z-40">
            {/* Search */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-3">Search Internships</label>
              <div className="relative max-w-2xl">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search by title, company, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Major</label>
                <select
                  value={selectedMajor}
                  onChange={(e) => {
                    setSelectedMajor(e.target.value)
                    setSelectedField("")
                  }}
                  className="w-full px-4 py-2.5 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all font-medium"
                >
                  <option value="">All Majors</option>
                  {availableMajors.map((major) => (
                    <option key={major.id} value={major.id}>
                      {major.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Field</label>
                <select
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                  className="w-full px-4 py-2.5 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all font-medium"
                >
                  <option value="">All Fields</option>
                  {availableFields.map((field) => (
                    <option key={field.id} value={field.id}>
                      {field.name}
                    </option>
                  ))}
                </select>
              </div>

              {hasActiveFilters && (
                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedMajor("")
                      setSelectedField("")
                    }}
                    className="w-full px-4 py-2.5 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <X size={18} />
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-8">
              {filteredInternships.length} Internship{filteredInternships.length !== 1 ? "s" : ""} Found
            </h2>
            {filteredInternships.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredInternships.map((internship) => (
                  <InternshipCard key={internship.id} internship={internship} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-card border border-border rounded-xl">
                <p className="text-muted-foreground text-lg">
                  No internships match your filters. Try adjusting your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
