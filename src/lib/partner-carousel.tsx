import 'swiper/swiper-bundle.css'

import { useEffect, useState } from 'react'
import SwiperCore from 'swiper'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import BrasilPax from '@/assets/partners/brasil-pax.png'
import Eternidade from '@/assets/partners/eternidade.png'
import FarolEterno from '@/assets/partners/farol-eterno.png'
import Global from '@/assets/partners/global.png'
import Gloria from '@/assets/partners/gloria.png'
import Kn from '@/assets/partners/kn.png'
import MonteCarmelo from '@/assets/partners/monte-carmelo.png'
import Top from '@/assets/partners/top.png'
import { partners } from '@/data/partners'

export interface PartnerCarousel {
  imageKey: string
}

const imageMap: { [key: string]: string } = {
  brasilpax: BrasilPax,
  eternidade: Eternidade,
  faroleterno: FarolEterno,
  global: Global,
  gloria: Gloria,
  montecarmelo: MonteCarmelo,
  top: Top,
  kn: Kn,
}

SwiperCore.use([Pagination, Navigation, Autoplay])

export function PartnerCarousel() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="z-0 my-16 max-w-6xl overflow-x-hidden overflow-y-hidden p-4 md:my-32 md:p-0">
      <div className="w-[60rem] md:w-full">
        <p
          className={`mb-6 transform text-start text-base font-semibold text-violet-700 transition-transform duration-1000 ease-out dark:text-violet-500 md:text-base ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
        >
          | &nbsp;Alguns de nossos parceiros
        </p>
        <div
          className={`w-auto transform text-4xl font-bold leading-[3.5rem] tracking-tighter transition-transform duration-1000 ease-out md:text-7xl md:leading-[4.5rem] ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <Swiper
            spaceBetween={32}
            slidesPerView={6}
            pagination={{
              clickable: true,
              el: `swiper-container swiper-container-testClass`,
              bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {partners.map((image, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <a href="#" role="group" aria-label="1 / 7">
                  <img
                    src={imageMap[image.imageKey]}
                    className="w-full max-w-[150px] overflow-y-hidden rounded-sm border border-zinc-400 pb-[-3rem] dark:border-zinc-800"
                    alt="Nome do parceiro"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
