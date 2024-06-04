import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './Pages/_layouts/app'
import { AuthLayout } from './Pages/_layouts/auth'
import { NotFound } from './Pages/404'
import { Dashboard } from './Pages/app/dashboard/dashboard'
import { Orders } from './Pages/app/orders/orders'
import { SignIn } from './Pages/auth/sign-in'
import { SignUp } from './Pages/auth/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
