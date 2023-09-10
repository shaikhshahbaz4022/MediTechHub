import { Navbar } from "../Components/navbar";
import { SearchIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "../Redux/userReducer/action";
export function ProductPage() {
  const data = useSelector((store) => store.userReducer.data);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
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
              <RadioGroup>
                <Radio value="option1"></Radio>
              </RadioGroup>
            </Flex>
          </Box>
          <Divider my={"6"} borderColor="gray.300" borderWidth="1px" />
          <Box>
            <Text fontWeight={"semibold"} fontSize={"xl"} my={"4"}>
              Sub Category
            </Text>
            <Box
              my={"4"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Flex
                my={"4"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={"lg"}>Diabetic Care</Text>
                <RadioGroup>
                  <Radio value="option1"></Radio>
                </RadioGroup>
              </Flex>
              <Flex
                my={"4"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={"lg"}>Vitamin</Text>
                <RadioGroup>
                  <Radio value="option1"></Radio>
                </RadioGroup>
              </Flex>
              <Flex
                my={"4"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={"lg"}>Feet Problem </Text>
                <RadioGroup>
                  <Radio value="option1"></Radio>
                </RadioGroup>
              </Flex>
              <Flex
                my={"4"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={"lg"}>Ortho Care </Text>
                <RadioGroup>
                  <Radio value="option1"></Radio>
                </RadioGroup>
              </Flex>
              <Flex
                my={"4"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={"lg"}>Skin & Hair Care </Text>
                <RadioGroup>
                  <Radio value="option1"></Radio>
                </RadioGroup>
              </Flex>
            </Box>
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
              key={index}
              boxShadow="md"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              maxWidth="300px"
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
      </Flex>
    </Box>
  );
}
