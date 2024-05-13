"use client";
import CustomPasswordInput from "@/components/CustomPasswordInput";
import CustomTextInput from "@/components/CustomTextInput";
import { StarIcon } from "@chakra-ui/icons";
import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  Image,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Logo from "./Logo";

export default function RightSide() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Your email is invalid")
      .required("Email is required to input"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required to input"),
  });
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Box
      sx={{
        width: {
          base: "100%",
          md: "40%",
        },
        p: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Logo sx={{ display: { base: "flex", md: "none" } }} />
      <Text
        sx={{
          fontSize: "28px",
          mt: {
            base: "24px",
            md: "0px",
          },
          mb: "28px",
          fontWeight: "medium",
          color: "green.800",
        }}
      >
        <StarIcon
          color="green.300"
          sx={{ display: { base: "none", md: "inline-block" } }}
        />{" "}
        Login to use more features
      </Text>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "100%" }}
      >
        <CustomTextInput
          label="Email"
          error={errors["email"]}
          register={register("email")}
          isRequired={true}
        />
        <CustomPasswordInput
          label="Password"
          error={errors["password"]}
          register={register("password")}
          isRequired={true}
        />
        <Button
          type="submit"
          size="lg"
          width="100%"
          colorScheme="teal"
          sx={{ mt: "16px" }}
        >
          Login
        </Button>
      </form>
      <Box position="relative" pt={10} pb={10}>
        <Divider />
        <AbsoluteCenter bg="white" px="4">
          or
        </AbsoluteCenter>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Button
          size="lg"
          colorScheme="teal"
          variant="outline"
          leftIcon={<Image src="/images/google.png" alt="" width={30} />}
        >
          <Text width={220} textAlign="left">
            Continue with Google
          </Text>
        </Button>
        <Button
          size="lg"
          colorScheme="teal"
          variant="outline"
          leftIcon={<Image src="/images/facebook.svg" alt="" width={30} />}
        >
          <Text width={220} textAlign="left">
            Continue with Facebook
          </Text>
        </Button>
      </Box>
    </Box>
  );
}
