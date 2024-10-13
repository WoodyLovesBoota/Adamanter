"use client";

import React, { JSXElementConstructor, ReactElement, useEffect, useState } from "react";
import styles from "./CenterPopup.module.scss";
import cn from "classnames/bind";
import ContainedButton from "../../Button/ContainedButton/ContainedButton";

const cx = cn.bind(styles);

interface IPopupProps {
  title?: string;
  subtitle?: string;
  dimmed?: boolean;
  description?: string | ReactElement<any, string | JSXElementConstructor<any>>;
  positiveText?: string;
  negativeText?: string;
  onPositiveClick?: () => void;
  onNegativeClick?: () => void;
  layerClose?: Function;
}

const CenterPopup = (props: IPopupProps) => {
  const {
    title,
    subtitle,
    dimmed,
    description,
    layerClose,
    positiveText,
    onPositiveClick,
    negativeText,
    onNegativeClick,
  } = props;
  const [visible, setVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setVisible(true);
    return () => setVisible(false);
  }, []);

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, []);

  const handlePositiveClick = () => {
    onPositiveClick?.();
    layerClose?.();
  };

  const handleNegativeClick = () => {
    onNegativeClick?.();
    layerClose?.();
  };

  return (
    <div
      className={cx("PopupWrapper")}
      onClick={() => {
        if (dimmed) {
          setIsClosing(true);
          setTimeout(() => {
            layerClose?.();
          }, 300);
        }
      }}
    >
      <div
        className={cx("PopupContainer", {
          visible: visible,
          closing: isClosing,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <section className={cx("ContentSection")}>
          {title && <h2 className={cx("Title")}>{title}</h2>}
          {subtitle && <h3 className={cx("Subtitle")}>{subtitle}</h3>}
          {description && <div className={cx("Description")}>{description}</div>}
        </section>
        <section className={cx("ButtonSection")}>
          {positiveText && (
            <ContainedButton size="medium" colorType="blue" onClick={handlePositiveClick}>
              {positiveText}
            </ContainedButton>
          )}
          {negativeText && (
            <ContainedButton size="medium" colorType="gray" onClick={handleNegativeClick}>
              {negativeText}
            </ContainedButton>
          )}
        </section>
      </div>
    </div>
  );
};

export default CenterPopup;
