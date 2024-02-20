import React from "react";
import styles from "./Plans.module.scss";
import classnames from "classnames/bind";

import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { TbHeartPlus } from "react-icons/tb";
import { FaCrown } from "react-icons/fa";
import { LuDumbbell } from "react-icons/lu";

const cx = classnames.bind(styles);

const Plans = () => {
    return (
        <div className={cx("plans__wrapper")} id="plans">
            <div className={cx("blur", "plans-blur-1")}></div>
            <div className={cx("blur", "plans-blur-2")}></div>
            <div className={cx("plans__title")}>
                <span className={cx("stroke-text")}>READY TO START </span>
                <span>YOUR JOURNEY </span>
                <span className={cx("stroke-text")}>NOW WITHUS</span>
            </div>

            <div className={cx("plans__list")}>
                {/* Plan item */}
                <div className={cx("plan__item")}>
                    <i className={cx("plan__item-icon")}>
                        <TbHeartPlus fontSize={32} />
                    </i>
                    <h2 className={cx("plan__item-name")}>Basic plan</h2>
                    <span className={cx("plan__item-price")}>
                        <p>$</p>
                        <p>25</p>
                    </span>
                    <div className={cx("plan__item-details")}>
                        <div className={cx("plan__item-detail")}>
                            <div className={cx("icon-check")}>
                                <FiCheckCircle />
                            </div>
                            <p className={cx("plan__item-detail-text")}>
                                2 hours of excercises
                            </p>
                        </div>
                        <div className={cx("plan__item-detail")}>
                            <div className={cx("icon-check")}>
                                <FiCheckCircle />
                            </div>
                            <p className={cx("plan__item-detail-text")}>
                                Free consultaion to coaches
                            </p>
                        </div>
                        <div className={cx("plan__item-detail")}>
                            <i className={cx("icon-check")}>
                                <FiCheckCircle />
                            </i>
                            <p className={cx("plan__item-detail-text")}>
                                Access to The Community
                            </p>
                        </div>
                    </div>
                    <span className={cx("more-information")}>
                        <p>See more benefits</p>
                        <i className={cx("right-arrow-icon")}>
                            <FiArrowRight />
                        </i>
                    </span>
                    <button className={cx("plan__item-btn", "btn")}>
                        Join now
                    </button>
                </div>

                {/* Plan item */}
                <div className={cx("plan__item")}>
                    <i className={cx("plan__item-icon")}>
                        <FaCrown fontSize={32} />
                    </i>
                    <h2 className={cx("plan__item-name")}>Premium plan</h2>
                    <span className={cx("plan__item-price")}>
                        <p>$</p>
                        <p>30</p>
                    </span>
                    <div className={cx("plan__item-details")}>
                        <div className={cx("plan__item-detail")}>
                            <div className={cx("icon-check")}>
                                <FiCheckCircle />
                            </div>
                            <p className={cx("plan__item-detail-text")}>
                                5 hour of excercises
                            </p>
                        </div>
                        <div className={cx("plan__item-detail")}>
                            <div className={cx("icon-check")}>
                                <FiCheckCircle />
                            </div>
                            <p className={cx("plan__item-detail-text")}>
                                Free consultaion to coaches
                            </p>
                        </div>
                        <div className={cx("plan__item-detail")}>
                            <i className={cx("icon-check")}>
                                <FiCheckCircle />
                            </i>
                            <p className={cx("plan__item-detail-text")}>
                                Accessto minibar
                            </p>
                        </div>
                    </div>
                    <span className={cx("more-information")}>
                        <p>See more benefits</p>
                        <i className={cx("right-arrow-icon")}>
                            <FiArrowRight />
                        </i>
                    </span>
                    <button className={cx("plan__item-btn", "btn")}>
                        Join now
                    </button>
                </div>

                {/* Plan item */}
                <div className={cx("plan__item")}>
                    <i className={cx("plan__item-icon")}>
                        <LuDumbbell fontSize={32} />
                    </i>
                    <h2 className={cx("plan__item-name")}>Pro plan</h2>
                    <span className={cx("plan__item-price")}>
                        <p>$</p>
                        <p>45</p>
                    </span>
                    <div className={cx("plan__item-details")}>
                        <div className={cx("plan__item-detail")}>
                            <div className={cx("icon-check")}>
                                <FiCheckCircle />
                            </div>
                            <p className={cx("plan__item-detail-text")}>
                                8 hours of excercises
                            </p>
                        </div>
                        <div className={cx("plan__item-detail")}>
                            <div className={cx("icon-check")}>
                                <FiCheckCircle />
                            </div>
                            <p className={cx("plan__item-detail-text")}>
                                Consultation of Private Coach
                            </p>
                        </div>
                        <div className={cx("plan__item-detail")}>
                            <i className={cx("icon-check")}>
                                <FiCheckCircle />
                            </i>
                            <p className={cx("plan__item-detail-text")}>
                                Free Fitness Merchandises
                            </p>
                        </div>
                    </div>
                    <span className={cx("more-information")}>
                        <p>See more benefits</p>
                        <i className={cx("right-arrow-icon")}>
                            <FiArrowRight />
                        </i>
                    </span>
                    <button className={cx("plan__item-btn", "btn")}>
                        Join now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Plans;
