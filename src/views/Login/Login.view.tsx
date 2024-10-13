"use client";

import cn from "classnames/bind";
import styles from "./Login.view.module.scss";
import { useEffect, useState } from "react";
import { PrimaryTextInputSet } from "@/lib/components/Input/TextInputSet/Primary/PrimaryTextInputSet";
import { Controller, useForm, useWatch } from "react-hook-form";
import { DEFAULT_FORM_KEYS, ID, PASSWORD } from "@/constants/form/default.form.constant";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ContainedButton from "@/lib/components/Button/ContainedButton/ContainedButton";
import Lottie from "react-lottie-player";
import LoginLottie from "public/static/images/animation/login_animation.json";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const cx = cn.bind(styles);

type LoginFormType = {
  id: string;
  password: string;
};

const LoginView = () => {
  const t = useTranslations("Main");

  const [status, setStatus] = useState<"FORM" | "SUBMIT">("FORM");

  const form = useForm<LoginFormType>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: yupResolver(
      yup.object().shape({
        [ID.key]: ID.schema,
        [PASSWORD.key]: PASSWORD.schema,
      } as {}) as never
    ),
  });

  const id = useWatch({
    control: form.control,
    name: DEFAULT_FORM_KEYS.ID,
  });

  const password = useWatch({
    control: form.control,
    name: DEFAULT_FORM_KEYS.PASSWORD,
  });

  const onValid = (data: LoginFormType) => {
    console.log(data);
    setStatus("SUBMIT");
    setTimeout(() => {
      setStatus("FORM");
    }, 3000);
  };

  const handleButtonClick = () => {};

  return (
    <div className={cx("Wrapper")}>
      <section className={cx("Container")}>
        <div className={cx("Lottie", { center: status === "SUBMIT" })}>
          <Lottie loop={true} animationData={LoginLottie} play />
        </div>
        {status === "FORM" && (
          <motion.div
            className={cx("FormWrapper")}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          >
            <h2 className={cx("Title")}>{t("login title")}</h2>
            <form className={cx("LoginForm")} onSubmit={form.handleSubmit(onValid)}>
              <Controller
                name={ID.key as never}
                control={form.control}
                render={({ field: { ref: _, ...rest }, fieldState }) => {
                  return (
                    <PrimaryTextInputSet
                      {...rest}
                      type={ID.input_type}
                      placeholder={t("id placeholder")}
                      errorMessage={fieldState.error?.message}
                      className={cx("Insertreason")}
                    />
                  );
                }}
              />
              <Controller
                name={PASSWORD.key as never}
                control={form.control}
                render={({ field: { ref: _, ...rest }, fieldState }) => {
                  return (
                    <PrimaryTextInputSet
                      {...rest}
                      type={PASSWORD.input_type}
                      placeholder={t("password placeholder")}
                      errorMessage={fieldState.error?.message}
                      className={cx("Insertreason")}
                    />
                  );
                }}
              />
              <div className={cx("ButtonWrapper")}>
                <ContainedButton
                  className={cx("LoginButton")}
                  size="large"
                  onClick={handleButtonClick}
                >
                  {t("login button")}
                </ContainedButton>
              </div>
            </form>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default LoginView;
