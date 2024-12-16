import {
  ChevronRight,
  Cpu,
  LayoutPanelLeft,
  MonitorDot,
  Workflow,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import Image2 from '@/assets/images/image2.jpg'
import Image3 from '@/assets/images/image3.jpg'
import Image4 from '@/assets/images/image4.jpg'
import Image1 from '@/assets/images/imge1.jpg'
import GlobalPaxBorder from '@/assets/logos/border-global-pax.png'
import GloriaBorder from '@/assets/logos/border-gloria.png'
import GlobalPax from '@/assets/logos/global-pax.png'
import Gloria from '@/assets/logos/gloria.png'
import { services } from '@/data/services'

interface Services {
  id: string
  title: string
  description: string
  icon: string
}

export function Services() {
  const [selectedService, setSelectedService] = useState<Services>(services[0])
  const [currentImage, setCurrentImage] = useState(Image1)
  const [animate, setAnimate] = useState(false)
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

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false)
      }, 600)

      return () => clearTimeout(timer)
    }
  }, [animate])

  const handleServices = (service: Services) => {
    setAnimate(true)
    setTimeout(() => {
      setSelectedService(service)
      switch (service.title) {
        case 'Criação de Software Personalizado':
          setCurrentImage(Image1)
          break
        case 'Automação de Processos':
          setCurrentImage(Image2)
          break
        case 'Consultoria em Tecnologia':
          setCurrentImage(Image3)
          break
        case 'Integração de Sistemas':
          setCurrentImage(Image4)
          break
        default:
          setCurrentImage(Image1)
      }
    }, 300)
  }

  return (
    <section
      ref={sectionRef}
      id="serviços"
      className="relative z-20 mb-14 mt-32 flex flex-col items-start justify-center space-y-8 p-4 md:static md:mb-0 md:mt-48 md:p-0"
    >
      <span className="backdrop-blur-10 dark:bg-violet-80 flex w-auto items-start justify-center rounded-2xl bg-violet-600 px-2 text-sm font-semibold leading-6 text-zinc-100 dark:bg-opacity-10 dark:text-violet-500 md:w-24 md:p-1 md:text-base">
        Serviços
      </span>
      <h1
        className={`w-auto transform text-4xl font-bold leading-[3rem] tracking-tighter transition-transform duration-1000 ease-out md:w-full md:text-6xl md:leading-[4.5rem] ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
      >
        Como podemos ajudar?
      </h1>

      <div className="flex flex-wrap gap-4">
        {services.map((service) => {
          return (
            <button
              key={service.id}
              onClick={() => handleServices(service)}
              className={`flex max-w-max transform items-center justify-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-zinc-700 ring-1 ring-zinc-500 transition-transform delay-300 duration-1000 ease-out active:bg-violet-500 active:text-zinc-50 dark:text-zinc-400 dark:ring-zinc-400 dark:active:text-zinc-900 dark:active:ring-zinc-500 ${
                selectedService.id === service.id
                  ? 'bg-violet-500 text-zinc-50 dark:text-zinc-900 dark:ring-zinc-500'
                  : ''
              } ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
            >
              <div>{renderIcon(service.icon)}</div>
              {service.title}
            </button>
          )
        })}
      </div>

      <div className="flex flex-col gap-20 md:flex-row">
        <div
          className={`order-2 space-y-3 transition-transform duration-700 ease-in-out md:order-1 ${animate ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
        >
          <h3 className="text-lg font-semibold text-violet-700 dark:text-violet-500">
            {selectedService.title}
          </h3>
          <p className="h-auto w-auto pb-5 text-lg leading-relaxed tracking-normal text-zinc-800 dark:text-zinc-400 md:w-[29rem]">
            {selectedService.description}
          </p>
          <div className="h-10">
            <a
              href="https://api.whatsapp.com/send/?phone=5521965194348"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-auto items-center justify-start gap-1 text-base font-semibold text-violet-700 dark:font-normal dark:text-violet-500 md:text-base"
            >
              Fale conosco
              <ChevronRight
                size="20"
                className="transform transition-transform duration-700 ease-in-out group-hover:translate-x-2"
              />
            </a>
          </div>

          <div className="flex h-32 items-center justify-start gap-14 pt-24 md:gap-24">
            <div className="relative h-28 w-28">
              <img
                className="absolute inset-0 z-10 m-auto h-20 object-contain"
                loading="lazy"
                src={GlobalPax}
                alt="Logo Global Pax"
              />
              <img
                src={GlobalPaxBorder}
                className="animate-spin opacity-85"
                alt="Bordas escritas Global Pax"
              />
            </div>

            <div className="relative h-28 w-28">
              <img
                className="absolute inset-0 z-10 m-auto h-20 object-contain"
                loading="lazy"
                src={Gloria}
                alt="Logo Santa Casa da Gloŕia"
              />
              <img
                src={GloriaBorder}
                className="animate-spin opacity-85"
                alt="Bordas escritas Gloria"
              />
            </div>
          </div>
        </div>

        <div
          className={`order-1 flex w-auto flex-col justify-between overflow-hidden rounded-sm border border-violet-500 transition-opacity duration-700 ease-in-out md:h-96`}
        >
          <header className="flex h-10 w-auto items-center space-x-2 rounded-sm bg-violet-700 px-2 md:h-12 md:w-full">
            <i className="h-2.5 w-2.5 rounded-full bg-gray-900"></i>
            <i className="h-2.5 w-2.5 rounded-full bg-gray-700"></i>
            <i className="h-2.5 w-2.5 rounded-full bg-gray-500"></i>
          </header>

          <img
            className={`z-10 h-full w-full object-contain shadow-none transition-opacity duration-500 ${animate ? 'translate-y-full transform opacity-0' : 'opacity-100'}`}
            src={currentImage}
            alt="imagem do projeto"
          />
        </div>
      </div>
    </section>
  )
}

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'LayoutPanelLeft':
      return <LayoutPanelLeft size="16" />
    case 'Workflow':
      return <Workflow size="16" />
    case 'Cpu':
      return <Cpu size="16" />
    case 'MonitorDot':
      return <MonitorDot size="16" />
    default:
      return null
  }
}
