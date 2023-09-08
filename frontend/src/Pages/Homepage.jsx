import { Divider } from "@chakra-ui/react";
import { Midhome } from "../Components/MidHome";
import { Crouser } from "../Components/crouser";
import { Navbar } from "../Components/navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Crouser />
      <Divider my={"6"} borderColor="gray.300" borderWidth="4px" />
      <Midhome />
      <Divider my={"6"} borderColor="gray.300" borderWidth="4px" />
    </div>
  );
}
export default HomePage;
