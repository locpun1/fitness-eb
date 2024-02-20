import React from "react";
import styles from "./Hero.module.scss";
import classname from "classnames/bind";
import CountUp from "react-countup";

import Header from "../Header/Header";

import { BsFillHeartFill } from "react-icons/bs";

import Hero_image from "../../assets/images/hero_image.png";
import Hero_image_back from "../../assets/images/hero_image_back.png";
import Calories from "../../assets/images/calories.png";

import { motion } from "framer-motion";

const cx = classname.bind(styles);

const Hero = () => {
    const transition = { type: "spring", duration: 3 };
    const mobile = window.innerWidth <= 1023 ? true : false;
    return (
        <div className={cx("hero__wrapper")}>
            <div className={cx("hero__container")}>
                <div className={cx("blur", "hero-blur")}></div>
                {/* Left side */}
                <div className={cx("hero__left")}>
                    <Header />
                    <div className={cx("hero__left-content")}>
                        {/* The best ad */}
                        <div className={cx("the-best--ad")}>
                            <motion.div
                                initial={{ left: "208px" }}
                                whileInView={{ left: "8px" }}
                                transition={{ ...transition, type: "tween" }}
                            ></motion.div>
                            <span className={cx("the-best--ad-text")}>
                                the best fitness club in the town
                            </span>
                        </div>

                        {/* Hero heading */}
                        <div className={cx("hero__heading")}>
                            <div>
                                <span className={cx("stroke-text")}>
                                    Shape{" "}
                                </span>
                                <span>your</span>
                            </div>
                            <div>
                                <span>Ideal </span>
                                <span>body</span>
                            </div>
                            <p className={cx("hero__text")}>
                                In here we will help you to shape and build your
                                ideal body and live up your life to fullest
                            </p>
                        </div>

                        {/* Figures */}
                        <div className={cx("figures")}>
                            <div className={cx("figures__item")}>
                                <span className={cx("figures__item-number")}>
                                    <span>+</span>
                                    <CountUp
                                        start={100}
                                        end={140}
                                        duration={4}
                                    />
                                </span>
                                <span className={cx("figures__item-des")}>
                                    EXPERT COACHES
                                </span>
                            </div>
                            <div className={cx("figures__item")}>
                                <span className={cx("figures__item-number")}>
                                    <span>+</span>
                                    <CountUp
                                        start={888}
                                        end={978}
                                        duration={4}
                                    />
                                </span>
                                <span className={cx("figures__item-des")}>
                                    MEMBERS JOINED
                                </span>
                            </div>
                            <div className={cx("figures__item")}>
                                <span className={cx("figures__item-number")}>
                                    <span>+</span>
                                    <CountUp start={0} end={50} duration={4} />
                                </span>
                                <span className={cx("figures__item-des")}>
                                    FITNESS PROGRAMS
                                </span>
                            </div>
                        </div>

                        {/* Hero btn */}
                        <div className={cx("hero__buttons")}>
                            <button className={cx("btn")}>Get Started</button>
                            <button className={cx("btn")}>Learn More</button>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className={cx("hero__right")}>
                    <button className={cx("btn-join", "btn")}>Join Now</button>

                    <motion.div
                        className={cx("heart-rate")}
                        initial={mobile ? { left: "0" } : { right: "-1rem" }}
                        whileInView={
                            mobile ? { left: "2rem" } : { right: "4rem" }
                        }
                        transition={transition}
                    >
                        <div className={cx("heart-icon")}>
                            <BsFillHeartFill size={32} />
                        </div>
                        <span>Heart Rate</span>
                        <span>116 bpm</span>
                    </motion.div>

                    {/* hero images */}
                    <img
                        src={Hero_image}
                        alt="hero_image"
                        className={cx("hero-image")}
                    />
                    <motion.img
                        src={Hero_image_back}
                        alt="hero_image_back"
                        className={cx("hero-image-back")}
                        initial={{ right: "11rem" }}
                        whileInView={{ right: "20rem" }}
                        transition={transition}
                    />

                    {/* calories */}
                    <motion.div
                        className={cx("calories")}
                        initial={mobile ? { left: "2rem" } : { right: "32rem" }}
                        whileInView={
                            mobile ? { left: "9rem" } : { right: "28rem" }
                        }
                        transition={transition}
                    >
                        <img
                            src={Calories}
                            alt="calories"
                            className={cx("calories-img")}
                        />
                        <div className={cx("calories-text")}>
                            <span>Calories burned</span>
                            <span>220 kcal</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
