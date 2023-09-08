import {
  Box,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  IconButton,
  VStack,
  useMediaQuery,
  Link,
  Button,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileUpload,
  faUser,
  faTag,
  faCartShopping,
  faBars,
  faTimes,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Navbar() {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 768px)");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Box>
      <Box
        position={"relative"}
        h={"24"}
        alignItems={"center"}
        w={"full"}
        display={"flex"}
        justifyContent={"space-evenly"}
        bg={"teal.500"}
        fontSize={"lg"}
        fontFamily={"sans-serif"}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <HStack alignItems={"center"}>
            <Box>
              <Image
                w={"36"}
                src="https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg"
                alt="Error"
              />
            </Box>
            {!isSmallerThanMd && (
              <Input
                ml={"4"}
                w={"2xl"}
                color={"black"}
                rounded={"10"}
                textColor={"black"}
                placeholder="Enter Text Here"
                focusBorderColor="black"
                backgroundColor={"white"}
                py={"6"}
              />
            )}
            {!isSmallerThanMd && (
              <Box
                cursor={"pointer"}
                border={"1px"}
                borderColor={"white"}
                px={"3"}
                ml={"2"}
                py={"2"}
                rounded={7}
              >
                <FontAwesomeIcon icon={faSearch} color="white" />
              </Box>
            )}
          </HStack>
          {(!isSmallerThanMd && !isMenuOpen) || !isSmallerThanMd ? (
            <HStack color={"white"} spacing={9} ml={"28"}>
              <Box
                justifyContent={"space-between"}
                w={"20"}
                gap={"7px"}
                alignItems={"center"}
                display={"flex"}
              >
                <FontAwesomeIcon icon={faFileUpload} color="white" />
                <Text>Uploads</Text>
              </Box>
              <Box
                justifyContent={"space-between"}
                gap={"7px"}
                w={"14"}
                alignItems={"center"}
                display={"flex"}
              >
                <FontAwesomeIcon icon={faTag} color="white" />
                <Text textColor={"white"}>Offer</Text>
              </Box>
              <Box
                gap={"7px"}
                justifyContent={"space-between"}
                w={"14"}
                color={"white"}
                display={"flex"}
                alignItems={"center"}
              >
                <FontAwesomeIcon icon={faCartShopping} />
                <Text>Cart</Text>
              </Box>
              <Box
                justifyContent={"space-between"}
                w={"16"}
                color={"white"}
                gap={"7px"}
                display={"flex"}
                alignItems={"center"}
              >
                <FontAwesomeIcon icon={faUser} />
                <Text textColor={"white"}> SignUp/SignIn </Text>
              </Box>
            </HStack>
          ) : null}

          {isSmallerThanMd && (
            <IconButton
              icon={
                isMenuOpen ? (
                  <FontAwesomeIcon icon={faTimes} />
                ) : (
                  <FontAwesomeIcon icon={faBars} />
                )
              }
              variant="ghost"
              color={"white"}
              textColor={"black"}
              aria-label="Toggle menu"
              onClick={toggleMenu}
            />
          )}
        </Flex>
        {isSmallerThanMd && isMenuOpen && (
          <VStack
            spacing={2}
            p={2}
            bg={"gray.500"} // Set background color
            position="absolute"
            top="100%"
            right="5"
            zIndex="10" // Set a higher z-index
          >
            <Text textColor={"white"} onClick={closeMenu}>
              <Link>Services</Link>
            </Text>
            <Text textColor={"white"} onClick={closeMenu}>
              Contractors
            </Text>
            <Text textColor={"white"} onClick={closeMenu}>
              Lobby
            </Text>
            <Text textColor={"white"} onClick={closeMenu}>
              Sign Up
            </Text>
            <Text textColor={"white"} onClick={closeMenu}>
              Offers
            </Text>
            <Text textColor={"white"} onClick={closeMenu}>
              Account
            </Text>
          </VStack>
        )}
      </Box>
      <Box my={{ base: "5" }} fontSize={"lg"} _hover={{ bg: "gray.50" }}>
        <Flex justifyContent={"space-evenly"} alignItems={"center"}>
          <Button
            _hover={{
              outline: "2px solid gray",
              outlineWidth: "1px",
            }}
          >
            Shop By Category
          </Button>
          <Link _hover={{ color: "gray" }}>Best Sellers</Link>
          <Link _hover={{ color: "gray" }}>Brands</Link>
          <Link
            _hover={{ color: "gray" }}
            display={{ md: "none", lg: "block", base: "none" }}
          >
            Offer Zone
          </Link>
          <Link _hover={{ color: "gray" }}>Blogs</Link>
          <Link
            _hover={{ color: "gray" }}
            display={{ md: "none", lg: "block", base: "none" }}
          >
            Gift Card
          </Link>
          <Link
            _hover={{ color: "gray" }}
            display={{ md: "none", lg: "block", base: "none" }}
          >
            Customer Support
          </Link>
          <Link
            _hover={{ color: "gray" }}
            display={{ md: "none", lg: "block", base: "none" }}
          >
            Store locator
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}
