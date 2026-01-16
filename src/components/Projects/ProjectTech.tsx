"use client";
import { Project, ProjectTech } from '@/lib/types'
import Image from 'next/image'
import { Earning, GithubIcon, Likes, PreviewIcon, Star, Timer } from '../../utils/icons'
import ProjectCard from './ProjectCard';
import { useState } from "react";


const IconText: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
    <li className="flex gap-2">
        <Image src={icon} alt={text} className="size-[18px] md:size-5" />
        <span className="text-neutral text-sm">{text}</span>
    </li>
)

interface ProjectsProp {
    props: ProjectTech
}


const ProjectTex: React.FC<ProjectsProp> = ({ props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const {
        tech,
        data
    } = props

    interface Projects2 {
        data: Project
    }

    return (

        <div className="max-w-md mx-auto mt-10 border-gray-200 rounded-lg overflow-hidden">
            {/* Header / Trigger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors" style={{backgroundColor:'#18f2e5'}}
            >
                <span className="font-medium" style={{color: '#011221'}}>{tech}</span>
                <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Content Body */}
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="p-4  border-t border-gray-200" style={{backgroundColor:'#011221'}}>
                        <div className="bg-secondary border-border flex flex-col justify-between rounded-[14px] border p-5">
                            <div className="flex items-start justify-between gap-2">
                                <div className="flex-1">
                                    <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
                                        {/* <h3 className="text-secondary-content text-lg font-medium md:font-semibold">{tech}</h3> */}
                                        {
                                            data.map((d) => (
                                                <ProjectCard key={d.priority} data={d} />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectTex
