import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.png'
import logoGdgCoimbatore from '@/images/logos/logo_gdg_coimbatore.png'
import logoGdgCloudCoimbatore from '@/images/logos/logo_gdg_cloud_coimbatore.png'
import logoWtmCoimbatore from '@/images/logos/logo_wtm_coimbatore.png'

export function Hero() {
  return (
    <div className="relative px-4 pt-2 pb-20 lg:pt-8">
      <div className="absolute inset-x-0 overflow-hidden -top-48 -bottom-14">
        <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-80%] -scale-x-100 sm:left-1/2"
          src={backgroundImage}
          alt=""
          width={2000}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto">
          <h1 className="text-xl font-bold tracking-tighter text-gray-600 font-display lg:text-2xl">
            Coimbatore&apos;s Largest Developer Conference
          </h1>
          <div className="mt-6 mb-6 space-y-6 text-lg tracking-tight text-gray-800 lg:text-2xl font-display">
            <p>
            An annual event hosted by the Google Developers Group across the world to bring the technology closer to the developers.
            It is an all day developer conference where we aim to focus on multiple technologies through lightning talks, sessions, workshops, etc.
            </p>
            <p>
              We at GDG Coimbatore are very excited to bring back the festival of developers to Coimbatore.
              We have a lot of exciting things planned for you this year including power packed sessions, and a lot of fun.
            </p>
          </div>
          <p className="mt-12 text-lg text-gray-800 font-display">
            Organised by
            </p>
          <div className="mt-0 lg:grid lg:grid-cols-4 lg:gap-8">
          <Image className="mt-6" width={'300'} src={logoGdgCoimbatore} alt={"GDG Coimbatore DevFest 2022"} unoptimized />
          <Image className="mt-6" width={'300'} src={logoGdgCloudCoimbatore} alt={"GDG Coimbatore DevFest 2022"} unoptimized />
          <Image className="mt-6" width={'208'} src={logoWtmCoimbatore} alt={"GDG Coimbatore DevFest 2022"} unoptimized />
          </div>
          <dl className="grid grid-cols-2 mt-16 gap-y-6 gap-x-10 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            <div key={'Speakers'}>
                <dt className="font-mono text-sm text-blue-600">{'Speakers'}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {'10+'}
                </dd>
            </div>
            <div key={'Attendees'}>
                <dt className="font-mono text-sm text-red-600">{'Attendees'}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-red-900">
                  {'400+'}
                </dd>
            </div>
            <div key={'Price'}>
                <dt className="font-mono text-sm text-yellow-600">{'Price'}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-yellow-900">
                  {'Free :)'}
                </dd>
            </div>
            <div key={'Location'}>
                <dt className="font-mono text-sm text-green-600">{'Location'}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-green-900">
                  {'TBA'}
                </dd>
            </div>
          </dl>
        </div>
      </Container>
    </div>
  )
}
