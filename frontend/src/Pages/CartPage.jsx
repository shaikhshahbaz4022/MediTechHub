import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../Redux/userReducer/action";

export function CartPage() {
  const cartdata = useSelector((store) => store.userReducer.cart);
  const dispatch = useDispatch();
  const { token } = JSON.parse(localStorage.getItem("userDetails"));
  useEffect(() => {
    dispatch(getCartData(token));
  }, [dispatch, token]);
  return (
    <Box>
      <Flex mx={"auto"} width={"80%"} mt={"20"} gap={"20"}>
        <Box width={"70%"}>
          <Box>
            <Heading textColor={"teal.800"} fontSize={"2xl"}>
              {cartdata.length} Items in your Cart
            </Heading>
            <Box>
              {cartdata.map((ele, i) => {
                return (
                  <Box>
                    <Flex
                      my={"8"}
                      p={"6"}
                      borderWidth={"1px"}
                      borderColor={"gray.300"}
                      rounded={"md"}
                    >
                      <Box
                        mx={"4"}
                        maxW={{ base: "50%", lg: "10%" }}
                        maxH={{ base: "500", lg: "500" }}
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
                      <Box justifyContent={"flex-start"} mx={"6"}>
                        <Box>
                          <Text
                            fontSize={"lg"}
                            fontWeight={"semibold"}
                            textColor={"teal.700"}
                          >
                            {ele.productID.name}
                          </Text>
                          <Text
                            fontSize={"md"}
                            fontWeight={"semibold"}
                            textColor={"teal.400"}
                          >
                            {ele.productID.description}
                          </Text>
                        </Box>
                        <Flex w={"40"} justifyContent={"space-between"}>
                          <Text>MRP {ele.productID.price}</Text>
                          <Text> 48% OFF</Text>
                        </Flex>
                        <Text>Delivery by 14 Sep - 15 Sep</Text>
                        <Flex
                          my={"6"}
                          w={"28"}
                          justifyContent={"space-around"}
                          alignItems={"center"}
                        >
                          <Button>-</Button>
                          <Text>1</Text>
                          <Button>+</Button>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
        <VStack border={"1px"}>
          <Box
            w={"fit-content"}
            rounded={"sm"}
            borderWidth={"1px"}
            borderColor={"gray.300"}
            p={"6"}
          >
            <Box w={"md"}>
              <Text
                textColor="black"
                fontWeight={"semibold"}
                fontSize={"2xl"}
                my={"6"}
              >
                Cart total: ₹687.98
              </Text>
              <Button
                // onClick={() => navigate("/cartpage")}
                textAlign={"center"}
                bg={"teal.500"}
                textColor={"white"}
                variant="solid"
                size="lg"
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
              p={"2"}
              rounded={"md"}
              shadow={"md"}
              bg={"teal.50"}
              my={"6"}
              w={"md"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Flex justifyContent={"space-between"} w={"40"}>
                <Image src="https://assets.pharmeasy.in/web-assets/images/cartCoupon.svg" />
                <Text
                  fontSize={"lg"}
                  textColor={"teal.700"}
                  fontWeight={"medium"}
                >
                  Apply Coupon
                </Text>
              </Flex>
              <FontAwesomeIcon icon={faChevronRight} />
            </Flex>
          </Box>
          <Box
            w={"fit-content"}
            rounded={"sm"}
            borderWidth={"1px"}
            borderColor={"gray.300"}
            p={"6"}
          >
            <Box w={"md"}></Box>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
}
