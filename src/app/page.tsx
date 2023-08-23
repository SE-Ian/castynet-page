import { ServicesSection } from "@/components/home/services"
import { ProjectSection } from "@/components/home/projects"
import { ReviewSection } from "@/components/home/reviews"
import { WorkProcessSection } from "@/components/home/workProcess"
import { FormSection } from "@/components/home/form-section"
import { IntroSection } from "@/components/home/intro"
import { HeroBanner } from "@/components/home/heroBanner"

export default function Home() {
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
