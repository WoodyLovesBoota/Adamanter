"use client";
import React, { Component } from "react";
import cn from "classnames/bind";
import styles from "./CommonLayout.module.scss";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const cx = cn.bind(styles);

interface ICommonLayoutProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  type?: "common";
}

const CommonLayout = (props: React.PropsWithChildren<ICommonLayoutProps>) => {
  const { children, header, footer, type } = props;
  const pathname = usePathname();
  const router = useRouter();

  const parsePath = (path: string) => {
    const segments = path.split("/");
    const localeSegment = segments[1];
    return localeSegment;
  };

  const changeLanguage = (newLocale: string) => {
    const currentUrl = new URL(window.location.href);
    const path = currentUrl.pathname;
    const searchParams = currentUrl.search;

    const currentPath = path;
    const currentLocale = parsePath(currentPath);
    let newPath;

    if (
      currentPath === `/${currentLocale}` ||
      currentPath === `/${currentLocale}/`
    ) {
      // Root path with locale
      newPath =
        currentPath === "/"
          ? `/${newLocale}`
          : currentPath.replace(`/${currentLocale}`, `/${newLocale}`);
    } else {
      // Other paths
      newPath = currentPath.replace(`/${currentLocale}/`, `/${newLocale}/`);
    }
    newPath += searchParams;

    router.replace(newPath);
  };

  return (
    <div className={cx("Wrapper", pathname.slice(1))}>
      {header && <header className={cx("Header")}>{header}</header>}
      <main className={cx("Main")}>{children}</main>
      {footer && <footer className={cx("Footer")}>{footer}</footer>}
    </div>
  );
};

export default CommonLayout;
