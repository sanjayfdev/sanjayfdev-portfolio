'use client'

import { useEffect, useRef } from 'react'
import { serviceData } from '../../appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import ServiceCard from './ServiceCard'

const ServiceSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const isPaused = useRef(false)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const speed = 1 // pixels per frame

    const animate = () => {
      if (!container || isPaused.current) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      container.scrollLeft += speed

      // infinite loop
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <section id="services" className="my-14">
      <SectionHeading
        title="// Services / Offers:"
        subtitle="I offer a wide range of services to ensure you have the best written code and stay ahead in the competition."
      />

      <div className="relative mt-8 md:mt-[3.75rem]">
        <div
          ref={scrollRef}
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
          className="
            grid grid-rows-2 grid-flow-col
            gap-6
            overflow-x-auto
            pb-4
            scroll-smooth
            scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent
          "
        >
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              shortDescription={service.shortDescription}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
