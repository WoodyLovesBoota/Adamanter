"use client";
import React from "react";
import classNames from "classnames/bind";
import styles from "./Shop.view.module.scss";
import Image from "next/image";
import { Icon } from "@/lib/common/components/Icon/Icon";

const cx = classNames.bind(styles);

const ShopView = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={cx("Wrapper")}>
      <header className={cx("Header")}>
        <button className={cx("HeaderButton", "current")}>ALL</button>
        <button className={cx("HeaderButton")}>PRO KIT</button>
        <button className={cx("HeaderButton")}>APPAREL</button>
        <button className={cx("HeaderButton")}>ACCESSORIES</button>
        <button className={cx("HeaderButton")}>COLLABORATION</button>
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
                <p className={cx("BannerTitle")}>2024 WORLDS JERSEY</p>
                <p className={cx("BannerSubTitle")}>프로처럼 입고, 승리의 자신감을 느껴보세요.</p>
              </div>

              <button className={cx("BannerButton")}>
                <p className={cx("BannerButtonText")}>BUY NOW</p>
                <Icon name={"ArrowUpright"} size={20} color={"#0A0A0A"} />
              </button>
            </div>
          </section>
          <section className={cx("BannerBlack")}>
            <div className={cx("BannerContainer2")}>
              <div className={cx("BannerTitleWrapper")}>
                <p className={cx("BannerTitle")}>2024 WORLDS JERSEY</p>
                <p className={cx("BannerSubTitle")}>프로처럼 입고, 승리의 자신감을 느껴보세요.</p>
              </div>
              <Image
                src={"/static/images/shop2.png"}
                alt={"banner"}
                width={947}
                height={680}
                style={{ height: "680px", width: "auto", position: "absolute", top: 0, left: 0 }}
              />
              <button className={cx("BannerButton")}>
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
              <button className={cx("BannerButton")}>
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
                <p className={cx("BannerTitle")}>2024 WORLDS JERSEY</p>
                <p className={cx("BannerSubTitle")}>프로처럼 입고, 승리의 자신감을 느껴보세요.</p>
              </div>

              <button className={cx("BannerButton")}>
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
            <button className={cx("PopularButton")}>
              <p className={cx("PopularButtonText")}>VISIT SHOP</p>
              <Icon name={"ArrowUpright"} size={20} color={"#01CCFF"} />
            </button>
          </div>
          <div className={cx("PopularContentWrapper")}>
            <div className={cx("PopularContentItem")}>
              <div className={cx("ImageWrapper")}>
                <Image src={"/static/images/popular1.png"} alt={"item"} width={330} height={330} />
              </div>
              <div className={cx("PopularContentItemTitle")}>
                <p className={cx("PopularContentItemTitleMain")}>2024 ADAMANTER 포토카드</p>
                <p className={cx("PopularContentItemTitleSub")}>30,000원</p>
              </div>
            </div>
            <div className={cx("PopularContentItem")}>
              <div className={cx("ImageWrapper")}>
                <Image src={"/static/images/popular2.png"} alt={"item"} width={330} height={330} />
              </div>
              <div className={cx("PopularContentItemTitle")}>
                <p className={cx("PopularContentItemTitleMain")}>ADAMANTER 키캡</p>
                <p className={cx("PopularContentItemTitleSub")}>5,000원</p>
              </div>
            </div>
            <div className={cx("PopularContentItem")}>
              <div className={cx("ImageWrapper")}>
                <Image src={"/static/images/popular3.png"} alt={"item"} width={330} height={330} />
              </div>
              <div className={cx("PopularContentItemTitle")}>
                <p className={cx("PopularContentItemTitleMain")}>ADAMANTER 텀블러</p>
                <p className={cx("PopularContentItemTitleSub")}>24,000원</p>
              </div>
            </div>
            <div className={cx("PopularContentItem")}>
              <div className={cx("ImageWrapper")}>
                <Image src={"/static/images/popular4.png"} alt={"item"} width={330} height={330} />
                <div className={cx("UpcomingContentItemButton")}>
                  <Icon name={"SlideArrow"} size={48} />
                </div>
              </div>
              <div className={cx("PopularContentItemTitle")}>
                <p className={cx("PopularContentItemTitleMain")}>ADAMANTER 키링</p>
                <p className={cx("PopularContentItemTitleSub")}>12,000원</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ShopView;
