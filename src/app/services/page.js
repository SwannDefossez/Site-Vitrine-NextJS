import Image from "next/image";
import css from "./page.module.scss";

export default function Home() {
  return (
    <main className={css.main}>
      <div className={css.content}>
        <div className={css.content__info}>
          <h2>[ PAGE POUR PRESENTER VOS SERVICES EN DETAIL ]</h2>
        </div>
      </div>
      
    </main>
  );
}
