import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

export function RegisterPage() {
  return (
    <Box
      p={4}
      mt={"40"}
      maxW="400px"
      mx="auto"
      boxShadow="lg"
      rounded="lg"
      bg="white"
    >
      <VStack spacing={6} align="stretch">
        <Box
          as="h2"
          fontSize="2xl"
          textAlign="center"
          color="teal.500"
          fontWeight="bold"
        >
          Sign Up
        </Box>
        <form style={{ padding: "20px" }}>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              name="username"
              placeholder="Enter your username"
              rounded="full"
              focusBorderColor="teal.500"
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              name="email"
              //   value={formData.email}
              //   onChange={handleInputChange}
              placeholder="Enter your email"
              rounded="full"
              focusBorderColor="teal.500"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              //   value={formData.password}
              //   onChange={handleInputChange}
              placeholder="Enter your password"
              rounded="full"
              focusBorderColor="teal.500"
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="teal"
            mt={6}
            rounded="full"
            _hover={{ bg: "teal.600" }}
          >
            Sign Up
          </Button>
        </form>
      </VStack>
    </Box>
  );
}
