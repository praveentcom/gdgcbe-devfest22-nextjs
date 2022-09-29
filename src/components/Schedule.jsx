import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.png'

const schedule = [
    {
      date: 'Keynote and common tracks',
      dateTime: '2022-10-15',
      summary:
        'Certain sessions will be hosted for all the participants.',
      timeSlots: [
        {
          name: 'Kick-off',
          description: 'Register and assemble for the event',
          start: '8:00AM',
          end: '8:45AM',
        },
        {
          name: 'TBA',
          description: 'Keynote',
          start: '8:45AM',
          end: '9:30AM',
        },
        {
          name: 'TBA',
          description: 'Women in Tech',
          start: '9:30AM',
          end: '10:30PM',
        },
        {
          name: 'Kundhavai',
          description: 'AR + EdTech',
          start: '10:30AM',
          end: '11:30PM',
        },
        {
          name: 'Break',
          description: null,
          start: '10:30AM',
          end: '11:00AM',
        },
        {
          name: 'TBA',
          description: 'Closing note',
          start: '6:00PM',
          end: '6:30PM',
        },
      ],
    },
    {
      date: 'Track A',
      dateTime: '2022-10-15',
      summary:
        'Catch topics like web, cloud, AR, and general tech with Track A',
      timeSlots: [
        {
          name: 'Damaris Kimura',
          description: 'The invisible card reader',
          start: '9:00AM',
          end: '10:00AM',
        },
        {
          name: 'Ibrahim Frasch',
          description: 'Stealing fingerprints',
          start: '10:00AM',
          end: '11:00AM',
        },
        {
          name: 'Cathlene Burrage',
          description: 'Voting machines',
          start: '11:00AM',
          end: '12:00PM',
        },
        {
          name: 'Lunch',
          description: null,
          start: '12:00PM',
          end: '1:00PM',
        },
        {
          name: 'Rinaldo Beynon',
          description: 'Blackhat SEO that works',
          start: '1:00PM',
          end: '2:00PM',
        },
        {
          name: 'Waylon Hyden',
          description: 'Turning your audience into a botnet',
          start: '2:00PM',
          end: '3:00PM',
        },
        {
          name: 'Giordano Sagucio',
          description: 'Fly phishing',
          start: '3:00PM',
          end: '4:00PM',
        },
      ],
    },
    {
      date: 'Track B',
      dateTime: '2022-10-15',
      summary:
        'Find sessions on mobile, databases, and security with Track B',
      timeSlots: [
        {
          name: '𝅶',
          description: '𝅶',
          start: '9:00AM',
          end: '10:00AM',
        },
        {
          name: 'Heather Terry',
          description: 'DALL-E for passports',
          start: '10:00AM',
          end: '11:00AM',
        },
        {
          name: 'Piers Wilkins',
          description: 'Quantum password cracking',
          start: '11:00AM',
          end: '12:00PM',
        },
        {
          name: 'Lunch',
          description: null,
          start: '12:00PM',
          end: '1:00PM',
        },
        {
          name: 'Gordon Sanderson',
          description: 'SkyNet is coming',
          start: '1:00PM',
          end: '2:00PM',
        },
        {
          name: 'Kimberly Parsons',
          description: 'Dark patterns for the metaverse',
          start: '2:00PM',
          end: '3:00PM',
        },
        {
          name: 'Richard Astley',
          description: 'Knowing the game and playing it',
          start: '3:00PM',
          end: '4:00PM',
        },
      ],
    },
  ]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="grid max-w-2xl grid-cols-1 mx-auto gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="flex pb-4 pl-4 -mx-4 overflow-x-auto gap-x-4 gap-y-10 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <div
              key={day.dateTime}
              className={clsx(
                'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                dayIndex !== selectedIndex && 'opacity-70'
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 py-14 px-10 text-center shadow-xl shadow-blue-900/5 backdrop-blur'
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} IST`}
        >
          {timeSlotIndex > 0 && (
            <div className="w-48 h-px mx-auto mb-8 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="text-4xl font-medium tracking-tighter text-gray-600 font-display sm:text-5xl">
            The day is jam-packed with sessions curated for the community ranging across various topics.
          </h2>
          <p className="mt-4 text-2xl tracking-tight text-gray-900 font-display">
            The worst people in our industry giving the best talks you’ve ever
            seen. Nothing will be recorded and every attendee has to sign an NDA
            to watch the talks.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 overflow-hidden -top-40 -bottom-32">
          <Image
            className="absolute left-full top-0 -translate-x-1/4 sm:left-1/2 sm:translate-y-[-15%] sm:translate-x-1/4 md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-y-[-8%] xl:translate-x-[27%]"
            src={backgroundImage}
            alt=""
            width={2000}
            height={1495}
            unoptimized
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
