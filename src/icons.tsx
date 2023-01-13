import styled from 'styled-components'

interface IconProps {
  size?: number
  color?: string
}

export const IconLink = ({ size = 24, color }: IconProps) => (
  <ImageIcon src="/icons/link.svg" size={size} color={color} />
)
export const IconLinkWhite = ({ size = 24, color }: IconProps) => (
  <ImageIcon src="/icons/link-white.svg" size={size} color={color} />
)

export const IconCalendar = ({ size = 24, color }: IconProps) => (
  <ImageIcon src="/icons/calendar.svg" size={size} color={color} />
)

export const IconArrowLeft = ({ size = 24, color }: IconProps) => (
  <ImageIcon src="/icons/arrow-left.svg" size={size} color={color} />
)
export const IconArrowUp = ({ size = 24, color }: IconProps) => (
  <ImageIcon src="/icons/arrow-up.svg" size={size} color={color} />
)

export const IconArrowDown = ({ size = 24, color }: IconProps) => (
  <ImageIcon src="/icons/arrow-down.svg" size={size} color={color} />
)

export const IconChevronUp = ({ size = 24, color }: IconProps) => (
  <ImageIcon src="/icons/chevron-up.svg" size={size} color={color} />
)

export const IconChevronDown = ({ size = 24, color }: IconProps) => (
  <ImageIcon src="/icons/chevron-down.svg" size={size} color={color} />
)

export const IconPlus = ({ size = 24, color }: IconProps) => (
  <ImageIcon src="/icons/plus.svg" size={size} color={color} />
)

export const IconLogoInsta = ({ size = 24, color }: IconProps) => (
  <ImageIcon src="/icons/logo-insta.svg" size={size} color={color} />
)

export const IconLogoTwitter = ({ size = 24, color }: IconProps) => (
  <ImageIcon src="/icons/logo-twitter.svg" size={size} color={color} />
)

export const IconLogoTwitterWhite = ({ size = 24, color }: IconProps) => (
  <ImageIcon src="/icons/logo-twitter-white.svg" size={size} color={color} />
)

export const IconLogoYoutube = ({ size = 24, color }: IconProps) => (
  <ImageIcon src="/icons/logo-youtube.svg" size={size} color={color} />
)

const ImageIcon = styled.img<{ size: number; color?: string }>`
  ${({ color }) =>
    color &&
    `
  fill: ${color};
  
  `}
`
