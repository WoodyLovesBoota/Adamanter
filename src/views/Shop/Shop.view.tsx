"use client";
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Shop.view.module.scss";
import Image from "next/image";
import { Icon } from "@/lib/common/components/Icon/Icon";
import { usePopup } from "@/components/hooks/common/usePopup";
import { Swiper, SwiperSlide } from "swiper/react";

const cx = classNames.bind(styles);

const ShopView = () => {
  const { toastPopup } = usePopup();
  const [swiper, setSwiper] = useState(0);
  const [swiperRef, setSwiperRef] = useState<any>();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleButtonClick = () => {
    toastPopup({
      stringKey: "ComingSoon",
      title: "Sorry, this page is currently under preparation.",
      iconName: "ComingSoon",
      dimmed: true,
    });
  };

  return (
    <div className={cx("Wrapper")}>
      <header className={cx("Header")}>
        <button className={cx("HeaderButton", "current")}>ALL</button>
        <button onClick={() => handleButtonClick()} className={cx("HeaderButton")}>
          PRO KIT
        </button>
        <button onClick={() => handleButtonClick()} className={cx("HeaderButton")}>
          APPAREL
        </button>
        <button onClick={() => handleButtonClick()} className={cx("HeaderButton")}>
          ACCESSORIES
        </button>
        <button onClick={() => handleButtonClick()} className={cx("HeaderButton")}>
          COLLABORATION
        </button>
      </header>
      <main className={cx("Main")}>
        <div className={cx("BannerWrapper")}>
          <section className={cx("BannerTransparent")}>
            <div className={cx("BannerContainer")}>
              <Image
                src={"/static/images/shop1.png"}
                alt={"banner"}
                width={453}
                height={680}
                style={{ height: "680px", width: "auto", position: "absolute", top: 0, left: 0 }}
              />
              <div className={cx("BannerTitleWrapper")}>
                <p className={cx("BannerTitle", "shadow")}>
                  WIRELESS
                  <br />
                  MOUSE
                </p>
                <p className={cx("BannerSubTitle")}>프로도 사용하는 무선 마우스</p>
              </div>

              <button className={cx("BannerButton")} onClick={() => handleButtonClick()}>
                <p className={cx("BannerButtonText")}>BUY NOW</p>
                <Icon name={"ArrowUpright"} size={20} color={"#0A0A0A"} />
              </button>
            </div>
          </section>
          <section className={cx("BannerBlack")}>
            <div className={cx("BannerContainer2")}>
              <div className={cx("BannerTitleWrapper")}>
                <p className={cx("BannerTitle")}>ADAMANTER KEYCAP</p>
                <p className={cx("BannerSubTitle")}>스타일과 타건감을 모두 잡은 커스텀 키캡</p>
              </div>
              <Image
                src={"/static/images/shop2.png"}
                alt={"banner"}
                width={947}
                height={680}
                style={{ height: "680px", width: "auto", position: "absolute", top: 0, left: 0 }}
              />
              <button className={cx("BannerButton")} onClick={() => handleButtonClick()}>
                <p className={cx("BannerButtonText")}>BUY NOW</p>
                <Icon name={"ArrowUpright"} size={20} color={"#0A0A0A"} />
              </button>
            </div>
          </section>
        </div>

        <div className={cx("BannerWrapper")}>
          <section className={cx("Banner")}>
            <div className={cx("BannerContainer")}>
              <div className={cx("BannerTitleWrapper")}>
                <p className={cx("BannerTitle")}>2024 WORLDS JERSEY</p>
                <p className={cx("BannerSubTitle")}>프로처럼 입고, 승리의 자신감을 느껴보세요.</p>
              </div>
              <Image
                src={"/static/images/jersey.png"}
                alt={"banner"}
                width={558}
                height={593}
                style={{ height: "auto", width: "558px", marginLeft: "auto", marginTop: "auto" }}
              />
              <button className={cx("BannerButton")} onClick={() => handleButtonClick()}>
                <p className={cx("BannerButtonText")}>BUY NOW</p>
                <Icon name={"ArrowUpright"} size={20} color={"#0A0A0A"} />
              </button>
            </div>
          </section>
          <section className={cx("BannerTransparent")}>
            <div className={cx("BannerContainer")}>
              <Image
                src={"/static/images/shop3.png"}
                alt={"banner"}
                width={453}
                height={680}
                style={{ height: "680px", width: "auto", position: "absolute", top: 0, left: 0 }}
              />
              <div className={cx("BannerTitleWrapper")}>
                <p className={cx("BannerTitle")}>JACKET</p>
                <p className={cx("BannerSubTitle")}>승리를 입다</p>
              </div>

              <button className={cx("BannerButton")} onClick={() => handleButtonClick()}>
                <p className={cx("BannerButtonText")}>BUY NOW</p>
                <Icon name={"ArrowUpright"} size={20} color={"#0A0A0A"} />
              </button>
            </div>
          </section>
        </div>

        <section className={cx("Popular")}>
          <div className={cx("PopularTitle")}>
            <div className={cx("PopularTitleText")}>
              <p className={cx("PopularTitleMain")}>POPULAR ITEMS</p>
              <p className={cx("PopularTitleSub")}>팬들의 선택을 받은 인기 굿즈를 만나보세요.</p>
            </div>
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
      </main>
    </div>
  );
};

export default ShopView;
