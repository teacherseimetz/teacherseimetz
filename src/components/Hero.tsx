import { ButtonLink } from "./ButtonLink";
import styles from "./Hero.module.css";
import { Logo } from "./Logo";
import { VisuallyHidden } from "./VisuallyHidden";
import { Wrapper } from "./Wrapper";

export function Hero() {
  return (
    <section className="bg-linear-to-r from-teal to-lilac uppercase text-white mb-10">
      <Wrapper className={styles.wrapper}>
        <h1>
          <span>
            <Logo />
            <VisuallyHidden>Amanda Seimetz</VisuallyHidden>
          </span>
          <span>Professora particular de inglês</span>
        </h1>
        <div className={styles.links}>
          <ButtonLink href="#TODO" inverse>Quero fazer aulas de inglês</ButtonLink>
          <ButtonLink
            href="https://instagram.com/teacherseimetz"
            rel="noreferrer noopener"
            inverse
          >
            Insta @teacherseimetz
          </ButtonLink>
        </div>
      </Wrapper>
    </section>
  );
}
