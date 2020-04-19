import React from "react"
import renderer from "react-test-renderer"
import { render } from "../../utils/render"

import Person from "../person"

const person = {
  name: "Luke Skywalker",
  height: 172,
  birthYear: "19BBY",
  films: [
    {
      title: "A New Hope",
      id: "cj0nxmy3fga5s01148gf8iy3c",
    },
    {
      title: "Attack of the Clones",
      id: "cj0nxmy3xga5u0114fbqads8y",
    },
    {
      title: "Revenge of the Sith",
      id: "cj0nxmy4zga5y0114r8npxjx8",
    },
    {
      title: "Return of the Jedi",
      id: "cj0nxmy5ega600114uiw05wle",
    },
    {
      title: "The Empire Strikes Back",
      id: "cj0nxmy5tga620114ew9275qj",
    },
    {
      title: "The Force Awakens",
      id: "cj0nxmy69ga640114e3eb7bn2",
    },
  ],
  gender: "MALE",
}

describe("Counter", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<Person person={person} />)
    const { getByText } = render(<Person person={person} />)
    const tree = component.toJSON()

    expect(getByText(/luke skywalker/i)).toBeInTheDocument()
    expect(tree).toMatchSnapshot()
  })
})
