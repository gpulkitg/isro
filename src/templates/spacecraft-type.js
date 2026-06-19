import React from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'

import { Container, Figure, Row, Col, Table, ListGroup } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'

import SEO from '../components/seo'
import Layout from "../components/layout"
import Separator from '../components/separator'


export const query = graphql`
  query($slug: String!, $spacecraftTypeRegex: String) {
    spacecraftTypesYaml(slug: {eq: $slug}) {
      title
      sections {
        title
        text
        images {
          image {
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          caption
        }
      }
    }
    allSpacecraftTypesYaml {
      edges {
        node {
          slug
          title
        }
      }
    }
    allMasterListYaml(filter: {spacecraftType: {regex: $spacecraftTypeRegex}}, sort: {order: DESC, fields: launchDate}) {
      totalCount
  	  edges {
  	    node {
          id
  	      launcherName
          launcherLink
          spacecraftName
          spacecraftLink
          launchDate(formatString: "MMM D, YYYY")
          orbitType
          application
          remarks
  	    }
  	  }
  	}
  }
`



export default function SpacecraftType({ data }) {

  const {
    title,
    sections,
  } = data.spacecraftTypesYaml



  return (
    <Layout>
      <SEO title={title} />


      <Container>

        <Separator />
        <h2 className="mb-2 text-center">{title}</h2>

        { sections.map((section, ind) => (
          <div key={`sections_${ind}`}>
            { section.title &&
              <h3 className="text-center mb-2">{section.title}</h3>
            }
            { section.images &&
              <Row className="d-flex align-items-end mb-2">
                { section.images.map((item, ind) => (
                  <Col key={item.image.name} md>
                    <Figure className="w-100">
                      <Img
                        fluid={item.image.childImageSharp.fluid}
                        alt={item.image.name}
                        style={{ maxHeight: `400px` }}
                        imgStyle={{ objectFit: `contain` }}
                      />
                      <Figure.Caption className="text-center">{item.caption}</Figure.Caption>
                    </Figure>
                  </Col>
                ))}
              </Row>
            }
            { section.text &&
              <div className="mb-2">
                <div dangerouslySetInnerHTML={{ __html: section.text }} className="markdown-content" />
              </div>
            }
          </div>
        ))}


        <div className="mb-2 text-center">
          <h3>List of {title}</h3>
        </div>

        <Container>
          {/* <h3 className="mb-2 text-center">{`List of ${title}`}</h3> */}

          <Table variant="dark" responsive>
            <thead>
              <tr>
                <th>SN</th>
                <th>Name</th>
                <th>Launch Date</th>
                <th>Launch Vehicle</th>
                <th>Orbit Type</th>
                <th>Application</th>
                <th>Remarks</th>
              </tr>
            </thead>

            <tbody>
              { data.allMasterListYaml.edges.map(({ node }, ind) => (
                <tr
                  key={node.id}
                  data-sal="fade"
                  data-sal-duration="1000"
                  data-sal-easing="easeOutCirc"
                  >
                  <td>{data.allMasterListYaml.totalCount - ind}</td>
                  <td>
                    { node.spacecraftLink ? (
                      <Link to={node.spacecraftLink} className="no-underline">{node.spacecraftName}</Link>
                    ) : (
                      node.spacecraftName
                    )}
                  </td>
                  <td>{node.launchDate}</td>
                  <td>
                    { node.launcherLink ? (
                      <Link to={node.launcherLink} className="no-underline">{node.launcherName}</Link>
                    ) : (
                      node.launcherName
                    )}
                  </td>
                  <td>{node.orbitType}</td>
                  <td>{node.application}</td>
                  <td>{node.remarks}</td>
                </tr>
              ))}
            </tbody>
          </Table>

        </Container>


        <Separator />
        <h3 className="mb-2 text-center">Related</h3>
        <Row>
          <Col md>
            <div className="py-1">
              <ListGroup variant="flush">
                { data.allSpacecraftTypesYaml.edges.map( ({ node }, i) =>
                  i % 2 === 0 &&
                    <ListGroup.Item action href={node.slug} key={node.id}>
                      {node.title}
                      <ChevronRight style={{ float: `right`}}/>
                    </ListGroup.Item>
                )}
              </ListGroup>
            </div>
          </Col>

          <Col md>
            <div className="py-1">
              <ListGroup variant="flush">
                { data.allSpacecraftTypesYaml.edges.map( ({ node }, i) =>
                  i % 2 === 1 &&
                    <ListGroup.Item action href={node.slug} key={node.id}>
                      {node.title}
                      <ChevronRight style={{ float: `right`}}/>
                    </ListGroup.Item>
                )}
              </ListGroup>
            </div>
          </Col>
        </Row>



      </Container>




    </Layout>
  )

}
