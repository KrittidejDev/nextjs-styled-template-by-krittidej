import React from "react";
import { AaPlatformStyled } from "./styled";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "next-i18next";
import { Buttons, Inputs } from "@/components";

const AaPlatform = ({ onSubmit }) => {
  const schema = yup.object().shape({
    test: yup.string().required("New password is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { t } = useTranslation(["common", "form"]);

  return (
    <AaPlatformStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          render={({ field }) => (
            <Inputs.TextField
              {...field}
              // placeholder={t('test')}
              // errors={errors.phone?.message}
            />
          )}
          name="test"
          defaultValue=""
        />
        <Buttons.BgStandard
          type="submit"
          label={t("Sign in", { ns: "common" })}
        />
      </form>
    </AaPlatformStyled>
  );
};

AaPlatform.propTypes = {};

export default AaPlatform;
