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
import { useNavigate } from "react-router-dom";
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
  const userDetails = JSON.parse(localStorage.getItem("userDetails")) || {};
  const navigate = useNavigate();
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
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"90%"}
        >
          <HStack alignItems={"center"} justifyContent={"space-between"}>
            <Box>
              <Image
                w={"36"}
                rounded={"lg"}
                src="https://i.ibb.co/2g3Bvtr/Medi-Techhub.jpg"
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
                <Text>
                  <Link href="/cartpage">Cart</Link>
                </Text>
              </Box>
              {userDetails && (
                <Box
                  gap={"7px"}
                  justifyContent={"space-between"}
                  w={"14"}
                  color={"white"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Box>
                    {userDetails && userDetails.user ? (
                      <Flex
                        px={"2"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <FontAwesomeIcon icon={faUser} />
                        <Text
                          fontSize={"xl"}
                          fontFamily={"sans-serif"}
                          ml={"2"}
                        >
                          {userDetails.user.username}
                        </Text>
                      </Flex>
                    ) : (
                      <FontAwesomeIcon
                        style={{ marginLeft: "55px" }}
                        icon={faUser}
                      />
                    )}
                  </Box>
                </Box>
              )}
              <Box
                justifyContent={"space-between"}
                w={"18"}
                color={"white"}
                gap={"7px"}
                display={"flex"}
                alignItems={"center"}
              >
                <Text textColor={"white"}>
                  {userDetails && userDetails.token ? (
                    <Button
                      ml={"8"}
                      onClick={() => {
                        localStorage.clear();
                        setTimeout(() => {
                          navigate("/");
                        }, 1000);
                      }}
                    >
                      Logout
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      SignUp/SignIn
                    </Button>
                  )}
                </Text>
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
            bg={"gray.500"}
            position="absolute"
            top="100%"
            right="5"
            zIndex="10"
          >
            <Text textColor={"white"} onClick={closeMenu}>
              <Link href="/products">Products</Link>
            </Text>
            <Text textColor={"white"} onClick={closeMenu}>
              <Link href="/cartpage">CartPage</Link>
            </Text>
            <Text textColor={"white"} onClick={closeMenu}>
              <Link href="/register">Register</Link>
            </Text>
            <Text textColor={"white"} onClick={closeMenu}>
              <Link href="/login">Login</Link>
            </Text>
            <Box
              justifyContent={"space-between"}
              w={"18"}
              color={"white"}
              gap={"7px"}
              display={"flex"}
              alignItems={"center"}
            >
              <Text textColor={"white"}>
                {userDetails && userDetails.token ? (
                  <Button
                    ml={"8"}
                    onClick={() => {
                      localStorage.clear();
                      setTimeout(() => {
                        navigate("/");
                      }, 1000);
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    SignUp/SignIn
                  </Button>
                )}
              </Text>
            </Box>
          </VStack>
        )}
      </Box>
      <Box my={{ base: "5" }} fontSize={"lg"} _hover={{ bg: "gray.50" }}>
        <Flex justifyContent={"space-evenly"} alignItems={"center"}>
          <Button
            onClick={() => {
              navigate("/products");
            }}
            _hover={{
              outline: "2px solid gray",
              outlineWidth: "1px",
            }}
          >
            Shop By Category
          </Button>
          <Link href="/products" _hover={{ color: "gray" }}>
            Best Sellers
          </Link>
          <Link href="/products" _hover={{ color: "gray" }}>
            Brands
          </Link>
          <Link
            _hover={{ color: "gray" }}
            display={{ md: "none", lg: "block", base: "none" }}
            href="/products"
          >
            Offer Zone
          </Link>
          <Link href="/products" _hover={{ color: "gray" }}>
            Blogs
          </Link>
          <Link
            href="/products"
            _hover={{ color: "gray" }}
            display={{ md: "none", lg: "block", base: "none" }}
          >
            Gift Card
          </Link>
          <Link
            href="/products"
            _hover={{ color: "gray" }}
            display={{ md: "none", lg: "block", base: "none" }}
          >
            Customer Support
          </Link>
          <Link
            href="/products"
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
