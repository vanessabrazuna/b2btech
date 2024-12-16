export function Footer() {
  return (
    <footer className="mt-3 flex h-8 w-full items-center justify-center bg-violet-500 text-zinc-100 dark:bg-zinc-800 dark:text-zinc-100 md:mt-0 md:w-screen">
      <span className="w-auto text-xs font-semibold leading-relaxed tracking-wide">
        © B2B Tech {new Date().getFullYear()} - Todos os direitos reservados
      </span>
    </footer>
  )
}
