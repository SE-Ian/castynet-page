import { HeroBanner } from "@/components/home/hero-area"
import { IntroSection } from "@/components/home/intro-area"
import { ServicesSection } from "@/components/home/services-area"
import { ProjectSection } from "@/components/home/projects-area"
import { ReviewSection } from "@/components/home/reviews-area"
import { WorkProcessSection } from "@/components/home/work-area"
import { FormSection } from "@/components/home/forms-area"

export default function HomePage() {
  return (
    <div>
      <HeroBanner />
      <IntroSection />
      <ServicesSection />
      <ProjectSection />
      <ReviewSection />
      <WorkProcessSection />
      <FormSection />
    </div>
  )
}
