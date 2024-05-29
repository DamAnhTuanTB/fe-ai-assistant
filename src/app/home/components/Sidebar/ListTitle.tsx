import { resetValues } from "@/redux/slices/appSlice";
import { RootState } from "@/redux/store";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function ListTitle({ onClose }: any) {
  const listTitle = useSelector(
    (state: RootState) => state.appReducer?.listTitle
  );
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const id = useSelector((state: RootState) => state.appReducer.chatId);
  const { colorMode } = useColorMode();
  return (
    <Box sx={{ flex: 1, overflowY: "auto", padding: "10px 0px" }}>
      {listTitle?.map((item: any) => (
        <Box
          key={item?.id}
          sx={{
            border: "1px solid transparent",
            borderRadius: "10px",
            padding: "6px",
            mb: "6px",
            cursor: "pointer",
            background:
              item?.id === id
                ? colorMode === "light"
                  ? "gray.200"
                  : "teal"
                : "transparent",
          }}
          _hover={{
            backgroundColor: colorMode === "light" ? "gray.200" : "teal",
          }}
          onClick={() => {
            dispatch(resetValues());
            if (onClose) {
              onClose();
            }
            router.push(`${pathname}?id=${item?.id}`);
          }}
        >
          <Text>{item?.title}</Text>
        </Box>
      ))}
    </Box>
  );
}
