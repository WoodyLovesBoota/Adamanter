"use client";

import React, { useEffect, useState } from "react";
import styles from "./ToastPopup.module.scss";
import cn from "classnames/bind";
import { Icon } from "@/lib/common/components/Icon/Icon";

const cx = cn.bind(styles);

interface IPopupProps {
  title?: string;
  iconName?: React.ComponentProps<typeof Icon>["name"];
  duration?: number;
  layerClose?: Function;
}

const ToastPopup = (props: IPopupProps) => {
  const { title, iconName, layerClose } = props;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 1000);

    setTimeout(() => {
      layerClose?.();
    }, 1500);
  }, []);

  return (
    <div className={cx("Wrapper")}>
      <div className={cx("PopupContainer", visible ? "visible" : "")}>
        <div className={cx("IconWrapper")}>
          {iconName && <Icon name={iconName} color="#fff" size={16} />}
        </div>
        {title && <h2>{title}</h2>}
      </div>
    </div>
  );
};

export default ToastPopup;
