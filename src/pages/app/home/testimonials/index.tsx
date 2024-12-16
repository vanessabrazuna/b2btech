import { useEffect, useRef, useState } from 'react'

import { CarouselSize } from './carousel-size'

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
    <section
      id="depoimentos"
      ref={sectionRef}
      className="absolute bottom-[57rem] left-0 right-0 flex max-w-6xl flex-col items-start justify-center gap-8 p-4 md:static md:mt-6 md:p-0"
    >
      <div className="flex flex-col items-start justify-center space-y-3">
        <span className="backdrop-blur-10 dark:bg-violet-80 flex w-auto items-center justify-center rounded-2xl bg-violet-600 px-2 text-sm font-semibold leading-6 text-zinc-100 dark:bg-opacity-10 dark:text-violet-500 md:w-20 md:p-1 md:text-base">
          s2
        </span>
        <h1
          className={`w-auto transform text-4xl font-bold leading-[3rem] tracking-tighter transition-transform duration-1000 ease-out md:w-full md:text-6xl md:leading-[4.5rem] ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
        >
          Depoimentos
        </h1>
      </div>

      <div
        className={`relative w-full overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div
          className={`w-auto transform transition-transform duration-1000 ease-out ${isVisible ? 'translate-x-0' : 'translate-x-full'} overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <CarouselSize />
        </div>
      </div>
    </section>
  )
}
