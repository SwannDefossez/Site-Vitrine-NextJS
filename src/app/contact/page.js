import Image from "next/image";
import css from "./page.module.scss";
import Location from "../../components/location/location";
export default function Home() {
  return (
    <main className={css.main}>
      <div className={css.content}>
        <div className={css.content__info}>
          <div>
            <h2>Nous contacter</h2>
            <ul>
              <li>06.07.09.10.11</li>
              <li>tonmail@hotmail.fr</li>
              <li>5 rue du test 34300 Agde</li>
            </ul>
          </div>
          <Image
            src="/character_20.png"
            width={952 / 4}
            height={1261 / 4}
            alt="a man working on a computer"
            className={css.content__image}
          />
        </div>
      </div>
      <Location />
    </main>
  );
}
