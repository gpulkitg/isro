"use client";

import { useMemo, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { assetUrl } from "@/lib/content/assets";

export type UpdateItem = {
  id: string;
  title: string;
  year: string;
  date: string;
  sortKey: string;
  image: string | null;
};

type Props = {
  items: UpdateItem[];
  years: string[];
  cover: string;
};

export default function UpdatesClient({ items, years, cover }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [displayYear, setDisplayYear] = useState(years[0] ?? "");

  // Replicate the legacy filter behavior: when a search query is present, match
  // titles across all updates; otherwise filter the list down to the selected
  // year.
  const displayedUpdates = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      return items.filter((u) => u.title.toLowerCase().includes(q));
    }
    return items.filter((u) => u.year === displayYear);
  }, [items, searchQuery, displayYear]);

  return (
    <>
      <div className="position-relative w-100 mb-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetUrl(cover)}
          alt="Updates"
          className="w-100"
          style={{
            opacity: 0.5,
            objectFit: "cover",
            maxHeight: "400px",
            width: "100%",
            height: "auto",
          }}
        />
        <h1
          className="text-center display-4"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Updates
        </h1>
      </div>

      <div className="my-2" />

      <Container>
        <Form className="mb-2" onSubmit={(e) => e.preventDefault()}>
          <Row className="d-flex justify-content-center g-2">
            <Form.Group as={Col} controlId="formSearch" md={8}>
              <Form.Control
                placeholder="Type to search"
                name="searchQuery"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formSelect" md={4}>
              <Form.Select
                onChange={(e) => setDisplayYear(e.target.value)}
                name="displayYear"
                value={displayYear}
                disabled={searchQuery.trim().length > 0}
              >
                {years.map((year) => (
                  <option value={year} key={year}>
                    {year}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>
        </Form>

        {displayedUpdates.length === 0 && (
          <p className="text-center text-secondary py-3">No updates found.</p>
        )}

        {displayedUpdates.map((node) => (
          <Row
            className="py-2"
            key={node.id}
            style={{ borderBottom: "1px solid gray" }}
          >
            <Col md={3}>
              {node.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={assetUrl(node.image)}
                  alt={node.title}
                  className="img-fluid"
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                />
              )}
            </Col>

            <Col className="py-1" md={9}>
              <h6 className="text-info">{node.date}</h6>
              <h4>{node.title}</h4>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
}
