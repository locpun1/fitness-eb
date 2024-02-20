import React from "react";
import styles from "./Programs.module.scss";
import classnames from "classnames/bind";

import { LuDumbbell } from "react-icons/lu";
import { FaArrowRight, FaRunning } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { RiHeartPulseLine } from "react-icons/ri";

const cx = classnames.bind(styles);

const Programs = () => {
    return (
        <section className={cx("programs__wrapper")} id="programs">
            <div className={cx("programs__header")}>
                <h1 className={cx("stroke-text", "programs__header-text")}>
                    Explore our
                </h1>
                <h1 className={cx("programs__header-text")}>Programs</h1>
                <h1 className={cx("stroke-text", "programs__header-text")}>
                    To shape you
                </h1>
            </div>

            <div className={cx("programs__list")}>
                <div className={cx("program__item")}>
                    <div className={cx("program__item-icon")}>
                        <LuDumbbell
                            fontSize={32}
                            style={{ transform: "rotate(90deg)" }}
                        />
                    </div>
                    <h3 className={cx("program__item-heading")}>
                        Strength Training
                    </h3>
                    <p className={cx("program__item-des")}>
                        In this program, you are trained to improve your
                        strength through many exercises.
                    </p>
                    <button className={cx("program__item-btn")}>
                        Join Now
                        <FaArrowRight />
                    </button>
                </div>

                <div className={cx("program__item")}>
                    <div className={cx("program__item-icon")}>
                        <FaRunning fontSize={32} />
                    </div>
                    <h3 className={cx("program__item-heading")}>
                        Cardio Training
                    </h3>
                    <p className={cx("program__item-des")}>
                        In this program, you are trained to do sequential moves
                        in range of 20 until 30 minutes.
                    </p>
                    <button className={cx("program__item-btn")}>
                        Join Now
                        <FaArrowRight />
                    </button>
                </div>

                <div className={cx("program__item")}>
                    <div className={cx("program__item-icon")}>
                        <AiFillFire fontSize={32} />
                    </div>
                    <h3 className={cx("program__item-heading")}>Fat Burning</h3>
                    <p className={cx("program__item-des")}>
                        This program is suitable for you who wants to get rid of
                        your fat and lose their weight.
                    </p>
                    <button className={cx("program__item-btn")}>
                        Join Now
                        <FaArrowRight />
                    </button>
                </div>

                <div className={cx("program__item")}>
                    <div className={cx("program__item-icon")}>
                        <RiHeartPulseLine fontSize={32} />
                    </div>
                    <h3 className={cx("program__item-heading")}>
                        Health Fitness
                    </h3>
                    <p className={cx("program__item-des")}>
                        This programs is designed for those who exercises only
                        for their body fitness not body building.
                    </p>
                    <button className={cx("program__item-btn")}>
                        Join Now
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Programs;
