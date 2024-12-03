import Link from 'next/link'
import { RocketIcon, ShoppingCart, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function CosmicHeader() {
  return (
    <header className="border-b border-cosmic-700 bg-cosmic-900 text-cosmic-100">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <RocketIcon className="mr-2 h-6 w-6" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cosmic-300 to-nebula-300">
            Cosmic Bazaar
          </span>
        </Link>
        <div className="flex-1 mx-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search the cosmos..."
              className="w-full bg-cosmic-800 border-cosmic-700 text-cosmic-100 placeholder-cosmic-400"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cosmic-400" />
          </div>
        </div>
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <Button variant="ghost" size="icon" className="text-cosmic-100 hover:text-cosmic-300">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

