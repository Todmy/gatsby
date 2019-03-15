import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './insurance-banner.scss'

const InsuranceLogo = ({ content: img }) => <Img fluid={img} className={`insurance-logo`} />

const InsuranceText = ({ content: insuranceBanner }) => (
  <div className={`insurance-banner__text`}>
    <div className={`insurance-banner__desktop-only`}>
      {insuranceBanner.text}
      <a href="/Agreement/Insurance">{insuranceBanner.linkText}</a>
    </div>

    <div className={`insurance-banner__mobile-only`}>
      {insuranceBanner.mobileText}
      <a href="/Agreement/Insurance">{insuranceBanner.mobileLinkText}</a>
    </div>
  </div>
)

const CloseIcon = ({ onClick }) => <div onClick={onClick} className={`close-cross`}>✕</div>

class InsuranceBanner extends React.Component {
  constructor(...props) {
    super(...props)

    this.state = {
      isBunnerHidden: false,
    }
  }

  hideBunner() {
    this.setState({
      isBunnerHidden: true,
    })
  }

  render() {
    return (
      <div className={`insurance-banner ${this.state.isBunnerHidden && 'hide'}`}>
        <div className={`flex-container`}>

          <InsuranceLogo content={this.props.data.placeholderImage.childImageSharp.fluid} />
          <InsuranceText content={this.props.data.content.childContentJson} />
          <CloseIcon onClick={() => this.hideBunner()} />

        </div>
      </div>
    )
  }
}

const Component = () => (
  <StaticQuery
    query={
      graphql`
        query {
          placeholderImage: file(relativePath: { eq: "assets/if.png" }) {
            childImageSharp {
              fluid(maxWidth: 20) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          content: file(name: { eq: "insurance-bunner" }) {
            childContentJson {
              mobileText
              text
              mobileLinkText
              linkText
            }
          }
        }
      `
    }
    render={(data) => <InsuranceBanner data={data} />}
  />
)

export default Component
