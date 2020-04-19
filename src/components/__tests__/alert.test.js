import React from "react"
import { render } from "../../utils/render"
import "@testing-library/jest-dom/extend-expect"
import { cleanup } from "@testing-library/react"
import Alert from "../alert"

afterEach(cleanup)

const renderComponent = () => {
  return render(<Alert status="error" title="Test Title" text="Test text" />)
}

describe("Alert", () => {
  it("should render", () => {
    renderComponent()
  })

  it("should display title", () => {
    const { getByText } = renderComponent()

    expect(getByText("Test Title")).toBeInTheDocument()
  })

  it("should display text", () => {
    const { getByText } = renderComponent()

    expect(getByText("Test text")).toBeInTheDocument()
  })
})
