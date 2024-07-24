import Logo from "@/app/(auth)/login/components/Logo";
import { setListTitle, setOpenSidebar } from "@/redux/slices/appSlice";
import { RootState } from "@/redux/store";
import chatService from "@/services/chat";
import { EditIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import ListTitle from "./ListTitle";
import styles from "./styles.module.scss";

export default function Sidebar({ id }: { id?: string }) {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const openSidebar = useSelector(
    (app: RootState) => app.appReducer.openSidebar
  );

  useEffect(() => {
    chatService
      .getListTitleChat()
      .then((res) => {
        dispatch(setListTitle(res?.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleNewEmptyChat = () => {
    setLoading(true);
    chatService
      .createEmptyNewChat()
      .then((res: any) => {
        router.push(`/chat/${res?.id}`);
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  };

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
          onClick={handleNewEmptyChat}
          rightIcon={<EditIcon />}
          colorScheme="teal"
          variant="outline"
          width="100%"
          mt={4}
          isLoading={loading}
          // _hover={{ bg: "teal.100" }}
        >
          {t("New chat")}
        </Button>
      </Box>
      <ListTitle id={id} />
    </Box>
  );
}
