import { Outlet } from 'react-router-dom'

import { Header } from '@/pages/app/home/header'

export function AppLayout() {
  return (
    <div className="relative mx-auto flex h-screen items-center justify-center text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
      <div>
        <Header />
      </div>
      <div className="absolute top-56">
        <Outlet />
      </div>
    </div>
  )
}
