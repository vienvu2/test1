import { Inter, Roboto_Mono } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
export const roboto = Roboto_Mono({ subsets: ['latin'] })

const Wrap = (props) => {
  return <div className={inter.className}>{props.children}</div>
}

export default Wrap
