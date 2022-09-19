import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import Image from 'next/future/image'
import logoDevFest from '@/images/logos/logo.png'

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
            <Image width={'300'} src={logoDevFest} alt={"GDG Coimbatore"} unoptimized />
        </div>
        <div className="flex flex-auto order-first py-4 -mx-4 overflow-x-auto font-mono text-sm text-gray-900 border-b basis-full whitespace-nowrap border-blue-600/10 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="flex items-center gap-4 px-4 mx-auto">
            <p>
              <time dateTime="2022-10-15">15 of October, 2022</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>Coimbatore, TN, India</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="https://gdg.community.dev/gdg-coimbatore/">Register now</Button>
        </div>
      </Container>
    </header>
  )
}
