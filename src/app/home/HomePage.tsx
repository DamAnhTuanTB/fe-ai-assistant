"use client";

import publicRoute from "@/components/PublicRoute";
import {
  setChatId,
  setContents,
  setInfoUser,
  setLanguage,
  setLogin,
  setOpenSidebar,
  setTheme,
} from "@/redux/slices/appSlice";
import { RootState } from "@/redux/store";
import chatService from "@/services/chat";
import userService from "@/services/user";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import styles from "./styles.module.scss";

function HomePage({
  token,
  refreshToken,
  id,
}: {
  token: string;
  refreshToken: string;
  id: string;
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const contents = useSelector((state: RootState) => state.appReducer.contents);
  useEffect(() => {
    if (token && refreshToken) {
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      dispatch(setLogin(true));
      router.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, refreshToken]);

  useEffect(() => {
    if (id && contents?.length === 0) {
      dispatch(setChatId(id));
      chatService.getDetailChat(id).then((res) => {
        dispatch(setContents(res?.data?.messages));
      });
    }
  }, [id]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(setLogin(true));
      userService.getInfo().then((res) => {
        localStorage.setItem("infoUser", JSON.stringify(res?.data));
        dispatch(setInfoUser(res?.data));
      });
    }
    if (localStorage.getItem("language")) {
      i18n.changeLanguage(localStorage.getItem("language") as string);

      dispatch(setLanguage(localStorage.getItem("language")));
    }
    if (localStorage.getItem("theme")) {
      dispatch(setTheme(localStorage.getItem("theme") as string));
    }
    if (localStorage.getItem("openSidebar")) {
      dispatch(setOpenSidebar(localStorage.getItem("openSidebar") === "true"));
    }
  }, []);

  return (
    <Box className={styles.homePage}>
      <Sidebar />
      <Content />
    </Box>
  );
}

export default publicRoute(HomePage);
