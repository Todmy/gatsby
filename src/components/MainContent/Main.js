import React from 'react';
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Typing from 'react-typing-animation';
import Checkmark from '../Checkmark'

import InsuranceBanner from './InsuranceBanner'

import './styles.scss'

const H1 = ({ children }) => <h1 className={`heading`}>{children}</h1>
const H2 = ({ children }) => <h2 className={`sub-heading`}>{children}</h2>
const CheckSection = ({ children }) => <div className={`check-section`}>{children}</div>
const CheckItem = ({ children }) => (
  <div className={`check-section-item`}>
    <Checkmark className={`check-section-checkmark`}/>
    <span>{children}</span>
  </div>
)

class Main extends React.Component {
  constructor(...props) {
    super(...props)
    this.state = {
      isBoringCrossed: '',
      isFunShoulBeShown: false,
    }
  }

  crossBoring() {
    setTimeout(() => {
      this.setState({ isBoringCrossed: 'crossed' })
    }, 500)

    setTimeout(() => {
      this.setState({ isFunShoulBeShown: true })
    }, 1500)
  }

  renderContent() {
    return (
      <>
        <InsuranceBanner />

        {
          this.props.data.content.childContentJson.headingSet.map(([ howFun, boring, fun ], i) => {
            return <H1 key={i}>
              <div>{ howFun }</div>
              {/* TODO: think about animations */}
              <Typing onFinishedTyping={() => this.crossBoring()}>
                <span className={`boring ${this.state.isBoringCrossed}`}>{boring.replace(/\^[0-9]+/g, '')}</span>
              </Typing>
              {
                this.state.isFunShoulBeShown &&
                <Typing>
                  {/* TODO: add ^100 timing */}
                  <span className={`fun`}>{fun.replace(/\^[0-9]+/g, '')}</span>
                </Typing>
              }
            </H1>
          })
        }
        <H2>
          <p dangerouslySetInnerHTML={{ __html: this.props.data.content.childContentJson.subHeading }} />
        </H2>

        <CheckSection>
          {this.props.data.content.childContentJson.checkItems.map((item) => <CheckItem key={item}>{item}</CheckItem>) }
        </CheckSection>
      </>
    )
  }

  render() {
    return (
      <BackgroundImage
        Tag="div"
        className={`main`}
        fluid={this.props.data.desktop.childImageSharp.fluid}
        backgroundColor={`#edeef0`}
      >
        {this.renderContent()}
      </BackgroundImage>
    )
  }
}

const Component = () => (
  <StaticQuery
    query={
      graphql`
        query {
          desktop: file(relativePath: { eq: "assets/paint-brush.jpg" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          content: file(name: {eq: "main"}) {
            childContentJson {
              tagHeader
              headingSet
              subHeading
              checkItems
            }
          }
        }
      `
    }
    render={(data) => <Main data={data} />}
  />
)

export default Component