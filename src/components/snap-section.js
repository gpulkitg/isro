import React from 'react'


export default function SnapSection() {
  <div className="vh-100" style={{ 'scroll-snap-type': `y mandatory`, overflow: `scroll` }}>
    <section className="vh-100" style={{ 'scroll-snap-align': `start` }}>
      <h1 className="text-center">Section 1</h1>
    </section>
    <section className="vh-100" style={{ 'scroll-snap-align': `start` }}>
      <h1 className="text-center">Section 2</h1>
    </section>
  </div>
}
