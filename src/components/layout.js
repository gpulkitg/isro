import React from "react"
import PropTypes from "prop-types"
import Header from './header'
import Footer from './footer'

import bgLayout from '../images/bg/jose-ignacio-pompe-VkF6IXHVIvA-unsplash.jpg'

const Layout = ({ children }) => {
  return (
    // <div className={`d-flex flex-column min-vh-100 ${withBgImg ? "layout-bg-img" : ""}`}>
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        { children }
      </main>
      <Footer />
    </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
