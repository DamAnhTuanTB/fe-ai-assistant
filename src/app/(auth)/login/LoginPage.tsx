"use client";
import publicRoute from "@/components/PublicRoute";
import { analytics } from "@/utils/firebaseConfig";
import { Box } from "@chakra-ui/react";
import { logEvent } from "firebase/analytics";
import { useEffect, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import FormLogin from "./components/FormLogin";
import Introduce from "./components/Introduce";

function LoginPage() {
  const { i18n } = useTranslation();
  useLayoutEffect(() => {
    if (localStorage.getItem("language")) {
      i18n.changeLanguage(localStorage.getItem("language") as string);
    }
  }, []);

  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "visit_login_page");
    }
  }, []);
  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      <Introduce />
      <FormLogin />
    </Box>
  );
}

export default publicRoute(LoginPage);
