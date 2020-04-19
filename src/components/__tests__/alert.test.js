import React from "react"
import renderer from "react-test-renderer"
import { cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import { render } from "../../utils/render"
import Alert from "../alert"
import { ThemeProvider } from "@chakra-ui/core"

afterEach(cleanup)

const renderComponent = () => {
  return render(<Alert status="error" title="Test Title" text="Test text" />)
}

describe("Alert", () => {
  test("snapshot renders", () => {
    const component = renderer.create(
      <ThemeProvider>
        <Alert status="error" title="Test Title" text="Test text" />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should render", () => {
    renderComponent()
  })

  it("should display title", () => {
    const { getByText } = renderComponent()

    expect(getByText(/test title/i)).toBeInTheDocument()
  })

  it("should display text", () => {
    const { getByText } = renderComponent()

    expect(getByText(/test text/i)).toBeInTheDocument()
  })
})
