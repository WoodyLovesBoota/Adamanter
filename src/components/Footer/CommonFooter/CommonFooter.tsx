"use client";

import cn from "classnames/bind";
import styles from "./CommonFooter.module.scss";
import React from "react";
import Image from "next/image";
import { Icon } from "@/lib/common/components/Icon/Icon";
import { useRouter } from "next/navigation";

const cx = cn.bind(styles);

const CommonFooter = () => {
  const router = useRouter();
  return (
    <div className={cx("Wrapper")}>
      <div className={cx("Content")}>
        <section className={cx("Main")}>
          <div className={cx("Logo")} onClick={() => router.push("/")}>
            <Image
              src={"/static/images/logo.png"}
              alt={"logo"}
              width={225}
              height={32}
              style={{ height: "32px", width: "auto", cursor: "pointer" }}
            />
          </div>
          <div className={cx("Links")}>
            <Icon name="Instagram" size={60} />
            <Icon name="Discord" size={60} />
            <Icon name="Chat" size={60} />
            <Icon name="Youtube" size={60} />
            <Icon name="Face" size={60} />
          </div>
        </section>
        <section className={cx("Copyright")}>
          <p className={cx("CopyrightText")}>
            DESIGNED BY JUNGHYUN PARK / DEVELOPED BY TAEWOOK YANG <br />
            COPYRIGHT © 2024 ADAMANTER ALL RIGHTS RESERVERED
          </p>
        </section>
      </div>
    </div>
  );
};

export default CommonFooter;
