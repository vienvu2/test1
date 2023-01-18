import styled from 'styled-components'

interface IconProps {
  size?: number
  color?: string
}

export const IconLink = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/link.svg" size={size} />
)
export const IconLinkWhite = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/link-white.svg" size={size} />
)

export const IconCalendar = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/calendar.svg" size={size} />
)

export const IconArrowLeft = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/arrow-left.svg" size={size} />
)

export const IconArrowLeftWhite = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/arrow-left-white.svg" size={size} />
)
export const IconArrowUp = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/arrow-up.svg" size={size} />
)

export const IconArrowDown = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/arrow-down.svg" size={size} />
)

export const IconChevronUp = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/chevron-up.svg" size={size} />
)

export const IconChevronDown = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/chevron-down.svg" size={size} />
)

export const IconPlus = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/plus.svg" size={size} />
)

export const IconLogoInsta = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/logo-insta.svg" size={size} />
)

export const IconLogoTwitter = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/logo-twitter.svg" size={size} />
)

export const IconLogoTwitterWhite = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/logo-twitter-white.svg" size={size} />
)

export const IconLogoYoutube = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/logo-youtube.svg" size={size} />
)

export const IconDelete = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/delete.svg" size={size} />
)

export const IconReload = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/reload.svg" size={size} />
)

export const IconTypeImage = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/type-image.svg" size={size} />
)
export const IconGroup = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/group.svg" size={size} />
)
export const IconPersonal = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/personal.svg" size={size} />
)

export const IconChevDown = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/chev-down.svg" size={size} />
)
export const IconChevRight = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/chev-right.svg" size={size} />
)

export const IconUserPlus = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/user-plus.svg" size={size} />
)

export const IconUpload = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/upload.svg" size={size} />
)
export const IconDraft = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/draft.svg" size={size} />
)

export const IconInfo = ({ size = 24 }: IconProps) => (
  <ImageIcon src="/icons/info.svg" size={size} />
)

const ImageIcon = styled.img<{ size: number; color?: string }>`
  ${({ color }) =>
    color &&
    `
      fill: ${color};
  
  `}
`
