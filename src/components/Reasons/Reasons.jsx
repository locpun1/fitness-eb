import React from "react";
import styles from "./Reasons.module.scss";
import classnames from "classnames/bind";

import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import nb from "../../assets/images/nb.png";
import nike from "../../assets/images/nike.png";
import adidas from "../../assets/images/adidas.png";

import { FiCheckCircle } from "react-icons/fi";

const cx = classnames.bind(styles);

const Reasons = () => {
    return (
        <section className={cx("reasons__wrapper")} id="reasons">
            <div className={cx("reasons__left")}>
                <img src={image1} alt="" className={cx("reasons__img")} />
                <img src={image2} alt="" className={cx("reasons__img")} />
                <img src={image3} alt="" className={cx("reasons__img")} />
                <img src={image4} alt="" className={cx("reasons__img")} />
            </div>
            <div className={cx("reasons__right")}>
                <h3 className={cx("reasons__right-heading")}>Some reasons</h3>
                <div className={cx("reasons__right-content")}>
                    <div className={cx("reasons__right-title")}>
                        <span className={cx("stroke-text")}>Why </span>
                        <span> Choose us ?</span>
                    </div>

                    <div className={cx("reasons__right-details")}>
                        <div className={cx("reason")}>
                            <div className={cx("reason-icon")}>
                                <FiCheckCircle fontSize={32} />
                            </div>
                            <span className={cx("reason-text")}>
                                OVER 140+ EXPERT COACHS
                            </span>
                        </div>
                        <div className={cx("reason")}>
                            <div className={cx("reason-icon")}>
                                <FiCheckCircle fontSize={32} />
                            </div>
                            <span className={cx("reason-text")}>
                                TRAIN SMARTER AND FASTER THAN BEFORE
                            </span>
                        </div>
                        <div className={cx("reason")}>
                            <div className={cx("reason-icon")}>
                                <FiCheckCircle fontSize={32} />
                            </div>
                            <span className={cx("reason-text")}>
                                1 FREE PROGRAM FOR NEW MEMBER
                            </span>
                        </div>
                        <div className={cx("reason")}>
                            <div className={cx("reason-icon")}>
                                <FiCheckCircle fontSize={32} />
                            </div>
                            <span className={cx("reason-text")}>
                                RELIABLE PARTNERS
                            </span>
                        </div>

                        <div className={cx("partners")}>
                            <span className={cx("partness__title")}>
                                Out partners
                            </span>
                            <div className={cx("partners__imgs")}>
                                <img
                                    src={nb}
                                    alt="newbalance"
                                    className={cx("partners-img")}
                                />
                                <img
                                    src={adidas}
                                    alt="adidas"
                                    className={cx("partners-img")}
                                />
                                <img
                                    src={nike}
                                    alt="nike"
                                    className={cx("partners-img")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reasons;
