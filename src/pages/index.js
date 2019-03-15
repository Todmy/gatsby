import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Main from '../components/main'
import WhatDoYouNeed from '../components/what-do-you-need'
import HowItWorks from '../components/how-it-works'
import WhosComming from '../components/whos-comming'
import CheapAdvantage from '../components/cheap-advantage'
import OurServices from '../components/our-services'
import Insurance from '../components/insurance'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Main />
    <WhatDoYouNeed />
    <HowItWorks />
    <WhosComming />
    <CheapAdvantage />
    <OurServices />
    <Insurance />
  </Layout>
)

export default IndexPage
