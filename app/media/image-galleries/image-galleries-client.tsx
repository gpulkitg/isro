"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import Separator from "@/components/separator";

type GalleryItem = {
  title: string;
  slug: string;
  imageUrl: string;
};

export default function ImageGalleriesClient({
  items,
}: {
  items: GalleryItem[];
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const displayed = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => item.title.toLowerCase().includes(q));
  }, [items, searchQuery]);

  return (
    <Container>
      <Separator title="All Image Galleries" />

      <Form
        className="mb-2"
        onSubmit={(e) => e.preventDefault()}
        role="search"
      >
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
            <Col key={item.slug} lg={4} md={6} className="mb-2">
              <div className="card card-brighten h-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="card-brighten-img card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.title}</h5>
                  <Link
                    href={item.slug}
                    className="stretched-link"
                    aria-label={item.title}
                  />
                </div>
              </div>
            </Col>
          ))
        ) : (
          <Col>
            <p className="text-center text-secondary">
              No galleries match your search.
            </p>
          </Col>
        )}
      </Row>
    </Container>
  );
}
