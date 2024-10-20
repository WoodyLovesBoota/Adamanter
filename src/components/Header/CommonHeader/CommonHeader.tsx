"use client";

import cn from "classnames/bind";
import styles from "./CommonHeader.module.scss";
import React, { useState } from "react";
import { ROUTES } from "@/constants/route.constant";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Icon } from "@/lib/common/components/Icon/Icon";
import { AnimatePresence, motion } from "framer-motion";
const cx = cn.bind(styles);

const GNB_LIST = [
  { name: "TEAM", path: ROUTES.TEAM },
  { name: "SCHEDULE", path: ROUTES.SCHEDULE },
  { name: "MEMORIAL", path: ROUTES.MEMORIAL },
  { name: "SHOP", path: ROUTES.SHOP },
];

const CommonHeader = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);

  const handleAboutOpen = () => {
    setIsAboutOpen(!isAboutOpen);
  };

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
        <button
          className={cx("NavButton", "about")}
          onClick={() => {
            handleAboutOpen();
          }}
        >
          ABOUT
          <Icon name={"ChevronDown"} size={20} />
          <AnimatePresence>
            {isAboutOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.1 }}
                key={"about"}
                className={cx("AboutMenu")}
              >
                <p
                  onClick={() => router.push(ROUTES.ABOUT)}
                  className={cx("AboutMenuContent", {
                    current: pathname.includes(ROUTES.ABOUT),
                  })}
                >
                  ABOUT ADAMANTER
                </p>
                <p
                  onClick={() => router.push(ROUTES.GUIDE)}
                  className={cx("AboutMenuContent", {
                    current: pathname.includes(ROUTES.GUIDE),
                  })}
                >
                  BRAND GUIDELINES
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
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
