"use client";
import {
  setInfoUser,
  setLanguage,
  setLogin,
  setOpenSidebar,
  setTheme,
} from "@/redux/slices/appSlice";
import { RootState } from "@/redux/store";
import userService from "@/services/user";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styles from "./styles.module.scss";

export default function MainOtherLayout({ children }: any) {
  const { i18n } = useTranslation();
  const openSidebar = useSelector(
    (app: RootState) => app.appReducer.openSidebar
  );

  const router = useRouter();
  const isLogin = useSelector((app: RootState) => app.appReducer.isLogin);

  const dispatch = useDispatch();

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

  useEffect(() => {
    if (!isLogin) {
      router.push("/login");
    }
  }, [isLogin]);

  if (!isLogin) {
    return <></>;
  }

  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex" }}>
      <Sidebar />
      <Box
        className={`${styles.content} ${!openSidebar && styles.noPaddingLeft}`}
      >
        <Header />
        <Box
          sx={{
            flex: 1,
            height: "calc(100vh - 52px)",
            overflowY: "auto",
            padding: {
              base: "0px",
              md: "0px 16px",
            },
          }}
        >
          <Box
            sx={{
              maxWidth: "900px",
              margin: "auto",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
