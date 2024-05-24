import { Home, Pizza, UtensilsCrossed } from 'lucide-react'
import { Link } from 'react-router-dom'

import { AccountMenu } from './account-menu'
import { Navlink } from './navlink'
import { ThemeToggle } from './theme/theme-togle'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 place-items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Navlink to="/">
            <Home className="w4 h-4" />
            Início
          </Navlink>
          <Navlink to="/orders">
            <UtensilsCrossed className="w4 h-4" />
            Pedidos
          </Navlink>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
