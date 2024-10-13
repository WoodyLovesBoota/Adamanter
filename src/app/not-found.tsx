import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import styles from "./not-found.module.scss";
import cn from "classnames/bind";
import { ROUTES } from "@/constants/route.constant";

const cx = cn.bind(styles);

const NotFound = () => {
  return (
    <div className={cx("Wrapper")}>
      <div className={cx("Main")}>
        <h2 className={cx("Title")}>404</h2>
        <h4 className={cx("Content")}>
          The page you are looking for cannot be found.
        </h4>
        <p className={cx("Content")}>
          Please check the URL again to make sure it is correct.
        </p>
        <Link className={cx("Button")} href={ROUTES.INDEX}>
          Go Home
        </Link>
      </div>
      <div className={cx("Bg")}>
        <div className={cx("LineLeft")}></div>
        <div className={cx("Circles")}>
          <div className={cx("Circle")}></div>
          <div className={cx("CenterCircle")} />
          <div className={cx("InnerCircle")}></div>
        </div>
        <div className={cx("LineRight")}></div>
      </div>
    </div>
  );
};

export default NotFound;
