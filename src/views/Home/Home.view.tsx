"use client";

import cn from "classnames/bind";
import styles from "./Home.view.module.scss";
import { getRandomSample } from "@/utils/string.utils";
import { useEffect, useState } from "react";
import { usePopup } from "@/components/hooks/common/usePopup";
import Image from "next/image";
import { Icon } from "@/lib/common/components/Icon/Icon";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/route.constant";

const cx = cn.bind(styles);

const HomeView = () => {
  const { centerPopup, toastPopup } = usePopup();

  const router = useRouter();

  const [random, setRandom] = useState<number>(getRandomSample());
  const [scrollY, setScrollY] = useState<number>(0);
  const [swiper, setSwiper] = useState(0);
  const [swiperRef, setSwiperRef] = useState<any>();

  const handleButtonClick = () => {
    toastPopup({
      stringKey: "ComingSoon",
      title: "Sorry, this page is currently under preparation.",
      iconName: "ComingSoon",
      dimmed: true,
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={cx("Wrapper")}>
      <header className={cx("Header")}>
        <Image
          src={"/static/images/Net_Banner.png"}
          alt={"net"}
          width={2560}
          height={1440}
          style={{ width: "100%", height: "100vh", position: "absolute" }}
        />

        <div className={cx("Players")}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              width: "40%",
              height: "auto",
              position: "absolute",
              top: "160px",
              zIndex: 17,
            }}
          >
            <Image src={"/static/images/Show.png"} alt={"players_bg"} width={1042} height={140} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 140 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            style={{
              width: "100vw",
              height: "auto",
              marginTop: "auto",
              zIndex: 18,
            }}
          >
            <Image src={"/static/images/Players.png"} alt={"players"} width={2560} height={1155} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            style={{
              width: "100vw",
              height: "auto",
              position: "absolute",
              bottom: "-120px",
            }}
          >
            <Image src={"/static/images/Masking.png"} alt={"players"} width={2560} height={1320} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            style={{
              width: "41.5%",
              height: "auto",
              position: "absolute",
              bottom: "80px",
              zIndex: 21,
            }}
          >
            <Image src={"/static/images/Prove.png"} alt={"players_bg"} width={1064} height={240} />
          </motion.div>
          <div className={cx("HeaderGradient")} />
          <motion.div className={cx("HeaderButton")}>
            <div className={cx("IconWrapper")}>
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: -48 }}
                transition={{
                  opacity: {
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                  },
                  y: {
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }}
              >
                <Icon name={"ScrollDown"} />
              </motion.div>
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: -36 }}
                transition={{
                  opacity: {
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                  },
                  y: {
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }}
              >
                <Icon name={"ScrollDown"} />
              </motion.div>
            </div>
            <p className={cx("HeaderButtonText")}>SCROLL DOWN</p>
          </motion.div>
        </div>
      </header>
      <main className={cx("Main")}>
        <section className={cx("InfoHeader")}>
          <Image src={"/static/images/Vertical.png"} alt={"info_header"} width={111} height={120} />
          <div className={cx("InfoHeaderTitle")}>
            <p className={cx("InfoHeaderTitleMain")}>OUR OWN WAY</p>
            <p className={cx("InfoHeaderTitleSub")}>
              Forged through unbreakable bonds and driven by our unique vision, we carve our own
              path.
              <br />
              Together, players and fans grow stronger, shaping the future of esports in our own
              way.
            </p>
          </div>
        </section>
        <section className={cx("Upcoming")}>
          <div className={cx("UpcomingTitle")}>
            <div className={cx("UpcomingTitleText")}>
              <p className={cx("UpcomingTitleMain")}>UPCOMING MATCHES</p>
              <p className={cx("UpcomingTitleSub")}>승리의 순간을 놓치지 마세요.</p>
            </div>
          </div>
          <div className={cx("UpcomingContent")}>
            <div className={cx("UpcomingContentItem")}>
              <div className={cx("UpcomingContentItemTitleWrapper")}>
                <p className={cx("UpcomingContentItemTitle")}>2024 World Campionship</p>
              </div>
              <div className={cx("UpcomingContentItemMatch")}>
                <Image
                  src={"/static/images/Vertical_black.png"}
                  alt={"team1"}
                  width={75}
                  height={80}
                />
                <Icon name={"Vs"} size={24} />
                <Image src={"/static/images/t1.png"} alt={"team2"} width={80} height={80} />
              </div>
              <div className={cx("UpcomingContentItemDate")}>
                <p className={cx("UpcomingContentItemDateText")}>
                  Wednesday, October 30, 2024 at 9:00 PM
                </p>
              </div>
            </div>
            <div className={cx("UpcomingContentItem")}>
              <div className={cx("UpcomingContentItemTitleWrapper")}>
                <p className={cx("UpcomingContentItemTitle")}>2024 World Campionship</p>
                <p className={cx("UpcomingContentItemTitleBadge")}>Quaterfinals</p>
              </div>
              <div className={cx("UpcomingContentItemMatch")}>
                <Image
                  src={"/static/images/Vertical_black.png"}
                  alt={"team1"}
                  width={75}
                  height={80}
                />
                <Icon name={"Vs"} size={24} />
                <Image src={"/static/images/tes.png"} alt={"team2"} width={80} height={80} />
              </div>
              <div className={cx("UpcomingContentItemDate")}>
                <p className={cx("UpcomingContentItemDateText")}>
                  Friday, November 1, 2024 at 11:00 PM
                </p>
              </div>
            </div>
            <div className={cx("UpcomingContentItem")}>
              <div className={cx("UpcomingContentItemTitleWrapper")}>
                <p className={cx("UpcomingContentItemTitle")}>2024 World Campionship</p>
                <p className={cx("UpcomingContentItemTitleBadge")}>Quaterfinals</p>
              </div>
              <div className={cx("UpcomingContentItemMatch")}>
                <Image
                  src={"/static/images/Vertical_black.png"}
                  alt={"team1"}
                  width={75}
                  height={80}
                />
                <Icon name={"Vs"} size={24} />
                <Image src={"/static/images/leaf.png"} alt={"team2"} width={80} height={80} />
              </div>
              <div className={cx("UpcomingContentItemDate")}>
                <p className={cx("UpcomingContentItemDateText")}>
                  Sunday, November 3, 2024 at 9:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={cx("Popular")}>
          <div className={cx("PopularTitle")}>
            <div className={cx("PopularTitleText")}>
              <p className={cx("PopularTitleMain")}>POPULAR ITEMS</p>
              <p className={cx("PopularTitleSub")}>팬들의 선택을 받은 인기 굿즈를 만나보세요.</p>
            </div>
            <button className={cx("PopularButton")} onClick={() => router.push(ROUTES.SHOP)}>
              <p className={cx("PopularButtonText")}>VISIT SHOP</p>
              <Icon name={"ArrowUpright"} size={20} color={"#01CCFF"} />
            </button>
          </div>
          <div className={cx("PopularContentWrapper")}>
            {swiper === 1 && (
              <div
                className={cx("UpcomingContentItemButton", "left")}
                onClick={() => swiperRef?.slidePrev()}
              >
                <Icon name={"SlideArrow"} size={48} />
              </div>
            )}
            <Swiper
              onSwiper={setSwiperRef}
              onActiveIndexChange={(e) => setSwiper(e.activeIndex)}
              initialSlide={0}
              spaceBetween={40}
              slidesPerView={4}
              loop={false}
              className={cx("CardList")}
            >
              <SwiperSlide>
                <div className={cx("PopularContentItem")}>
                  <div className={cx("ImageWrapper")}>
                    <Image
                      src={"/static/images/popular1.png"}
                      alt={"item"}
                      width={330}
                      height={330}
                    />
                  </div>
                  <div className={cx("PopularContentItemTitle")}>
                    <p className={cx("PopularContentItemTitleMain")}>2024 ADAMANTER 포토카드</p>
                    <p className={cx("PopularContentItemTitleSub")}>30,000원</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={cx("PopularContentItem")}>
                  <div className={cx("ImageWrapper")}>
                    <Image
                      src={"/static/images/popular2.png"}
                      alt={"item"}
                      width={330}
                      height={330}
                    />
                  </div>
                  <div className={cx("PopularContentItemTitle")}>
                    <p className={cx("PopularContentItemTitleMain")}>ADAMANTER 키캡</p>
                    <p className={cx("PopularContentItemTitleSub")}>5,000원</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={cx("PopularContentItem")}>
                  <div className={cx("ImageWrapper")}>
                    <Image
                      src={"/static/images/popular3.png"}
                      alt={"item"}
                      width={330}
                      height={330}
                    />
                  </div>
                  <div className={cx("PopularContentItemTitle")}>
                    <p className={cx("PopularContentItemTitleMain")}>ADAMANTER 텀블러</p>
                    <p className={cx("PopularContentItemTitleSub")}>24,000원</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={cx("PopularContentItem")}>
                  <div className={cx("ImageWrapper")}>
                    <Image
                      src={"/static/images/popular4.png"}
                      alt={"item"}
                      width={330}
                      height={330}
                    />
                  </div>
                  <div className={cx("PopularContentItemTitle")}>
                    <p className={cx("PopularContentItemTitleMain")}>ADAMANTER 키링</p>
                    <p className={cx("PopularContentItemTitleSub")}>12,000원</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={cx("PopularContentItem")}>
                  <div className={cx("ImageWrapper")}>
                    <Image
                      src={"/static/images/jersey_shop.png"}
                      alt={"item"}
                      width={330}
                      height={330}
                    />
                  </div>
                  <div className={cx("PopularContentItemTitle")}>
                    <p className={cx("PopularContentItemTitleMain")}>2024 ADAMANTER 져지</p>
                    <p className={cx("PopularContentItemTitleSub")}>80,000원</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            {swiper === 0 && (
              <div
                className={cx("UpcomingContentItemButton")}
                onClick={() => swiperRef?.slideNext()}
              >
                <Icon name={"SlideArrow"} size={48} />
              </div>
            )}
          </div>
        </section>
        <section className={cx("Banner")}>
          <div className={cx("BannerContainer")}>
            <div className={cx("BannerTitleWrapper")}>
              <p className={cx("BannerTitle")}>2024 WORLDS JERSEY</p>
              <p className={cx("BannerSubTitle")}>프로처럼 입고, 승리의 자신감을 느껴보세요.</p>
            </div>
            <Image src={"/static/images/jersey.png"} alt={"banner"} width={714} height={758} />
            <button
              className={cx("BannerButton")}
              onClick={() => {
                router.push(ROUTES.SHOP);
              }}
            >
              <p className={cx("BannerButtonText")}>BUY NOW</p>
              <Icon name={"ArrowUpright"} size={20} color={"#0A0A0A"} />
            </button>
          </div>
        </section>

        <section className={cx("Live")}>
          <div className={cx("Stream")}>
            <Image src={"/static/images/live1.png"} alt={"stream"} width={700} height={916} />
            <div className={cx("StreamContent")}>
              <p className={cx("StreamContentTitle")}>WATCH</p>
              <p className={cx("StreamContentTitle")}>
                THE LIVE STREAM
                <div className={cx("RedDot")} />
              </p>
              <button className={cx("StreamButton")} onClick={() => handleButtonClick()}>
                <p className={cx("StreamButtonText")}>GO TO LIVE STREAMING</p>
                <Icon name={"ArrowUpright"} size={20} color={"#0A0A0A"} />
              </button>
            </div>
          </div>
          <div className={cx("LiveContent")}>
            <div className={cx("LiveContentItem1")}>
              <Image src={"/static/images/live2.png"} alt={"stream"} width={700} height={438} />
              <div className={cx("Content")}>
                <p className={cx("StreamContentTitle")}>CAREER IN ADAMANTER</p>
                <button className={cx("StreamButton")} onClick={() => handleButtonClick()}>
                  <p className={cx("StreamButtonText")}>APPLY NOW</p>
                  <Icon name={"ArrowUpright"} size={20} color={"#0A0A0A"} />
                </button>
              </div>
            </div>
            <div className={cx("LiveContentItem2")}>
              <div className={cx("Container")}>
                <Image src={"/static/images/live3.png"} alt={"stream"} width={700} height={438} />
                <div className={cx("Content")}>
                  <p className={cx("StreamContentTitle")}>JOIN THE MEMBERSHIP</p>
                  <button className={cx("StreamButton")} onClick={() => handleButtonClick()}>
                    <p className={cx("StreamButtonText")}>SIGN UP</p>
                    <Icon name={"ArrowUpright"} size={20} color={"#0A0A0A"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={cx("Video")}>
          <div className={cx("VideoTitle")}>
            <div className={cx("VideoTitleText")}>
              <p className={cx("VideoTitleMain")}>LATEST VIDEO</p>
              <p className={cx("VideoTitleSub")}>
                ADAMANTER의 승리와 감동의 순간을 최신 영상에서 바로 만나보세요.
              </p>
            </div>
            <button className={cx("VideoButton")} onClick={() => handleButtonClick()}>
              <Icon name={"YoutubeLogo"} size={24} />
              <p className={cx("VideoButtonText")}>YOUTUBE</p>
              <Icon name={"ArrowUpright"} size={20} color={"#f33"} />
            </button>
          </div>
          <div className={cx("VideoContentWrapper")}>
            <div className={cx("VideoContentMain")}>
              <div className={cx("VideoContentItem")}>
                <div className={cx("ImageWrapper")}>
                  <Image src={"/static/images/video1.png"} alt={"item"} width={700} height={410} />
                </div>
                <div className={cx("VideoContentItemContent")}>
                  <div className={cx("VideoContentItemContentTitle")}>
                    <Icon name={"Logo"} size={32} />
                    <p className={cx("VideoContentItemContentTitleMain")}>
                      Mic Check: Our Craziest Game Callouts in the Finals
                    </p>
                  </div>
                </div>
                <div className={cx("LogoImageWrapper")}>
                  <Image src={"/static/images/youtube.png"} alt={"item"} width={80} height={56} />
                </div>
              </div>
            </div>
            <div className={cx("VideoContentItemWrapper")}>
              <div className={cx("VideoContentItem")}>
                <Image src={"/static/images/video2.png"} alt={"item"} width={330} height={186} />
                <div className={cx("VideoContentItemContent")}>
                  <div className={cx("VideoContentItemContentTitle")}>
                    <Icon name={"Logo"} size={32} />
                    <p className={cx("VideoContentItemContentTitleMainSmall")}>
                      Fan Meet Highlights: Than...
                    </p>
                  </div>
                </div>
                <div className={cx("LogoImageWrapper")}>
                  <Image src={"/static/images/youtube.png"} alt={"item"} width={40} height={28} />
                </div>
              </div>
              <div className={cx("VideoContentItem")}>
                <Image src={"/static/images/video3.png"} alt={"item"} width={330} height={186} />
                <div className={cx("VideoContentItemContent")}>
                  <div className={cx("VideoContentItemContentTitle")}>
                    <Icon name={"Logo"} size={32} />
                    <p className={cx("VideoContentItemContentTitleMainSmall")}>
                      Behind the Scenes: How...
                    </p>
                  </div>
                </div>
                <div className={cx("LogoImageWrapper")}>
                  <Image src={"/static/images/youtube.png"} alt={"item"} width={40} height={28} />
                </div>
              </div>
            </div>
            <div className={cx("VideoContentItemWrapper")}>
              <div className={cx("VideoContentItem")}>
                <Image src={"/static/images/video4.png"} alt={"item"} width={330} height={186} />
                <div className={cx("VideoContentItemContent")}>
                  <div className={cx("VideoContentItemContentTitle")}>
                    <Icon name={"Logo"} size={32} />
                    <p className={cx("VideoContentItemContentTitleMainSmall")}>
                      Epic Teamfight! Breaking...
                    </p>
                  </div>
                </div>
                <div className={cx("LogoImageWrapper")}>
                  <Image src={"/static/images/youtube.png"} alt={"item"} width={40} height={28} />
                </div>
              </div>
              <div className={cx("VideoContentItem")}>
                <Image src={"/static/images/video5.png"} alt={"item"} width={330} height={186} />
                <div className={cx("VideoContentItemContent")}>
                  <div className={cx("VideoContentItemContentTitle")}>
                    <Icon name={"Logo"} size={32} />
                    <p className={cx("VideoContentItemContentTitleMainSmall")}>
                      Joreny of ADLER, From Ro...
                    </p>
                  </div>
                </div>
                <div className={cx("LogoImageWrapper")}>
                  <Image src={"/static/images/youtube.png"} alt={"item"} width={40} height={28} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={cx("Team")}>
          <div className={cx("TeamTitle")}>
            <div className={cx("TeamTitleText")}>
              <p className={cx("TeamTitleMain")}>OUR TEAMS</p>
              <p className={cx("TeamTitleSub")}>끊임없이 도전하는 ADAMANTER의 팀을 소개합니다.</p>
            </div>
            <button className={cx("PopularButton")} onClick={() => router.push(ROUTES.TEAM)}>
              <p className={cx("PopularButtonText")}>VISIT TEAM</p>
              <Icon name={"ArrowUpright"} size={20} color={"#01CCFF"} />
            </button>
          </div>
          <div className={cx("TeamContentWrapper")}>
            <Image src={"/static/images/game1.png"} alt={"team"} width={345} height={550} />
            <Image src={"/static/images/game2.png"} alt={"team"} width={345} height={550} />
            <Image src={"/static/images/game3.png"} alt={"team"} width={345} height={550} />
            <Image src={"/static/images/game4.png"} alt={"team"} width={345} height={550} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeView;
