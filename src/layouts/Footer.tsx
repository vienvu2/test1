import Link from 'next/link'
import styled from 'styled-components'
import { ButtonIcon, Col, Container, Flex, Row } from '../GlobalStyles'
import { IconCalendar } from '../icons'

const Footer = () => {
  return (
    <Container>
      <FooterStyled>
        <Row>
          <Col md={12}>
            <p>
              We leverage the power of modern technologies to craft
              human-centered website experiences that enable companies
              efficiently communicate with their audience.
            </p>
          </Col>
          <Col md={6}>
            <h3>Pages</h3>
            <div>
              <Link href="/">Hackathon</Link>
            </div>
            <div>
              <Link href="/">News</Link>
            </div>
          </Col>
          <Col md={6}>
            <h3>Follow us</h3>

            <Flex gap={12}>
              <ButtonIcon>
                <IconCalendar />
              </ButtonIcon>
              <ButtonIcon>
                <IconCalendar />
              </ButtonIcon>
              <ButtonIcon>
                <IconCalendar />
              </ButtonIcon>
            </Flex>
          </Col>
          <Col md={24}>
            <div style={{ height: 100 }} />
          </Col>

          <Col md={12}>
            <p>Copyright ©2022 by AI4VN. All right reserved</p>
          </Col>
          <Col md={6}>
            <p>Cookie Policy • Privacy Policy</p>
          </Col>
          <Col md={6}>
            <p>Powered by • Privacy Policy</p>
          </Col>
        </Row>
      </FooterStyled>
    </Container>
  )
}

export default Footer

const FooterStyled: any = styled.div`
  padding-top: 60px;
  padding-bottom: 30px;
  border-top: 1px solid ${({ theme }) => theme.main};

  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.mainDark};
  }
`
