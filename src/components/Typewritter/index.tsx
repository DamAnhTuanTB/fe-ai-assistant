import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Typewriter = ({
  text,
  sx,
  icon,
}: {
  text: string;
  sx: any;
  icon?: string;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval); // Dừng khi hiển thị đầy đủ câu
      }
    }, 30); // Thay đổi thời gian ở đây để điều chỉnh tốc độ

    return () => clearInterval(interval);
  }, [currentIndex, text]);

  return (
    displayText && (
      <Text
        position="relative"
        sx={{
          "&::after": {
            content: "''",
            width: "55px",
            height: "55px",
            display: "inline-block",
            borderRadius: "50%",
            position: "absolute",
            bottom: "2px",
            backgroundImage: icon ? `url(${icon})` : "",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          },
          ...sx,
        }}
      >
        {displayText}
      </Text>
    )
  );
};

export default Typewriter;
