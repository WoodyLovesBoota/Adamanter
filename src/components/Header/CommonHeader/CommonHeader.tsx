"use client";

import cn from "classnames/bind";
import styles from "./CommonHeader.module.scss";
import React from "react";
import { ROUTES } from "@/constants/route.constant";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Icon } from "@/lib/common/components/Icon/Icon";

const cx = cn.bind(styles);

const GNB_LIST = [
  { name: "ABOUT", path: ROUTES.ABOUT },
  { name: "TEAM", path: ROUTES.TEAM },
  { name: "SCHEDULE", path: ROUTES.SCHEDULE },
  { name: "MEMORIAL", path: ROUTES.MEMORIAL },
  { name: "SHOP", path: ROUTES.SHOP },
];

const CommonHeader = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className={cx("Wrapper")}>
      <section className={cx("Logo")} onClick={() => router.push(ROUTES.INDEX)}>
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
          <button
            className={cx("NavButton", { current: pathname === link.path })}
            onClick={() => router.push(link.path)}
          >
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
