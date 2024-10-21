"use client";

import React, { useEffect, useState } from "react";
import cn from "classnames/bind";
import styles from "./Farewell.view.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { REPLY } from "@/constants/form/default.form.constant";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { PrimaryTextInputSet } from "@/lib/components/Input/TextInputSet/Primary/PrimaryTextInputSet";
import { COMMON_FORM_TYPE } from "@/constants/form.constant";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseClient";
import { useRouter } from "next/navigation";

const cx = cn.bind(styles);

type SearchFormType = {
  reply: string;
};

const FarewellView = () => {
  const [data, setData] = useState<any>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const func = async () => {
      const docRef = doc(db, "reply", "CS5jKH05MaGPHxpcAeF2");
      const replys = await getDoc(docRef);
      console.log(replys);
      setData(replys.data()?.reply);
    };
    func();
  }, [count]);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const router = useRouter();
  const form = useForm<SearchFormType>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: yupResolver(
      yup.object().shape({
        [REPLY.key]: REPLY.schema,
      } as {}) as never
    ),
  });

  const updateFirestoreDoc = async (newData: any) => {
    try {
      const docRef = doc(db, "reply", "CS5jKH05MaGPHxpcAeF2");
      await updateDoc(docRef, newData);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
    form.reset({});
    setCount(count + 1);
  };

  const getCurrentKSTTime = (): string => {
    const now = new Date();
    const kstOffset = 9 * 60; // KST is UTC+9
    const kstTime = new Date(now.getTime() + kstOffset * 60000);

    const year = kstTime.getUTCFullYear();
    const month = String(kstTime.getUTCMonth() + 1).padStart(2, "0");
    const day = String(kstTime.getUTCDate()).padStart(2, "0");
    const hours = String(kstTime.getUTCHours()).padStart(2, "0");
    const minutes = String(kstTime.getUTCMinutes()).padStart(2, "0");

    return `${year}.${month}.${day} ${hours}:${minutes}`;
  };

  const onValid = (formData: SearchFormType) => {
    if (REPLY.key in formData) {
      updateFirestoreDoc({
        reply: [
          { content: formData[REPLY.key as keyof SearchFormType], date: getCurrentKSTTime() },
          ...data,
        ],
      });
    }
  };

  return (
    <div className={cx("Wrapper")}>
      <div className={cx("HeaderWrapper")}></div>
      <header className={cx("Header")}>
        <Image src={"/static/images/farewell_bg.png"} alt={"farewell"} width={2560} height={1160} />
        <div className={cx("FarewellContainer")}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={cx("FarewellImage")}
          >
            <Image
              src={"/static/images/farewell.png"}
              alt={"farewell"}
              width={967}
              height={200}
              style={{ height: "200px", width: "auto" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -140 }}
            animate={{ opacity: 1, y: -90 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className={cx("KarnesImage")}
          >
            <Image
              src={"/static/images/karneth.png"}
              alt={"farewell"}
              width={1440}
              height={222}
              style={{ height: "auto", width: "1440px" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className={cx("PlayerImage")}
          >
            <Image
              src={"/static/images/karnes_bg.png"}
              alt={"farewell"}
              width={2560}
              height={1160}
            />
          </motion.div>

          <div className={cx("TextContainer")}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.5 }}
              className={cx("Box")}
            >
              <p className={cx("BoxTitle")}>
                FAREWELL MESSAGE
                <br />
                FOR OUR DEPARTING HERO,
                <br />
                KARNETH.
              </p>
              <p className={cx("BoxSubTitle")}>
                As our players embark on new journeys, we invite you to share your heartfelt
                messages. Thank them for the memories and wish them well in their future endeavors.
              </p>
              <p className={cx("BoxSubTitle")}>
                Karneth’s contributions to ADAMANTER go beyond his in-game performance. His
                dedication to personal growth and leadership helped shape the team's identity. As he
                embarks on a new chapter in his career, he leaves behind a legacy of perseverance
                and camaraderie.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.8 }}
              className={cx("Box")}
            >
              <div className={cx("BoxInput")}>
                <p className={cx("BoxInputTitle")}>Name</p>
                <p className={cx("BoxInputValue")}>KARNETH</p>
              </div>
              <div className={cx("BoxInput")}>
                <p className={cx("BoxInputTitle")}>Position</p>
                <p className={cx("BoxInputValue")}>Top Lane</p>
              </div>
              <div className={cx("BoxInput")}>
                <p className={cx("BoxInputTitle")}>Years with ADAMANTER</p>
                <p className={cx("BoxInputValue")}>2022 - 2024 (3 Seasons)</p>
              </div>
              <div className={cx("BoxInput")}>
                <p className={cx("BoxInputTitle")}>Achievement</p>
                <p className={cx("BoxInputValue")}>
                  Worlds Quarterfinalist (2024)
                  <br />
                  LCK Playoffs Appearance (2023, 2022)
                  <br />
                  All-Pro Team Selection (2023)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </header>
      <main className={cx("Main")}>
        <form className={cx("Form")} onSubmit={form.handleSubmit(onValid)}>
          <Controller
            name={REPLY.key as never}
            control={form.control}
            render={({ field: { ref: _, ...rest }, fieldState }) => {
              return (
                <PrimaryTextInputSet
                  {...rest}
                  type={COMMON_FORM_TYPE.TEXTAREA}
                  placeholder={
                    "이 공간은 온라인 방명록입니다. 자유롭게 댓글을 남겨주세요. (한영변환은 CapsLock키를 눌러주세요.)"
                  }
                  onClick={() => {
                    form.handleSubmit(onValid)();
                  }}
                />
              );
            }}
          />
        </form>
        <div className={cx("Replys")}>
          {data.map((item: any) => {
            return (
              <div className={cx("Reply")}>
                <p className={cx("ReplyContent")}>{item.content}</p>
                <p className={cx("ReplyName")}>{item.date}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default FarewellView;
