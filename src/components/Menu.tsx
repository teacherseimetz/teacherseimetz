import styles from "./Menu.module.css";

export function Menu() {
  return (
    <nav>
      <ul className={styles.links}>
        <li><a href="#">home</a></li>
        <li><a href="#sobre">sobre mim</a></li>
        <li><a href="#aulas">aulas</a></li>
        <li><a href="#material">material</a></li>
        <li><a href="#missao">missão</a></li>
        <li><a href="#investimento">investimento</a></li>
      </ul>
    </nav>
  )
}
