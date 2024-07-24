import { Box, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Spinner
        size="xl"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="teal"
      />
    </Box>
  );
}
