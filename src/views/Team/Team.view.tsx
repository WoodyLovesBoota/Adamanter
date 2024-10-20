"use client";
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Team.view.module.scss";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const cx = classNames.bind(styles);

const TeamView = () => {
  const [isCard1Hover, setIsCard1Hover] = useState(false);
  const [isCard2Hover, setIsCard2Hover] = useState(false);
  const [isCard3Hover, setIsCard3Hover] = useState(false);
  const [isCard4Hover, setIsCard4Hover] = useState(false);
  const [isCard5Hover, setIsCard5Hover] = useState(false);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const TEAM = [
    {
      name: "강현우",
      enName: "HYUNWOO KANG",
      position: "TOP",
      country: "1998-08-24",
      frontImage: "/static/images/dexter.png",
      backImage: "/static/images/dexter_color.png",
      frontFace: "/static/images/top.png",
      state: isCard1Hover,
      setState: setIsCard1Hover,
    },
    {
      name: "최도윤",
      enName: "DOYOON CHOI",
      position: "JUNGLE",
      country: "2000-12-26",
      frontImage: "/static/images/wrex.png",
      backImage: "/static/images/wrex_color.png",
      frontFace: "/static/images/jungle.png",
      state: isCard2Hover,
      setState: setIsCard2Hover,
    },
    {
      name: "송지호",
      enName: "JIHO SONG",
      position: "MID",
      country: "2001-10-18",
      frontImage: "/static/images/vortex.png",
      backImage: "/static/images/vortex_color.png",
      frontFace: "/static/images/mid.png",
      state: isCard3Hover,
      setState: setIsCard3Hover,
    },
  ];

  const TEAM2 = [
    {
      name: "임민재",
      enName: "MINJAE LIM",
      position: "BOTTOM",
      country: "2003-11-04",
      frontImage: "/static/images/trion.png",
      backImage: "/static/images/trion_color.png",
      frontFace: "/static/images/bottom.png",
      state: isCard4Hover,
      setState: setIsCard4Hover,
    },
    {
      name: "정태민",
      enName: "TAEMIN JUNG",
      position: "SUPPORTER",
      country: "2002-05-11",
      frontImage: "/static/images/avenn.png",
      backImage: "/static/images/avenn_color.png",
      frontFace: "/static/images/supporter.png",
      state: isCard5Hover,
      setState: setIsCard5Hover,
    },
  ];

  return (
    <div className={cx("Wrapper")}>
      <section className={cx("Container")}>
        <div className={cx("ToggleWrapper")}>
          <div className={cx("GameToggle")}>
            <button className={cx("GameToggleButton", "current")}>LEAGUE OF LEGENDS</button>
            <button className={cx("GameToggleButton")}>VALORANT</button>
            <button className={cx("GameToggleButton")}>BATTLEGROUNDS</button>
            <button className={cx("GameToggleButton")}>DOTA 2</button>
          </div>
          <div className={cx("DateToggle")}>
            <button className={cx("DateToggleButton", "current")}>2024</button>
            <button className={cx("DateToggleButton")}>2023</button>
            <button className={cx("DateToggleButton")}>2022</button>
            <button className={cx("DateToggleButton")}>2021</button>
          </div>
        </div>
      </section>
      <section className={cx("TeamList")}>
        <p className={cx("TeamListTitle")}>PLAYERS</p>
        <div className={cx("TeamListContent")}>
          <div className={cx("TeamListContentRow")}>
            {TEAM.map((item, index) => (
              <div
                key={item.name}
                className={cx("TeamListContentItem", { hover: item.state })}
                onMouseEnter={() => item.setState(true)}
                onMouseLeave={() => item.setState(false)}
              >
                <AnimatePresence mode="wait">
                  {item.state ? (
                    <motion.div
                      initial={{ opacity: 0.1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0.1 }}
                      transition={{ duration: 0.2 }}
                      key={"hover"}
                      className={cx("TeamListContentItemImage", "reverse")}
                    >
                      <Image
                        src={item.frontImage}
                        alt={"team"}
                        width={248}
                        height={48}
                        style={{ position: "absolute", right: 40, top: 40 }}
                      />
                      <button className={cx("TeamListContentItemButton", "white")}>
                        {item.position}
                      </button>
                      <Image
                        src={"/static/images/logo3d.png"}
                        alt={"team"}
                        width={386}
                        height={400}
                        style={{
                          height: "400px",
                          width: "auto",
                          position: "absolute",
                          left: 73,
                          top: 140,
                          mixBlendMode: "overlay",
                        }}
                      />
                      <div className={cx("TeamListContentItemInfo")}>
                        <p className={cx("TeamListContentItemInfoName")}>{item.name}</p>
                        <p className={cx("TeamListContentItemInfoPosition")}>{item.enName}</p>
                        <p className={cx("TeamListContentItemInfoCountry")}>{item.country}</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0.1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0.1 }}
                      transition={{ duration: 0.2 }}
                      key={"notHover"}
                      className={cx("TeamListContentItemImage", { hover: item.state })}
                    >
                      <Image
                        src={item.backImage}
                        alt={"team"}
                        width={248}
                        height={48}
                        style={{ position: "absolute", right: 40, top: 40 }}
                      />
                      <button className={cx("TeamListContentItemButton")}>{item.position}</button>
                      <Image
                        src={item.frontFace}
                        alt={"team"}
                        width={453}
                        height={680}
                        style={{ height: "680px", width: "auto" }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className={cx("TeamListContentRow")}>
            {TEAM2.map((item, index) => (
              <div
                key={item.name}
                className={cx("TeamListContentItem", { hover: item.state })}
                onMouseEnter={() => item.setState(true)}
                onMouseLeave={() => item.setState(false)}
              >
                <AnimatePresence mode="wait">
                  {item.state ? (
                    <motion.div
                      initial={{ opacity: 0.1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0.1 }}
                      transition={{ duration: 0.2 }}
                      key={"hover"}
                      className={cx("TeamListContentItemImage", "reverse")}
                    >
                      <Image
                        src={item.frontImage}
                        alt={"team"}
                        width={248}
                        height={48}
                        style={{ position: "absolute", right: 40, top: 40 }}
                      />
                      <button className={cx("TeamListContentItemButton", "white")}>
                        {item.position}
                      </button>
                      <Image
                        src={"/static/images/logo3d.png"}
                        alt={"team"}
                        width={386}
                        height={400}
                        style={{
                          height: "400px",
                          width: "auto",
                          position: "absolute",
                          left: 73,
                          top: 140,
                          mixBlendMode: "overlay",
                        }}
                      />
                      <div className={cx("TeamListContentItemInfo")}>
                        <p className={cx("TeamListContentItemInfoName")}>{item.name}</p>
                        <p className={cx("TeamListContentItemInfoPosition")}>{item.enName}</p>
                        <p className={cx("TeamListContentItemInfoCountry")}>{item.country}</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0.1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0.1 }}
                      transition={{ duration: 0.2 }}
                      key={"notHover"}
                      className={cx("TeamListContentItemImage", { hover: item.state })}
                    >
                      <Image
                        src={item.backImage}
                        alt={"team"}
                        width={248}
                        height={48}
                        style={{ position: "absolute", right: 40, top: 40 }}
                      />
                      <button className={cx("TeamListContentItemButton")}>{item.position}</button>
                      <Image
                        src={item.frontFace}
                        alt={"team"}
                        width={453}
                        height={680}
                        style={{ height: "680px", width: "auto" }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={cx("Achivement")}>
        <p className={cx("AchivementTitle")}>OUR ACHIEVEMENTS</p>
        <div className={cx("AchivementContent")}>
          <div className={cx("AchivementContentItem")}>
            <div className={cx("AchivementContentItemYear")}>2024</div>
            <div className={cx("AchivementContentItemTitle")}>
              <p>Worlds Chmapionship Quarterfinal</p>
              <p>LCK Summer 2nd</p>
              <p>LCK Spring 3rd</p>
            </div>
            <div className={cx("AchivementContentItemDescription")}>
              <p className={cx("Highlight")}>Ongoing</p>
              <p>July 28, 2024</p>
              <p>May 17, 2024</p>
            </div>
          </div>
          <div className={cx("Divider")}></div>
          <div className={cx("AchivementContentItem")}>
            <div className={cx("AchivementContentItemYear")}>2023</div>
            <div className={cx("AchivementContentItemTitle")}>
              <p>LCK Summer 4th</p>
              <p>LCK Spring 6th</p>
            </div>
            <div className={cx("AchivementContentItemDescription")}>
              <p>July 30, 2023</p>
              <p>April 14, 2023</p>
            </div>
          </div>
          <div className={cx("Divider")}></div>
          <div className={cx("AchivementContentItem")}>
            <div className={cx("AchivementContentItemYear")}>2022</div>
            <div className={cx("AchivementContentItemTitle")}>
              <p>LCK Summer 6th</p>
              <p>LCK Spring 6th</p>
            </div>
            <div className={cx("AchivementContentItemDescription")}>
              <p>September 6, 2022</p>
              <p>April 10, 2022</p>
            </div>
          </div>
          <div className={cx("Divider")}></div>
          <div className={cx("AchivementContentItem")}>
            <div className={cx("AchivementContentItemYear")}>2021</div>
            <div className={cx("AchivementContentItemTitle")}>
              <p>LCK Summer 6th </p>
              <p>LCK Spring 7th</p>
            </div>
            <div className={cx("AchivementContentItemDescription")}>
              <p>September 11, 2021</p>
              <p>April 19, 2021</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamView;
