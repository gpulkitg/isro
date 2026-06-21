"use client";

import { useMemo, useState } from "react";
import { Container, Form, Row, Col, Table } from "react-bootstrap";
import { FileEarmark } from "react-bootstrap-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export type TenderRow = {
  advertiser: string;
  advertisementNo: string;
  startDate: string;
  endDate: string;
  docUrl: string;
  docName: string;
  docExt: string;
};

// Index 0 = "All advertisers"; indexes 1+ are matched against each tender's
// advertiser string (substring match), mirroring the legacy page.
const ADVERTISERS = [
  "सभी विज्ञापनकर्ता / All advertisers",
  "अंतरिक्ष उपयोग केंद्र (सैक), अहमदाबाद - 380 015 / Space Applications Centre (SAC), Ahmedabad - 380 015",
  "इसरो दूरमिति अनुवर्तन और आदेश नेटवर्क (इस्‍ट्रैक), ए.1-6, पीण्‍या औद्योगिक क्षेत्र, बेंगलूर - 560 058 / ISRO Telemetry Tracking and Command Network (ISTRAC), A1-6, Peenya Industrial Estate, Bangalore - 560 058",
  "यू.आर. राव उपग्रह केंद्र, (यू.आर.एस.सी.), एयरपोर्ट रोड, विमानपुरा पोस्‍ट, बेंगलूर - 560 017 / U R Rao Satellite Centre,(URSC), Airport Road, Vima napura Post, Bangalore - 560 017",
  "निर्माण एवं अनुरक्षण समूह (सी.एम.जी.), यू.आर. राव उपग्रह केंद्र, (यू.आर.एस.सी.), एयरपोर्ट रोड, विमानपुरा पोस्‍ट, बेंगलूर - 560 017 / Construction and Maintenance Group(CMG), U R Rao Satellite Centre (URSC)",
];

export default function TendersClient({ tenders }: { tenders: TenderRow[] }) {
  const [selectedAdvertiser, setSelectedAdvertiser] = useState(0);
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const displayedTenders = useMemo(() => {
    if (selectedAdvertiser > 0) {
      return tenders.filter((t) =>
        t.advertiser.includes(ADVERTISERS[selectedAdvertiser])
      );
    }
    return tenders;
  }, [selectedAdvertiser, tenders]);

  return (
    <Container>
      <Form className="mb-2">
        <Row className="d-flex justify-content-center g-2">
          <Form.Group as={Col} controlId="selectCentre" md>
            <Form.Label>विज्ञापनकर्ता / Advertiser</Form.Label>
            <Form.Select
              name="centre"
              value={selectedAdvertiser}
              onChange={(e) => setSelectedAdvertiser(Number(e.target.value))}
            >
              {ADVERTISERS.map((advertiser, ind) => (
                <option value={ind} key={ind}>
                  {advertiser}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="d-flex justify-content-center g-2">
          <Form.Group as={Col} controlId="selectStartDate" md>
            <Form.Label>निविदा प्रारंभ दिनांक / Tender Start Date</Form.Label>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
              className="form-control"
              wrapperClassName="d-block"
            />
          </Form.Group>
        </Row>
      </Form>

      {displayedTenders.length > 0 ? (
        <Table variant="dark" responsive>
          <thead>
            <tr>
              <th style={{ width: "33.33%" }}>विज्ञापनकर्ता / Advertiser</th>
              <th style={{ width: "16.66%" }}>सविज्ञापन संख्या / Advt. No.</th>
              <th style={{ width: "16.66%" }}>निविदा प्रारंभ दिनांक / Tender Start Date</th>
              <th style={{ width: "16.66%" }}>निविदा अंतिम दिनांक / Tender End Date</th>
              <th style={{ width: "16.66%" }}>निविदा/शुद्धिपत्र Tender/Corrigendum</th>
            </tr>
          </thead>
          <tbody>
            {displayedTenders.map((node, ind) => (
              <tr key={`${node.advertisementNo}-${ind}`}>
                <td>{node.advertiser}</td>
                <td>
                  <a
                    href={node.docUrl}
                    className="no-underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {node.advertisementNo}
                  </a>
                </td>
                <td>{node.startDate}</td>
                <td>{node.endDate}</td>
                <td>
                  <a
                    href={node.docUrl}
                    className="no-underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {node.docName}
                    {node.docExt} <FileEarmark />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h4 className="text-center text-muted py-4">No tenders found</h4>
      )}
    </Container>
  );
}
