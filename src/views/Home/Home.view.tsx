"use client";

import cn from "classnames/bind";
import styles from "./Home.view.module.scss";
import { getRandomSample } from "@/utils/string.utils";
import { useEffect, useState } from "react";
import { usePopup } from "@/components/hooks/common/usePopup";
import { useTranslations } from "next-intl";

const cx = cn.bind(styles);

const HomeView = () => {
  const { centerPopup } = usePopup();
  const t = useTranslations("Main");

  const [random, setRandom] = useState<number>(getRandomSample());

  const handleButtonClick = () => {
    centerPopup({
      title: "Title",
      subtitle: "this is subtitle",
      description: "desctiption is very long .....",
      positiveText: "Yes",
      negativeText: "No",
      dimmed: true,
      onPositiveClick: () => {
        console.log("positiveClick");
      },
      onNegativeClick: () => {
        console.log("negativeClick");
      },
    });
  };
  return (
    <div>
      {/* {t("title")} : {random} */}
      <button onClick={handleButtonClick}>popup open</button>
    </div>
  );
};

export default HomeView;
