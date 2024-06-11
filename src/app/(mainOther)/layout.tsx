"use client";
import { RootState } from "@/redux/store";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styles from "./styles.module.scss";

export default function MainOtherLayout({ children }: any) {
  const openSidebar = useSelector(
    (app: RootState) => app.appReducer.openSidebar
  );
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
