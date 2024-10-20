"use client";

import React from "react";
import classNames from "classnames/bind";
import styles from "./Guide.view.module.scss";
import Image from "next/image";

const cx = classNames.bind(styles);

const GuideView = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={cx("Wrapper")}>
      <div className={cx("Container")}>
        <header className={cx("GuideHeader")}>
          <p className={cx("GuideTitle")}>BRAND GUIDELINES</p>
          <p className={cx("GuideSubTitle")}>
            본 가이드라인에서는 우리 브랜드와 이미지 자산을 어떻게 활용할지에 대한 지침을 확인할 수
            있습니다.
            <br />
            방송, 대회, 언론 보도, 소셜 미디어를 포함한 모든 매체에서 이 규칙을 준수하십시오.
          </p>
        </header>
        <main className={cx("Main")}>
          <p className={cx("MainTitle")}>
            ADAMANTER <strong>LOGO</strong>
          </p>
          <p className={cx("MainSubtitle")}>
            ADAMANTER의 정체성을 대표하는 로고는 비율과 형태를 유지한 채 활용해주십시오.
          </p>
          <div className={cx("MainContent")}>
            <div className={cx("MainContentItem")}>
              <Image
                src={"/static/images/Vertical_Color.png"}
                alt={"logo"}
                width={333}
                height={357}
              />
            </div>
            <div className={cx("MainContentItem2")}>
              <Image src={"/static/images/Horizontal.png"} alt={"logo"} width={827} height={117} />
            </div>
          </div>
        </main>
        <main className={cx("Main")}>
          <p className={cx("MainTitle")}>
            ADAMANTER <strong>COLOR</strong>
          </p>
          <p className={cx("MainSubtitle")}>
            브랜드의 주요 색상은 Cyan, White, Black으로 구성되며, 일관된 사용이 중요합니다.
          </p>
          <div className={cx("MainColor")}>
            <div className={cx("MainColorItem")}>
              <div className={cx("MainColorItemCircle", "blue")} />
              <div className={cx("MainColorItemText")}>
                <p className={cx("MainColorItemTextTitle")}>CYAN</p>
                <p className={cx("MainColorItemTextSub")}>#01CCFF</p>
              </div>
            </div>
            <div className={cx("MainColorItem")}>
              <div className={cx("MainColorItemCircle", "white")} />
              <div className={cx("MainColorItemText")}>
                <p className={cx("MainColorItemTextTitle")}>WHITE</p>
                <p className={cx("MainColorItemTextSub")}>#FFFFFF</p>
              </div>
            </div>
            <div className={cx("MainColorItem")}>
              <div className={cx("MainColorItemCircle", "black")} />
              <div className={cx("MainColorItemText")}>
                <p className={cx("MainColorItemTextTitle")}>BLACK</p>
                <p className={cx("MainColorItemTextSub")}>#000000</p>
              </div>
            </div>
          </div>
        </main>
        <main className={cx("Main")}>
          <p className={cx("MainTitle")}>
            ADAMANTER <strong>TYPOGRAPHY</strong>
          </p>
          <p className={cx("MainSubtitle")}>
            ADAMANTER의 글꼴은 강인한 이미지를 전달하기 위해 제작된 서체로, 명확하고 통일된 텍스트
            표현을 위해 사용됩니다.
          </p>

          <div className={cx("MainTypography")}>
            <Image
              src={"/static/images/Alphabet.png"}
              alt={"typography"}
              width={1440}
              height={267}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default GuideView;
