import { usePopupDispatch } from "@/lib/common/contexts/popup/popup.context";
import React from "react";
import ToastPopup from "@/lib/components/Popup/ToastPopup/ToastPopup";
import CenterPopup from "@/lib/components/Popup/CenterPopup/CenterPopup";

export function usePopup() {
  const { open } = usePopupDispatch();

  /** 중앙 팝업 */
  const centerPopup = React.useCallback(
    (props: CenterPopupProps & { type?: string }, option?: IPopupOption) => {
      const { type = "default", ...rest } = props;
      open({
        option: {
          ...(option || {}),
          stringKey: "centerPopup",
        },
        component: <CenterPopup {...rest} />,
      });
    },
    [open]
  );

  /**토스트 메시지 */
  const toastPopup = React.useCallback(
    (props: ToastPopupProps & { type?: string }, option?: IPopupOption) => {
      const { type = "default", ...rest } = props;
      open({
        option: {
          ...(option || {}),
          stringKey: "toastPopup",
        },
        component: <ToastPopup {...rest} />,
      });
    },
    [open]
  );

  return {
    centerPopup,
    toastPopup,
  };
}
