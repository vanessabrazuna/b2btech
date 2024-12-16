import { useEffect, useRef, useState } from 'react'

import { PartnerCarousel } from '@/lib/partner-carousel'

export function Partners() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-x-clip md:overflow-hidden"
    >
      <div
        className={`absolute bottom-0 left-0 right-0 top-[-1rem] w-auto transform transition-transform duration-1000 ease-out md:static ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <PartnerCarousel />
      </div>
    </div>
  )
}
