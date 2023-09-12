import {
  Box,
  Button,
  GridItem,
  Heading,
  Input,
  Text,
  Grid,
  VStack,
  Flex,
  Tooltip,
  Textarea,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { getCartData } from "../Redux/userReducer/action";

export function PaymentPage() {
  const navigate = useNavigate();
  const { token, user } = JSON.parse(localStorage.getItem("userDetails"));
  const amount = localStorage.getItem("amount");
  const cartData = useSelector((store) => store.userReducer.cart);
  const [toggle, setToggle] = useState(false);
  console.log(cartData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartData(token));
  }, [dispatch, token]);

  const handleOprnrazorPay = (data) => {
    const options = {
      key: "rzp_test_cM8McXRkDdp4FB",
      amount: Number(data.amount),
      currency: data.currency,
      order_id: data.id,
      name: "MediTech_Hub", //
      description: "Make Secure Payment with Razorpay", //
      handler: function (response) {
        console.log(response, "56");
        axios
          .post(
            "https://meditechhub.onrender.com/payment/verify",
            { response: response },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            console.log(res);
            // your orders
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleClick = () => {
    const amount = localStorage.getItem("amount") || 0;
    const _data = { amount: amount };
    axios
      .post(`https://meditechhub.onrender.com/payment/orders`, _data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        handleOprnrazorPay(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Flex mx={"auto"} justifyContent={"center"} my={"36"}>
        <Grid
          p={"6"}
          width={"70%"}
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={8}
        >
          <GridItem colSpan={{ base: 1, md: 1 }}>
            <VStack spacing={4} align="stretch">
              <Heading as="h1" size="lg">
                Payment Details
              </Heading>
              <Box>
                <Text>Name:</Text>
                <Input
                  value={user.username}
                  type="text"
                  placeholder="Enter your Name"
                  width="100%"
                />
              </Box>
              <Box>
                <Text>Email:</Text>
                <Input
                  value={user.email}
                  type="email"
                  placeholder="Enter your email"
                  width="100%"
                />
              </Box>
              <Box>
                <Text>Phone Number:</Text>
                <Input
                  onChange={() => setToggle(true)}
                  type="tel"
                  placeholder="Enter your phone number"
                  width="100%"
                />
              </Box>
              <Box>
                <Text>Address:</Text>
                <Textarea
                  onChange={() => setToggle(true)}
                  type="text"
                  placeholder="Enter your address"
                  width="100%"
                  isRequired
                />
              </Box>
              <Tooltip
                label="First Add Address And Mobile Number To Proceed"
                aria-label="Pay Now Razorpay"
              >
                <Button
                  isDisabled={!toggle}
                  onClick={handleClick}
                  colorScheme="teal"
                  size="lg"
                  width="100%"
                >
                  Pay Now
                </Button>
              </Tooltip>
            </VStack>
          </GridItem>

          <GridItem shadow={"md"} px={"10"} colSpan={{ base: 1, md: 1 }}>
            <VStack spacing={4}>
              <Button colorScheme="teal" size="md" width="100%">
                Order Summary
              </Button>
              <Box>
                <Text fontSize={"xl"} fontWeight={"bold"} color={"gray.900"}>
                  Total Items: {cartData.length}
                </Text>
              </Box>
              <Box>
                <Text fontSize={"2xl"} fontWeight={"bold"} color={"gray.900"}>
                  Total Amount to be Paid: ₹ {Number(amount).toFixed(2)}
                </Text>
              </Box>
              <Box>
                {cartData.map((ele, ind) => {
                  return (
                    <Box
                      key={ind}
                      width={{ base: "100%", md: "auto", lg: "100%" }}
                      borderWidth="1px"
                      borderColor="gray.300"
                      borderRadius="lg"
                      p="2"
                      mb="4"
                      display="flex"
                      flexDirection={{ base: "column", md: "row" }}
                      alignItems={{
                        base: "flex-start",
                        md: "center",
                        lg: "center",
                      }}
                    >
                      <Box
                        maxW={{ base: "100%", md: "150px" }}
                        alignSelf="flex-start"
                        mb={{ base: "4", md: "0" }}
                      >
                        <Image
                          alignItems={"center"}
                          w={"full"}
                          maxH={"12"}
                          src={ele.productID.image}
                          alt={ele.productID.name}
                          borderRadius="md"
                        />
                      </Box>
                      <Flex
                        flex="1"
                        flexDirection="row"
                        justifyContent="space-between"
                        ml={{ base: "0", md: "4" }}
                      >
                        <Box>
                          <Text fontSize="lg" fontWeight="semibold" mb="2">
                            {ele.productID.name}
                          </Text>
                          <Text fontSize="md" mb="2">
                            Quantity: {ele.quantity}
                          </Text>
                        </Box>
                        <Text fontSize="md" color="teal.700">
                          Price: {ele.productID.price}
                        </Text>
                      </Flex>
                    </Box>
                  );
                })}
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
}
