import Footer from '../src/layouts/Footer'
import Header from '../src/layouts/Header'
import Wrap from '../src/layouts/Wrap'

import React from 'react'
import SectionBanner from '../src/home/SectionBanner'
import SectionBenefit from '../src/home/SectionBenefit'
import SectionEvents from '../src/home/SectionEvents'
import SectionLeaderBoard from '../src/home/SectionLeaderBoard'
import SectionJudges from '../src/home/SectionJudges'
import SectionFAQ from '../src/home/SectionFAQ'
import SectionEnroll from '../src/home/SectionEnroll'
import SectionProcess from '../src/home/SectionProcess'
import styled from 'styled-components'

export default function Home() {
  return (
    <Wrap>
      <Header />

      <SectionBanner />
      <SectionBenefit />
      <SectionProcess />
      <SectionEvents />
      <SectionLeaderBoard />
      <DarkBg>
        <SectionJudges />
        <SectionFAQ />
      </DarkBg>
      <SectionEnroll />

      <Footer />
    </Wrap>
  )
}

const DarkBg = styled.div`
  background-image: url('/images/faq/bg.png');
  background-position: center;
  background-size: 100% 100%;
  background-color: ${({ theme }) => theme.mainDark};
`
