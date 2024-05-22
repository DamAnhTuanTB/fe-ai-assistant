import Logo from "@/app/(auth)/login/components/Logo";
import { EditIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import styles from "./styles.module.scss";

export default function Sidebar() {
  return (
    <Box className={styles.sidebar} background="sidebar">
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
              fontSize: "20px !important",
            },
            "& img": {
              width: "32px",
              height: "32px",
            },
          }}
        />
        <HamburgerIcon width="22px" height="22px" />
      </Box>
      <Button
        rightIcon={<EditIcon />}
        colorScheme="teal"
        variant="outline"
        width="100%"
      >
        New chat
      </Button>
    </Box>
  );
}
