import { Navbar } from "../Components/navbar";
import { SearchIcon } from "@chakra-ui/icons";
import { Bars } from "react-loader-spinner";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Badge,
  Center,
  Radio,
  RadioGroup,
  Divider,
  Input,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCategory, getData } from "../Redux/userReducer/action";
import { useNavigate } from "react-router-dom";
export function ProductPage() {
  const data = useSelector((store) => store.userReducer.data);
  const loading = useSelector((store) => store.userReducer.isLoading);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const length = parseInt(localStorage.getItem("length"));
  function HandleChange(value) {
    setSelected(value);
    console.log(value);
    dispatch(getCategory(value));
  }
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(page));
  }, [dispatch, page]);

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
    <Box mx={"auto"}>
      <Navbar />
      <Flex p={"2"} mx={"auto"} width={"90%"} shadow={"md"}>
        <Box p={"2"} mr={"16"} width={"20%"}>
          <Box>
            <Text fontWeight={"semibold"} fontSize={"3xl"}>
              Filter
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"semibold"} fontSize={"xl"} py={"4"}>
              Category
            </Text>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text fontSize={"lg"}>Top Products</Text>
              <RadioGroup onChange={() => dispatch(getData())}>
                <Radio value="option1"></Radio>
              </RadioGroup>
            </Flex>
          </Box>
          <Divider my={"6"} borderColor="gray.300" borderWidth="1px" />
          <Box>
            <Text fontWeight={"semibold"} fontSize={"xl"} my={"4"}>
              Sub Category
            </Text>
            <RadioGroup onChange={HandleChange} value={selected}>
              <Flex
                my={"4"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={"lg"}>Herbs</Text>
                <Radio value="Herbs"></Radio>
              </Flex>
              <Flex
                my={"4"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={"lg"}>Sleep Aid</Text>
                <Radio value="Sleep Aid"></Radio>
              </Flex>
              <Flex
                my={"4"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={"lg"}>Fitness</Text>
                <Radio value="Fitness"></Radio>
              </Flex>
              <Flex
                my={"4"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={"lg"}>Vitamins</Text>
                <Radio value="Vitamins"></Radio>
              </Flex>
              <Flex
                my={"4"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={"lg"}>Nutrition</Text>
                <Radio value="Nutrition"></Radio>
              </Flex>
              <Flex
                my={"4"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={"lg"}>Massage</Text>
                <Radio value="Massage"></Radio>
              </Flex>
              <Flex
                my={"4"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={"lg"}>Skincare</Text>
                <Radio value="Skincare"></Radio>
              </Flex>
              <Flex
                my={"4"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={"lg"}>Tea</Text>
                <Radio value="Tea"></Radio>
              </Flex>
              <Flex
                my={"4"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={"lg"}>Homeopathy</Text>
                <Radio value="Homeopathy"></Radio>
              </Flex>
              <Flex
                my={"4"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={"lg"}>Bath & Body</Text>
                <Radio value="Bath & Body"></Radio>
              </Flex>
              <Flex
                my={"4"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={"lg"}>Aromatherapy</Text>
                <Radio value="Aromatherapy"></Radio>
              </Flex>
              <Flex
                my={"4"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={"lg"}>Hydration</Text>
                <Radio value="Hydration"></Radio>
              </Flex>
              <Flex
                my={"4"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={"lg"}>Health Drinks</Text>
                <Radio value="Health Drinks"></Radio>
              </Flex>
            </RadioGroup>
          </Box>
          <Divider my={"6"} borderColor="gray.300" borderWidth="1px" />
          <Box>
            <Text fontWeight={"semibold"} fontSize={"xl"} my={"4"}>
              Brand
            </Text>
            <Box
              my={"4"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Flex alignItems={"center"} position={"relative"}>
                <Input
                  py={"6"}
                  fontSize={"lg"}
                  placeholder="Search for Brand"
                />
                <Box position={"absolute"} right={"2"}>
                  {" "}
                  <SearchIcon
                    cursor={"pointer"}
                    fontSize={"xl"}
                    color={"gray.500"}
                  />
                </Box>
              </Flex>
              <Flex
                my={"4"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={"lg"}>Diabetic Care</Text>
                <Checkbox
                  value={"Herbs"}
                  onChange={(e) => console.log(e.target.value)}
                />
              </Flex>
            </Box>
          </Box>
        </Box>

        <Box>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={10}
          >
            {data.map((el, index) => (
              <Box
                onClick={() => {
                  navigate(`/products/${el._id}`);
                }}
                key={index}
                boxShadow="md"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                maxWidth="300px"
                maxHeight="350px"
                _hover={{ borderColor: "gray", cursor: "pointer" }}
              >
                <Box pos="relative">
                  <Center>
                    <Image
                      src={el.image}
                      alt={el.name}
                      w="100%"
                      h="auto"
                      boxSize="200px"
                      objectFit="cover"
                      pt={"2"}
                    />
                  </Center>
                </Box>
                <Box p="4">
                  <VStack spacing="1" alignItems="flex-start">
                    <Heading as="h2" size="md" noOfLines={2}>
                      {el.name}
                    </Heading>
                    <HStack justifyContent="space-between">
                      <Box>
                        <Text
                          fontSize="sm"
                          color="gray.500"
                          textDecoration="line-through"
                        >
                          {((el.price * 100) / 48).toFixed(2)}
                        </Text>
                        <Text fontSize="lg" fontWeight="bold" color="teal.600">
                          {el.price}
                        </Text>
                      </Box>
                      <Badge fontSize={"18"} colorScheme="green">
                        48% OFF
                      </Badge>
                    </HStack>
                  </VStack>
                </Box>
              </Box>
            ))}
          </Grid>
          <Box display={"flex"} justifyContent={"center"} mt={"10"} gap={"3"}>
            {new Array(length).fill(0).map((ele, ind) => {
              return (
                <Button key={ind + 1} onClick={() => setPage(ind + 1)}>
                  {ind + 1}
                </Button>
              );
            })}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
