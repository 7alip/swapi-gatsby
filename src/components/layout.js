import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import { AnimatePresence, motion } from "framer-motion"
import { HelmetProvider } from "react-helmet-async"

const globalStyles = css`
  body {
    overflow-x: hidden;
    background-color: #fefefe;
  }

  button,
  input {
    box-shadow: none !important;
  }
`
const duration = 0.5

const variants = {
  initial: {
    opacity: 0,
    x: 200,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    x: -200,
    transition: { duration: duration },
  },
}

const Layout = ({ children, location }) => {
  return (
    <HelmetProvider>
      <Global styles={globalStyles} />
      <AnimatePresence>
        <motion.main
          key={location ? location.pathname : "home"}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </HelmetProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
