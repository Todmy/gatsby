import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import Typing from 'react-typing-animation'
import Checkmark from './checkmark'
import SectorBlock from './sector-block'

import InsuranceBanner from './insurance-banner'

import './main.scss'

const H1 = ({ children }) => <h1 className={`heading`}>{children}</h1>
const H2 = ({ children }) => <h2 className={`sub-heading`}>{children}</h2>
const CheckSection = ({ children }) => <div className={`check-section`}>{children}</div>
const CheckItem = ({ children }) => (
  <div className={`check-section-item`}>
    <Checkmark className={`check-section-checkmark`}/>
    <span>{children}</span>
  </div>
)

export default class Main extends React.Component {
  constructor(...props) {
    super(...props)
    const [componentProperties] = props

    this.state = {
      data: componentProperties.data,
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
          this.state.data.headingSet.map(([ howFun, boring, fun ], i) => {
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
          <p dangerouslySetInnerHTML={{ __html: this.state.data.subHeading }} />
        </H2>

        <CheckSection>
          {this.state.data.checkItems.map((item) => <CheckItem key={item}>{item}</CheckItem>) }
        </CheckSection>
      </>
    )
  }

  render() {
    return (
      <BackgroundImage
        Tag="div"
        className={`main`}
        fluid={this.state.data.bgImage.childImageSharp.fluid}
        backgroundColor={`#edeef0`}
      >
        <SectorBlock>
          {this.renderContent()}
        </SectorBlock>
      </BackgroundImage>
    )
  }
}
