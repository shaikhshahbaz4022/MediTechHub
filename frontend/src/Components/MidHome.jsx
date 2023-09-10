import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/userReducer/action";

export function Midhome() {
  const store = useSelector((store) => store.userReducer);
  console.log(store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  let image = [
    "https://img8.hkrtcdn.com/30088/bnr_3008747_o.jpg",
    "https://img10.hkrtcdn.com/30100/bnr_3009909_o.jpg",
    "https://img8.hkrtcdn.com/30089/bnr_3008807_o.jpg",
    "https://img2.hkrtcdn.com/30100/bnr_3009911_o.jpg",
  ];
  let smallcartImages = [
    {
      image: "https://img3.hkrtcdn.com/20791/normal_2079092_o.png",
      title: "Wide range of Nutritional products",
      desc: "One-stop fitness and health destination",
    },
    {
      image: "https://img9.hkrtcdn.com/20791/normal_2079088_o.png",
      title: "100% Original & Authentic ",
      desc: "Tight control on sourcing and distribution",
    },
    {
      image: "https://img1.hkrtcdn.com/20791/normal_2079090_o.png",
      title: "Guide to Fit and Healthy Lifestyle",
      desc: "Your true partner in health & wellness journey",
    },
  ];

  return (
    <Box>
      <Box>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={{ base: "4", md: "0" }}
          justifyContent={{ base: "center", md: "space-between" }}
          mx={{ base: "4", md: "28" }}
          my={{ base: "4", md: "10" }}
        >
          {image.map((ele, i) => (
            <Box key={i} mb={{ base: "4", md: "0" }} px="2">
              <Image
                py={{ base: "0", md: "4", lg: "0" }}
                rounded={"2xl"}
                src={ele}
                alt={i}
              />
            </Box>
          ))}
        </Grid>
      </Box>
      <Divider my={"6"} borderColor="gray.300" borderWidth="4px" />
      <Box>
        <Heading ml={"28"} my={"3"}>
          Why MediTechHub ?
        </Heading>
        <Grid
          alignItems={"center"}
          gap={"10"}
          mx={"28"}
          templateColumns={{
            base: "1fr",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
        >
          {smallcartImages.map((ele, i) => {
            return (
              <Box rounded={"md"} p={"10"} bg={"cyan.50"} shadow={"md"} key={i}>
                <Image rounded={"lg"} my={"2"} src={ele.image} alt={ele.desc} />
                <Box>
                  <Text fontWeight={"bold"} my={"2"} fontSize={"xl"}>
                    {ele.title}
                  </Text>
                  <Text my={"2"} fontSize={"lg"}>
                    {ele.desc}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Box>
      <Divider my={"6"} borderColor="gray.300" borderWidth="4px" />
      <Flex
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        justifyContent={"center"}
        gap={"10"}
        rounded={"5"}
        alignItems={"center"}
        shadow={"sm"}
      >
        <Box display={"grid"} gap={"5"}>
          <Flex
            bg={"teal.500"}
            textColor={"white"}
            rounded={"3xl"}
            px={"5"}
            alignItems={"center"}
            justifyContent={"space-between"}
            shadow={"sm"}
          >
            <Box p={"2"}>
              <Heading my={"3"}>MEDITECH Premium</Heading>
              <Text my={"3"}>
                Earn extra HK Cash & Enjoy more discounts and <br /> deals than
                anyone else!
              </Text>
              <Button my={"3"}>Be a Part Now!</Button>
            </Box>
            <Box>
              <Image
                src={
                  "https://static1.hkrtcdn.com/hknext/static/media/common/misc/subscribe.svg"
                }
                alt="error"
              />
            </Box>
          </Flex>
          <Flex
            px={"5"}
            rounded={"3xl"}
            alignItems={"center"}
            justifyContent={"space-between"}
            shadow={"sm"}
            bg={"teal.50"}
          >
            <Box>
              <Heading my={"3"}>Refer & Earn</Heading>
              <Text my={"3"}>
                Tell your friends to shop at
                <br /> HealthKart. They get Rs.200 off
                <br /> when they shop with us the 1st time
                <br /> & you get Rs. 200 off on your next <br /> order.
              </Text>
              <Flex>
                <Text my={"3"}>Refer Now</Text>
                <Image
                  mx={"3"}
                  src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/refer-arrow-go.svg"
                  alt="Error"
                />
              </Flex>
            </Box>
            <Box>
              <Image
                src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/boy-refer.svg"
                alt="Error"
              />
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex
            rounded={"3xl"}
            bgGradient={"linear(to-r ,#D9F1F1,#20C4A6)"}
            px={"7"}
            alignItems={"center"}
            justifyContent={"space-between"}
            shadow={"sm"}
          >
            <Box>
              <Heading my={"2"}>Instant </Heading>
              <Heading my={"2"}>Assistance</Heading>
              <Text my={"2"}>Wish to seek advise from </Text>
              <Text my={"2"}>nutritionists and dietitians?</Text>
              <Button
                bg={"whitesmoke"}
                p={"5"}
                fontSize={"lg"}
                _hover={{ shadow: "2xl" }}
                mt={"14"}
                mb={"4"}
              >
                Book An Appointment
              </Button>
              <Text my={"2"}>
                * Get your customized nutrition <br />
                and lifestyle plan
              </Text>
            </Box>
            <Box>
              <Image
                w={"full"}
                src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/physician.png"
                alt="Error Doctor Image"
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
