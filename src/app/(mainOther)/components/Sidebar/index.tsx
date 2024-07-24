"use client";
import Logo from "@/app/(auth)/login/components/Logo";
import { setOpenSidebar } from "@/redux/slices/appSlice";
import { RootState } from "@/redux/store";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Icon } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import {
  AiOutlineApartment,
  AiOutlineFileImage,
  AiOutlineFileText,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";

export const menu = [
  {
    text: "Generate Image",
    path: "/generate-image",
    icon: AiOutlineFileImage,
  },
  {
    text: "Generate PDF",
    path: "/generate-pdf",
    icon: AiOutlineFileText,
  },
  {
    text: "Generate Diagram",
    path: "/generate-diagram",
    icon: AiOutlineApartment,
  },
];

export default function Sidebar() {
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const openSidebar = useSelector(
    (app: RootState) => app.appReducer.openSidebar
  );

  return (
    <Box
      className={`${styles.sidebar} ${
        openSidebar ? styles.showSidebar : styles.hiddenSidebar
      }`}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo
          sx={{
            "& *": {
              fontSize: "22px !important",
            },
            "& img": {
              width: "35px",
              height: "35px",
            },
          }}
        />
        <HamburgerIcon
          width="24px"
          height="24px"
          sx={{ cursor: "pointer", display: openSidebar ? "block" : "none" }}
          onClick={() => {
            localStorage.setItem("openSidebar", "false");
            dispatch(setOpenSidebar(false));
          }}
        />
      </Box>

      <Box sx={{ flex: 1, mt: "16px" }}>
        {menu.map((item, index) => (
          <Box
            key={index}
            sx={{
              mb: "8px",
              display: "flex",
              alignItems: "center",
              padding: "8px 16px",
              cursor: "pointer",
              borderRadius: "8px",
              gap: "10px",
              fontWeight: 500,
              background: pathname === item.path ? "hoverMenu" : "transparent",
            }}
            onClick={() => {
              router.push(item.path);
            }}
            _hover={{
              background: "hoverMenu",
            }}
          >
            <Icon as={item.icon as any} width="16px" height="16px" />
            {t(item.text)}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
