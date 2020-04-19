import React, { useState } from "react"
import { useLazyQuery } from "@apollo/client"
import { GET_PEOPLE } from "../queries"
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Flex,
  Stack,
  Button,
  Box,
} from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import People from "../components/people"

const IndexPage = () => {
  const [text, setText] = useState("")
  const [getPeople, { loading, data, error }] = useLazyQuery(GET_PEOPLE)

  return (
    <Layout>
      <SEO title="Home" />
      <Stack maxW={1000} py={3} mx="auto" minH="100vh" spacing={3} p={4}>
        <Box fontSize={30}>LOGO</Box>
        <Stack isInline spacing={3} mb={3}>
          <Box
            flex="1"
            as="form"
            onSubmit={e => {
              e.preventDefault()
              getPeople({
                variables: { text },
              })
            }}
          >
            <InputGroup size="lg">
              <Input
                placeholder="Search for movie actors"
                value={text}
                onChange={e => setText(e.target.value)}
              />
              <InputRightElement>
                <IconButton
                  isDisabled={text.length < 3}
                  aria-label="Search actors"
                  type="submit"
                  icon="search"
                  variantColor="pink"
                  size="md"
                />
              </InputRightElement>
            </InputGroup>
          </Box>
          <Button
            size="lg"
            variantColor="teal"
            onClick={() => getPeople({ variables: { text: "" } })}
          >
            Get All Actors
          </Button>
        </Stack>
        <Flex flexDir="column" flex="1">
          <People people={data} loading={loading} error={error} />
        </Flex>
      </Stack>
    </Layout>
  )
}

export default IndexPage
