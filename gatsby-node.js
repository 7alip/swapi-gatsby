const path = require("path")
const slash = require("slash")
const { slug } = require("./src/utils/slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query filmsQuery {
      swapi {
        allFilms {
          id
          title
        }
      }
    }
  `)

  const filmComponent = path.resolve("./src/templates/film.js")

  result.data.swapi.allFilms.forEach(film => {
    createPage({
      path: `/films/${slug(film.title)}`,
      component: slash(filmComponent),
      context: {
        id: film.id,
      },
    })
  })
}
