import { Box } from "@chakra-ui/react";
import ExamplePrompt from "./ExamplePrompt";
import InputPrompt from "./InputPrompt";

export default function Main() {
  return (
    <Box
      sx={{
        flex: 1,
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
        <ExamplePrompt />
        <InputPrompt />
      </Box>
    </Box>
  );
}
