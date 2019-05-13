import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Main from '../components/main'
import WhatDoYouNeed from '../components/what-do-you-need'
import HowItWorks from '../components/how-it-works'
import WhosComming from '../components/whos-comming'
import Insurance from '../components/insurance'

export default class IndexPage extends React.Component {
  constructor(...props) {
    super(...props)
    this.state = {
      data: this.normalizeData(this.props.data)
    }
  }

  normalizeData(rawData) {
    const data = rawData.file.childContentJson
    let flatData = {}

    for (let el in data) {
      flatData[el] = data[el].childContentJson || data[el]
    }

    return flatData
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`taskrunner`]} />

        <Main data={this.state.data.Main} />
        <WhatDoYouNeed data={this.state.data.WhatDoYouNeed} />
        <HowItWorks data={this.state.data.HowItWorks} />
        <WhosComming data={this.state.data.WhosComming} />
        <Insurance backgroundColor='white' data={this.state.data.Insurance} />
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    file: file(name: {eq: "main-landing"}) {
      childContentJson {
        Main {
          tagHeader
          headingSet
          subHeading
          checkItems
          bgImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        WhatDoYouNeed {
          title
          categories {
            name
            price
          }
        }

        HowItWorks {
          childContentJson {
            title
            options {
              title
              content
              image
            }
          }
        }

        WhosComming {
          childContentJson {
            title
            points
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }

        CheapAdvantage {
          childContentJson {
            title
            text
            buttonText
            buttonLink
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }

        OurServices {
          childContentJson {
            title
            buttonTitle
            buttonLink
            services {
              link
              title
              img {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }

        Insurance {
          childContentJson {
            title
            buttonTitle
            buttonLink
            content
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
