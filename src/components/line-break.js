import React from 'react'

export default function LineBreak({ n }) {

  const breaks = []
  for (var i=0; i<n; i++) {
    breaks.push(<br />)
  }

  return (
    <>
    {breaks}
    </>
  )
}
