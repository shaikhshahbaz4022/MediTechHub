import { Divider } from "@chakra-ui/react";
import { Midhome } from "../Components/MidHome";
import { Crouser } from "../Components/crouser";
import { Navbar } from "../Components/navbar";
import Footer from "../Components/footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Crouser />
      <Divider my={"6"} borderColor="gray.300" borderWidth="4px" />
      <Midhome />
      <Divider my={"6"} borderColor="gray.300" borderWidth="4px" />
      <Footer />
    </div>
  );
}
export default HomePage;
