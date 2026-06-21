"use client";

import { useMemo, useState } from "react";
import { Container, Form, Row, Col, Table } from "react-bootstrap";
import LinkVersatile from "@/components/link-versatile";
import { assetUrl } from "@/lib/content/assets";

export type CareerOpening = {
  id?: string;
  centre: string;
  location: string;
  post: string;
  remarks?: string;
  link: string;
  deadline?: string;
};

// Filter labels mirror the legacy page; index 0 is the "all" sentinel and the
// remaining entries are matched against the opening's centre/location via
// substring inclusion (the YAML values carry trailing context the labels omit).
const CENTRES = [
  "सभी केंद्र / All Centres",
  "केंद्रीकृत भर्ती (आई.सी.आर.बी.) / Centralised Recruitment (ICRB)",
  "अंतरिक्ष विभाग (अं.वि.) / Department of Space (DOS)",
];

const LOCATIONS = [
  "सभी स्‍थान / All Locations",
  "बेंगलूर / Bengaluru",
  "श्रीहरिकोटा / Sriharikota",
  "हैदराबाद / Hyderabad",
];

export default function CareersClient({
  openings,
  attentionPdf,
}: {
  openings: CareerOpening[];
  attentionPdf: string;
}) {
  const [selectedCentre, setSelectedCentre] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState(0);

  const displayed = useMemo(() => {
    let matches = openings;
    if (selectedCentre > 0) {
      matches = matches.filter((o) => o.centre.includes(CENTRES[selectedCentre]));
    }
    if (selectedLocation > 0) {
      matches = matches.filter((o) =>
        o.location.includes(LOCATIONS[selectedLocation])
      );
    }
    return matches;
  }, [openings, selectedCentre, selectedLocation]);

  return (
    <Container>
      <Form className="mb-2">
        <Row className="d-flex justify-content-center g-2">
          <Form.Group as={Col} controlId="selectCentre" md>
            <Form.Label>Select Centre</Form.Label>
            <Form.Select
              name="centre"
              value={selectedCentre}
              onChange={(e) => setSelectedCentre(Number(e.target.value))}
            >
              {CENTRES.map((centre, ind) => (
                <option value={ind} key={ind}>
                  {centre}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="selectLocation" md>
            <Form.Label>Select Location</Form.Label>
            <Form.Select
              name="location"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(Number(e.target.value))}
            >
              {LOCATIONS.map((location, ind) => (
                <option value={ind} key={ind}>
                  {location}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="d-flex justify-content-center g-2">
          <Form.Group as={Col} md className="text-center my-auto py-1">
            <a
              href="https://liveregister.isro.gov.in/LRC"
              target="_blank"
              rel="noreferrer external"
            >
              Live Register for Ph.D and PG Candidates
            </a>
          </Form.Group>
        </Row>
      </Form>

      <div className="mb-2">
        <a
          href={assetUrl(attentionPdf)}
          className="no-underline"
          target="_blank"
          rel="noreferrer"
        >
          <h2 className="text-center text-danger">ATTENTION JOB APPLICANTS</h2>
        </a>
      </div>

      {displayed.length > 0 ? (
        <Table variant="dark" responsive>
          <thead>
            <tr>
              <th>इसरो केंद्र / ISRO Centre</th>
              <th>स्‍थान / Location</th>
              <th>पद / Post</th>
              <th>समयसीमा / Deadline</th>
            </tr>
          </thead>
          <tbody>
            {displayed.map((o, ind) => (
              <tr key={o.id ?? ind}>
                <td>{o.centre}</td>
                <td>{o.location}</td>
                <td>
                  <LinkVersatile url={o.link} className="no-underline">
                    {o.post}
                  </LinkVersatile>
                </td>
                <td>{o.deadline}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h4 className="text-center text-muted py-4">No openings found</h4>
      )}
    </Container>
  );
}
