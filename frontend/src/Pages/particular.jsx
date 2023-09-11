import { Box, Image, Text, Button, VStack, Flex } from "@chakra-ui/react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { getParticular } from "../Redux/userReducer/action";
import { Navbar } from "../Components/navbar";
import { Bars } from "react-loader-spinner";

function ParticularProduct() {
  const { productID } = useParams();
  const product = useSelector((store) => store.userReducer.particular);
  const dispatch = useDispatch();

  //loading
  const loading = useSelector((store) => store.userReducer.isLoading);
  useEffect(() => {
    dispatch(getParticular(productID));
  }, [dispatch, productID]);

  if (loading) {
    return (
      <Box>
        <Navbar />
        <Flex justifyContent={"center"}>
          <Bars
            height="80"
            width="80"
            color="#0097A7"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Flex>
      </Box>
    );
  }
  return (
    <>
      <Navbar />
      <Box
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ base: "center", lg: "center" }}
        justifyContent={{ base: "center", lg: "space-evenly" }}
        p={4}
        rounded="lg"
        bg="white"
        mx="auto"
        mt={"28"}
      >
        <Box
          maxW={{ base: "100%", lg: "50%" }}
          height={{ base: "auto", lg: "500px" }}
          display="flex"
          boxShadow={"md"}
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
          spacing={4}
          w={"xl"}
          align={{ base: "center", lg: "flex-start" }}
          mt={{ base: 4, lg: 0 }}
          ml={{ base: 0, lg: 4 }}
        >
          <Text fontSize="2xl" fontWeight="semibold" color="gray.800">
            {product.name}
          </Text>
          <Text fontSize="lg" color="gray.600">
            {product.description}
          </Text>
          <Text fontSize="xl" fontWeight="bold" color="blue.600">
            ${product.price}
          </Text>

          <Button colorScheme="blue" variant="solid" size="lg" w="100%">
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ marginRight: "10px" }}
            />
            Add to Cart
          </Button>
        </VStack>
      </Box>
    </>
  );
}
export default ParticularProduct;
