import Link from 'next/link'
import styled from 'styled-components'
import { ButtonIcon, Col, Container, Flex, Row } from '../GlobalStyles'
import {
  IconCalendar,
  IconLogoInsta,
  IconLogoTwitter,
  IconLogoYoutube,
} from '../icons'

const Footer = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src="/images/footer/bg.svg"
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 0,
          pointerEvents: 'none',
        }}
      />
      <Container>
        <FooterStyled>
          <Row>
            <Col md={9}>
              <h2>
                AI4VN <img src="/images/logo-2.svg" />
              </h2>
              <p>
                We leverage the power of modern technologies to craft
                human-centered website experiences that enable companies
                efficiently communicate with their audience.
              </p>
            </Col>
            <Col md={3} />
            <Col md={6}>
              <h3>Pages</h3>
              <PageLink>
                <Link href="/">Hackathon</Link>
              </PageLink>
              <PageLink>
                <Link href="/">News</Link>
              </PageLink>
            </Col>
            <Col md={6}>
              <h3>Follow us</h3>

              <Flex gap={12}>
                <ButtonIcon>
                  <IconLogoInsta />
                </ButtonIcon>
                <ButtonIcon>
                  <IconLogoTwitter />
                </ButtonIcon>
                <ButtonIcon>
                  <IconLogoYoutube />
                </ButtonIcon>
              </Flex>
            </Col>
          </Row>
          <Row align="center">
            <Col md={24}>
              <div style={{ height: 60 }} />
            </Col>

            <Col md={12}>
              <p>Copyright ©2022 by AI4VN. All right reserved</p>
            </Col>
            <Col md={6}>
              <p>Cookie Policy • Privacy Policy</p>
            </Col>
            <Col md={6}>
              <Powered>
                Powered by <img src="/images/footer/partner-1.png" />
                +
                <img src="/images/footer/partner-2.png" />
              </Powered>
            </Col>
          </Row>
        </FooterStyled>
      </Container>
    </div>
  )
}

export default Footer

const Powered = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    height: 40px;
  }
`

const PageLink = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.mainDark2};
  opacity: 0.7;
  margin-bottom: 8px;
  &:hover {
    opacity: 1;
  }
`

const FooterStyled: any = styled.div`
  padding-top: 60px;
  padding-bottom: 30px;
  border-top: 1px solid ${({ theme }) => theme.main};

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.mainDark2};
  }

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: ${({ theme }) => theme.mainDark2};
    margin-bottom: 16px;
  }

  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.mainDark};
  }
`
