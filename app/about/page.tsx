import { LayoutWrapper } from "@/components/layout-wrapper"

export default function AboutPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen pt-20 pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">About InternHub</h1>

          <div className="space-y-8">
            <section className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-foreground/80 leading-relaxed">
                InternHub is dedicated to connecting vocational high school students with world-class internship
                opportunities. We bridge the gap between education and professional experience by partnering with
                globally recognized companies across multiple industries.
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">What We Offer</h2>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Internship opportunities across four major fields: Software Engineering, Culinary, Tourism, and
                    Hotel Accommodation
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Partnerships with top global companies including Google, Microsoft, Marriott, and more</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Flexible filtering by major, field, location, and company</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Detailed internship information and requirements</span>
                </li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Supported Majors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Software Engineering</h3>
                  <p className="text-foreground/70 text-sm">
                    Web Development, Mobile Development, Cloud Computing, and AI
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Culinary</h3>
                  <p className="text-foreground/70 text-sm">Pastry, Fusion Cuisine, French Cooking, and more</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Tourism Service Business</h3>
                  <p className="text-foreground/70 text-sm">Tour Guiding, Event Planning, Booking Services</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Hotel Accommodation</h3>
                  <p className="text-foreground/70 text-sm">Front Desk, Housekeeping, F&B, Concierge</p>
                </div>
              </div>
            </section>

            <section className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-foreground/80">
                For questions about internships or partnership opportunities, please contact us at
                <span className="text-primary font-semibold"> info@internhub.com</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
