"use client";

import privateRoute from "@/components/PrivateRoute";
import { useTranslation } from "react-i18next";
import FormGenerate from "./components/FormGenerate";

function GenerateImagePage() {
  const { t } = useTranslation();

  return <FormGenerate />;
}

export default privateRoute(GenerateImagePage);
