import React from "react"
import { graphql } from "gatsby"
import { Box, Stack, Heading, Text, Icon } from "@chakra-ui/core"

import Image from "../components/image"
import Link from "../components/link"

const FilmTemplate = props => {
  const { Film: film } = props.data.swapi
  return (
    <Box p={5} maxW={960} mx="auto">
      <Text _hover={{ color: "gray.100" }} mb={4}>
        <Link to="/">
          <Icon name="arrow-back" mr={2} /> Back to search...
        </Link>
      </Text>
      <Stack isInline spacing={4}>
        <Box w={300}>
          <Image src={`${film.episodeId}.jpg`} />
        </Box>
        <Box flex="1">
          <Heading>{film.title}</Heading>
          <Text>{film.director}</Text>
          <Text>{film.openingCrawl}</Text>
        </Box>
      </Stack>
    </Box>
  )
}

export default FilmTemplate

export const pageQuery = graphql`
  query FilmById($id: ID!) {
    swapi {
      Film(id: $id) {
        title
        episodeId
        director
        openingCrawl
      }
    }
  }
`
