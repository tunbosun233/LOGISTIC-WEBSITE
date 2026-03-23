import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers at SwiftShip | Join Our Team',
  description: 'Join SwiftShip and help shape the future of global logistics. Explore exciting career opportunities.',
}

export default function CareersPage() {
  const jobs = [
    {
      title: 'Senior Logistics Coordinator',
      location: 'New York, USA',
      type: 'Full-time',
      description: 'Manage complex shipments and coordinate with international partners.',
    },
    {
      title: 'Customer Service Specialist',
      location: 'London, UK',
      type: 'Full-time',
      description: 'Provide exceptional support to our global customer base.',
    },
    {
      title: 'Supply Chain Analyst',
      location: 'Singapore',
      type: 'Full-time',
      description: 'Optimize routes and improve operational efficiency.',
    },
    {
      title: 'Operations Manager',
      location: 'Los Angeles, USA',
      type: 'Full-time',
      description: 'Lead operations at our major distribution center.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our Team
          </h1>
          <p className="text-lg text-muted-foreground">
            Build a rewarding career with SwiftShip. We're looking for talented individuals who are passionate about logistics and customer service.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Work at SwiftShip?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Competitive Benefits</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive health insurance, retirement plans, and generous PTO.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Global Opportunities</h3>
              <p className="text-muted-foreground text-sm">
                Work across our 50+ offices worldwide and expand your horizons.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Professional Growth</h3>
              <p className="text-muted-foreground text-sm">
                Continuous learning opportunities and clear career advancement paths.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Innovative Culture</h3>
              <p className="text-muted-foreground text-sm">
                Work with cutting-edge technology and industry-leading solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Current Openings</h2>
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase size={16} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                <button className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                  View Details <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Don't see the right position? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Send Your Resume <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Application Process</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Apply Online',
                description: 'Submit your resume and cover letter through our application portal.',
              },
              {
                step: 2,
                title: 'Phone Screening',
                description: 'Our HR team will contact qualified candidates for an initial conversation.',
              },
              {
                step: 3,
                title: 'Interviews',
                description: 'Meet with the hiring team to discuss the role and your qualifications.',
              },
              {
                step: 4,
                title: 'Offer',
                description: 'Receive a competitive offer and join the SwiftShip family.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equal Opportunity */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Equal Opportunity Employer</h2>
          <p className="text-muted-foreground">
            SwiftShip is committed to building a diverse and inclusive workforce. We provide equal employment opportunities to all qualified candidates regardless of race, color, religion, sex, national origin, age, disability, or any other protected characteristic.
          </p>
        </div>
      </section>
    </div>
  )
}
