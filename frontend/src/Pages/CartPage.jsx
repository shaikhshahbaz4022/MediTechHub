import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faChevronRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DecrementProd,
  DeleteCartProd,
  IncrementProd,
  getCartData,
} from "../Redux/userReducer/action";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Components/navbar";

export function CartPage() {
  const cartdata = useSelector((store) => store.userReducer.cart);
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();
  const { token } = JSON.parse(localStorage.getItem("userDetails"));
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCartData(token));
  }, [dispatch, token]);
  async function HandleDecr(id) {
    let res = await dispatch(DecrementProd(id, token));
    console.log(res);
    setChange(!change);
  }
  async function HandleIncre(id) {
    let res = await dispatch(IncrementProd(id, token));
    console.log(res);
    setChange(!change);
  }
  async function HandleDelete(id) {
    let res = await dispatch(DeleteCartProd(id, token));
    setChange(!change);
    alert(res.msg);
  }
  useEffect(() => {
    if (change || !change) dispatch(getCartData(token));
  }, [change, token, dispatch]);
  let ref = 0;
  for (let i = 0; i < cartdata.length; i++) {
    ref += cartdata[i].productID.price * cartdata[i].quantity;
  }
  localStorage.setItem("amount", ref);
  return (
    <Box>
      <Navbar />
      <Flex
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        mx={"auto"}
        width={"80%"}
        mt={"20"}
        gap={"20"}
      >
        <Box width={"70%"}>
          <Box>
            <Heading textColor={"teal.800"} fontSize={"2xl"}>
              {cartdata.length} Items in your Cart
            </Heading>
            <Box>
              {cartdata.map((ele, i) => {
                return (
                  <Box key={i}>
                    <Flex
                      flexDir={{ base: "column", lg: "row" }}
                      my={"8"}
                      p={"6"}
                      borderWidth={"1px"}
                      borderColor={"gray.300"}
                      rounded={"md"}
                    >
                      <Box
                        mx={"4"}
                        maxW={{ base: "100%", lg: "10%" }}
                        maxH={{ base: "auto", lg: "500px" }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        overflow="hidden"
                        rounded="lg"
                      >
                        <Image
                          src={ele.productID.image}
                          alt={ele.productID.name}
                          maxH="100%"
                          objectFit="cover"
                        />
                      </Box>
                      <Box
                        justifyContent={"flex-start"}
                        mx={{ base: "0", lg: "6" }}
                      >
                        <Box>
                          <Flex
                            justifyContent={"space-between"}
                            alignItems={"center"}
                          >
                            <Text
                              fontSize={"lg"}
                              fontWeight={"semibold"}
                              textColor={"teal.700"}
                            >
                              {ele.productID.name}
                            </Text>
                            <FontAwesomeIcon
                              cursor={"pointer"}
                              style={{ padding: "4px", color: "teal" }}
                              icon={faTrashCan}
                              onClick={() => HandleDelete(ele._id)}
                            />
                          </Flex>

                          <Text
                            fontSize={"md"}
                            fontWeight={"semibold"}
                            textColor={"teal.400"}
                            display={{ base: "none", lg: "block" }}
                          >
                            {ele.productID.description}
                          </Text>
                        </Box>
                        <Flex
                          w={{ base: "100%", lg: "40%" }}
                          justifyContent={"space-between"}
                        >
                          <Text>MRP {ele.productID.price}</Text>
                          <Text>48% OFF</Text>
                        </Flex>
                        <Text>Delivery by 14 Sep - 15 Sep</Text>
                        <Flex my={"6"} w={"100%"} alignItems={"center"}>
                          <Button
                            variant={"solid"}
                            _hover={{ bg: "teal.700" }}
                            size={"sm"}
                            textColor={"white"}
                            bg={"teal.400"}
                            onClick={() => HandleDecr(ele._id)}
                          >
                            -
                          </Button>
                          <Text fontWeight={"bold"} px={"2"}>
                            {ele.quantity}
                          </Text>
                          <Button
                            _hover={{ bg: "teal.700" }}
                            size={"sm"}
                            textColor={"white"}
                            bg={"teal.400"}
                            onClick={() => HandleIncre(ele._id)}
                          >
                            +
                          </Button>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>

        <VStack>
          <Box
            w={{ base: "100%", md: "fit-content" }}
            rounded={"sm"}
            borderWidth={"1px"}
            borderColor={"gray.300"}
            p={{ base: "4", md: "6" }}
          >
            <Box w={{ base: "100%", md: "md" }}>
              <Text
                textColor="black"
                fontWeight={"semibold"}
                fontSize={{ base: "lg", md: "2xl" }}
                my={"4"}
              >
                Cart total: ₹ {ref.toFixed(2)}
              </Text>
              <Button
                onClick={() => navigate("/payment")}
                textAlign={"center"}
                bg={"teal.500"}
                textColor={"white"}
                variant="solid"
                size={{ base: "md", md: "lg" }}
                w="100%"
                fontWeight={"semibold"}
                _hover={{ bg: "teal.700" }}
              >
                Add Delivery Address
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ marginLeft: "5px", fontSize: "16px" }}
                />
              </Button>
            </Box>
            <Flex
              p={{ base: "2", md: "4" }}
              rounded={"md"}
              shadow={"md"}
              bg={"teal.50"}
              my={"4"}
              w={{ base: "100%", md: "md" }}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Flex justifyContent={"space-between"} w={"40"}>
                <Image src="https://assets.pharmeasy.in/web-assets/images/cartCoupon.svg" />
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  textColor={"teal.700"}
                  fontWeight={"medium"}
                >
                  Apply Coupon
                </Text>
              </Flex>
              <FontAwesomeIcon icon={faChevronRight} />
            </Flex>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
}
