import { Instagram, Linkedin, PhoneCall } from 'lucide-react'
import { WhatsappLogo } from 'phosphor-react'
import { useEffect, useRef, useState } from 'react'

import Circles from '@/assets/images/circles.png'
import WhatsAppB2B from '@/assets/logos/whatsapp-b2b.png'
import { Button } from '@/components/ui/button'

export function Contact() {
  const [isHoveredPrimary, setIsHoveredPrimary] = useState(false)
  const [isHoveringSecondary, setIsHoveringSecondary] = useState(false)
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
    <section
      id="contato"
      ref={sectionRef}
      className="mt-72 w-full p-4 md:my-24 md:p-0"
    >
      <div className="relative z-20 flex h-[19rem] w-full items-center justify-center overflow-hidden rounded-xl border-x border-violet-600 dark:border-violet-500 md:ml-0 md:w-calc md:justify-between md:p-24">
        <div
          className={`absolute z-30 transform px-5 transition-transform duration-1000 ease-out md:static md:z-0 md:px-0 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <span className="text-sm font-semibold text-zinc-700 dark:text-violet-500">
            Contato
          </span>
          <h3 className="max-w-96 text-3xl font-bold tracking-tighter text-violet-600 dark:text-zinc-100">
            Interessado?
          </h3>
          <h3 className="max-w-96 text-3xl font-bold leading-relaxed tracking-tighter text-violet-600 dark:text-zinc-100">
            Vamos entrar em contato!
          </h3>
        </div>

        <img
          src={Circles}
          alt="Círculos aritméticos"
          className="absolute bottom-0 right-0 top-[-10rem] z-10 h-auto w-auto overflow-x-hidden md:right-[-3rem]"
        />

        <a
          href="https://api.whatsapp.com/send/?phone=5521965194348"
          target="_blank"
          className={`relative bottom-[-8rem] z-20 block transform transition-transform duration-1000 ease-out md:bottom-0 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
          rel="noopener noreferrer"
        >
          <Button className="mb-8 flex w-72 items-center justify-center rounded-full bg-violet-600 px-5 py-6 text-base font-semibold hover:bg-violet-500 md:mb-0 md:w-full md:py-3">
            Entrar em contato
          </Button>
        </a>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-8 md:flex-row md:gap-1">
        <div className="flex w-full flex-col items-start justify-start space-y-1 md:w-auto">
          <span className="w-auto text-start text-base leading-[22px] md:w-11/12">
            <img
              src={WhatsAppB2B}
              alt="Logo B2B Tech"
              className="h-4.5 mb-6 w-20"
            />
          </span>
          <span className="md:w-12/12 w-auto text-start text-base leading-[22px] text-zinc-800 dark:text-zinc-400">
            CNPJ: 48.768.751/0001-89
          </span>
          <span className="w-auto text-start text-base leading-[22px] text-zinc-800 dark:text-zinc-400 md:w-11/12">
            comercial@b2bmaker.tech
          </span>
          <span className="w-auto text-start text-base leading-[22px] text-zinc-800 dark:text-zinc-400 md:w-11/12">
            B2B Tech © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex w-full flex-col items-start justify-start gap-5 md:w-auto">
          <strong className="text-start text-lg leading-6 text-zinc-800 dark:text-zinc-50">
            Fale conosco
          </strong>
          <span className="w-auto text-start text-base leading-[22px] text-zinc-800 dark:text-zinc-400">
            comercial@b2bmaker.tech
          </span>

          <div className="flex items-center justify-start gap-5">
            <a
              href="https://www.instagram.com/b2b_tech/"
              target="_blank"
              rel="noreferrer"
              className={`relative z-20 block transform transition-transform duration-1000 ease-out`}
            >
              <Instagram
                size={40}
                className="text-zinc-800 hover:text-violet-700 dark:text-zinc-50 dark:hover:brightness-75"
              />
            </a>

            <a
              href="https://www.linkedin.com/company/b2b-tech-maker/"
              target="_blank"
              rel="noreferrer"
              className={`relative z-20 block transform transition-transform duration-1000 ease-out`}
            >
              <Linkedin
                size={40}
                className="text-zinc-800 hover:text-violet-700 dark:text-zinc-50 dark:hover:brightness-75"
              />
            </a>
          </div>
        </div>

        <div className="flex w-full flex-col items-start justify-center gap-5 md:w-auto">
          <strong className="text-start text-lg leading-6 text-zinc-800 dark:text-zinc-50">
            Contato
          </strong>
          <a
            href="tel:021965194348"
            data-phone-number="021965194348"
            className={`relative z-20 block w-full transform transition-transform duration-1000 ease-out`}
          >
            <Button
              className="w-full overflow-hidden rounded-sm bg-transparent p-6 text-base font-semibold text-zinc-800 ring-1 ring-violet-500 hover:bg-transparent hover:bg-violet-500 hover:text-zinc-200 dark:text-zinc-200 md:w-full"
              onMouseEnter={() => setIsHoveredPrimary(true)}
              onMouseLeave={() => setIsHoveredPrimary(false)}
            >
              <span
                className={`flex transform items-center justify-center gap-2 transition-transform duration-1000 ease-out ${isHoveredPrimary ? 'animate-bounce' : ''}`}
              >
                <PhoneCall />
                Entrar em contato
              </span>
            </Button>
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=5521965194348"
            target="_blank"
            className={`relative z-20 block w-full transform transition-transform duration-1000 ease-out`}
            rel="noopener noreferrer"
          >
            <Button
              className="w-full overflow-hidden rounded-sm bg-violet-600 p-6 text-base font-semibold hover:bg-violet-500 md:w-full"
              onMouseEnter={() => setIsHoveringSecondary(true)}
              onMouseLeave={() => setIsHoveringSecondary(false)}
            >
              <span
                className={`relative flex transform items-center justify-center gap-1.5 transition-transform duration-1000 ease-out ${isHoveringSecondary ? 'animate-bounce' : ''}`}
              >
                <WhatsappLogo size={28} />
                Enviar mensagem
              </span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
