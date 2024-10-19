"use client";

import cn from "classnames/bind";
import styles from "./About.view.module.scss";
import React from "react";
import Image from "next/image";
import { Icon } from "@/lib/common/components/Icon/Icon";

const cx = cn.bind(styles);

const AboutView = () => {
  return (
    <div className={cx("Wrapper")}>
      <header className={cx("Header")}>
        <Image
          src={"/static/images/AboutLogo.png"}
          alt="about"
          width={413}
          height={540}
          style={{ position: "absolute", width: "auto", height: "540px" }}
        />
        <div className={cx("Title")}>
          <h2 className={cx("TitleText")}>
            UNBREAKABLE.
            <br />
            <strong>FORGING AN UNYIELDING BOND IN ESPORTS</strong>
          </h2>
          <p className={cx("TitleDesc")}>
            Inspired by the strength of adamant, ADAMANTER is committed to building a future
            <br />
            where players and fans grow together. With a focus on player development and
            <br />
            unwavering loyalty, we aim to reshape the esports experience for the better.
          </p>
        </div>
      </header>

      <main className={cx("Main")}>
        <section className={cx("Section")}>
          <div className={cx("SectionImage")}>
            <Image src={"/static/images/about1.png"} alt="about" width={700} height={700} />
          </div>
          <div className={cx("SectionContent")}>
            <Icon name="AboutBottom" size={699} className={cx("Background")} />
            <h3 className={cx("SectionTitle")}>Our MIssion</h3>
            <p className={cx("SectionDesc", "thick")}>
              Provide sustainable value that helps esports players and fans grow together.
            </p>
          </div>
        </section>
        <section className={cx("Section")}>
          <div className={cx("SectionContent")}>
            <Icon name="AboutTop" size={699} className={cx("Background")} />
            <h3 className={cx("SectionTitle")}>Our value</h3>
            <p className={cx("SectionDesc")}>
              Ensure team stability through nurturing homegrown talent and securing long-term
              contracts.
              <br />
              <br />
              Support holistic growth of players through character education and psychological
              counseling.
              <br />
              <br />
              <br />
              Foster strong bonds and a sense of community through active communication with fans.
            </p>
          </div>
          <div className={cx("SectionImage")}>
            <Image src={"/static/images/about2.png"} alt="about" width={700} height={700} />
          </div>
        </section>
        <section className={cx("Section")}>
          <div className={cx("SectionImage")}>
            <Image src={"/static/images/about3.png"} alt="about" width={700} height={700} />
          </div>
          <div className={cx("SectionContent")}>
            <Icon name="AboutBottom" size={699} className={cx("Background")} />
            <h3 className={cx("SectionTitle")}>Our Vision</h3>
            <p className={cx("SectionDesc", "thick")}>
              Create a future where high team loyalty is achieved through vibrant fan engagement and
              continuous player development.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutView;
