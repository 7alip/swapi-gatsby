import React from "react"
import { graphql } from "gatsby"
import { Box, Stack, Heading, Text, Icon } from "@chakra-ui/core"
import { motion } from "framer-motion"

import Image from "../components/image"
import Link from "../components/link"
import SEO from "../components/seo"
import Moment from "react-moment"

const container = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

const FilmTemplate = props => {
  const { Film: film } = props.data.swapi
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <SEO title={film.title} />
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
          <Stack spacing={3} flex="1">
            <Heading>{film.title}</Heading>
            <Text inlist>
              <strong>Director:</strong> {film.director}
            </Text>
            <Box>
              <Text>
                <strong>Producer{film.producers.length > 1 && "s"}: </strong>
                {film.producers.map(producer => producer)}
              </Text>
            </Box>
            <Box>
              <Text>
                <strong>Release Date: </strong>
                <Moment format="YYYY-MM-DD">{film.releaseDate}</Moment>
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Opening Crawl</Text>
              <Text>{film.openingCrawl}</Text>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </motion.div>
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
        producers
        releaseDate
        openingCrawl
      }
    }
  }
`
