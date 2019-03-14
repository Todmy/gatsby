import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { MainContent } from '../components/MainContent/index'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MainContent />
  </Layout>
)

export default IndexPage
