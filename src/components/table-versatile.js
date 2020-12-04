import React from 'react'
import { Link } from 'gatsby'
import Table from 'react-bootstrap/Table'
import LinkVersatile from './link-versatile'
import { FileEarmark } from 'react-bootstrap-icons'


const ColVersatile = ({ col }) => {
  if (col.link) {
    return (
      <LinkVersatile url={col.link} className="no-underline">
        { col.text ? col.text : col.link }
      </LinkVersatile>
    )
  } else if (col.doc) {
    return (
      <a href={col.doc.publicURL} className="no-underline" target="_blank">
        { col.text ? col.text : col.doc.name+col.doc.ext }{" "}<FileEarmark />
      </a>
    )
  } else if (col.date) {
    return col.date
  } else {
    return col.text
  }

}



export default function TableVersatile({ data }) {

  return (
      <Table variant="dark" className="table-custom-border" responsive>
        { data.hasOwnProperty('head') &&
          <thead>
            <tr>
              { data.head.map( ({col},i) =>
                <th key={`head_th_${i}`}>
                  <ColVersatile col={col} />
                </th>
              )}
            </tr>
          </thead>
        }

        <tbody>
          { data.hasOwnProperty('body') &&
              data.body.map( ({row},i) =>
                <tr key={`body_tr_${i}`}>
                  {row.map( ({col},j) => (
                    <td key={`body_td_${j}`}>
                      <ColVersatile col={col} />
                    </td>
                  ))}
                </tr>
              )
          }
        </tbody>

      </Table>

  )

}
