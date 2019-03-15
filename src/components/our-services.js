import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import SectorBlock from './sector-block'

import './our-services.scss'

const Container = ({ children }) => <section className={`our-services`}>{children}</section>
const Header = ({ children }) => <h2 className={`our-services-header`}>{children}</h2>
const Content = ({ children }) => <div className={`our-services-content`}>{children}</div>
const Button = ({ children, link, className }) => <a href={link} className={`our-services-button ${className}`}>{children}</a>
const Service = ({ data }) => (
  <a href={data.link} className={`our-services-item`}>
    <BackgroundImage
      fluid={data.img.childImageSharp.fluid}
      className={`our-services-item-bg`}
      Tag="div"
      backgroundColor={`#edeef0`}
    >
    </BackgroundImage>
    <div className={`our-services-item-texting`}>{data.title}</div>
  </a>
)

const OurServices = ({ data }) => {
  const { title, buttonTitle, services, buttonLink } = data

  return (
    <SectorBlock>
      <Container>
        <Header>{title}</Header>
        <Content>
          { services.map((serv, i) => <Service key={i} data={serv} />) }
        </Content>
        <Button link={buttonLink}>{buttonTitle}</Button>
      </Container>
    </SectorBlock>
  );
}


const Component = () => (
  <StaticQuery
    query={
      graphql`
        query {
          ourServices: file(name: {eq: "our-services"}) {
            childContentJson {
              title
              buttonTitle
              buttonLink
              services {
                link
                title
                img {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      `
    }
    render={(data) => <OurServices data={data.ourServices.childContentJson} />}
  />
)

export default Component
