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
            <Logo className="w-100" />
            <VisuallyHidden>Amanda Seimetz</VisuallyHidden>
          </span>
          <span className="lowercase text-lime w-75">
            Professora particular de Inglês & criadora de conteúdo para
            professores
          </span>
        </h1>
        <div className={styles.links}>
          <ButtonLink
            href="https://teacherseimetz.notion.site/12ab3dba55da80508dd1eb23da886b42?pvs=105"
            inverse
          >
            Quero fazer aulas de inglês
          </ButtonLink>
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
