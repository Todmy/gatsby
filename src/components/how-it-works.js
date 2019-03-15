
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import SectorBlock from './sector-block'

import './how-it-works.scss'

import HiwOptionFurniture from '../assets/hiw-option-furniture.svg'
import HiwOptionBlanks from '../assets/hiw-option-blanks.svg'
import HiwOptionCheck from '../assets/hiw-option-check.svg'

// TODO: come up with better solution for dynamic mapping images and content
const imageMap = {
  'hiw-option-furniture': HiwOptionFurniture,
  'hiw-option-blanks': HiwOptionBlanks,
  'hiw-option-check': HiwOptionCheck,
}

const Header = ({ children }) => <h2 className={`section-header`}>{children}</h2>
const OptionsContainer = ({ children }) => <div className={`section-options-container`}>{children}</div>
const HowItem = ({ children }) => <div className={`section-how-item`}>{children}</div>
const StepImage = ({ src }) => {
  const Img = imageMap[src]
  return <Img className={`section-how-item-image`} />
}
const StepInfoContainer = ({ children }) => <div className={`section-how-item-option`}>{children}</div>
const StepTitle = ({ children, num }) => <div className={`section-how-item-option-title`}><span>{num}.</span> {children}</div>
const StepDescription = ({ children }) => <div className={`section-how-item-option-description`}>{children}</div>

const HowItWorks = ({ data }) => {
  const title = data.title
  const options = data.options

  return (
    <SectorBlock className={`section`}>
      <Header>{title}</Header>

      <OptionsContainer>

        { options.map((option, i) =>
          <HowItem key={i}>
            <StepImage src={option.image} />
            <StepInfoContainer>
              <StepTitle num={i + 1}>{option.title}</StepTitle>
              <StepDescription>
                {option.content}
              </StepDescription>
            </StepInfoContainer>
          </HowItem>
        ) }

      </OptionsContainer>
    </SectorBlock>
  );
}


const Component = () => (
  <StaticQuery
    query={
      graphql`
        query {
          howItWorks: file(name: { eq: "how-it-works" }) {
            childContentJson {
              title
              options {
                title
                content
                image
              }
            }
          }
        }
      `
    }
    render={(data) => <HowItWorks data={data.howItWorks.childContentJson} />}
  />
)

export default Component
