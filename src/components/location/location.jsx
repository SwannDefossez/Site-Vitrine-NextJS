import React from "react";
import css from "./location.module.scss";
function location() {
  return (
    <div className={css.location}>
      <div className={css.location__content}>
        <header>
          <h2>NOTRE LOCALISATION</h2>
          <h3>XXX rue de votre adresse</h3>
        </header>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8957.184881339925!2d3.5128750837063087!3d43.293155969631336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b13b4625d00fa9%3A0x447ced48ae16e3ed!2sEquivok!5e0!3m2!1sfr!2sfr!4v1684408876368!5m2!1sfr!2sfr"
          width={"100%"}
          height={"500"}
          referrerpolicy="no-referrer-when-downgrade"
          style={{border:0}}
          className={css.location__iframe}></iframe>
      </div>
    </div>
  );
}

export default location;
