import React from 'react'
// import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TextContent from '../components/text-content'
import Separator from '../components/separator'

import satcomPolicy from "../docs/indias-space-policy/satcom-policy.pdf"
import satcomNGP from '../docs/indias-space-policy/satcom-ngp.pdf'
import applicationFormat from "../docs/indias-space-policy/caiss-6_application_format_08-07-2016.pdf"

// export const query = graphql`
//   query {
//     indiasSpacePolicyYaml {
//       seo {
//         title
//       }
//       sections {
//         title
//         text
//       }
//     }
//   }
// `


export default function IndiasSpacePolicy({ data }) {

  return (

    <Layout withBgImg={true}>

      <SEO title="India's Space Policy" />

      <Separator />
      <h1 className="text-center mb-3">India's Space Policy</h1>


      {/* { data.indiasSpacePolicyYaml.sections.map((section, ind) => (
        <TextContent title={section.title} key={`sections_${ind}`}>
          <div dangerouslySetInnerHTML={{ __html: section.text }} />
        </TextContent>
      ))} */}

      <TextContent title="Satellite Communication">

        <div className="mb-2">
          <h4 className="mb-1">Policy</h4>
          <div className="mb-1">
            <a href={satcomPolicy} target="_blank" rel="noreferrer">
              Satcom Policy
            </a>
          </div>
          <div>
            <a href={satcomNGP} target="_blank" rel="noreferrer">
              The norms, guidelines and procedures for implementation of the policy frame-work for satellite communications in India
            </a>
          </div>
        </div>

        <div>
          <h4  className="mb-1">Registering an Indian Satellite System</h4>
          <div>
            <a href={applicationFormat} target="_blank" rel="noreferrer">
              Application Format and Guidelines for Registering an Indian Satellite System
            </a>
          </div>
        </div>

      </TextContent>


      <TextContent title="Remote Sensing">
        <p>
          Recognising that Remote Sensing data provides much essential and critical information - which is an input for developmental activities at different levels, and is also of benefit to society.
        </p>

        <p>
          Noting that a large number of users - both within and outside government, use Remote Sensing data from Indian and foreign remote sensing satellites for various developmental applications.
        </p>

        <p>
          Taking into consideration the recent availability of very high-resolution images, from foreign and commercial remote sensing satellites, and noting the need for proper and better management of the data acquisition/ distribution from these satellites in India.
        </p>

        <p>
          Recognising that national interest is paramount, and that security consideration of the country needs to be given utmost importance.
        </p>

        <p>
          The Government of India adopts the Remote Sensing Data Policy (RSDP) -
          2011 containing modalities for managing and/ or permitting the acquisition / dissemination of remote sensing data in support of developmental activities.
          Department of Space (DOS) of the Government of India shall be the nodal  agency for all actions under this policy, unless otherwise stated.
        </p>

        <ol>
          <li>
            For operating a remote sensing satellite from India, license and/ or permission of the Government, through the nodal agency, shall be necessary.
            <ul>
              <li>
                As a national commitment and as a “public good”, Government assures a continuous and improved observing/ imaging capability from its own Indian Remote Sensing Satellites (IRS) programme.
              </li>
              <li>
                The Government, through the nodal agency, shall be the sole and exclusive owner of all data collected/ received from IRS. All users will be provided with only a license to use the said data, and add value to the satellite data.
              </li>
              <li>
                Government reserves the right to impose control over imaging tasks and distribution of data from IRS or any other Indian remote sensing satellite, when it is of the opinion that national security and/ or international obligations and/ or foreign policies of the Government so require.
              </li>
            </ul>
          </li>

          <li>
            For acquisition/ distribution of remote sensing data within India, license/ permission from the Government of India, through the nodal agency, shall be necessary.
            <ul>
              <li>
                Government reserves the right to select and permit agencies to acquire/ distribute satellite remote sensing data in India. DOS shall be competent to decide on the procedure for granting license/ permission for dissemination of such data, and for the levy of necessary fees.
              </li>
              <li>
                To cater to the developmental needs of the country, the National Remote Sensing Centre (NRSC) of the Indian Space Research Organisation (ISRO)/ DOS is vested with the authority to acquire and disseminate all satellite remote sensing data in India, both from Indian and foreign satellites.
                <ul>
                  <li>
                    NRSC shall enter into appropriate arrangements with DOS for acquiring/ distributing data from IRS within the visibility circle of NRSC’s receiving station(s).
                  </li>
                  <li>
                    NRSC and/ or Antrix Corporation Ltd., shall be competent to enter into agreements with foreign satellite operator(s) for acquisition/distribution of foreign satellite data in India. However, NRSC will distribute the data as per terms agreed to with Antrix Corporation Ltd.
                  </li>
                </ul>
              </li>
              <li>
                NRSC shall maintain a systematic National Remote Sensing Data Archive, and a log of all acquisitions/ sales of data for all satellites.
              </li>
            </ul>
          </li>

          <li>
            For acquisition and distribution of IRS data for use in countries other than India, the Government of India, through the nodal agency, shall grant license to such bodies/ agencies of those countries as are interested in the acquisition/ distribution of IRS data, as per specific procedures.
            <ul>
              <li>
                The Antrix Corporation Ltd. (of DOS) is vested with the authority for receiving the applications for grant of license for acquisition/ distribution of IRS data outside of India; to consider and decide on the granting of license within the policy considerations of the Government, and to enter into licensing agreements with the prospective users on behalf of the Government. Antrix Corporation Ltd. shall also be competent to levy such fees for granting licenses as may be considered appropriate by it. It shall also be responsible, where necessary, for rendering any further help/ guidance needed by the license.
              </li>
              <li>
                The Government reserves right to impose restrictions over imaging tasks and distribution of IRS data in any country when it is of the opinion that national security and/ or international obligations and/ or foreign policies of the Government so require.
              </li>
            </ul>
          </li>

          <li>
            The Government prescribes the following guidelines to be adopted for dissemination of satellite remote sensing data in India:
            <ul>
              <li>
                All data of resolutions up to 1 m shall be distributed on a non-discriminatory basis and on “as requested basis”
              </li>
              <li>
                With a view to protect national security interests, all data of better than 1 m resolution shall be screened and cleared by the appropriate agency prior to distribution; and the following procedure shall be followed:
                  <ol>
                    <li>
                      Government users namely, Ministries/ Departments/ Public Sector/ Autonomous Bodies/ Government R&D institutions/ Government Educational/ Academic Institutions, can obtain the data without any further clearance.
                    </li>
                    <li>
                      Private sector agencies, recommended at least by one Government agency, for supporting development activities, can obtain the data without any further clearance.
                    </li>
                    <li>
                      Private sector agencies, recommended at least by one Government agency, for supporting development activities, can obtain the data without any further clearance.
                    </li>
                    <li>
                      Specific requests for data of sensitive areas, by any user, can be serviced only after obtaining clearance from the HRC.
                    </li>
                    <li>
                      Specific sale/ non-disclosure agreements to be concluded between NRSC and other users for data of better than 1 m resolution.
                    </li>
                  </ol>
              </li>
            </ul>
          </li>

          <li>
            This Policy (RSDP-2011) comes into effect immediately, and may be reviewed from time-to-time-by Government.
          </li>
        </ol>

      </TextContent>


    </Layout>


  )


}
