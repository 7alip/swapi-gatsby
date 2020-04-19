import React from "react"
import { render as rtlRender } from "@testing-library/react"
import { ThemeProvider } from "@chakra-ui/core"

export function render(container) {
  return rtlRender(<ThemeProvider>{container}</ThemeProvider>)
}
