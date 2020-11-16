import React from "react"
import PropTypes from "prop-types"
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
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
