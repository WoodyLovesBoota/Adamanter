"use client";

import cn from "classnames/bind";
import styles from "./Home.view.module.scss";
import { getRandomSample } from "@/utils/string.utils";
import { useEffect, useState } from "react";
import { usePopup } from "@/components/hooks/common/usePopup";
import Image from "next/image";
import { Icon } from "@/lib/common/components/Icon/Icon";

const cx = cn.bind(styles);

const HomeView = () => {
  const { centerPopup } = usePopup();

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
    <div className={cx("Wrapper")}>
      <header className={cx("Header")}>
        <Image
          src={"/static/images/Net_Banner.png"}
          alt={"net"}
          width={2560}
          height={1440}
          style={{ width: "auto", height: "100vh", position: "absolute" }}
        />
        <div className={cx("Players")}>
          <Image
            src={"/static/images/Show.png"}
            alt={"players_bg"}
            width={1042}
            height={140}
            style={{
              width: "40%",
              height: "auto",
              position: "absolute",
              top: "160px",
              zIndex: 17,
            }}
          />
          <Image
            src={"/static/images/Players.png"}
            alt={"players"}
            width={2560}
            height={1150}
            style={{
              width: "100vw",
              height: "auto",
              marginTop: "auto",
              zIndex: 18,
            }}
          />
          <Image
            src={"/static/images/Prove.png"}
            alt={"players_bg"}
            width={1064}
            height={240}
            style={{
              width: "41.5%",
              height: "auto",
              position: "absolute",
              bottom: "80px",
              zIndex: 21,
            }}
          />
          <div className={cx("HeaderGradient")} />
          <div className={cx("HeaderButton")}>
            <Icon name={"ScrollDown"} />
            <p className={cx("HeaderButtonText")}>SCROLL DOWN</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomeView;
