import React from "react";
import styles from "./Footer.module.scss";
import classnames from "classnames/bind";

import logo from "../../assets/images/logo.png";

import { BsFacebook, BsInstagram, BsGoogle, BsTwitter } from "react-icons/bs";

const cx = classnames.bind(styles);

const Footer = () => {
    return (
        <section className={cx("footer__wrapper")}>
            <hr className={cx("line")} />
            <div className={cx("footer__container")}>
                <div className={cx("footer__nav")}>
                    <ul className={cx("footer__nav-list")}>
                        <li className={cx("footer__nav-item")}>
                            <img
                                src={logo}
                                alt="logo"
                                className={cx("footer__logo")}
                            />
                        </li>
                        <li className={cx("footer__nav-item")}>
                            <a href="#" className={cx("footer__nav-link")}>
                                Programs
                            </a>
                        </li>
                        <li className={cx("footer__nav-item")}>
                            <a href="#" className={cx("footer__nav-link")}>
                                Privacy
                            </a>
                        </li>
                        <li className={cx("footer__nav-item")}>
                            <a href="#" className={cx("footer__nav-link")}>
                                Terms
                            </a>
                        </li>
                    </ul>
                </div>
                <p className={cx("copyright")}>© Copyright by FitClub</p>
                <div className={cx("footer__social")}>
                    <i className={cx("footer__social-icon")}>
                        <BsFacebook fontSize={28} />
                    </i>
                    <i className={cx("footer__social-icon")}>
                        <BsInstagram fontSize={28} />
                    </i>
                    <i className={cx("footer__social-icon")}>
                        <BsGoogle fontSize={28} />
                    </i>
                    <i className={cx("footer__social-icon")}>
                        <BsTwitter fontSize={28} />
                    </i>
                </div>
            </div>
        </section>
    );
};

export default Footer;
