import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './styles.scss'

const Container = ({ children }) => <section className={`insurance`}>{children}</section>
const Header = ({ children }) => <h2 className={`insurance-header`}>{children}</h2>
const Content = ({ children }) => <div className={`insurance-content`}>{children}</div>
const Description = ({ children }) => <div className={`insurance-description`}>{children}</div>
const Button = ({ children, link, className }) => <a href={link} className={`insurance-button ${className}`}>{children}</a>

const Insurance = ({ data }) => {
  const { title, content, buttonTitle, buttonLink, img } = data

  return (
    <Container>
      <Img imgStyle={{ objectFit: 'contain' }} className={`insurance-img big-screen`} fluid={img.childImageSharp.fluid} />
      <Content>
        <Header>{title}</Header>
        <Description>{content}</Description>
        <Img className={`insurance-img small-screen`} fluid={img.childImageSharp.fluid} />
        <Button link={buttonLink}>{buttonTitle}</Button>
      </Content>
    </Container>
  );
}


const Component = () => (
  <StaticQuery
    query={
      graphql`
        query {
          insurance: file(name: {eq: "insurance"}) {
            childContentJson {
              title
              buttonTitle
              buttonLink
              content
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
      `
    }
    render={(data) => <Insurance data={data.insurance.childContentJson} />}
  />
)

export default Component
