import React from "react"


import { Container } from 'react-bootstrap'
import SEO from '../components/seo'
import Layout from "../components/layout"
import Separator from '../components/separator'


export default function TermsOfUse() {

  return (

    <Layout>

      <SEO title="Terms of Use" />

      <Separator />
      <h2 className="text-center mb-2">Terms of Use</h2>

      <Container>
        <p>
          By accessing this website, you agree that ISRO will not be liable for any direct or indirect loss arising from the use of the information and the material contained in this website.
        </p>
        <p>
          The copyright of the material of ISRO contained in this website belongs to and remains solely with ISRO. If any user is interested to use the material of ISRO featured in this Website, then, the user is required to take the permission from ISRO. Nevertheless, the material has to be reproduced accurately and not to be used in a derogatory manner or in a misleading context. Users are requested to acknowledge appropriately for the material used.
        </p>
        <p>
          These terms and conditions shall be governed by and construed in accordance with the Indian Laws. Any dispute arising under these terms and conditions shall be subject to the exclusive jurisdiction of the courts of India.
        </p>
        <p>
          This Website provides links to other web pages that are not part of ISRO domain, ISRO does not exercise any control over the information on these external links. External links are provided for your convenience and for reasons consistent with ISRO's mission. Once you link to another site, you are subject to the privacy policy of that new site.
        </p>
      </Container>


    </Layout>

  )

}
