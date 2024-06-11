import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
export default function CustomSelect({
  label,
  placeholder,
  error,
  helperText,
  register,
  isRequired,
  size = "lg",
  value,
  optionsSelect,
}: {
  label?: string;
  placeholder?: string;
  error?: any;
  helperText?: string;
  register?: any;
  isRequired?: boolean;
  size?: "sm" | "md" | "lg";
  value?: any;
  optionsSelect?: any;
}) {
  const { t } = useTranslation();

  return (
    <FormControl
      isInvalid={!!error}
      sx={{ mb: "16px" }}
      isRequired={isRequired}
    >
      {label && <FormLabel>{t(label)}</FormLabel>}
      <Select
        variant="outline"
        placeholder={t(placeholder as string)}
        {...register}
        size={size}
        focusBorderColor="green.600"
        {...(!value && { color: "gray.500" })}
      >
        {optionsSelect.map((option: any) => (
          <option key={option}>{option}</option>
        ))}
      </Select>

      {helperText && <FormHelperText>{t(helperText)}</FormHelperText>}
      {error && <FormErrorMessage>{t(error.message)}</FormErrorMessage>}
    </FormControl>
  );
}
