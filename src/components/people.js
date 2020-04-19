import React from "react"
import { Spinner, Box, SimpleGrid, Flex, Text, Icon } from "@chakra-ui/core"

import Person from "./person"
import Alert from "./alert"
import { AnimatePresence, motion } from "framer-motion"

const People = ({ people, loading, error }) => {
  return (
    <AnimatePresence>
      {loading ? (
        <Flex flex="1" align="center" justify="center">
          <Spinner />
        </Flex>
      ) : error ? (
        <Alert
          title="Error!"
          text={error.message || "Error while fetching data!"}
          status="error"
        />
      ) : people.allPersons.length === 0 ? (
        <Flex flex="1" align="center" justify="center" w={320} mx="auto">
          <Box textAlign="center">
            <Icon size={100} name="warning" />
            <Text mt={3} fontSize="1.2em">
              No result found!
            </Text>
          </Box>
        </Flex>
      ) : people ? (
        <SimpleGrid
          justifySelf="flex-start"
          w="full"
          columns={[1, null, 2]}
          spacing={3}
        >
          {people.allPersons.map((person, i) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.4 }}
              exit={{ opacity: 0 }}
            >
              <Person person={person} />
            </motion.div>
          ))}
        </SimpleGrid>
      ) : (
        <Flex flex="1" align="center" justify="center" w={320} mx="auto">
          <Box textAlign="center">
            <Icon size={100} name="movieIcon" />
            <Text mt={3} fontSize="1.2em">
              Start exploring the information about your favorites actors
            </Text>
          </Box>
        </Flex>
      )}
    </AnimatePresence>
  )
}

export default People
