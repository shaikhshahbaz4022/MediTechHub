import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { RegisterPostData } from "../Redux/authReducer/action";
export function RegisterPage() {
  const disatch = useDispatch();
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  async function HandleSubmit(e) {
    e.preventDefault();
    try {
      const res = await disatch(RegisterPostData(formData));
      if (res.msg === "Registration Succesfully") {
        alert(res.msg);
        navigate("/login");
      } else if ("user Already Present") {
        alert(res.msg);
        navigate("/login");
      } else {
        alert(res.msg);
      }
    } catch (error) {
      console.log(error);
    }
  }
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
        <form onSubmit={HandleSubmit} style={{ padding: "20px" }}>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              name="username"
              placeholder="Enter your username"
              rounded="full"
              value={formData.username}
              focusBorderColor="teal.500"
              onChange={(e) =>
                setformData({ ...formData, username: e.target.value })
              }
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setformData({ ...formData, email: e.target.value })
              }
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
              value={formData.password}
              onChange={(e) =>
                setformData({ ...formData, password: e.target.value })
              }
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
