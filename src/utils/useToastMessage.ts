import { useToast } from "@chakra-ui/react";

const useToastMessage = () => {
  const toast = useToast();

  const showSuccess = (title: string, message: string) => {
    return toast({
      position: "top-right",
      title: title,
      description: message,
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  const showError = (title: string, message: string) => {
    return toast({
      position: "top-right",
      title: title,
      description: message,
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  };

  return {
    showSuccess,
    showError,
  };
};
export default useToastMessage;
