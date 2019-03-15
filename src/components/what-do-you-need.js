import React from 'react'
import SectorBlock from './sector-block'

import './what-do-you-need.scss'

function urlify(name) {
  return name.toLocaleLowerCase()
    .replace(/å/g, 'a')
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ /g, '-')
}

function topCategoryUrl(category) {
  return `/app/c/${urlify(category.name)}/`
}

const H1 = ({children}) => <h1 className={`what-need-header`}>{children}</h1>
const Categories = ({ children }) => <div className={`what-need-categories`}>{children}</div>

const LinkButton = ({ el }) => {
  const link = topCategoryUrl(el)
  const name = el.name.replace(' Möbler', '')
  return (
    <div className={`what-need-categories-block`}>
      <a href={link} className={`what-need-categories-item`}>
        {name}
      </a>
      <span className={``}>
        {el.price}
      </span>
    </div>
  )
}

const WhatDoYouNeed = ({ data }) => {
  return (
    <SectorBlock className={`what-need`}>
      <H1>{data.title}</H1>
      <Categories>
        {data.categories.map((el, i) => <LinkButton key={i} el={el} />) }
      </Categories>
    </SectorBlock>
  )
}

export default WhatDoYouNeed
