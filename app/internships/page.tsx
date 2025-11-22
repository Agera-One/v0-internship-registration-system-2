"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { InternshipCard } from "@/components/internship-card"
import { internships, majors, fields } from "@/lib/data"
import { useState } from "react"
import { Search } from "lucide-react"

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

  return (
    <LayoutWrapper>
      <div className="min-h-screen pt-20 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Internship Listings</h1>
          <p className="text-muted-foreground mb-12">
            Browse {internships.length} internship opportunities across all fields and majors.
          </p>

          {/* Filters */}
          <div className="bg-card border border-border rounded-lg p-6 mb-12">
            {/* Search */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">Search Internships</label>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search by title, company, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Filters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Filter by Major</label>
                <select
                  value={selectedMajor}
                  onChange={(e) => {
                    setSelectedMajor(e.target.value)
                    setSelectedField("")
                  }}
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
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
                <label className="block text-sm font-medium text-foreground mb-2">Filter by Field</label>
                <select
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">All Fields</option>
                  {availableFields.map((field) => (
                    <option key={field.id} value={field.id}>
                      {field.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Clear Filters */}
            {(searchTerm || selectedMajor || selectedField) && (
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedMajor("")
                  setSelectedField("")
                }}
                className="mt-6 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Results */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-6">
              {filteredInternships.length} Internship{filteredInternships.length !== 1 ? "s" : ""} Found
            </h2>
            {filteredInternships.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredInternships.map((internship) => (
                  <InternshipCard key={internship.id} internship={internship} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-card border border-border rounded-lg">
                <p className="text-muted-foreground">No internships match your filters. Try adjusting your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
