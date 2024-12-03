import { CosmicHeader } from '@/components/cosmic-header'
import { CosmicProductCard } from '@/components/cosmic-product-card'
import { Button } from '@/components/ui/button'

const featuredProducts = [
  { id: 1, name: 'Quantum Stabilizer', price: 999, imageUrl: '/placeholder.svg?height=200&width=200', rarity: 'legendary' },
  { id: 2, name: 'Nebula Harvester', price: 599, imageUrl: '/placeholder.svg?height=200&width=200', rarity: 'rare' },
  { id: 3, name: 'Gravity Boots', price: 299, imageUrl: '/placeholder.svg?height=200&width=200', rarity: 'common' },
  { id: 4, name: 'Plasma Shield', price: 499, imageUrl: '/placeholder.svg?height=200&width=200', rarity: 'rare' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col star-background">
      <CosmicHeader />
      <main className="flex-grow container mx-auto py-8">
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cosmic-300 to-nebula-300">
            Welcome to Cosmic Bazaar
          </h1>
          <p className="text-xl mb-8 text-cosmic-100">Your gateway to intergalactic commerce</p>
          <Button size="lg" className="bg-nebula-500 hover:bg-nebula-600 text-cosmic-100">
            Explore Products
          </Button>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-cosmic-100">Featured Cosmic Artifacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <CosmicProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
        
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-cosmic-100">Why Choose Cosmic Bazaar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cosmic-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-nebula-300">Intergalactic Shipping</h3>
              <p className="text-cosmic-100">We deliver to any corner of the known universe, faster than light!</p>
            </div>
            <div className="bg-cosmic-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-nebula-300">Quantum-Secured Transactions</h3>
              <p className="text-cosmic-100">Your cosmic credits are safe with our advanced quantum encryption.</p>
            </div>
            <div className="bg-cosmic-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-nebula-300">24/7 Holographic Support</h3>
              <p className="text-cosmic-100">Our AI assistants are always ready to help, in any language of the cosmos.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

