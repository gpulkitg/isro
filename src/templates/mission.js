import React from 'react'

import { Container, CardDeck, Button } from 'react-bootstrap'

import Layout from '../components/layout'
import SEO from '../components/seo'
import JumbotronImg from '../components/jumbotron-img'
import CardGlow from '../components/card-glow'
import LightboxGallery from '../components/lightbox-gallery'
import TextContent from '../components/text-content'
import SplitSection from '../components/split-section'


export default function Mission({ data }) {


  const {
    seo,
    jumbotronImg,
    splitSection,
    textContent1,
    cardDeck,
    gallery,
    textContent2,
  } = data


  return (

    <Layout>

      <SEO title={seo.title} />

      { jumbotronImg && jumbotronImg.map((item, ind) => (
        <JumbotronImg
          key={`jumbotronImg_${ind}`}
          imgSrc={item.imgSrc}
          horizontalPosition={item.horizontalPosition}
          verticalPosition={item.verticalPosition}
          contentAlignment={item.contentAlignment}
          >
          <h1 className="mb-4 display-4">{item.title}</h1>
          <h3 className="mb-4">{item.subtitle}</h3>
          <div className="mb-4">
            <Button href={item.link} variant="outline-light" className="btn-jumbotron">{item.button}</Button>
          </div>
        </JumbotronImg>
      )) }


      <Container>


        { splitSection && splitSection.map((item,ind) => (
          <SplitSection key={`splitSection_${ind}`} imgSrc={item.imgSrc} imgObjectFit="cover" textPosition="right" textAlignment="center">
            <h2 className="mb-4 display-4">{item.title}</h2>
            <h3 className="mb-4">{item.description}</h3>
            <div>
              <Button href={item.link} variant="outline-light" className="btn-jumbotron">{item.button}</Button>
            </div>
          </SplitSection>
        ))}

        <TextContent title={textContent1.title}>
          { textContent1.content.map((para, ind) => (
            <p key={`textContent1_${ind}`}>{para}</p>
          ))}

          { textContent1.objectives &&
            <>
            <br />
            <h4 className="mb-4">Mission Objectives</h4>
            <ul>
              {textContent1.objectives.map((objective, ind) => (
                <li key={`objectives_${ind}`}>{objective}</li>
              ))}
            </ul>
            </>
          }
        </TextContent>


        <div className="text-center mb-4">
          <h2>Mission components</h2>
        </div>

        <CardDeck>

          { cardDeck.map((card, ind) => (
            <CardGlow
              key={`cardDeck_${ind}`}
              title={card.title}
              imgSrc={card.imgSrc}
              alt={card.alt}
              // subtitle="PSLV C-25"
              text={card.text}
              link={card.link}
             />
          ))}

        </CardDeck>

      </Container>

      <br />
      <br />

      <div className="text-center mb-4">
        <h2>Image Gallery</h2>
      </div>

      <div className="px-1">
        <LightboxGallery photos={gallery.photos} columns={2} />
        {/* <Gallery images={[mom_gallery1, mom_gallery2]}/> */}
      </div>

      <div className="my-4 text-center">
        <Button href={gallery.link} variant="outline-light" className="btn-jumbotron">More Images</Button>
      </div>


      {/* <div className="d-flex flex-wrap justify-content-around align-items-start">
        <div className="p-4 w-50 border border-primary" >
          <Image src={mom_gallery1} style={{ 'box-shadow': `0 0 2px 2px white`, width: `100%`}} />
        </div>
        <div className="p-4 w-50 border border-primary" >
          <Image src={mom_gallery2} style={{ 'box-shadow': `0 0 2px 2px white`, width: `100%` }} />
        </div>
      </div> */}

      <Container>
        { textContent2 &&
          <TextContent title={textContent2.title}>
            { textContent2.content.map((para, ind) => (
              <p key={`textContent2_${ind}`}>{para}</p>
            ))}
          </TextContent>
        }
      </Container>



    </Layout>

  )
}
