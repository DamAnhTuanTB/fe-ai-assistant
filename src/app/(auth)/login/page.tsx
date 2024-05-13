import { Box } from "@chakra-ui/react";
import { Metadata } from "next";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

export const metadata: Metadata = {
  title: "Login",
  description: "Login for your account",
};

export default function Login() {
  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      <LeftSide />
      <RightSide />
    </Box>
  );
}
