"use client";
import { Drawer, DrawerContent, DrawerOverlay, Icon } from "@chakra-ui/react";

import Logo from "@/app/(auth)/login/components/Logo";
import { RootState } from "@/redux/store";
import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { menu } from "../Sidebar";

export default function DrawerSidebar({ isOpen, onClose }: any) {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const id = useSelector((state: RootState) => state.appReducer.chatId);
  const isLogin = useSelector((state: RootState) => state.appReducer?.isLogin);
  const loading = useSelector((state: RootState) => state.appReducer.loading);
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent
        sx={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // height: "52px",
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
          <CloseIcon
            width="16px"
            height="16px"
            sx={{
              cursor: "pointer",
            }}
            onClick={() => {
              onClose();
            }}
          />
        </Box>

        <Box sx={{ flex: 1, mt: "16px" }}>
          {menu.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "8px 16px",
                cursor: "pointer",
                borderRadius: "8px",
                gap: "10px",
                fontWeight: 500,
                background:
                  pathname === item.path ? "hoverMenu" : "transparent",
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
      </DrawerContent>
    </Drawer>
  );
}
