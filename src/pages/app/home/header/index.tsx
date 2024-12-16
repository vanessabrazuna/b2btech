import 'animate.css'

import { useEffect, useState } from 'react'

import LogoB2B from '@/assets/logos/logo.png'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { BurgerMenu } from '@/pages/app/home/header/burger-menu'

export function Header() {
  const [top, setTop] = useState(true)
  const [isMediumScreen] = useState(window.innerWidth >= 768)

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header>
      <div
        className={`fixed left-0 top-0 z-50 flex h-[72px] w-full items-center justify-between bg-[rgba(34,40,45,0.23)] p-4 py-10 backdrop-blur-[15px] transition-all duration-300 ease-in-out dark:bg-[rgba(34,40,45,0.5)] md:p-0 md:px-24`}
      >
        <div>
          {isMediumScreen ? (
            <a href="/">
              <img
                src={LogoB2B}
                className="w-46 block h-9"
                alt="Logo B2BTech"
              />
            </a>
          ) : (
            <a href="/">
              <img
                src={LogoB2B}
                className="block h-6 w-28"
                alt="Logo B2BTech Mobile"
              />
            </a>
          )}
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-12 text-base font-semibold text-zinc-700 dark:font-medium dark:text-zinc-100">
            {['Serviços', 'Cases', 'Depoimentos', 'Contato'].map((item) => (
              <li key={item} className="relative">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="ease cursor-pointer transition duration-300 hover:text-violet-500"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="block">
          <ThemeToggle />
        </div>

        <div className="block md:hidden">{<BurgerMenu />}</div>
      </div>
    </header>
  )
}
