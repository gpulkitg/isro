import React, { useState } from 'react'
// import { Link } from 'gatsby'
import Table from 'react-bootstrap/Table'
import { FileEarmark } from 'react-bootstrap-icons'
// import VisibilitySensor from 'react-visibility-sensor'

import LinkVersatile from './link-versatile'


const ColEntry = ({ col }) => {
  if (col.link) {
    return (
      <LinkVersatile url={col.link} className="no-underline">
        { col.text ? col.text : col.link }
      </LinkVersatile>
    )
  } else if (col.doc) {
    return (
      <a href={col.doc.publicURL} className="no-underline" target="_blank" rel="noreferrer">
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
      <Table variant="dark" responsive>

        { data.head &&
          <thead>
            <tr
              data-sal="fade"
              data-sal-duration="1000"
              data-sal-easing="easeOutCirc"
              >
              { data.head.map( ({col},i) =>
                <th key={`head_th_${i}`}>
                  <ColEntry col={col} />
                </th>
              )}
            </tr>
          </thead>
        }

        <tbody>
          { data.body &&
            data.body.map( ({row},i) =>
              <tr
                key={`body_tr_${i}`}
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="easeOutCirc"
                >
                {row.map( ({col},j) =>
                  <td key={`body_td_${j}`}>
                    <ColEntry col={col}/>
                  </td>
                )}
              </tr>
              // <RowWithSensor row={row} key={`body_tr_${i}`} />
          )}
        </tbody>

      </Table>
  )

}

// const ColEntryWithSensor = ({ col }) => {
//
//   const [visible, setVisible] = useState(false)
//   const handleOnChange = (isVisible) => (
//     setVisible(isVisible)
//   )
//
//   return (
//     <VisibilitySensor active={!visible} onChange={handleOnChange}>
//       <div className={visible ? "animate-appear" : "opacity-zero"}>
//         <ColEntry col={col} />
//       </div>
//     </VisibilitySensor>
//   )
//
// }

// const RowWithSensor = ({ row }) => {
//
//   const [visible, setVisible] = useState(false)
//   const handleOnChange = (isVisible) => (
//     setVisible(isVisible)
//   )
//
//   return (
//     <VisibilitySensor active={!visible} onChange={handleOnChange}>
//       <tr className={visible ? "animate-appear" : "opacity-zero"}>
//         {row.map( ({col},j) =>
//           <td key={`body_td_${j}`}>
//             <ColEntry col={col}/>
//           </td>
//         )}
//       </tr>
//     </VisibilitySensor>
//   )
//
// }
