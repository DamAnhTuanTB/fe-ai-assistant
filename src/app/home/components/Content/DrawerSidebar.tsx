import { Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/react";

import Logo from "@/app/(auth)/login/components/Logo";
import { RootState } from "@/redux/store";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function DrawerSidebar({ isOpen, onClose }: any) {
  const router = useRouter();

  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.appReducer?.isLogin);
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
        <Box>
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
          <Button
            rightIcon={<EditIcon />}
            colorScheme="teal"
            variant="outline"
            width="100%"
            mt={4}
            // _hover={{ bg: "teal.100" }}
          >
            New chat
          </Button>
        </Box>
        {!isLogin && (
          <Box>
            <Button
              width="100%"
              colorScheme="teal"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </Button>
            <Text textAlign="center">Login to use more features</Text>
          </Box>
        )}
      </DrawerContent>
    </Drawer>
  );
}
