import React from 'react'
import Img from 'gatsby-image'
import SectorBlock from './sector-block'

import './cheap-advantage.scss'

const Container = ({ children }) => <section className={`cheap-advantage-container`}>{children}</section>
const Header = ({ children }) => <h2 className={`cheap-advantage-header`}>{children}</h2>
const Description = ({ children }) => <div className={`cheap-advantage-description`}>{children}</div>
const InfoText = ({ children }) => <p className={`cheap-advantage-info`}>{children}</p>
const Button = ({ children, link, className }) => <a href={link} className={`cheap-advantage-button ${className}`}>{children}</a>

const CheapAdvantage = ({ data }) => {
  const { title, text, buttonText, buttonLink } = data

  return (
    <SectorBlock className={`cheap-advantage`}>
      <Container>
        <Description>
          <Header>{title}</Header>
          <InfoText>{text}</InfoText>
          <Button className={`big-screen`} link={buttonLink}>{buttonText}</Button>
        </Description>
        <Img imgStyle={{ objectFit: 'contain' }} className={`cheap-advantage-img`} fluid={data.image.childImageSharp.fluid} />
        <Button className={`small-screen`} link={buttonLink}>{buttonText}</Button>
      </Container>
    </SectorBlock>
  );
}

export default CheapAdvantage
