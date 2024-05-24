import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './Pages/_layouts/app'
import { AuthLayout } from './Pages/_layouts/auth'
import { Dashboard } from './Pages/app/dashboard'
import { SignIn } from './Pages/auth/sign-in'
import { SignUp } from './Pages/auth/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
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
