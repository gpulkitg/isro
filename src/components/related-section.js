import React from 'react'

import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
// import VisibilitySensor from 'react-visibility-sensor'

import Separator from './separator'



export default function RelatedSection({ otherLinks, docs, galleriesImage, galleriesVideo, updates }) {

  return (

    <Container>

      <Separator title="Related" />
      <Row>
        <Col md>
          <div className="py-1">
            <h3 className="mb-2">Links</h3>
            <ListGroup variant="flush">
              { otherLinks && otherLinks.map( (item, i) =>
                <ListGroup.Item
                  key={`otherLinks_${i}`}
                  action href={item.link}
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-easing="easeOutCirc"
                  >
                  {item.text}
                  <ChevronRight style={{ float: `right`}}/>
                </ListGroup.Item>
                // {/* <OtherLinksItemWithSensor item={item} key={`otherLinks_${i}`} /> */}
              )}
            </ListGroup>
          </div>
        </Col>

        <Col md >
          <div className="py-1">
            <h3 className="mb-2">Docs</h3>
            <ListGroup variant="flush">
              { docs && docs.map( (item, i) =>
                <ListGroup.Item
                  key={`docs_${i}`}
                  action href={item.doc.publicURL}
                  target="_blank"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-easing="easeOutCirc"
                  >
                  {item.text}
                  <ChevronRight style={{ float: `right`}}/>
                </ListGroup.Item>
                // <DocsItemWithSensor item={item} key={`docs_${i}`} />
              )}
            </ListGroup>
          </div>
        </Col>

        <Col md >
          <div className="py-1">
            <h3 className="mb-2">Media</h3>
            <ListGroup variant="flush">
              { galleriesImage && galleriesImage.edges.map( ({ node }, i) =>
                <ListGroup.Item
                  key={node.id}
                  action href={node.slug}
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-easing="easeOutCirc"
                  >
                  {node.title}
                  <ChevronRight style={{ float: `right`}}/>
                </ListGroup.Item>
                // <GalleriesImageItemWithSensor node={ node } key={node.id} />
              )}
              { galleriesVideo && galleriesVideo.edges.map( ({ node }, i) =>
                <ListGroup.Item
                  key={node.id}
                  action href={node.video.publicURL}
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-easing="easeOutCirc"
                  >
                  {node.title}
                  <ChevronRight style={{ float: `right`}}/>
                </ListGroup.Item>
                // <GalleriesVideoItemWithSensor node={ node } key={node.id} />
              )}
            </ListGroup>
          </div>
        </Col>

      </Row>



      <Row>
        <Col>
          <div className="py-1">
            <h3 className="mb-2">Latest News</h3>
            <ListGroup variant="flush">
              { updates && updates.edges.map( ({ node }) =>
                <ListGroup.Item
                  key={node.id}
                  action href={node.slug}
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-easing="easeOutCirc"
                  >
                  <p className="text-info">{node.date}</p>{node.title}
                  <ChevronRight style={{ float: `right`}}/>
                </ListGroup.Item>
                // <UpdatesItemWithSensor node={ node }  />
              )}
            </ListGroup>
          </div>
        </Col>
      </Row>


    </Container>

  )

}


// const OtherLinksItemWithSensor = ({ item }) => {
//
//   const [visible, setVisible] = useState(false)
//   const handleOnChange = (isVisible) => (
//     setVisible(isVisible)
//   )
//
//   return (
//     <VisibilitySensor active={!visible} onChange={handleOnChange}>
//       <ListGroup.Item action href={item.link} className={visible ? "animate-slideup" : "opacity-zero"}>
//         {item.text}
//         <ChevronRight style={{ float: `right`}}/>
//       </ListGroup.Item>
//     </VisibilitySensor>
//   )
// }
//
//
//
// const DocsItemWithSensor = ({ item }) => {
//
//   const [visible, setVisible] = useState(false)
//   const handleOnChange = (isVisible) => (
//     setVisible(isVisible)
//   )
//
//   return (
//     <VisibilitySensor active={!visible} onChange={handleOnChange}>
//       <ListGroup.Item action href={item.doc.publicURL} target="_blank" className={visible ? "animate-slideup" : "opacity-zero"}>
//         {item.text}
//         <ChevronRight style={{ float: `right`}}/>
//       </ListGroup.Item>
//     </VisibilitySensor>
//   )
// }
//
// const GalleriesImageItemWithSensor = ({ node }) => {
//
//   const [visible, setVisible] = useState(false)
//   const handleOnChange = (isVisible) => (
//     setVisible(isVisible)
//   )
//
//   return (
//     <VisibilitySensor active={!visible} onChange={handleOnChange}>
//       <ListGroup.Item action href={node.slug} className={visible ? "animate-slideup" : "opacity-zero"}>
//         {node.title}
//         <ChevronRight style={{ float: `right`}}/>
//       </ListGroup.Item>
//     </VisibilitySensor>
//   )
//
// }
//
// const GalleriesVideoItemWithSensor = ({ node }) => {
//
//   const [visible, setVisible] = useState(false)
//   const handleOnChange = (isVisible) => (
//     setVisible(isVisible)
//   )
//
//   return (
//     <VisibilitySensor active={!visible} onChange={handleOnChange}>
//       <ListGroup.Item action href={node.video.publicURL} className={visible ? "animate-slideup" : "opacity-zero"}>
//         {node.title}
//         <ChevronRight style={{ float: `right`}}/>
//       </ListGroup.Item>
//     </VisibilitySensor>
//   )
//
// }
//
// const UpdatesItemWithSensor = ({ node }) => {
//
//   const [visible, setVisible] = useState(false)
//   const handleOnChange = (isVisible) => (
//     setVisible(isVisible)
//   )
//
//   return (
//     <VisibilitySensor active={!visible} onChange={handleOnChange}>
//       <ListGroup.Item action href={node.slug} className={visible ? "animate-slideup" : "opacity-zero"}>
//         <p className="text-info">{node.date}</p>{node.title}
//         <ChevronRight style={{ float: `right`}}/>
//       </ListGroup.Item>
//     </VisibilitySensor>
//   )
//
// }
