import {
  Box,
  Button,
  Tooltip,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { LoginPostData } from "../Redux/authReducer/action";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const [user, setUser] = useState({ email: "", password: "" });

  const store = useSelector((store) => store.authReducer);
  console.log(store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const userDetails = JSON.parse(localStorage.getItem("userDetails")) || {};
  //   console.log(userDetails);
  async function handleSubmit(e) {
    e.preventDefault();
    const userInput = {
      email: user.email,
      password: user.password,
    };
    try {
      const res = await dispatch(LoginPostData(userInput));
      console.log(res);
      if (res.msg === "Login Succesfully") {
        toast.success(res.msg);

        navigate("/");
      } else if (res.msg === "Register First") {
        toast.error(res.msg);
        setTimeout(() => {
          navigate("/register");
        }, 2000);
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
      <ToastContainer />
      <Stack
        spacing={8}
        mx={"auto"}
        shadow={"2xl"}
        bg={"white"}
        rounded={"2xl"}
        w={"md"}
        py={12}
        px={6}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign In</Heading>
        </Stack>
        <Box rounded={"lg"} p={8} bg={"white"} maxW={"3xl"}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="email"
                isRequired
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                isRequired
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Text color={"teal.800"}>
                  <Link to={"/register"}>New User ?</Link>
                </Text>
              </Stack>
              <Tooltip
                label="Please Provide Valid Email & Password"
                aria-label="Email Password"
                isDisabled={user.email && user.password}
              >
                <Button
                  onClick={handleSubmit}
                  bg={"teal.500"}
                  color={"white"}
                  _hover={{
                    bg: "teal.700",
                  }}
                  isDisabled={user.email === "" || user.password === ""}
                >
                  Sign in
                </Button>
              </Tooltip>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
export default Login;
