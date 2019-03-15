import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import SectorBlock from './sector-block'

import './cheap-advantage.scss'

const Container = ({ children }) => <section className={`cheap-advantage-container`}>{children}</section>
const Header = ({ children }) => <h2 className={`cheap-advantage-header`}>{children}</h2>
const Description = ({ children }) => <div className={`cheap-advantage-description`}>{children}</div>
const InfoText = ({ children }) => <p className={`cheap-advantage-info`}>{children}</p>
const Button = ({ children, link, className }) => <a href={link} className={`cheap-advantage-button ${className}`}>{children}</a>

const CheapAdvantage = ({ data }) => {
  const { title, text, buttonText, buttonLink } = data.text

  return (
    <SectorBlock className={`cheap-advantage`}>
      <Container>
        <Description>
          <Header>{title}</Header>
          <InfoText>{text}</InfoText>
          <Button className={`big-screen`} link={buttonLink}>{buttonText}</Button>
        </Description>
        <Img imgStyle={{ objectFit: 'contain' }} className={`cheap-advantage-img`} fluid={data.image} />
        <Button className={`small-screen`} link={buttonLink}>{buttonText}</Button>
      </Container>
    </SectorBlock>
  );
}


const Component = () => (
  <StaticQuery
    query={
      graphql`
        query {
          cheapAdvantage: file(name: { eq: "cheap-advantage" }) {
            childContentJson {
              title
              text
              buttonText
              buttonLink
            }
          }
          img: file(relativePath: { eq: "assets/phone-screen-sample.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `
    }
    render={(data) => (
      <CheapAdvantage
        data={{
          text: data.cheapAdvantage.childContentJson,
          image: data.img.childImageSharp.fluid,
        }}
      />
    )}
  />
)

export default Component
