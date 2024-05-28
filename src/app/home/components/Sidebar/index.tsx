import Logo from "@/app/(auth)/login/components/Logo";
import { setOpenSidebar } from "@/redux/slices/appSlice";
import { RootState } from "@/redux/store";
import { EditIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";

export default function Sidebar() {
  const router = useRouter();
  const openSidebar = useSelector(
    (app: RootState) => app.appReducer.openSidebar
  );

  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.appReducer?.isLogin);

  return (
    <Box
      className={`${styles.sidebar} ${
        openSidebar ? styles.showSidebar : styles.hiddenSidebar
      }`}
    >
      <Box>
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
    </Box>
  );
}
