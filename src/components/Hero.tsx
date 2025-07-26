import { ButtonLink } from "./ButtonLink";
import styles from "./Hero.module.css";
import { Logo } from "./Logo";
import { VisuallyHidden } from "./VisuallyHidden";
import { Wrapper } from "./Wrapper";

export function Hero() {
  const backgroundClassNames = ["bg-dark-green", "text-white", "mb-10"]
    .concat(styles.background)
    .join(" ");

  return (
    <section className={backgroundClassNames}>
      <Wrapper className={styles.wrapper}>
        <h1 className="flex flex-col gap-2">
          <span>
            <Logo className="max-w-100 md:w-100" />
            <VisuallyHidden>Amanda Seimetz</VisuallyHidden>
          </span>
          <span className="lowercase text-lime w-75">
            Professora particular de Inglês & criadora de conteúdo para
            professores
          </span>
        </h1>
        <div className={styles.links}>
          <ButtonLink
            href="#aulas"
            inverse
          >
            Aulas de Inglês
          </ButtonLink>
          <ButtonLink
            href="#lessonplans"
            rel="noreferrer noopener"
            inverse
          >
            Lesson plans
          </ButtonLink>
          <ButtonLink
            href="#eventos"
            rel="noreferrer noopener"
            inverse
          >
            Eventos
          </ButtonLink>
        </div>
      </Wrapper>
    </section>
  );
}
