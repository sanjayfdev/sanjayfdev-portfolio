'use client'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import  HeroImage  from '../../assets/images/hero-1 (2).jpeg'
import Ellipse from './Ellipse'

const Hero = () => {
  const ellipseRef = useRotatingAnimation()
  const role = useRoleSwitcher({ roles: [ "Full-Stack Developer (React + Node/.NET)",
  "React.js Developer",
  "Front-End Developer",
  "MERN Stack Developer",
  "ASP.NET Core Full-Stack Developer"] })

  return (
    <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(dvh-4rem)] bg-no-repeat">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">Hi - I'm Sanjay Kumar</span>
            <span className="text-accent block text-[1.75rem] font-bold">{role}</span>
          </h1>

          <h2 className="text-neutral mt-3">
            Crafting innovative solutions to solve real-world problems
          </h2>

          <div className="mt-6 flex flex-wrap gap-6">
            <a
              href="#"
              aria-label="Connect with me"
              className="bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E]">
              Hire Me
            </a>
            <a
              href="https://www.linkedin.com/jobs/"
              target='_blank'
              aria-label="View LinkedIn Profile"
              className="text-neutral bg-secondary cursor-pointer rounded-lg px-[14px] py-[10px] text-sm">
              LinkedIn Profile
            </a>
          </div>
        </div>

       <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
  <div className="relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">

    {/* SVG MASK */}
    <svg className="absolute inset-0 size-full">
      <defs>
        <clipPath id="heroClip">
          <circle cx="50%" cy="50%" r="45%" />
        </clipPath>
      </defs>
    </svg>

    {/* IMAGE */}
    <div
      className="absolute inset-0 rounded-full overflow-hidden"
      style={{ clipPath: "url(#heroClip)" }}
    >
      <Image
        src={HeroImage}
        fill
        priority
        sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
        alt="Sanjay Kumar - Full Stack Developer"
        className="object-cover p-7"
      />
    </div>

    {/* SVG OUTER ELLIPSE */}
    <Ellipse
      ref={ellipseRef}
      className="absolute inset-0 size-full transition-transform duration-500 ease-out"
    />
  </div>
</div>

      </div>
    </section>
  )
}

export default Hero
