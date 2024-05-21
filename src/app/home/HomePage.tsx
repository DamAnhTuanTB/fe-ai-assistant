"use client";

import publicRoute from "@/components/PublicRoute";
import AppContext from "@/context";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

function HomePage({
  token,
  refreshToken,
}: {
  token: string;
  refreshToken: string;
}) {
  const appContext = useContext(AppContext);
  const router = useRouter();
  console.log("HomePage");
  useEffect(() => {
    if (token && refreshToken) {
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      router.replace("/");
    }
  }, [token, refreshToken]);
  return <Box></Box>;
}

export default publicRoute(HomePage);
