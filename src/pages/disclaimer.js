import React from "react"


import { Container } from 'react-bootstrap'
import SEO from '../components/seo'
import Layout from "../components/layout"
import Separator from '../components/separator'


export default function Disclaimer() {

  return (

    <Layout>

      <SEO title="Disclaimer" />

      <Separator />
      <h2 className="text-center mb-2">Disclaimer</h2>

      <Container>
        <p>
          The information contained in this website has been prepared solely for the purpose of information dissemination about India's Space Programme. Though all efforts have been made to ensure the correctness and currentness of the content on this Website, the same should not be surmised as a statement of law or used for any legal purposes. ISRO is not responsible for any damages or loss incurred due to the usage of the information appeared in this website.
        </p>
      </Container>


    </Layout>

  )

}
