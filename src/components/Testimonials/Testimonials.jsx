import React, { useState } from "react";
import styles from "./Testimonials.module.scss";
import classnames from "classnames/bind";
import { motion } from "framer-motion";

import { testimonialsData } from "../../assets/data/testimonialsData";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const cx = classnames.bind(styles);

const Testimonials = () => {
    const transition = { type: "spring", duration: 3 };
    const [selected, setSelected] = useState(0);
    const lenght = testimonialsData.length;

    const isMobile = window.innerWidth <= 768 ? true : false;
    return (
        <section className={cx("testimonials__wrapper")} id="testimonials">
            <div className={cx("testimonials__left")}>
                <div className={cx("testimonials__left-header")}>
                    <h3 className={cx("testimonials__left-heading")}>
                        Testimonials
                    </h3>
                    <div className={cx("testimonials__left-title")}>
                        <h1 className={cx("stroke-text")}>What they</h1>
                        <h1>Say about us</h1>
                    </div>
                    <motion.div
                        className={cx("testimonials__left-content")}
                        key={selected}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={transition}
                    >
                        <p className={cx("testimonials__left-review")}>
                            {testimonialsData[selected].review}
                        </p>
                        <span className={cx("testimonials__left-author")}>
                            <p className={cx("author-name")}>
                                {testimonialsData[selected].name}
                            </p>
                            -
                            <p className={cx("author-status")}>
                                {testimonialsData[selected].status}
                            </p>
                        </span>
                    </motion.div>
                </div>
            </div>
            <div className={cx("testimonials__right")}>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                ></motion.div>
                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                    src={testimonialsData[selected].image}
                    alt="author-img"
                    className={cx("author-img")}
                />
                <div className={cx("arrows")}>
                    <i
                        className={cx("arrow-left")}
                        onClick={() => {
                            selected === 0
                                ? setSelected(lenght - 1)
                                : setSelected((prev) => prev - 1);
                        }}
                    >
                        <FaArrowLeft fontSize={35} />
                    </i>
                    <i
                        className={cx("arrow-right")}
                        onClick={() => {
                            selected === lenght - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1);
                        }}
                    >
                        <FaArrowRight fontSize={35} />
                    </i>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
