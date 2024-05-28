import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, IconButton, Text } from "@chakra-ui/react";
import TextareaAutosize from "react-textarea-autosize";
import styles from "./styles.module.scss";

export default function InputPrompt() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          gap: "4px",
          border: "1px solid",
          borderColor: "teal",
          padding: "10px",
          borderRadius: "20px",
        }}
      >
        <TextareaAutosize
          maxRows={8}
          className={styles.textarea}
          placeholder="Type your prompt here"
        />
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="teal"
          aria-label="Done"
          fontSize="20px"
          icon={<ArrowUpIcon />}
        />
      </Box>
      <Text sx={{ textAlign: "center", fontSize: "13px", mt: 1 }}>
        AI Assistant can make mistakes. Please check important information.
      </Text>
    </Box>
  );
}
