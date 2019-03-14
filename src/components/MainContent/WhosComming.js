import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Checkmark from '../Checkmark'

import './styles.scss'

const Container = ({ children }) => <section className={`whos-comming`}>{children}</section>
const Header = ({ children }) => <h2 className={`whos-comming-header`}>{children}</h2>
const Content = ({ children }) => <div className={`whos-comming-content`}>{children}</div>
const Options = ({ children }) => <ul className={`whos-comming-content-options`}>{children}</ul>
const OptionItem = ({ children }) => (
  <li className={`whos-comming-content-options__item`}>
    <Checkmark className={`whos-comming-content-options__item-checkmark`}/>
    <div className={`whos-comming-content-options__item-content`}>{children}</div>
  </li>
)

const WhosComming = ({ data }) => {
  const { title, points } = data.text

  return (
    <Container>
      <Content>
        <Img imgStyle={{objectFit: 'contain'}} className={`whos-comming-img`} fluid={data.image} />
        <Options>
          <Header>{title}</Header>
          { points.map((point, i) => <OptionItem key={i}>{point}</OptionItem>) }
        </Options>
      </Content>
    </Container>
  );
}


const Component = () => (
  <StaticQuery
    query={
      graphql`
        query {
          whoIsComming: file(name: { eq: "who-is-comming" }) {
            childContentJson {
              title
              points
            }
          }
          runnersImg: file(relativePath: { eq: "assets/runners-profiles.png" }) {
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
      <WhosComming
        data={{
          text: data.whoIsComming.childContentJson,
          image: data.runnersImg.childImageSharp.fluid,
        }}
      />
    )}
  />
)

export default Component
