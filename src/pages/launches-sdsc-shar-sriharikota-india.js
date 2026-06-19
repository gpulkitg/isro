import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'

import { Container, Table } from 'react-bootstrap'
import VisibilitySensor from 'react-visibility-sensor'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Separator from '../components/separator'
import Sensor from '../components/sensor'


export const query = graphql`
  query {
    allMasterListYaml(filter: {launcherLink: {ne: ""}}, sort: {order: DESC, fields: launchDate}) {
      totalCount
  	  edges {
  	    node {
          id
  	      launcherName
          launcherLink
          spacecraftName
          spacecraftLink
          launchDate(formatString: "MMM D, YYYY")
          launcherType
          remarks
  	    }
  	  }
  	}
  }
`



export default function LaunchesSDSC({ data }) {

  return (
    <Layout>
      <SEO title="Launches from SDSC SHAR, Sriharikota, India" />

      <Separator />

      <Sensor>
        <h2 className="text-center mb-2">Launches from SDSC SHAR, Sriharikota, India</h2>

        <Container>
          <Table variant="dark" responsive>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Launch Date</th>
                <th>Launcher Type</th>
                <th>Payload</th>
                <th>Remarks</th>
              </tr>
            </thead>

            <tbody>
              { data.allMasterListYaml.edges.map(({ node }, ind) =>
                <tr
                  key={node.id}
                  data-sal="fade"
                  data-sal-duration="1000"
                  data-sal-easing="easeOutCirc"
                  >
                  <td>{data.allMasterListYaml.totalCount-ind}</td>
                  <td>
                    { node.launcherLink ? (
                      <Link to={node.launcherLink} className="no-underline">{node.launcherName}</Link>
                    ) : (
                      node.launcherName
                    )}
                  </td>
                  <td>{node.launchDate}</td>
                  <td>{node.launcherType}</td>
                  <td>
                    { node.spacecraftLink ? (
                      <Link to={node.spacecraftLink} className="no-underline">{node.spacecraftName}</Link>
                    ) : (
                      node.spacecraftName
                    )}
                  </td>
                  <td>{node.remarks}</td>
                </tr>
              )}
            </tbody>

          </Table>
        </Container>

      </Sensor>

    </Layout>
  )


}
