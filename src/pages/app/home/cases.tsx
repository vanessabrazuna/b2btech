import { useEffect, useRef, useState } from 'react'

import Eternidade from '@/assets/images/eternidade.jpg'
import HermesChat from '@/assets/images/hermeschat.jpg'
import Ecommerce from '@/assets/images/plataforma e-commerce.jpg'
import Serenidade from '@/assets/images/serenidade.jpg'
import { cases } from '@/data/cases'

export interface Case {
  id: string
  title: string
  description: string
  imageKey: string
}

const imageMap: { [key: string]: string } = {
  eternidade: Eternidade,
  ecommerce: Ecommerce,
  hermeschat: HermesChat,
  serenidade: Serenidade,
}

export function Cases() {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [isVisible, setIsVisible] = useState<boolean>(false)
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

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === cases.length - 1 ? 0 : prevSlide + 1,
    )
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? cases.length - 1 : prevSlide - 1,
    )
  }

  return (
    <section
      ref={sectionRef}
      className="relative z-20 my-[17rem] flex flex-col gap-16 p-4 md:static md:my-32 md:flex-row md:p-0"
      id="cases"
    >
      <div className="flex flex-col items-start justify-start space-y-3">
        <span className="backdrop-blur-10 dark:bg-violet-80 flex w-auto items-center justify-center rounded-2xl bg-violet-600 px-2 text-sm font-semibold leading-6 text-zinc-100 dark:bg-opacity-10 dark:text-violet-500 md:w-20 md:p-1 md:text-base">
          Cases
        </span>
        <h1
          className={`w-auto transform text-4xl font-bold leading-[3rem] tracking-tighter transition-transform duration-1000 ease-out md:w-96 md:text-6xl md:leading-[4.5rem] ${
            isVisible ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          Projetos que Trabalhamos
        </h1>
        <p
          className={`w-auto transform text-lg leading-6 -tracking-tight text-zinc-800 transition-transform delay-300 duration-1000 ease-out dark:text-zinc-400 md:w-96 ${
            isVisible ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          Na B2B Tech, orgulhamo-nos de nossos projetos inovadores e
          personalizados, que trazem soluções eficientes e transformadoras para
          nossos clientes. Aqui estão alguns dos projetos mais notáveis que
          tivemos o prazer de desenvolver:
        </p>

        <div className="flex items-center gap-6 pt-3 md:gap-9 md:pt-6">
          <div className="flex space-x-1 md:space-x-2">
            {cases.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentSlide
                    ? 'bg-violet-500'
                    : 'bg-zinc-400 dark:bg-zinc-700'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          <button
            className="ml-12 h-14 w-14 rounded-full bg-violet-500 text-zinc-50 transition-transform duration-300 ease-in-out hover:scale-125 hover:shadow-lg dark:text-zinc-900 md:ml-[5.5rem] md:h-12 md:w-12"
            onClick={prevSlide}
          >
            &lt;
          </button>
          <button
            className="h-14 w-14 rounded-full bg-violet-500 text-zinc-50 transition-transform duration-300 ease-in-out hover:scale-125 hover:shadow-lg dark:text-zinc-900 md:h-12 md:w-12"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="relative h-96 w-auto overflow-hidden md:h-full md:w-full">
        <div
          className="flex h-96 w-full flex-col transition-transform duration-500 ease-in-out"
          style={{ transform: `translateY(${-currentSlide * 100}%)` }}
        >
          {cases.map((caseData: Case, index) => (
            <div
              key={index}
              className={`relative h-96 w-full flex-shrink-0 transition-opacity duration-500 ${
                index === currentSlide ? 'z-10 opacity-100' : 'z-0 opacity-0'
              }`}
            >
              <img
                src={imageMap[caseData.imageKey]}
                alt={`Slide ${index + 1}`}
                className="h-auto w-auto rounded-lg object-cover md:h-full md:w-full"
              />
              <div className="absolute left-0 right-0 top-20 z-20 rounded-md bg-violet-700/80 p-6 shadow-sm backdrop-blur-md dark:bg-violet-800/80 md:bottom-0 md:top-[7rem] md:ml-auto md:w-[35rem]">
                <article className="relative space-y-2">
                  <span className="font-bold text-violet-500">
                    {caseData.id}
                  </span>
                  <h3 className="font-bold">{caseData.title}</h3>
                  <p className="pb-2 md:pb-3">{caseData.description}</p>
                  <span className="block h-1.5 w-8 rounded-sm bg-violet-500"></span>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
