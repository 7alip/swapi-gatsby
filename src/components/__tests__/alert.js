import React from "react"
import renderer from "react-test-renderer"
import Alert from "../alert"

describe("Alert", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Alert title="Test Title" text="Test text" status="success" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
