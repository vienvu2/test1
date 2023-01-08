import React from 'react'
import { Button, Col, Container, Flex, Row } from '../GlobalStyles'

import styled from 'styled-components'
import Image from 'next/image'

const SectionPartner = () => {
  return (
    <PartnerStyled>
      <Flex align="center" justify="space-between">
        <img src="/images/partners/fpt.png" height={66} />
        <img src="/images/partners/fpt.png" height={66} />
        <img src="/images/partners/fpt.png" height={66} />
        <img src="/images/partners/fpt.png" height={66} />
        <img src="/images/partners/fpt.png" height={66} />
      </Flex>
    </PartnerStyled>
  )
}

export default SectionPartner

const PartnerStyled = styled(Container)``
