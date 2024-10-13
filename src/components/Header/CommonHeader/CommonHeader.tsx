"use client";

import cn from "classnames/bind";
import styles from "./CommonHeader.module.scss";
import React from "react";
import { ROUTES } from "@/constants/route.constant";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Icon } from "@/lib/common/components/Icon/Icon";

const cx = cn.bind(styles);

const GNB_LIST = [
  { name: "ABOUTr", path: ROUTES.INDEX },
  { name: "TEAM", path: ROUTES.DETAIL },
  { name: "SCHEDULE", path: ROUTES.TRENDING },
  { name: "MEMORIAL", path: ROUTES.TRENDING },
  { name: "SHOP", path: ROUTES.TRENDING },
];

const CommonHeader = () => {
  const router = useRouter();

  return (
    <nav className={cx("Wrapper")}>
      <section className={cx("Logo")}>
        <Image
          src={"/static/images/logo.png"}
          alt={"logo"}
          width={225}
          height={32}
          style={{ height: "32px", width: "auto", cursor: "pointer" }}
        />
      </section>
      <section className={cx("Nav")}>
        {GNB_LIST.map((link) => (
          <button className={cx("NavButton")} onClick={() => router.push(link.path)}>
            {link.name}
          </button>
        ))}
      </section>
      <section className={cx("Icons")}>
        <Icon name="Search" size={40} />
        <Icon name="Language" size={40} />
        <Icon name="Profile" size={40} />
        <Icon name="Cart" size={40} />
      </section>
    </nav>
  );
};

export default CommonHeader;
