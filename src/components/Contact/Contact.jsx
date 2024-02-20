import React from "react";
import styles from "./Contact.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

const Contact = () => {
    return (
        <section className={cx("contact__wrapper")} id="contact">
            <hr className={cx("line")} />
            <div className={cx("contact__container")}>
                <div className={cx("contact__title")}>
                    <div>
                        <span className={cx("stroke-text")}>Ready To</span>
                        <span> Level Up</span>
                    </div>
                    <div>
                        <span>Your Body </span>
                        <span className={cx("stroke-text")}> With Us ?</span>
                    </div>
                </div>
                <form action="" className={cx("contact__input")}>
                    <input
                        type="email"
                        placeholder="Enter your Email Address here"
                    />
                    <button className={cx("contact-btn", "btn")}>
                        Join now
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
