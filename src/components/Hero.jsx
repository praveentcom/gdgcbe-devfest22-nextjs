import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.png'
import logoGdgCoimbatore from '@/images/logos/logo_gdg_coimbatore.png'
import logoGdgCloudCoimbatore from '@/images/logos/logo_gdg_cloud_coimbatore.png'
import logoWtmCoimbatore from '@/images/logos/logo_wtm_coimbatore.png'

import yanneLogo from '@/images/logos/yaane.png'
import goaugumentLogo from '@/images/logos/goaugument.png'
import kovanLogo from '@/images/logos/kovan.png'
import centralLogo from '@/images/logos/tcc.png'
import simplicityLogo from '@/images/logos/simplicity.png'
import tieLogo from '@/images/logos/tie.png'

export function Hero() {
  return (
    <div className="relative px-4 pt-2 pb-20 lg:pt-8">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden">
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
          <h1 className="font-display text-xl font-bold text-slate-900 lg:text-xl">
            Coimbatore&apos;s Largest Developer Conference
          </h1>
          <div className="mt-6 mb-6 space-y-6 font-display text-lg  text-slate-600">
            <p>
              An annual event hosted by the Google Developers Group across the
              world to bring the technology closer to the developers. It is an
              all day developer conference where we aim to focus on multiple
              technologies through lightning talks, sessions, workshops, etc.
            </p>
            <p>
              We at GDG Coimbatore are very excited to bring back the festival
              of developers to Coimbatore. We have a lot of exciting things
              planned for you this year including power packed sessions, and a
              lot of fun.
            </p>
          </div>
          <div className="my-8 justify-start lg:hidden">
            <Button className="px-8" href="https://forms.gle/tnKWkjGKhFYSWTej6">
              Request Invite
            </Button>
          </div>
          <p className="mt-8 font-display text-lg text-gray-800">
            Organised by
          </p>
          <div className="mt-0 lg:grid lg:grid-cols-4 lg:gap-8">
            <Image
              className="mt-6"
              width={'300'}
              src={logoGdgCoimbatore}
              alt={'GDG Coimbatore DevFest 2022'}
              unoptimized
            />
            <Image
              className="mt-6"
              width={'300'}
              src={logoGdgCloudCoimbatore}
              alt={'GDG Coimbatore DevFest 2022'}
              unoptimized
            />
            <Image
              className="mt-6"
              width={'208'}
              src={logoWtmCoimbatore}
              alt={'GDG Coimbatore DevFest 2022'}
              unoptimized
            />
          </div>

          <p className="mt-8 font-display text-lg text-gray-800">
            Sponsored By
          </p>
          <div id="sponsers" className="mt-0 lg:grid lg:grid-cols-4 lg:gap-8">
            <a
              href="https://www.yaanetechnologies.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="mt-6"
                width={'300'}
                src={yanneLogo}
                alt={'Yaane Technology Coimbatore'}
                unoptimized
              />
            </a>
            <a href="https://kovanlabs.com/" target="_blank" rel="noreferrer">
              <Image
                className="mt-6"
                width={'300'}
                src={kovanLogo}
                alt={'Kovan Labs'}
                unoptimized
              />
            </a>
            <a
              href="https://www.goaugment.io/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="mt-6"
                width={'208'}
                src={goaugumentLogo}
                alt={'go augument'}
                unoptimized
              />
            </a>
          </div>
          <br />
          <p className="mt-8 font-display text-lg text-gray-800">
            Reachout Partners
          </p>
          <div id="partners" className="mt-0 lg:grid lg:grid-cols-4 lg:gap-8">
            <a href="https://simplicity.in/" target="_blank" rel="noreferrer">
              <Image
                className="mt-6"
                width={'300'}
                src={simplicityLogo}
                alt={'simplicity Coimbatore'}
                unoptimized
              />
            </a>
          </div>
          <p className="mt-8 font-display text-lg text-gray-800">
            Ecosystem Partners
          </p>
          <div
            id="eco-partners"
            className="mt-0 lg:grid lg:grid-cols-4 lg:gap-8"
          >
            <a
              href="https://tiecoimbatore.org/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="mt-6"
                width={'300'}
                src={tieLogo}
                alt={'TiE Coimbatore'}
                unoptimized
              />
            </a>
          </div>
          <br />
          <br />
          <br />
          <div></div>
          <div></div>
          <div></div>
          <h1 className="font-display text-xl font-bold text-gray-600 lg:text-2xl">
            Schedule
          </h1>
          <br />

          <table>
            <tbody>
              <tr>
                <th>08:00 AM</th>
                <td colSpan="4" rowSpan="1" className="">
                  Welcome
                </td>
              </tr>
              <tr>
                <th>08:45 AM</th>
                <td colSpan="4" rowSpan="1">
                  Keynote
                </td>
              </tr>
              <tr>
                <th>09:30 AM</th>
                <td colSpan="4" rowSpan="1">
                  Women In Tech
                  <span className="text-slate-600">
                    By Vidya Devarajan, Director/Technology Manager at Kovan
                    Technology Labs
                  </span>
                </td>
              </tr>
              <tr>
                <th>10:30 AM</th>
                <td colSpan="4" rowSpan="1">
                  AR + EdTech
                  <span className="text-slate-600">By Kundavi</span>
                </td>
              </tr>
              <tr>
                <th>11:30 AM</th>
                <td colSpan="4" rowSpan="1">
                  Break
                </td>
              </tr>
              <tr>
                <th>12:00 PM</th>
                <td colSpan="2" rowSpan="1">
                  Core Web Vitals
                  <span className="text-slate-600">By Shidhin</span>
                </td>
                <td colSpan="2" rowSpan="1">
                  A different way to think about animations with Jetpack Compose
                  <span className="text-slate-600">By Sanjay S</span>
                </td>
              </tr>
              <tr>
                <th>01:00 PM</th>
                <td colSpan="2" rowSpan="1">
                  Get started with Technical blogging
                  <span className="text-slate-600">
                    By Bhavani Ravi Independent Software Consultant
                  </span>
                </td>
                <td colSpan="2" rowSpan="1">
                  Simplifying Code Security for Developers
                  <span className="text-slate-600">
                    By Naveen S Senior Security Engineer, Freshworks
                  </span>
                </td>
              </tr>
              <tr>
                <th>02:00 PM</th>
                <td colSpan="4" rowSpan="1">
                  Break
                </td>
              </tr>
              <tr>
                <th>03:00 PM</th>
                <td colSpan="2" rowSpan="1">
                  Building Naked eye 3D experiences using ARCore and Unity
                  <span className="text-slate-600">
                    By Raju Kandasamy Lead Consultant, Thoughtworks
                  </span>
                </td>
                <td colSpan="2" rowSpan="1">
                  Actions on Google + IoT
                  <span className="text-slate-600">
                    By Thirupathi Krishnan Senior Consultant & Sri Vishnu S
                    Consultant,Thoughtworks
                  </span>
                </td>
              </tr>
              <tr>
                <th>04:00 PM</th>
                <td colSpan="2" rowSpan="1">
                  Challenges as Developer
                  <span className="text-slate-600">
                    By Ramya Vardhan Lead Software Engineer, Freshworks
                  </span>
                </td>
                <td colSpan="2" rowSpan="1">
                  Jetpack Compose
                  <span className="text-slate-600">
                    By Somasundaram Mahesh Software Development Engineer,
                    Disney+ Hotstar
                  </span>
                </td>
              </tr>
              <tr>
                <th>05:00 PM</th>
                <td colSpan="2" rowSpan="1">
                  Optimizing TF Models for Edge Devices
                  <span className="text-slate-600">
                    By Navaneeth Malingan, Founder & AI Lead at Nunnari
                  </span>
                </td>
                <td colSpan="2" rowSpan="1">
                  Scaling Your Database Up and Out: A Guide to Distributed
                  Database Systems
                  <span className="text-slate-600">
                    By Abhishek Mishra Developer Advocate, Yugabyte
                  </span>
                </td>
              </tr>
              <tr>
                <th>06:00 PM</th>
                <td colSpan="4" rowSpan="1">
                  Closing
                </td>
              </tr>
            </tbody>
          </table>
          <dl className="mt-16 grid grid-cols-2 gap-y-6 gap-x-10 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            <div key={'Speakers'}>
              <dt className="text-sm text-blue-600">{'Speakers'}</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                {'10+'}
              </dd>
            </div>
            <div key={'Attendees'}>
              <dt className="text-sm text-red-600">{'Attendees'}</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-red-900">
                {'400+'}
              </dd>
            </div>
            <div key={'Location'}>
              <dt className="text-sm text-green-600">{'Location'}</dt>
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
