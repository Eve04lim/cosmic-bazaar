import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface CosmicProductCardProps {
  id: number
  name: string
  price: number
  imageUrl: string
  rarity: 'common' | 'rare' | 'legendary'
}

export function CosmicProductCard({ id, name, price, imageUrl, rarity }: CosmicProductCardProps) {
  const rarityColors = {
    common: 'bg-cosmic-700',
    rare: 'bg-nebula-600',
    legendary: 'bg-gradient-to-r from-cosmic-500 to-nebula-500',
  }

  return (
    <Card className={`overflow-hidden ${rarityColors[rarity]} animate-float`}>
      <CardContent className="p-4">
        <Link href={`/products/${id}`}>
          <Image src={imageUrl} alt={name} width={200} height={200} className="w-full object-cover mb-4 rounded-md" />
        </Link>
        <h3 className="text-lg font-semibold mb-2 text-cosmic-100">{name}</h3>
        <p className="text-xl font-bold text-nebula-300">{price} Cosmic Credits</p>
      </CardContent>
      <CardFooter className="bg-cosmic-800 bg-opacity-50">
        <Button className="w-full bg-nebula-500 hover:bg-nebula-600 text-cosmic-100">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}

