import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/components/button'
import FancyButton from '@/components/FanceButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      {/* <Image fill style={{ objectFit: "cover" }} src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6" alt="DOG" /> */}
      <Button>Click me</Button>
      <FancyButton>Click me</FancyButton>
    </div>
  )
}
