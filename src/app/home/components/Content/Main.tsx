import { RootState } from "@/redux/store";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import ExamplePrompt from "./ExamplePrompt";
import InputPrompt from "./InputPrompt";
import ListChat from "./ListChat";

export default function Main() {
  const loading = useSelector((state: RootState) => state.appReducer.loading);
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
        }}
      >
        {contents?.length === 0 ? (
          <ExamplePrompt />
        ) : (
          <ListChat contents={contents} loading={loading} />
        )}
        <InputPrompt loading={loading} />
      </Box>
    </Box>
  );
}
