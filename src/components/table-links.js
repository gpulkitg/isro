import React from 'react'
import { Link } from 'gatsby'
import Table from 'react-bootstrap/Table'
import FlexibleLink from './flexible-link'
import { ChevronRight, FileEarmark } from 'react-bootstrap-icons'


export default function TableLinks({ data }) {

  return (
      <Table variant="dark" className="table-custom-border" responsive>
        { data.hasOwnProperty('head') &&
          <thead>
            <tr>
              { data.head.map( ({col},i) => <th key={`head_th_${i}`}>{col}</th>) }
            </tr>
          </thead>
        }

        <tbody>
          { data.hasOwnProperty('body') &&
              data.body.map( ({row},i) =>
                <tr key={`body_tr_${i}`}>
                  {row.map( ({col},j) => (
                    <td key={`body_td_${j}`}>
                      { col.link ? (
                        <FlexibleLink url={col.link}>
                          {col.text}
                        </FlexibleLink>
                      ) : (
                        col.text
                      )}
                      { col.date && col.date }
                      { col.doc &&
                        <a href={col.doc.publicURL} className="no-underline" target="_blank">
                          {col.doc.name}{col.doc.ext} <FileEarmark />
                        </a>
                        // <Link to={col.doc.publicURL} className="no-underline">
                        //   {col.doc.name}{col.doc.ext} <FileEarmark />
                        // </Link>

                      }
                    </td>
                  ))}
                </tr>
              )
          }
        </tbody>

      </Table>

  )

}
