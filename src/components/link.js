import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link as ChakraLink } from "@chakra-ui/core"

const Link = props => {
  return (
    <ChakraLink
      _focus={{ boxShadow: "none" }}
      _hover={{ color: "blue.600" }}
      color="blue.400"
      as={GatsbyLink}
      to={props.to}
      {...props}
    >
      {props.children}
    </ChakraLink>
  )
}

export default Link
