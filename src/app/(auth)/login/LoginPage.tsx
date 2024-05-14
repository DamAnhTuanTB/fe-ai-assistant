"use client";
import publicRoute from "@/components/PublicRoute";
import { Box } from "@chakra-ui/react";
import FormLogin from "./components/FormLogin";
import Introduce from "./components/Introduce";

function LoginPage() {
  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      <Introduce />
      <FormLogin />
    </Box>
  );
}

export default publicRoute(LoginPage);
