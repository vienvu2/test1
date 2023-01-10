import React from 'react'
import { Button, Col, Container, Flex, Row } from '../GlobalStyles'

import styled from 'styled-components'
import Image from 'next/image'

const SectionPartner = () => {
  return (
    <PartnerStyled>
      <Container>
        <Flex align="center" justify="space-around">
          <img src="/images/partners/partner-1.png" height={66} />
          <img src="/images/partners/partner-2.png" height={66} />
          {/* <img src="/images/partners/partner-3.png" height={66} /> */}
          {/* <img src="/images/partners/partner-5.png" height={66} /> */}
          <img src="/images/partners/partner-4.png" height={66} />
        </Flex>
      </Container>
    </PartnerStyled>
  )
}

export default SectionPartner

const PartnerStyled = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  background: ${({ theme }) => theme.mainDark};
`
