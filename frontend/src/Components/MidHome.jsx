import { Box, Flex, Grid, Image } from "@chakra-ui/react";
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

  return (
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
  );
}
