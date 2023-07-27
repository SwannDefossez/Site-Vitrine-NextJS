import React from "react";
import css from "./banner.module.scss";

import Image from "next/image";

function banner() {
  return (
    <div className={css.banner}>
      <div className={css.banner__content}>
        <Image
          src="/worker.png"
          width={3237}
          height={1626}
          className={css.banner__worker}
          alt="dessin de personnes qui travaillent"
        />
        <div className={css.banner__text}>
          <h1>VOTRE NOM</h1>
          <h2>VOTRE SLOGAN DE MARQUE</h2>
          <h3>Pulvinar enim ac tortor nulla facilisi tristique facilisi.</h3>
        </div>
      </div>
      <div className={css.banner__contact}>
        <a className={css.banner__link} href="/contact">
          <p>CONTACT</p>
        </a>
      </div>
    </div>
  );
}

export default banner;
