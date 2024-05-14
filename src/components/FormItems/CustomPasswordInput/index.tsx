import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
export default function CustomPasswordInput({
  label,
  placeholder,
  error,
  helperText,
  register,
  isRequired = false,
  size = "lg",
}: any) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <FormControl isInvalid={error} sx={{ mb: "16px" }} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          size={size}
          focusBorderColor="green.600"
          {...register}
        />
        <InputRightElement
          onClick={handleClick}
          sx={{ height: "100%", cursor: "pointer" }}
        >
          {show ? <ViewIcon boxSize={5} /> : <ViewOffIcon boxSize={5} />}
        </InputRightElement>
      </InputGroup>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
}
