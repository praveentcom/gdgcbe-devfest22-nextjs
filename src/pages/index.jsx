import Head from 'next/head'

import Script from 'next/script'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'

export default function Home() {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-5TH4SMY576`}
      />

      <Script id="nn" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-5TH4SMY576', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Head>
        <title>GDG Coimbatore DevFest 2022</title>
        <meta
          name="description"
          content="We at GDG Coimbatore are very excited to bring back the festival of developers to Coimbatore. We have a lot of exciting things planned for you this year including power packed sessions, and a lot of fun."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
        {/* <Schedule /> */}
      </main>
      <Footer />
    </>
  )
}
