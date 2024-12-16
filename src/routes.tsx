import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts'
import { Home } from './pages/app/home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])
