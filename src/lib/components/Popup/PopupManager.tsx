"use client";

import { usePopupDispatch, usePopupState } from "@/lib/common/contexts/popup/popup.context";
import React from "react";
import styles from "./PopupManager.module.scss";
import cn from "classnames/bind";
import { AnimatePresence, motion } from "framer-motion";

const cx = cn.bind(styles);

export const PopupManager = () => {
  const { popups } = usePopupState();
  const { initLayerKey, close } = usePopupDispatch();

  React.useEffect(() => {
    if (popups.length === 0) {
      document.body.classList.remove("popup-open");

      initLayerKey();
    } else {
      document.body.classList.add("popup-open");
    }

    return () => {};
  }, [popups, initLayerKey]);

  return (
    <AnimatePresence>
      {popups.map((popup) => {
        return (
          <motion.div
            key={popup.stringKey}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 0.2 }}
            exit={{ opacity: 0, y: -30 }}
            className={cx("PopupContainer")}
            style={{ zIndex: popup.layerKey || 0 + 1 }}
          >
            {React.cloneElement(popup.component as React.ReactElement, {
              layerClose: close.bind(null, popup.stringKey),
            })}
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
};
