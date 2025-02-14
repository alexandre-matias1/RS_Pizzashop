import { Separator } from '@radix-ui/react-separator'
import { Home, Pizza } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link to="/">
            <Home className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </div>
  )
}
