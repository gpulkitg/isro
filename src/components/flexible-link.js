import React from 'react'
import { Link } from 'gatsby'

export default function FlexibleLink({ url, children, ...rest }) {

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
      <a href={url} target="_blank" {...rest}>{children}</a>
    ) : (
      <Link to={url} {...rest}>{children}</Link>
    )
  )
}
