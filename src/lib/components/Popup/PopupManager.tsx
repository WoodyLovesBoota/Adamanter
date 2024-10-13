"use client";

import { usePopupDispatch, usePopupState } from "@/lib/common/contexts/popup/popup.context";
import React from "react";
import styles from "./PopupManager.module.scss";
import cn from "classnames/bind";

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
    <React.Fragment>
      {popups.map((popup) => {
        return (
          <React.Fragment key={popup.stringKey}>
            <div style={{ zIndex: (popup?.layerKey || 0) + 1 }}>
              {React.cloneElement(popup.component as React.ReactElement, {
                layerClose: close.bind(null, popup.stringKey),
              })}
            </div>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
