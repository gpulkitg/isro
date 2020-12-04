import React from 'react'
import { Link } from 'gatsby'

export default function LinkVersatile({ url, children, ...rest }) {

  function isExternalLink() {
    return url.startsWith("http")
  }

  // function isDocument() {
  //   return url.extension && url.extension === "pdf"
  // }
  //
  //
  // if (isExternalLink()) {
  //   return <a href={url} {...rest}>{children}</a>
  // } else if (isDocument()) {
  //   return <a href={url.publicURL} target="_blank">{children}</a>
  // } else {
  //   return <Link to={url} {...rest}>{children}</Link>
  // }


  return (
    isExternalLink() ? (
      <a href={url} target="_blank" rel="noreferrer external" {...rest}>{children}</a>
    ) : (
      <Link to={url} {...rest}>{children}</Link>
    )
  )
}
