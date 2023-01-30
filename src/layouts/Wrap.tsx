import { Inter, Roboto_Mono } from '@next/font/google'
export const inter = Inter({ subsets: ['latin', 'vietnamese'] })
export const roboto = Roboto_Mono({ subsets: ['latin', 'vietnamese'] })

const Wrap = (props: any) => {
  return <div className={inter.className}>{props.children}</div>
}

export default Wrap
