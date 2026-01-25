"use client";
import { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading/SectionHeading";

const techs = ["All", "JavaScript", "React", "MERN", "DotNet"];

const ProjectsTabs = () => {
    const [active, setActive] = useState("All");

    return (
        <section id="projects" className="mt-10">
            <SectionHeading title="// Projects" className="mb-5"
                subtitle="I offer a wide range of services to ensure you have the best written code and stay ahead in the competition."
            />

            <div className="flex flex-wrap gap-3 mb-8">
                {techs.map(tech => (
                    <motion.button
                        key={tech}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActive(tech)}
                        className={`px-5 py-2 rounded-lg text-sm font-medium transition
              ${active === tech
                                ? "bg-cyan-400 text-black"
                                : "bg-slate-800 text-white hover:bg-slate-700"
                            }`}
                    >
                        {tech}
                    </motion.button>
                ))}
            </div>

            <ProjectGrid tech={active} />
        </section>
    );
};

export default ProjectsTabs;
