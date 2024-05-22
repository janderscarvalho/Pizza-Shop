import { createBrowserRouter } from 'react-router-dom'

import { Dashboard } from './Pages/app/dashboard'
import { SignIn } from './Pages/auth/sign-in'

export const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/sign-in', element: <SignIn /> },
])
