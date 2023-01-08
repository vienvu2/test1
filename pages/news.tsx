import Footer from '../src/layouts/Footer'
import Header from '../src/layouts/Header'
import Wrap from '../src/layouts/Wrap'

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

const SectionBanner = () => {
  return <div>SectionBanner</div>
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
