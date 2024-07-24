import Typewriter from "@/components/Typewritter";
import { RootState } from "@/redux/store";
import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ExamplePrompt from "./ExamplePrompt";
import InputPrompt from "./InputPrompt";
import ListChat from "./ListChat";

export default function Main({ id }: { id?: string }) {
  const { t } = useTranslation();
  const contents = useSelector((state: RootState) => state.appReducer.contents);
  return (
    <Box
      sx={{
        flex: 1,
        height: "calc(100vh - 52px)",
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
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        {!id && (
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text sx={{ fontSize: "40px", fontWeight: "bold" }}>
              {t("Welcome to AI Assistant!")}
            </Text>
            <Typewriter
              text={`"${t(
                "Your smart assistant ready to support you anytime, anywhere. Start exploring today!"
              )}"`}
              sx={{ fontSize: "30px", mt: "10px" }}
              icon="/images/icon-last-text.png"
            />
          </Box>
        )}

        {id && contents?.length === 0 && <ExamplePrompt />}

        {contents?.length > 0 && <ListChat contents={contents} />}

        {id && <InputPrompt />}
      </Box>
    </Box>
  );
}
