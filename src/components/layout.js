import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

const globalStyles = css`
  button,
  input {
    box-shadow: none !important;
  }
`

const Layout = ({ children }) => {
  return (
    <div>
      <Global styles={globalStyles} />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
