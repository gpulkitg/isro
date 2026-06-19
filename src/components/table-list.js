import React from 'react'
import Table from 'react-bootstrap/Table'

export default function TableList({ data }) {

  return (
      <Table responsive>
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
                {row.map( ({col},j) => <td key={`body_td_${j}`}>{col}</td>)}
              </tr>)
          }
        </tbody>
        {/* { data.hasOwnProperty('head') &&
          <thead>
            <tr>
              { data.head.map( (h,i) => <th key={`head_th_${i}`}>{h}</th>) }
            </tr>
          </thead>
        }

        <tbody>
          { data.hasOwnProperty('body') &&
              data.body.map( (r,i) =>
              <tr key={`body_tr_${i}`}>
                {r.map( (d,j) => <td key={`body_td_${j}`}>{d}</td>)}
              </tr>)
          }
        </tbody> */}

      </Table>

  )

}
