import { ProjectTech, Project } from '@/lib/types'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectTex from './ProjectTech'

interface ProjectSectionProps {
  projects: ProjectTech[]
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <section id="projects">
      <SectionHeading title="// Projects" />

      <div className="my-8 grid grid-cols-1 gap-8 md:my-12 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectTex key={project.tech} props={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
