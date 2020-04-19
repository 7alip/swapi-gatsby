import React from "react"
import renderer from "react-test-renderer"

import Link from "../link"

describe("Counter", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<Link to="/test">Test</Link>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
