import React from "react"


import { Container } from 'react-bootstrap'
import SEO from '../components/seo'
import Layout from "../components/layout"
import Separator from '../components/separator'


export default function PrivacyPolicy() {

  return (

    <Layout>

      <SEO title="Privacy Policy" />

      <Separator />
      <h2 className="text-center mb-2">Privacy Policy</h2>

      <Container>
        <p>
          When user visits the website, contact information is available for sending the feedback by email. We do not rent, sell or share your personal information with any other third parties. We will not disclose users’ personal information with any other third parties unless:
        </p>
        <ul>
          <li>
            to help investigate, prevent or take action regarding unlawful and illegal activities, suspected fraud, potential threat to the safety or security of any person, violations of ISRO/DOS website in terms of use or to defend against legal claims;
          </li>
          <li>
            special circumstances such as compliance with subpoenas, court orders, requests/order from legal authorities or law enforcement agencies requiring such disclosure.
          </li>
        </ul>
      </Container>


    </Layout>

  )

}
