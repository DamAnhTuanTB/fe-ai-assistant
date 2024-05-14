import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
export default function CustomTextInput({
  label,
  placeholder,
  error,
  helperText,
  register,
  isRequired,
  size = "lg",
}: {
  label?: string;
  placeholder?: string;
  error?: any;
  helperText?: string;
  register?: any;
  isRequired?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <FormControl
      isInvalid={!!error}
      sx={{ mb: "16px" }}
      isRequired={isRequired}
    >
      <FormLabel>{label}</FormLabel>
      <Input
        type="text"
        placeholder={placeholder}
        {...register}
        size={size}
        focusBorderColor="green.600"
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
}
