import { Inter } from '@next/font/google'
import { ThemeProvider } from 'styled-components'
const inter = Inter({ subsets: ['latin'] })



const Wrap = (props) => {
  return <div className={inter.className}>{props.children}</div>
}

export default Wrap
