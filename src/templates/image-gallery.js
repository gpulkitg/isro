import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import LightboxGallery from '../components/lightbox-gallery'
import Separator from '../components/separator'

export const query = graphql`
  query ($slug: String!, $imagesDir: String!) {
    imageGalleriesYaml(slug: { eq: $slug }) {
      title
      slug
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    images: allFile(filter: { relativePath: { regex: $imagesDir } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            # fixed(width: 300, height: 300) {
            #   ...GatsbyImageSharpFixed
            # }
          }
        }
      }
    }
  }
`

export default function ImageGallery({ data }) {

  const { title, slug, cover } = data.imageGalleriesYaml

  const photos = data.images.edges.map(({ node }) => {
    return (
      {
        src: node.childImageSharp.fluid.src,
        srcSet: node.childImageSharp.fluid.srcSet,
        sizes: node.childImageSharp.fluid.sizes,
        width: 1,
        height: 1,
        // caption: node.name,
        // thumbnail: node.childImageSharp.fixed.src,
        // thumbnailWidth: 300,
        // thumbnailHeight: 300,
        // nano: node.childImageSharp.fixed.base64,
      }
    )
  })

  return (
    <Layout>
      <SEO title={title} />

      <Separator />
      <h2 className="text-center mb-2">{title}</h2>
      <Container>
        <LightboxGallery photos={photos} columns={3} />
        {/* <Row>
          { data.images.edges.map(({node}) => (
            <Col key={node.childImageSharp.fluid.src} className="mb-4" md={4}>
              <Img
                fluid={node.childImageSharp.fluid}
                alt={node.name}
                style={{ height: `300px`}}
              />
            </Col>
          ))}
        </Row> */}
      </Container>





    </Layout>

  )
}
