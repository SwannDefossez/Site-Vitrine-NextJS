import React from "react";
import css from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";
function footer() {
  return (
    <footer className={css.footer}>
      <div className={css.footer__cotent}>
        <div className={css.footer__social}>
          <a href="#">
            <Image
              src="/twitter.webp"
              height={30}
              width={30}
              alt="logo twitter"
            />
          </a>
          <a href="#">
            <Image
              src="/instagram.webp"
              height={30}
              width={30}
              alt="logo instagram"
            />
          </a>
          <a href="#">
            <Image
              src="/facebook.webp"
              height={30}
              width={30}
              alt="logo facebook"
            />
          </a>
        </div>
        <div className={css.footer__text}>
          <ul>
            <li>
              <Link className={css.footer__link} href="/contact/">
                Contact
              </Link>
            </li>
            <li>
              <Link className={css.footer__link} href="/tou/">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link className={css.footer__link} href="/privacy/">
                Privacy Policy
              </Link>
            </li>
          </ul>
          <p>© 2023 Votre Nom</p>
        </div>
      </div>
    </footer>
  );
}

export default footer;
