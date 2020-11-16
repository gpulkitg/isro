import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import JumbotronImg from '../components/jumbotron-img'

export const query = graphql`
  query {
    cover: file(relativePath: {eq: "common/universe.png"}) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO title="404: Not found" />

    <JumbotronImg
      title="Oops!"
      subtitle="Page Not Found"
      horizontalPosition="center"
      verticalPosition="center"
      textAlignment="center"
    >
      <Img
        fluid={data.cover.childImageSharp.fluid}
        alt={data.cover.name}
        style={{ position: `absolute`, top: 0, left: 0, right: 0, bottom: 0 }}
        imgStyle={{ opacity: `0.7` }}
      />
    </JumbotronImg>

    {/* <div className="vh-100 d-flex justify-content-center align-items-center text-center">
      <div>
        <h1 className="display-4 mb-2">Oops!</h1>
        <h2>Page Not Found</h2>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div> */}

  </Layout>
)

export default NotFoundPage
