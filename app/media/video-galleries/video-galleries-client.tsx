"use client";

import { useMemo, useState } from "react";
import { Container, Row, Col, Form, Card, Modal } from "react-bootstrap";
import { PlayFill } from "react-bootstrap-icons";
import Separator from "@/components/separator";

export type VideoItem = {
  id: string;
  title: string;
  posterUrl: string;
  videoUrl: string;
};

export default function VideoGalleriesClient({ items }: { items: VideoItem[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentVideo, setCurrentVideo] = useState<VideoItem | null>(null);
  const [showModal, setShowModal] = useState(false);

  const displayed = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => item.title.toLowerCase().includes(q));
  }, [items, searchQuery]);

  const showVideo = (item: VideoItem) => {
    setCurrentVideo(item);
    setShowModal(true);
  };

  const hide = () => setShowModal(false);

  return (
    <Container>
      <Separator title="All Video Galleries" />

      <Form className="mb-2" onSubmit={(e) => e.preventDefault()}>
        <Row className="g-2">
          <Form.Group as={Col} controlId="formSearch">
            <Form.Control
              placeholder="Type to search"
              name="searchQuery"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Row>
      </Form>

      <Row>
        {displayed.length > 0 ? (
          displayed.map((item) => (
            <Col key={item.id} lg={4} md={6} className="mb-2">
              <Card className="card-brighten">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.posterUrl}
                  alt={item.title}
                  className="card-brighten-img"
                />
                <PlayFill
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "4em",
                    height: "4em",
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0 0 10px 2px rgba(0,0,0,1)",
                    borderRadius: "50%",
                    backgroundColor: "red",
                  }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{item.title}</Card.Title>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => showVideo(item)}
                    className="stretched-link"
                  />
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <h5 className="text-center">Sorry, no results found</h5>
          </Col>
        )}
      </Row>

      <Modal
        size="lg"
        aria-labelledby="modal-video-player"
        show={showModal}
        onHide={hide}
        centered
      >
        <Modal.Body>
          {currentVideo && (
            <video
              key={currentVideo.id}
              className="w-100 h-100"
              loop
              muted
              autoPlay
              controls
              playsInline
            >
              <source src={currentVideo.videoUrl} type="video/mp4" />
              Your browser does not support video tag
            </video>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}
