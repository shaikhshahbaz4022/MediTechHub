import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Tooltip,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RegisterPostData } from "../Redux/authReducer/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function RegisterPage() {
  const disatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  async function HandleSubmit(e) {
    console.log("Clicked");
    e.preventDefault();
    try {
      const res = await disatch(RegisterPostData(formData));
      if (res.msg === "Registration Succesfully") {
        toast.success(res.msg);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else if ("user Already Present") {
        toast.error(res.msg);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        toast.error(res.msg);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Flex
      style={{
        backgroundImage: `url('https://i.ibb.co/hBT2HYn/Untitled-Design-7.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
        width="400px" // Increase the width of the form
      >
        <Stack spacing={4}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Register
            </Heading>
          </Stack>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              value={formData.username}
              onChange={(e) =>
                setformData({ ...formData, username: e.target.value })
              }
              type="text"
              placeholder="Enter Your Name "
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={(e) =>
                setformData({ ...formData, email: e.target.value })
              }
              type="email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                placeholder="Enter Correct Password"
                value={formData.password}
                onChange={(e) =>
                  setformData({ ...formData, password: e.target.value })
                }
                type={showPassword ? "text" : "password"}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Tooltip
            label="Please Provide Valid Email & Password"
            aria-label="Email Password"
            isDisabled={
              formData.email && formData.password && formData.username
            }
          >
            <Button
              loadingText="Submitting"
              size="lg"
              bg={"teal.500"}
              color={"white"}
              _hover={{
                bg: "teal.700",
              }}
              isDisabled={
                formData.email === "" ||
                formData.password === "" ||
                formData.username === ""
              }
              onClick={HandleSubmit}
            >
              Sign up
            </Button>
          </Tooltip>
          <Text align={"center"}>
            Already a user?{" "}
            <Link href="/login" color={"teal.800"}>
              Login
            </Link>
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
}
