import CustomSelect from "@/components/FormItems/CustomSelect";
import CustomTextarea from "@/components/FormItems/CustomTextarea";
import imageService from "@/services/image";
import { Box, Button, Divider, Image, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import * as yup from "yup";

export default function FormGenerate() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const schema = yup.object().shape({
    prompt: yup
      .string()
      .max(255, "Prompt is maximum 255 characters")
      .required("Prompt is required to input"),
    size: yup.string().required("Size is required to input"),
  });
  const {
    handleSubmit,
    register,
    watch,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = (values: any) => {
    setLoading(true);
    setResult("");
    imageService
      .generateImage(values)
      .then((res: any) => {
        setResult(res?.url);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box>
      <Text
        sx={{
          textAlign: "center",
          fontWeight: "medium",
          fontSize: {
            base: "22px",
            md: "35px",
          },
          fontFamily: "Reddit Mono",
          my: "20px",
        }}
      >
        {t("Generate your favorite image")}
      </Text>
      <form
        noValidate
        style={{ width: "100%" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <CustomTextarea
          label="Prompt"
          error={errors["prompt"]}
          register={register("prompt")}
          isRequired={true}
          placeholder="Please enter prompt"
        />
        <CustomSelect
          value={watch("size")}
          optionsSelect={["256x256", "512x512", "1024x1024"]}
          label="Select size"
          error={errors["size"]}
          register={register("size")}
          isRequired={true}
          placeholder="Please select size"
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            isLoading={loading}
            type="submit"
            size="lg"
            // width="100%"
            colorScheme="teal"
            sx={{ margin: "auto", mt: "16px" }}
            // bgGradient="linear(to-r, teal.500, green.500)"
            // _hover={{
            //   bgGradient: "linear(to-r, red.500, yellow.500)",
            // }}
          >
            {t("Generate")}
          </Button>
        </Box>
      </form>
      {result && (
        <Box sx={{ mt: "35px" }}>
          <Divider />
          <Text
            sx={{
              mt: "22px",
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "Reddit Mono",
              fontSize: "20px",
            }}
          >
            {t("This is your result!")}
          </Text>
          <Image
            sx={{ margin: "auto", mt: "10px", maxWidth: "500px" }}
            src={result}
            alt="image"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              mt: "20px",
            }}
          >
            <Button
              isLoading={loading}
              size="lg"
              colorScheme="blue"
              onClick={() => {
                const link = document.createElement("a");
                link.href = result;
                link.download = "downloaded_image.jpg";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              {t("Download")}
            </Button>
            <Button
              isLoading={loading}
              size="lg"
              colorScheme="red"
              onClick={() => {
                reset();
                setResult("");
              }}
            >
              {t("Reset")}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
