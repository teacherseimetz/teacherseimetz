import { Wrapper } from "./Wrapper";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.container}>
      <Wrapper className={styles.wrapper}>
        <h1 className="font-bold text-4xl lowercase">Ficou com alguma dúvida?</h1>

        <nav className={styles.links}>
          <a href="https://instagram.com/teacherseimetz" rel="norel noopener">
            @teacherseimetz
          </a>
          <a href="mailto:teacherseimetz@gmail.com" rel="norel noopener">
            teacherseimetz@gmail.com
          </a>
        </nav>
      </Wrapper>
    </footer>
  );
}
