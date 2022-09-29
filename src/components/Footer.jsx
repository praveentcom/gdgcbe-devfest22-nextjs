import { Container } from '@/components/Container'
import Image from 'next/future/image'
import logoDevFest from '@/images/logos/logo.png'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Image className="mb-6 md:mr-24 lg:mr-80" width={'300'} src={logoDevFest} alt={"GDG Coimbatore"} unoptimized />
        <p className="mt-6 mb-6 space-y-6 text-lg tracking-tighter text-gray-800 font-display">
          Google Developers and other related logo rights reserved by &copy; {new Date().getFullYear()} Google LLC., and other affliates.
        </p>
      </Container>
    </footer>
  )
}
