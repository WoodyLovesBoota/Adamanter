"use client";

import cn from "classnames/bind";
import styles from "./About.view.module.scss";
import React from "react";
import Image from "next/image";
import { Icon } from "@/lib/common/components/Icon/Icon";

const cx = cn.bind(styles);

const AboutView = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={cx("Wrapper")}>
      <header className={cx("Header")}>
        <Image
          src={"/static/images/logo3d.png"}
          alt="about"
          width={413}
          height={540}
          style={{ position: "absolute", width: "auto", height: "540px", mixBlendMode: "overlay" }}
        />
        <div className={cx("Title")}>
          <h2 className={cx("TitleText")}>
            UNBREAKABLE.
            <br />
            <strong>FORGING AN UNYIELDING BOND IN ESPORTS</strong>
          </h2>
          <p className={cx("TitleDesc")}>
            불굴의 힘을 상징하는 아다만티움에서 영감을 받아,
            <br />
            ADAMANTER는 선수와 팬이 함께 성장하는 미래를 만들어갑니다.
            <br />
            지속적인 선수 육성 및 팬과의 강한 유대감을 통해,
            <br />
            흔들림 없는 결속력 구축을 목표합니다.
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
            <h3 className={cx("SectionTitle")}>OUR MISSION</h3>
            <p className={cx("SectionDesc")}>
              이스포츠 선수와 팬이 함께 성장할 수 있도록 지속 가능한 가치 제공
            </p>
          </div>
        </section>
        <section className={cx("Section")}>
          <div className={cx("SectionContent")}>
            <Icon name="AboutTop" size={699} className={cx("Background")} />
            <h3 className={cx("SectionTitle")}>OUR VALUE</h3>
            <p className={cx("SectionDesc")}>
              자체 선수 육성과 장기 계약으로 팀의 안정성 확보,
              <br />
              <br />
              인성 교육과 심리 상담을 통해 선수들의 전인적 성장 지원,
              <br />
              <br />
              팬들과 적극적인 소통으로 강력한 유대감과 공동체 문화 조성
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
            <h3 className={cx("SectionTitle")}>OUR VISION</h3>
            <p className={cx("SectionDesc")}>
              지속적인 선수 개발과 성장으로 이적을 최소화하고, 활발한 팬 소통을 통해 높은 팀
              충성도와 함께 성장하는 미래 구현
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutView;
