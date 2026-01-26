import { skillList } from '@/appData'
import ContactSection from '@/components/Contact/ContactSection'
import Hero from '@/components/Hero/Hero'
import ServiceSection from '@/components/Services/ServiceSection'
import Skills from '@/components/Skills/Skills'
import TestimonialSection from '@/components/Testimonials/TestimonialSection'
import { getAllProjects, getAllTestimonials } from '@/services'
import ProjectTabs from "../components/Projects/ProjectsTabs"
import { testimonials } from '@/components/Testimonials/testimonials'

export default async function Home() {
  // const projects = await getAllProjects()
  // const testimonials = await getAllTestimonials()

  return (
    <main>
      <Hero />
      <Skills skills={skillList} />
      <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
        <ProjectTabs />
        <ServiceSection />
        <TestimonialSection testimonials={testimonials} />
        <ContactSection />
      </div>
    </main>
  )
}
