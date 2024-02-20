import React, { useState } from "react";
import styles from "./Header.module.scss";
import classnames from "classnames/bind";
import OutsideClickHandler from "react-outside-click-handler";

import Logo from "../../assets/images/logo.png";

import { HiBars3 } from "react-icons/hi2";

const cx = classnames.bind(styles);

const Header = () => {
    const isMobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);
    console.log(menuOpened);
    const getMenuStyles = (menuOpened) => {
        if (isMobile) {
            return { right: !menuOpened && "-100%" };
        }
    };
    return (
        <section className={cx("header__wrapper")}>
            <img src={Logo} alt="Logo" className={cx("header__logo")} />

            {isMobile === true && menuOpened === true ? (
                <label className={cx("mobile-overlay")}></label>
            ) : (
                <div></div>
            )}

            <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
                <nav className={cx("navbar")} style={getMenuStyles(menuOpened)}>
                    <ul className={cx("navbar__list")}>
                        <li
                            className={cx("navbar__item")}
                            onClick={() => setMenuOpened(false)}
                        >
                            <a href="#" className={cx("navbar__link")}>
                                Home
                            </a>
                        </li>
                        <li
                            className={cx("navbar__item")}
                            onClick={() => setMenuOpened(false)}
                        >
                            <a href="#programs" className={cx("navbar__link")}>
                                Program
                            </a>
                        </li>
                        <li
                            className={cx("navbar__item")}
                            onClick={() => setMenuOpened(false)}
                        >
                            <a href="#reasons" className={cx("navbar__link")}>
                                Why us
                            </a>
                        </li>
                        <li
                            className={cx("navbar__item")}
                            onClick={() => setMenuOpened(false)}
                        >
                            <a href="#plans" className={cx("navbar__link")}>
                                Plans
                            </a>
                        </li>
                        <li
                            className={cx("navbar__item")}
                            onClick={() => setMenuOpened(false)}
                        >
                            <a
                                href="#testimonials"
                                className={cx("navbar__link")}
                            >
                                Testimonials
                            </a>
                        </li>
                        <li
                            className={cx("navbar__item")}
                            onClick={() => setMenuOpened(false)}
                        >
                            <a href="#contact" className={cx("navbar__link")}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <button
                    className={cx("mobile-menu-icon")}
                    onClick={() => {
                        setMenuOpened(!menuOpened);
                        console.log(menuOpened);
                    }}
                >
                    <HiBars3 fontSize={32} color="#fff" />
                </button>
            </OutsideClickHandler>
        </section>
    );
};

export default Header;
