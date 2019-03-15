import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
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
  const pricesData = data.prices.childContentJson
  const categories = data.categories.childrenCategories0Json
  const buttonsToDisplay = categories.map(category => ({
    ...category,
    price: pricesData.prices.find(price => price._id === category._id).price || pricesData.defaultPrice
  }))

  return (
    <SectorBlock className={`what-need`}>
      <H1>Vad behöver du hjälp med idag?</H1>
      <Categories>
        { buttonsToDisplay.map((el, i) => <LinkButton key={i} el={el} />) }
      </Categories>
    </SectorBlock>
  )
}

const Component = () => (
  <StaticQuery
    query={
      graphql`
        query {
          categories: file(name: { eq: "categories-0" }) {
            childrenCategories0Json {
              name
              _id
            }
          }
          prices: file(name: { eq: "prices" }) {
            childContentJson {
              defaultPrice
              prices {
                _id
                price
              }
            }
          }
        }
      `
    }
    render={(data) => <WhatDoYouNeed data={data} />}
  />
)

export default Component
