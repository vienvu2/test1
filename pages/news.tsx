import { useTextAnimation } from '../src/hooks/textAnimation'
import Footer from '../src/layouts/Footer'
import Header from '../src/layouts/Header'
import Wrap from '../src/layouts/Wrap'

export default function Home() {
  const [text] = useTextAnimation(['experts'])
  return (
    <Wrap>
      <Header />

      {text}

      <Footer />
    </Wrap>
  )
}
