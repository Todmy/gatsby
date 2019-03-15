import React from 'react'
import Img from 'gatsby-image'
import Checkmark from './checkmark'
import SectorBlock from './sector-block'

import './whos-comming.scss'

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
  const { title, points, image } = data

  return (
    <SectorBlock className={`whos-comming`}>
      <Content>
        <Img imgStyle={{ objectFit: 'contain' }} className={`whos-comming-img`} fluid={image.childImageSharp.fluid} />
        <Options>
          <Header>{title}</Header>
          { points.map((point, i) => <OptionItem key={i}>{point}</OptionItem>) }
        </Options>
      </Content>
    </SectorBlock>
  );
}

export default WhosComming
