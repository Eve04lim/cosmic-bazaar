import Image from 'next/image'
import { CosmicHeader } from '@/components/cosmic-header'
import { Button } from '@/components/ui/button'

const products = [
  { id: 1, name: 'Quantum Stabilizer', price: 999, imageUrl: '/placeholder.svg?height=400&width=400', rarity: 'legendary', description: 'Harness the power of quantum mechanics to stabilize your ship in the most turbulent space-time anomalies.' },
  { id: 2, name: 'Nebula Harvester', price: 599, imageUrl: '/placeholder.svg?height=400&width=400', rarity: 'rare', description: 'Collect rare gases and elements from nebulae with this state-of-the-art cosmic harvesting device.' },
  { id: 3, name: 'Gravity Boots', price: 299, imageUrl: '/placeholder.svg?height=400&width=400', rarity: 'common', description: 'Walk on any surface, in any gravity, with these advanced gravitational manipulation boots.' },
  { id: 4, name: 'Plasma Shield', price: 499, imageUrl: '/placeholder.svg?height=400&width=400', rarity: 'rare', description: 'Protect your ship or yourself from cosmic radiation and space debris with this cutting-edge plasma shield technology.' },
]

const rarityColors = {
  common: 'bg-cosmic-700',
  rare: 'bg-nebula-600',
  legendary: 'bg-gradient-to-r from-cosmic-500 to-nebula-500',
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id))

  if (!product) {
    return <div>Product not found in this dimension</div>
  }

  return (
    <div className="min-h-screen flex flex-col star-background">
      <CosmicHeader />
      <main className="flex-grow container mx-auto py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`${rarityColors[product.rarity]} p-4 rounded-lg`}>
            <Image src={product.imageUrl} alt={product.name} width={400} height={400} className="rounded-lg" />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-cosmic-100">{product.name}</h1>
            <p className="text-2xl font-bold text-nebula-300">{product.price} Cosmic Credits</p>
            <div className="bg-cosmic-800 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2 text-nebula-300">Product Description</h2>
              <p className="text-cosmic-100">{product.description}</p>
            </div>
            <div className="space-y-2">
              <Button size="lg" className="w-full bg-nebula-500 hover:bg-nebula-600 text-cosmic-100">Add to Cart</Button>
              <Button size="lg" variant="outline" className="w-full border-nebula-500 text-nebula-300 hover:bg-nebula-900">Buy Now</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

