import React from 'react'
import { Button } from '../GlobalStyles'

import styled from 'styled-components'

const SectionFAQ = () => {
  return (
    <BannerStyled>
      <h2>Learn to code: From zero to hero</h2>
      <p>Easier to get started with coding on FPT Marketplace</p>

      <Button>Get started</Button>
    </BannerStyled>
  )
}

export default SectionFAQ

const BannerStyled = styled.div``
