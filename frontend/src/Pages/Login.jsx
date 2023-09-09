import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { LoginPostData } from "../Redux/authReducer/action";
function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const store = useSelector((store) => store.authReducer);
  console.log(store);
  const dispatch = useDispatch();
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
      if (res.msg === "Login Succesfully") alert(res.msg);
      else console.log(res);
    } catch (error) {
      console.log(error);
      alert(error.msg);
    }
  }

  return (
    <Box justifyContent={"center"} display={"flex"}>
      <Box w={"5xl"}>
        <form
          style={{ border: "1px solid black", padding: "5px" }}
          onSubmit={handleSubmit}
        >
          <FormControl>
            <FormLabel>Enter Name Here :</FormLabel>
            <Input
              type="text"
              placeholder="Enter Name Here"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Enter Password Here :</FormLabel>
            <Input
              type="password"
              placeholder="Enter Password Here"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </FormControl>
          <FormControl>
            <Input type="submit" bg={"gray.300"} cursor={"pointer"} />
          </FormControl>
        </form>
      </Box>
    </Box>
  );
}
export default Login;