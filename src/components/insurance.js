import React from 'react'
import Img from 'gatsby-image'
import SectorBlock from './sector-block'

import './insurance.scss'

const Container = ({ children }) => <section className={`insurance-container`}>{children}</section>
const Header = ({ children }) => <h2 className={`insurance-header`}>{children}</h2>
const Content = ({ children }) => <div className={`insurance-content`}>{children}</div>
const Description = ({ children }) => <div className={`insurance-description`}>{children}</div>
const Button = ({ children, link, className }) => <a href={link} className={`insurance-button ${className}`}>{children}</a>

const Insurance = ({ data, backgroundColor }) => {
  const { title, content, buttonTitle, buttonLink, img } = data

  return (
    <SectorBlock className={`insurance`} style={{ backgroundColor }}>
      <Container>
        <Img imgStyle={{ objectFit: 'contain' }} className={`insurance-img big-screen`} fluid={img.childImageSharp.fluid} />
        <Content>
          <Header>{title}</Header>
          <Description>{content}</Description>
          <Img className={`insurance-img small-screen`} fluid={img.childImageSharp.fluid} />
          <Button link={buttonLink}>{buttonTitle}</Button>
        </Content>
      </Container>
    </SectorBlock>
  );
}

export default Insurance
