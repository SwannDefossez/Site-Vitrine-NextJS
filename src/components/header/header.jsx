"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import css from "./header.module.scss";
import Hamburger from "hamburger-react";

import { usePathname } from "next/navigation";

function header() {
  const currentRoute = usePathname();

  // burger open
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={css.header}>
      <Image
        width={574}
        height={146}
        src="/logo.png"
        alt="Votre logo"
        className={css.header__logo}
      />
      <div className={css.header__burger}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#ffffff"
          size={50}
          rounded
          label="Show menu"
        />
        <div className={`${isOpen ? css.burger : css.none}`}>
          <nav className={css.burger__navigation}>
            <ul>
              <li>
                <Link
                  className={`${
                    currentRoute === "/" ? css.active_burger : css.non
                  }`}
                  href="/">
                  ACCUEIL
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    currentRoute === "/services" ? css.active_burger : css.non
                  }`}
                  href="/services">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    currentRoute === "/reviews" ? css.active_burger : css.non
                  }`}
                  href="/reviews">
                  REVIEWS
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    currentRoute === "/contact" ? css.active_burger : css.non
                  }`}
                  href="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <nav className={css.nav}>
        <ul>
          <li>
            <Link
              className={`${currentRoute === "/" ? css.active : css.non}`}
              href="/">
              ACCUEIL
            </Link>
          </li>
          <li>
            <Link
              className={`${
                currentRoute === "/services" ? css.active : css.non
              }`}
              href="/services">
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              className={`${
                currentRoute === "/reviews" ? css.active : css.non
              }`}
              href="/reviews">
              REVIEWS
            </Link>
          </li>
          <li>
            <Link
              className={`${
                currentRoute === "/contact" ? css.active : css.non
              }`}
              href="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default header;
