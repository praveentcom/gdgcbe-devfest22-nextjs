import { useEffect, useId, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import abhishekImage from '@/images/avatars/abhishek.png'
import bhavaniImage from '@/images/avatars/bhavani.png'
import kundavaiImage from '@/images/avatars/kundavai.png'
import naveenImage from '@/images/avatars/naveen.png'
import rajuImage from '@/images/avatars/raju.png'
import ramyaImage from '@/images/avatars/ramya.png'
import sanjuImage from '@/images/avatars/sanju.png'
import shidhinImage from '@/images/avatars/shidhin.png'
import somuImage from '@/images/avatars/somu.png'
import thirupathiImage from '@/images/avatars/thirupathi.png'
import vishnuImage from '@/images/avatars/vishnu.png'
import navaneethImage from '@/images/avatars/navaneeth.png'
import vidhyaImage from '@/images/avatars/vidhya.png'

const speakers = [
  {
    name: 'Abhishek Mishra',
    role: 'Developer Advocate, Yugabyte',
    image: abhishekImage,
  },
  {
    name: 'Bhavani Ravi',
    role: 'Independent Consultant',
    image: bhavaniImage,
  },
  {
    name: 'Kundavai Arivudainambi',
    role: 'CEO, Eduzo',
    image: kundavaiImage,
  },
  {
    name: 'Navaneeth Malingan',
    role: 'Founder & AI Lead at Nunnari',
    image: navaneethImage,
  },
  {
    name: 'Naveen S',
    role: 'Sr. Sec. Engineer, Freshworks',
    image: naveenImage,
  },
  {
    name: 'Raju Kandasamy',
    role: 'Ld. Consultant, Thoughtworks',
    image: rajuImage,
  },
  {
    name: 'Ramya Vardhan',
    role: 'Ld. Software Egineer, Freshworks',
    image: ramyaImage,
  },
  {
    name: 'Sanjay S',
    role: 'GDE, Android',
    image: sanjuImage,
  },
  {
    name: 'Shidhin CR',
    role: 'GDE, Web Technologies',
    image: shidhinImage,
  },
  {
    name: 'Somasundaram Mahesh',
    role: 'Sr. Software Engineer, Hotstar',
    image: somuImage,
  },
  {
    name: 'Sri Vishnu S',
    role: 'Consultant, Thoughtworks',
    image: vishnuImage,
  },
  {
    name: 'Thirupathi Krishnan',
    role: 'Sr. Consultant, Thoughtworks',
    image: thirupathiImage,
  },
  {
    name: 'Vidya Devarajan',
    role: 'Director at Kovan Technology Labs',
    image: vidhyaImage,
  },
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="px-4 py-16"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-xl font-bold tracking-tighter text-slate-900 lg:text-xl"
          >
            Speakers
          </h2>
          <p className="mt-2 mb-6 space-y-6 font-display text-lg tracking-tighter text-slate-600">
            Learn from the experts on the most discussed tech topics in the
            industry. We have stellar line of speakers including Google
            Developer Experts, Senior Engineers, and Leads of top tech
            companies.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <Tab.Panels className="lg:col-span-4">
            <Tab.Panel
              key="speakers"
              className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-4 [&:not(:focus-visible)]:focus:outline-none"
              unmount={false}
            >
              {speakers.map((speaker, speakerIndex) => (
                <div key={speakerIndex}>
                  <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                    <div
                      className={clsx(
                        'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                        [
                          'border-blue-300',
                          'border-indigo-300',
                          'border-sky-300',
                        ][speakerIndex % 3]
                      )}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                    >
                      <Image
                        className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                        src={speaker.image}
                        alt=""
                        priority
                        sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    </div>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                    {speaker.name}
                  </h3>
                  <p className="mt-1 text-base tracking-tight text-slate-600">
                    {speaker.role}
                  </p>
                </div>
              ))}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
