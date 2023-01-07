import Footer from '../src/layouts/Footer'
import Header from '../src/layouts/Header'
import Wrap from '../src/layouts/Wrap'

import styled from 'styled-components'

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

const BannerStyled = styled.div`
  height: 100px;
`

const SectionBanner = () => {
  return <BannerStyled>SectionBanner</BannerStyled>
}

const SectionPartner = () => {
  return <div>SectionPartner</div>
}

const SectionBenefit = () => {
  return <div>SectionBenefit</div>
}

const SectionProcess = () => {
  return <div>SectionProcess</div>
}

const SectionEvents = () => {
  return <div>SectionEvents</div>
}

const SectionLeaderBoard = () => {
  return <div>SectionLeaderBoard</div>
}

const SectionJudges = () => {
  return <div>SectionJudges</div>
}

const SectionFAQ = () => {
  return <div>SectionFAQ</div>
}

const SectionEnroll = () => {
  return <div>SectionEnroll</div>
}
