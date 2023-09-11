import { Box, Image, Text, Button, VStack, Flex } from "@chakra-ui/react";
import {
  faShoppingCart,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import {
  addToCart,
  getCartData,
  getParticular,
} from "../Redux/userReducer/action";
import { Navbar } from "../Components/navbar";
import { Bars } from "react-loader-spinner";

function ParticularProduct() {
  const { productID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((store) => store.userReducer.particular);
  const { token } = JSON.parse(localStorage.getItem("userDetails"));
  const cartdata = useSelector((store) => store.userReducer.cart);
  const [change, setChange] = useState(cartdata);
  useEffect(() => {
    dispatch(getCartData(token));
  }, [dispatch, token]);

  //loading
  const loading = useSelector((store) => store.userReducer.isLoading);
  useEffect(() => {
    dispatch(getParticular(productID));
  }, [dispatch, productID]);

  async function HandleClick() {
    const res = await dispatch(addToCart(productID, token));
    alert(res.msg);
    setChange(!change);
  }
  // if (loading) {
  //   return (
  //     <Box>
  //       <Navbar />
  //       <Flex justifyContent={"center"}>
  //         <Bars
  //           height="80"
  //           width="80"
  //           color="#0097A7"
  //           ariaLabel="bars-loading"
  //           wrapperStyle={{}}
  //           wrapperClass=""
  //           visible={true}
  //         />
  //       </Flex>
  //     </Box>
  //   );
  // }
  return (
    <>
      <Navbar />
      <Flex mt={"20"} gap={"20"} mx={"40"}>
        <Box
          w={"7xl"}
          display="flex"
          flexDirection={{ base: "column", lg: "row" }}
          alignItems={{ base: "center", lg: "center" }}
          justifyContent={{ base: "center", lg: "space-evenly" }}
          rounded="lg"
          bg="white"
        >
          <Box
            maxW={{ base: "100%", lg: "40%" }}
            maxH={{ base: "500", lg: "500" }}
            display="flex"
            boxShadow={"md"}
            p={"10"}
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
            rounded="lg"
          >
            <Image
              src={product.image}
              alt={product.name}
              maxH="100%"
              objectFit="cover"
            />
          </Box>

          <VStack
            spacing={9}
            p={"6"}
            w={"xl"}
            align={{ base: "center", lg: "flex-start" }}
            mt={{ base: 4, lg: 0 }}
            ml={{ base: 0, lg: 4 }}
          >
            <Text fontSize="2xl" fontWeight="semibold" color="teal.800">
              {product.name}
            </Text>
            <Text fontSize="lg" color="gray.600">
              {product.description}
            </Text>
            <Text fontSize="xl" fontWeight="bold" color="teal.600">
              ${product.price}
            </Text>

            <Button
              bg={"teal.400"}
              _hover={{ bg: "teal.600" }}
              variant="solid"
              size="lg"
              w="100%"
              textColor={"white"}
              onClick={HandleClick}
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ marginRight: "10px" }}
              />
              Add to Cart
            </Button>
          </VStack>
        </Box>
        <Box w={"2xl"}>
          <Text textColor={"teal.500"} fontSize={"xl"} my={"6"}>
            {cartdata.length}
            Items In Carts
          </Text>
          <Button
            onClick={() => {
              navigate("/cartpage");
            }}
            textAlign={"center"}
            bg={"teal.500"}
            textColor={"white"}
            variant="solid"
            size="lg"
            w="100%"
            fontWeight={"semibold"}
            _hover={{ bg: "teal.700" }}
          >
            Cart Items
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ marginLeft: "5px", fontSize: "18px" }}
            />
          </Button>
        </Box>
      </Flex>
    </>
  );
}
export default ParticularProduct;
