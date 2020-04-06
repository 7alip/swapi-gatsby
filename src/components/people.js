import React from "react"
import {
  Spinner,
  Box,
  SimpleGrid,
  Heading,
  List,
  ListItem,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/core"

import Image from "./image"
import Alert from "./Alert"
import Link from "./link"
import { slug } from "../utils/slugify"

const People = ({ people, loading, error }) => {
  if (loading)
    return (
      <Flex flex="1" align="center" justify="center">
        <Spinner />
      </Flex>
    )

  if (error)
    return (
      <Alert
        title="Error!"
        text={error.message || "Error while fetching data!"}
        status="error"
      />
    )

  if (!people)
    return (
      <Flex flex="1" align="center" justify="center" w={320} mx="auto">
        <Box textAlign="center">
          <Icon size={100} name="movieIcon" />
          <Text mt={3} fontSize="1.2em">
            Start exploring the information about your favorites actors
          </Text>
        </Box>
      </Flex>
    )

  if (people.allPersons.length === 0)
    return (
      <Flex flex="1" align="center" justify="center" w={320} mx="auto">
        <Box textAlign="center">
          <Icon size={100} name="warning" />
          <Text mt={3} fontSize="1.2em">
            No result found!
          </Text>
        </Box>
      </Flex>
    )

  return (
    <SimpleGrid
      justifySelf="flex-start"
      w="full"
      columns={[1, null, 2]}
      spacing={3}
    >
      {people.allPersons.map(person => (
        <Flex p={4} boxShadow="sm" key={person.id}>
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
      ))}
    </SimpleGrid>
  )
}

export default People
