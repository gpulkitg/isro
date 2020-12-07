import React from 'react'
import { Link, graphql } from 'gatsby'

import { Container, Table } from 'react-bootstrap'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Separator from '../components/separator'


export const query = graphql`
  query {
    allMasterListYaml(sort: {order: DESC, fields: launchDate}) {
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


export default function ListOfSpacecrafts({ data }) {

  return (
    <Layout>
      <SEO title="List of Spacecrafts" />

      <Separator />
      <h1 className="text-center mb-2">List of Spacecrafts</h1>

      <Container>
        <Table variant="dark" className="table-custom-border" responsive>
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
              <tr key={node.id}>
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

    </Layout>
  )


}
