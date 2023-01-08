import Footer from '../src/layouts/Footer'
import Header from '../src/layouts/Header'
import Wrap from '../src/layouts/Wrap'

import React from 'react'
import SectionBanner from '../src/home/SectionBanner'
import SectionPartner from '../src/home/SectionPartner'
import SectionBenefit from '../src/home/SectionBenefit'
import SectionEvents from '../src/home/SectionEvents'
import SectionLeaderBoard from '../src/home/SectionLeaderBoard'
import SectionJudges from '../src/home/SectionJudges'
import SectionFAQ from '../src/home/SectionFAQ'
import SectionEnroll from '../src/home/SectionEnroll'
import SectionProcess from '../src/home/SectionProcess'

export default function Home() {
  return (
    <Wrap>
      <Header />

      <SectionBanner />
      <SectionPartner />
      <SectionBenefit />
      <SectionProcess />
      <SectionEvents />
      <SectionLeaderBoard />
      <SectionJudges />
      <SectionFAQ />
      <SectionEnroll />

      <Footer />
    </Wrap>
  )
}
