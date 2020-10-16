import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SpacecraftsLanding from '../components/spacecrafts-landing'

const SpacecraftsPage = () => (
  <Layout>
    <SEO title="Spacecrafts" />
    <SpacecraftsLanding />
  </Layout>
)

export default SpacecraftsPage
