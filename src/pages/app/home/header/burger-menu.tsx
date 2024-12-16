import { useState } from 'react'

export function BurgerMenu() {
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!isOpen)
  }

  return (
    <div className="flex items-center justify-between px-4 py-8">
      <nav>
        <section className="MOBILE-MENU flex">
          <div className="HAMBURGER-ICON space-y-2" onClick={toggleMenu}>
            <button className="group relative">
              <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden bg-transparent transition-all duration-200">
                <div className="flex h-[20px] w-[30px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
                  <div className="w-9.5 h-[2px] origin-left transform bg-violet-500 transition-all duration-300 group-focus:translate-x-10"></div>
                  <div className="w-9.5 h-[2px] transform rounded bg-violet-500 transition-all delay-75 duration-300 group-focus:translate-x-10"></div>
                  <div className="w-9.5 h-[2px] origin-left transform bg-violet-500 transition-all delay-150 duration-300 group-focus:translate-x-10"></div>
                </div>
              </div>
            </button>
          </div>

          <div
            className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed inset-0 z-10 flex h-screen flex-col items-center justify-center bg-white text-violet-500 transition-transform duration-300 dark:bg-violet-500 dark:text-white`}
          >
            <div
              className="absolute right-[4.5rem] top-8 cursor-pointer"
              onClick={() => setOpen(!isOpen)}
            >
              <div
                className={`absolute top-2.5 flex w-7 items-center justify-between transition-all duration-500 ${isOpen ? 'rotate-75' : ''}`}
              >
                <span
                  className={`absolute h-[2px] w-7 transform bg-white transition-all duration-500 ${isOpen ? 'rotate-45' : ''}`}
                />
                <span
                  className={`absolute h-[2px] w-7 transform bg-white transition-all duration-500 ${isOpen ? '-rotate-45' : ''}`}
                />
              </div>
            </div>

            <ul className="flex min-h-[300px] flex-col items-center gap-[4.5rem]">
              {['Serviços', 'Cases', 'Depoimentos', 'Contato'].map((item) => (
                <li key={item} className="relative text-3xl">
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={toggleMenu}
                    className="block w-fit after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-white after:transition after:duration-300 after:ease-in-out after:content-[''] after:hover:scale-x-100"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </nav>
    </div>
  )
}
