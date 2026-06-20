import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const NotFoundPage = ({ data }) => (
  <Layout>
    {/* <SEO title="404: Not found" /> */}

    <div style={{
      position: `absolute`,
      top: `40%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      textAlign: `center`,
      width: `100%`,
    }}>
      <h1 className="display-4 mb-1">Oops!</h1>
      <h2>Page Not Found</h2>
    </div>

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
