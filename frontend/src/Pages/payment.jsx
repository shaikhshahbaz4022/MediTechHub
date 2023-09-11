import { Box, Button, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function PaymentPage() {
  const navigate = useNavigate();
  const { token } = JSON.parse(localStorage.getItem("userDetails"));
  const handleOprnrazorPay = (data) => {
    const options = {
      key: "rzp_test_cM8McXRkDdp4FB",
      amount: Number(data.amount),
      currency: data.currency,
      order_id: data.id,
      name: "MediTech_Hub", //
      description: "Make Secure Payment with Razorpay", //
      handler: function (response) {
        console.log(response, "56");
        axios
          .post(
            "http://localhost:8080/payment/verify",
            { response: response },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            console.log(res);
            // your orders
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleClick = () => {
    const amount = localStorage.getItem("amount") || 0;
    const _data = { amount: amount };
    axios
      .post(`http://localhost:8080/payment/orders`, _data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        handleOprnrazorPay(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box>
      <Heading>Pay Now</Heading>
      <Button onClick={handleClick}>Pay Now</Button>
    </Box>
  );
}
