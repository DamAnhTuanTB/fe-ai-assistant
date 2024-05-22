"use client";

import publicRoute from "@/components/PublicRoute";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import styles from "./styles.module.scss";

function HomePage({
  token,
  refreshToken,
}: {
  token: string;
  refreshToken: string;
}) {
  const router = useRouter();

  useEffect(() => {
    if (token && refreshToken) {
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      router.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, refreshToken]);

  return (
    <Box className={styles.homePage}>
      <Sidebar />
      <Content />
    </Box>
  );
}

export default publicRoute(HomePage);
