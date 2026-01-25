"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { projects } from "./projectsData";
import { Project } from "./types";
import ProjectSkeleton from "./ProjectSkeleton";

interface ProjectGridProps {
  tech: string;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ tech }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [tech]);

  const filteredProjects: Project[] =
    tech === "All"
      ? projects
      : projects.filter(project => project.tech.includes(tech));

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <ProjectSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      layout
      className={tech === "All" ? "grid grid-cols-1 md:grid-cols-3 gap-6" : "grid grid-cols-1 md:grid-cols-2 gap-6"}
    >
      {filteredProjects.map(project => (
        <motion.div
          key={project.id}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          whileHover={{ y: -6 }}
          className="bg-secondary border-border rounded-[14px] border overflow-hidden"
        >
          {/* Project Preview */}
          <div className="relative aspect-video bg-black/10">
            <Image
              src={project.cover || "/projects/placeholder.png"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-base font-semibold text-accent">
              {project.title}
            </h3>

            <p className="text-primary-content mt-2 text-sm">
              {project.description}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map(t => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full
                             bg-accent/10 text-accent
                             border border-accent/30"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-5">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium rounded-lg
                           bg-accent text-black hover:opacity-90 transition"
              >
                Live Preview
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium rounded-lg
                           border border-border text-primary-content
                           hover:bg-primary transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
