import React from "react"
import { Box, Heading, List, ListItem, Flex, Text } from "@chakra-ui/core"

import Image from "./image"
import Link from "./link"
import { slug } from "../utils/slugify"

const Person = ({ person }) => (
  <Flex h="full" p={4} boxShadow="sm">
    <Box mr={3}>
      <Image
        style={{ width: "50px", height: "50px" }}
        src="man.png"
        alt={person.name}
      />
    </Box>

    <Flex flexWrap={["wrap", null, "nowrap"]}>
      <Box w={200}>
        <Heading size="sm">{person.name}</Heading>
        <Text>DoB: {person.birthYear}</Text>
        <Text>Height: {person.height}</Text>
        <Text>Gender: {person.gender}</Text>
      </Box>
      <Box flex="1">
        <Heading size="sm">Movies</Heading>
        <List>
          {person.films.map(film => (
            <ListItem
              w="full"
              title={film.title}
              as={Text}
              isTruncated
              key={film.id}
            >
              <Link to={`/films/${slug(film.title)}`}>{film.title}</Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Flex>
  </Flex>
)

export default Person
