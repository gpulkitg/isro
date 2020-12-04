import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Figure } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Separator from '../components/separator'
import ListItems from '../components/list-items'


export const query = graphql`
  query ($slug: String) {
    mdLauncherYaml(slug: {eq: $slug}) {
      seo {
        title
      }
      date(formatString: "D MMM YYYY")
      sections {
        title
        caption
        text
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      relatedLinks {
        title
        content {
          text
          link
        }
      }
    }
  }
`

export default function MdLauncher({ data }) {

  const {
    seo,
    date,
    sections,
    relatedLinks,
  } = data.mdLauncherYaml


  return (
    <Layout>

      <SEO title={seo.title} />

      <Separator />

      <Container>

        { date &&
          <h5 className="text-muted">{date}</h5>
        }

        { seo.title &&
          <h2 className="mb-2 text-center">{seo.title}</h2>
        }

        {/* { cover &&
          <div className="w-100 mb-1">
            <Img
              fluid={cover.childImageSharp.fluid}
              alt={cover.name}
              className="mx-auto"
              style={{ maxWidth: `600px` }}
            />
          </div>
        } */}

        { sections.map((section, ind) => (
          <div key={`sections_${ind}`}>
            { section.image &&
              <Figure className="w-100 mb-2">
                <Img
                  fluid={section.image.childImageSharp.fluid}
                  alt={section.image.name}
                  style={{ maxHeight: `400px` }}
                  imgStyle={{ objectFit: `contain` }}
                />
                <Figure.Caption className="text-center">{section.caption}</Figure.Caption>
              </Figure>
              // <div className="w-100 mb-1">
              //   <Img
              //     fluid={section.image.childImageSharp.fluid}
              //     alt={section.image.name}
              //     style={{ maxHeight: `400px` }}
              //     imgStyle={{ objectFit: `contain` }}
              //   />
              // </div>
            }
            { section.text &&
              <div className="mb-2">
                <div dangerouslySetInnerHTML={{ __html: section.text }} className="markdown-content" />
              </div>
            }
          </div>
        ))}

        { relatedLinks &&
          <>
          <Separator title="Related" />
          <ListItems items={relatedLinks} />
          </>
        }


      </Container>


    </Layout>
  )

}
