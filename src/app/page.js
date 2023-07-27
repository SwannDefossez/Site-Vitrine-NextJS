import css from "./page.module.scss";
import Banner from "../components/banner/banner";
import { AiFillBulb, AiOutlineDropbox, AiTwotoneHome } from "react-icons/ai";
import Header from "../components/header/header";
import Swipe from "../components/swiper/swiper";
export default function Home() {
  return (
    <main className={css.main}>
      <Header />
      <Banner />
      <section className={css.activity}>
        <header className={css.activity__header}>
          <h2>QUE FAISONS-NOUS</h2>
          <h3>SECTION SUBTITLE</h3>
        </header>
        <div className={css.activity__content}>
          <article>
            <AiFillBulb size={40} color="orange" />
            <h4>LOREM</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              omnis quibusdam tempore laborum de
            </p>
          </article>
          <article>
            <AiOutlineDropbox size={40} color="orange" />
            <h4>LOREM</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              omnis quibusdam tempore laborum de
            </p>
          </article>
          <article>
            <AiTwotoneHome size={40} color="orange" />
            <h4>LOREM</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              omnis quibusdam tempore laborum de
            </p>
          </article>
        </div>
      </section>
      <Swipe />
    </main>
  );
}
