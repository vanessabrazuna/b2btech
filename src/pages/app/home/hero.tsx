import { useEffect, useState } from 'react'

import Circles from '@/assets/images/circles.png'
import { Button } from '@/components/ui/button'

export function Hero() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative mt-[-21rem] grid grid-cols-1 place-items-center p-4 md:mt-0 md:grid-cols-2 md:p-0">
      <div className="order-2 flex flex-col items-start justify-center space-y-6 overflow-hidden md:order-1 md:space-y-9">
        <span className="flex w-auto items-center justify-center rounded-2xl bg-violet-600 px-2 text-sm font-semibold leading-6 text-zinc-100 backdrop-blur-sm dark:bg-violet-800 dark:bg-opacity-10 dark:text-violet-500 md:w-64 md:p-1 md:text-base">
          Automatizamos o seu negócio
        </span>
        <h1
          className={`w-auto transform text-4xl font-bold leading-[3rem] tracking-tighter transition-transform duration-1000 ease-out md:text-6xl md:leading-[4.5rem] ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
        >
          Automatize o óbvio e pense no negócio
        </h1>
        <p
          className={`md:w-4/4 w-auto transform text-lg leading-6 text-zinc-800 transition-transform delay-300 duration-1000 ease-out dark:text-zinc-400 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
        >
          Somos uma empresa dedicada ao desenvolvimento de software que
          transforma processos complexos em soluções automatizadas, permitindo
          que você se concentre no que realmente importa: o crescimento do seu
          negócio.
        </p>
        <a href="#serviços">
          <Button
            className={`flex w-[19rem] transform items-center justify-center overflow-hidden scroll-smooth rounded-sm bg-violet-600 px-5 py-6 text-base font-semibold transition-transform duration-1000 ease-out hover:bg-violet-600 md:w-full md:py-3 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span
              className={`relative inline-block transform transition-transform duration-1000 ease-out ${isHovered ? 'animate-bounce-carousel' : ''}`}
            >
              Conheça nossos serviços
            </span>
          </Button>
        </a>
      </div>

      <div className="order-1 flex h-96 w-auto items-center justify-center">
        <img
          src={Circles}
          alt="Circuitos aritméticos"
          className="h-auto w-auto md:h-full md:w-full"
        />
      </div>
    </section>
  )
}
