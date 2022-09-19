import { Container } from '@/components/Container'
import Image from 'next/future/image'
import logoDevFest from '@/images/logos/logo.png'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Image className="mb-6 mr-6" width={'300'} src={logoDevFest} alt={"GDG Coimbatore"} unoptimized />
        <p className="mt-6 mb-6 text-base text-slate-500 md:mt-0">
          Rights of Google Developers and other logos are reserved by &copy; {new Date().getFullYear()} Google, LLC and other affliates.
        </p>
      </Container>
    </footer>
  )
}
